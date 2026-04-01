import { env } from "@/env";
import { NextResponse, type NextRequest } from "next/server";
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
    const cvFile = formData.get("cv") as File | null;

    if (!firstName || !lastName || !email || !phone) {
      return NextResponse.json({ error: "Champs obligatoires manquants" }, { status: 400 });
    }

    const attachments: { filename: string; content: Buffer }[] = [];

    if (cvFile && cvFile.size > 0) {
      const bytes = await cvFile.arrayBuffer();
      attachments.push({
        filename: cvFile.name,
        content: Buffer.from(bytes),
      });
    }

    await resend.emails.send({
      from: "Octopus Talent <onboarding@resend.dev>",
      to: env.CONTACT_EMAIL,
      subject: `Candidature spontanée : ${firstName} ${lastName}`,
      html: `
        <h2>Nouvelle candidature spontanée reçue</h2>
        <p><strong>Nom :</strong> ${lastName}</p>
        <p><strong>Prénom :</strong> ${firstName}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Téléphone :</strong> ${phone}</p>
        <hr />
        <p><strong>Message :</strong></p>
        <p style="white-space: pre-wrap;">${message ?? "Aucun message"}</p>
        ${cvFile ? `<p><strong>CV :</strong> ${cvFile.name} (en pièce jointe)</p>` : "<p><strong>CV :</strong> Non fourni</p>"}
      `,
      attachments,
    });

    return NextResponse.json({ success: true });
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : "Erreur inattendue";
    console.error("Candidature spontanée error:", error);
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
