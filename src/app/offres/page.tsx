import Link from "next/link";
import Image from "next/image";
import { db } from "@/server/db";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const dynamic = "force-dynamic";

async function getOffers() {
  const offers = await db.jobOffer.findMany({
    where: { published: true },
    orderBy: { createdAt: "desc" },
  });
  return offers;
}

export default async function OffresPage() {
  try {
    const offers = await getOffers();

    return (
      <>
        <Header />

        {/* Page Header Start */}
        <div className="page-header parallaxie" style={{ backgroundImage: `url('/assets/images/real/programming-background-with-person-working-with-codes-computer.jpg')` }}>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-12">
                <div className="page-header-box">
                  <h1 className="wow fadeInUp">Nos Offres de Missions</h1>
                  <nav className="wow fadeInUp" data-wow-delay="0.2s">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <Link href="/">Accueil</Link>
                      </li>
                      <li className="breadcrumb-item active" aria-current="page">
                        Offres
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Page Header End */}

        {/* Our Services Section - Offers Grid Start */}
        <div
          className="our-services page-services"
          style={{ padding: "100px 0", backgroundColor: "var(--white-color)" }}
        >
          <div className="container">
            <div className="row section-row">
              <div className="col-lg-12">
                <div className="section-title">
                  <h3 className="wow fadeInUp">Rejoignez-nous</h3>
                  <h2 className="wow fadeInUp" data-wow-delay="0.2s">
                    Découvrez nos <span>opportunités de missions</span>
                  </h2>
                </div>
              </div>
            </div>

            {offers.length === 0 ? (
              <div className="row">
                <div className="col-12 text-center py-5">
                  <h3 className="text-muted">Aucune offre disponible pour le moment.</h3>
                  <p>Revenez bientôt pour découvrir de nouvelles opportunités.</p>
                </div>
              </div>
            ) : (
              <div className="row g-4">
                {offers.map((offer, index) => (
                  <div key={offer.id} className="col-lg-4 col-md-6">
                    <div
                      className="service-item wow fadeInUp"
                      data-wow-delay={`${index * 0.1}s`}
                      style={{
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      {/* Thumbnail */}
                      <Link
                        href={`/offres/${offer.id}`}
                        className="thumbnail"
                        style={{
                          display: "block",
                          marginBottom: "20px",
                          borderRadius: "8px",
                          overflow: "hidden",
                          position: "relative",
                          height: "200px",
                        }}
                      >
                        <Image
                          src={`/assets/images/service-${(index % 3) + 1}.jpg`}
                          alt={offer.title}
                          fill
                          className="object-cover"
                          style={{ objectFit: "cover" }}
                        />
                      </Link>
                      {/* Tags */}
                      <div
                        className="stars-area"
                        style={{
                          marginBottom: "15px",
                          display: "flex",
                          gap: "10px",
                        }}
                      >
                        <span
                          className="badge"
                          style={{
                            backgroundColor: "var(--secondary-color)",
                            color: "var(--text-color)",
                            padding: "5px 12px",
                            borderRadius: "20px",
                            fontSize: "12px",
                            fontWeight: 500,
                          }}
                        >
                          <i className="fa-regular fa-location-dot me-1"></i>{" "}
                          {offer.location}
                        </span>
                        <span
                          className="badge"
                          style={{
                            backgroundColor: "var(--accent-color)",
                            color: "var(--white-color)",
                            padding: "5px 12px",
                            borderRadius: "20px",
                            fontSize: "12px",
                            fontWeight: 500,
                          }}
                        >
                          {offer.type}
                        </span>
                      </div>

                      {/* Title */}
                      <div className="service-title-box">
                        <div className="service-title">
                          <h3>
                            <Link
                              href={`/offres/${offer.id}`}
                              style={{ textDecoration: "none", color: "inherit" }}
                            >
                              {offer.title}
                            </Link>
                          </h3>
                        </div>
                      </div>

                      {/* Description Preview */}
                      <div
                        className="service-content"
                        style={{
                          marginTop: "10px",
                          marginBottom: "auto",
                        }}
                      >
                        <p
                          style={{
                            color: "var(--text-color)",
                            fontSize: "14px",
                            lineHeight: "1.6em",
                          }}
                        >
                          {offer.description.substring(0, 120)}...
                        </p>
                      </div>

                      {/* Footer with CTA */}
                      <div
                        className="pricing-area-wrapper"
                        style={{
                          marginTop: "20px",
                          paddingTop: "20px",
                          borderTop: "1px solid var(--divider-color)",
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <p
                          className="price"
                          style={{
                            fontSize: "14px",
                            fontWeight: 600,
                            color: "var(--accent-color)",
                            margin: 0,
                          }}
                        >
                          <i className="fa-regular fa-briefcase me-1"></i> ESN
                        </p>
                        <Link
                          href={`/offres/${offer.id}`}
                          className="btn-default"
                          style={{
                            padding: "10px 20px",
                            fontSize: "14px",
                          }}
                        >
                          Voir l&apos;offre
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        {/* Our Services Section - Offers Grid End */}

        <Footer />
      </>
    );
  } catch (error) {
    console.error("Error loading offers:", error);
    return (
      <>
        <Header />
        <div className="container py-5 mt-5">
          <div className="alert alert-danger" role="alert">
            <h4 className="alert-heading">Erreur de chargement</h4>
            <p>Désolé, une erreur est survenue lors de la récupération des offres d&apos;emploi.</p>
            <hr />
            <p className="mb-0">
              Veuillez réessayer plus tard ou contacter le support si le problème persiste.
            </p>
            {process.env.NODE_ENV === "development" && (
              <pre className="mt-3 p-3 bg-light rounded">
                {error instanceof Error ? error.message : String(error)}
              </pre>
            )}
          </div>
        </div>
        <Footer />
      </>
    );
  }
}
