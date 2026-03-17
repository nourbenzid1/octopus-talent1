import { db } from "@/server/db";
import OfferList from "./OfferList";

export const dynamic = "force-dynamic";

export default async function AdminOffresPage() {
  const offers = await db.jobOffer.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="admin-page">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      <OfferList initialOffers={offers} />
    </div>
  );
}
