import { db } from "@/server/db";
import { env } from "@/env";
import { writeFile } from "fs/promises";
import { NextResponse, type NextRequest } from "next/server";
import path from "path";
import { Resend } from "resend";

const resend = new Resend(env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    
    const firstName = formData.get("firstName") as string;
    const lastName = formData.get("lastName") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const message = formData.get("message") as string;
    const offerId = formData.get("offerId") as string;
    const cvFile = formData.get("cv") as File | null;

    if (!firstName || !lastName || !email || !phone || !message || !offerId || !cvFile) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Fetch Job Offer Title for the email
    const jobOffer = await db.jobOffer.findUnique({
      where: { id: offerId },
    });

    if (!jobOffer) {
      return NextResponse.json({ error: "Job offer not found" }, { status: 404 });
    }

    // Temporary storage logic (as per Cahier des charges, this should eventually be S3/Scaleway)
    const bytes = await cvFile.arrayBuffer();
    const buffer = Buffer.from(bytes);
    
    const fileName = `${Date.now()}-${cvFile.name}`;
    const filePath = path.join(process.cwd(), "public", "uploads", fileName);
    
    await writeFile(filePath, buffer);
    const cvUrl = `/uploads/${fileName}`;

    // Create the application in the database
    const application = await db.application.create({
      data: {
        firstName,
        lastName,
        email,
        phone,
        message,
        cvUrl,
        jobOfferId: offerId,
      },
    });

    // Send Email via Resend
    try {
      await resend.emails.send({
        from: "Octopus Talent <onboarding@resend.dev>", // Use verified domain in production
        to: env.CONTACT_EMAIL,
        subject: `Nouvelle candidature : ${jobOffer.title}`,
        html: `
          <h2>Nouvelle candidature reçue</h2>
          <p><strong>Offre :</strong> ${jobOffer.title} (REF-${jobOffer.id.substring(0, 8).toUpperCase()})</p>
          <hr />
          <p><strong>Candidat :</strong> ${firstName} ${lastName}</p>
          <p><strong>Email :</strong> ${email}</p>
          <p><strong>Téléphone :</strong> ${phone}</p>
          <p><strong>Message :</strong></p>
          <p style="white-space: pre-wrap;">${message}</p>
          <hr />
          <p>Le CV a été enregistré et est disponible sur le serveur.</p>
        `,
        attachments: [
          {
            filename: cvFile.name,
            content: buffer,
          },
        ],
      });
    } catch (emailError) {
      console.error("Error sending email:", emailError);
      // We don't fail the whole request if email fails, but we log it
    }

    return NextResponse.json({ success: true, application });

  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : "An unexpected error occurred";
    console.error("Application submission error:", error);
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
