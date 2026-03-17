'use server';

import { db } from "@/server/db";
import { revalidatePath } from "next/cache";

export async function deleteJobOffer(id: string) {
  try {
    await db.jobOffer.delete({
      where: { id },
    });
    revalidatePath("/admin/offres");
    revalidatePath("/offres");
  } catch (error) {
    console.error("Error deleting job offer:", error);
    throw new Error(error instanceof Error ? error.message : "Erreur lors de la suppression");
  }
}

export async function upsertJobOffer(formData: FormData, id?: string) {
  try {
    const title = formData.get("title") as string;
    const description = formData.get("description") as string;
    const location = formData.get("location") as string;
    const type = formData.get("type") as string;
    const published = formData.get("published") === "on";

    const data = {
      title,
      description,
      location,
      type,
      published,
    };

    if (id) {
      await db.jobOffer.update({
        where: { id },
        data,
      });
    } else {
      await db.jobOffer.create({
        data,
      });
    }

    revalidatePath("/admin/offres");
    revalidatePath("/offres");
  } catch (error) {
    console.error("Error upserting job offer:", error);
    throw new Error(error instanceof Error ? error.message : "Erreur lors de la publication");
  }
}
