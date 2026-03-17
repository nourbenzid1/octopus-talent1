import { env } from "@/env";
import { NextResponse, type NextRequest } from "next/server";
import { Resend } from "resend";

const resend = new Resend(env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const { firstName, lastName, email, phone, message } = await req.json();

    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Send Email via Resend
    try {
      await resend.emails.send({
        from: "Octopus Talent <onboarding@resend.dev>", // Use verified domain in production
        to: env.CONTACT_EMAIL,
        subject: `Nouveau message de contact : ${firstName} ${lastName}`,
        html: `
          <h2>Nouveau message de contact reçu</h2>
          <p><strong>Nom :</strong> ${firstName} ${lastName}</p>
          <p><strong>Email :</strong> ${email}</p>
          <p><strong>Téléphone :</strong> ${phone || "Non renseigné"}</p>
          <hr />
          <p><strong>Message :</strong></p>
          <p style="white-space: pre-wrap;">${message}</p>
        `,
      });
    } catch (emailError) {
      console.error("Error sending email:", emailError);
      // We still want to return success if we logged it somewhere else, 
      // but for contact form, if email fails it's good to know
    }

    return NextResponse.json({ success: true });

  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : "An unexpected error occurred";
    console.error("Contact submission error:", error);
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
