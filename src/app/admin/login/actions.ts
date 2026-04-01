"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { getAdminToken } from "@/lib/admin-token";

export async function login(
  _prevState: { error: string } | null,
  formData: FormData,
) {
  const username = formData.get("username") as string;
  const password = formData.get("password") as string;

  if (
    username !== process.env.ADMIN_USERNAME ||
    password !== process.env.ADMIN_PASSWORD
  ) {
    return { error: "Identifiants incorrects" };
  }

  const token = await getAdminToken();
  const cookieStore = await cookies();
  cookieStore.set("admin-session", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 7,
    path: "/",
  });

  redirect("/admin/offres");
}

export async function logout() {
  const cookieStore = await cookies();
  cookieStore.delete("admin-session");
  redirect("/admin/login");
}
