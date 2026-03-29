import { db } from "@/server/db";
import { notFound } from "next/navigation";
import Link from "next/link";
import ApplicationForm from "./ApplicationForm";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const dynamic = "force-dynamic";

type Params = Promise<{ id: string }>;

export default async function OffreDetailPage({ params }: { params: Params }) {
  try {
    const { id } = await params;
    const offer = await db.jobOffer.findUnique({
      where: { id: id },
    });

    if (!offer) {
      notFound();
    }

    return (
      <>
        <Header />

        {/* Page Header Start */}
        <div className="page-header parallaxie" style={{ backgroundImage: `url('/assets/images/real/programming-background-with-person-working-with-codes-computer.jpg')` }}>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-12">
                <div className="page-header-box">
                  <h1 className="wow fadeInUp">Détail de la mission</h1>
                  <nav className="wow fadeInUp" data-wow-delay="0.2s">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item"><Link href="/">Accueil</Link></li>
                      <li className="breadcrumb-item"><Link href="/offres">Offres</Link></li>
                      <li className="breadcrumb-item active" aria-current="page">Détail</li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Page Header End */}

        {/* Blog Details Section Start */}
        <div className="blog-details-area-main-wrapper" style={{
          padding: "100px 0",
          backgroundColor: "var(--secondary-color)"
        }}>
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="blog-details-area-inner-content" style={{
                  background: "var(--white-color)",
                  padding: "50px",
                  borderRadius: "15px",
                  boxShadow: "0 10px 40px rgba(0,0,0,0.05)"
                }}>
                  {/* Meta Info */}
                  <div className="blog-details-top-wrapper" style={{
                    display: "flex",
                    gap: "30px",
                    marginBottom: "30px",
                    borderBottom: "1px solid var(--divider-color)",
                    paddingBottom: "20px",
                    flexWrap: "wrap"
                  }}>
                    <div className="single" style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      color: "var(--text-color)",
                      fontSize: "14px"
                    }}>
                      <i className="fa-regular fa-location-dot" style={{ color: "var(--accent-color)" }}></i>
                      <span>{offer.location}</span>
                    </div>
                    <div className="single" style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      color: "var(--text-color)",
                      fontSize: "14px"
                    }}>
                      <i className="fa-regular fa-clock" style={{ color: "var(--accent-color)" }}></i>
                      <span>{new Date(offer.createdAt).toLocaleDateString()}</span>
                    </div>
                    <div className="single" style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      color: "var(--text-color)",
                      fontSize: "14px"
                    }}>
                      <i className="fa-regular fa-hashtag" style={{ color: "var(--accent-color)" }}></i>
                      <span>REF-{offer.id.substring(0, 8).toUpperCase()}</span>
                    </div>
                    <div className="single" style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      color: "var(--text-color)",
                      fontSize: "14px"
                    }}>
                      <i className="fa-regular fa-briefcase" style={{ color: "var(--accent-color)" }}></i>
                      <span>{offer.type}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h2 className="title" style={{
                    fontSize: "36px",
                    fontWeight: 800,
                    color: "var(--primary-color)",
                    marginBottom: "25px"
                  }}>{offer.title}</h2>

                  {/* Description */}
                  <h5 className="mb-4 font-bold text-dark" style={{
                    fontSize: "20px",
                    fontWeight: 700,
                    color: "var(--primary-color)",
                    marginBottom: "20px"
                  }}>Description de la mission</h5>
                  <p className="disc" style={{
                    color: "var(--text-color)",
                    lineHeight: "1.8em",
                    marginBottom: "30px"
                  }}>
                    {offer.description}
                  </p>

                  {/* Requirements */}
                  <h5 className="mt-5 mb-4 font-bold text-dark" style={{
                    fontSize: "20px",
                    fontWeight: 700,
                    color: "var(--primary-color)",
                    marginBottom: "20px"
                  }}>Profil recherché &amp; Compétences</h5>
                  <div className="check-area-details">
                    <div className="single-check" style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      marginBottom: "15px",
                      fontWeight: 600,
                      color: "var(--text-color)"
                    }}>
                      <i className="far fa-check-circle" style={{ color: "var(--accent-color)", fontSize: "18px" }}></i>
                      <span>Expertise technique avérée dans le domaine</span>
                    </div>
                    <div className="single-check" style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      marginBottom: "15px",
                      fontWeight: 600,
                      color: "var(--text-color)"
                    }}>
                      <i className="far fa-check-circle" style={{ color: "var(--accent-color)", fontSize: "18px" }}></i>
                      <span>Capacité d&apos;adaptation et esprit d&apos;équipe</span>
                    </div>
                    <div className="single-check" style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      marginBottom: "15px",
                      fontWeight: 600,
                      color: "var(--text-color)"
                    }}>
                      <i className="far fa-check-circle" style={{ color: "var(--accent-color)", fontSize: "18px" }}></i>
                      <span>Autonomie et force de proposition</span>
                    </div>
                    <div className="single-check" style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      marginBottom: "15px",
                      fontWeight: 600,
                      color: "var(--text-color)"
                    }}>
                      <i className="far fa-check-circle" style={{ color: "var(--accent-color)", fontSize: "18px" }}></i>
                      <span>Maîtrise des enjeux de Transformation Digitale</span>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="row mt-5 mb-5">
                    <div className="col-12">
                      <div className="details-tag">
                        <h6 style={{
                          fontSize: "14px",
                          fontWeight: 700,
                          color: "var(--primary-color)",
                          marginBottom: "10px"
                        }}>Tags:</h6>
                        <button style={{
                          border: "1px solid var(--divider-color)",
                          background: "var(--secondary-color)",
                          padding: "5px 15px",
                          borderRadius: "20px",
                          marginRight: "10px",
                          fontSize: "12px",
                          color: "var(--text-color)"
                        }}>{offer.type}</button>
                        <button style={{
                          border: "1px solid var(--divider-color)",
                          background: "var(--secondary-color)",
                          padding: "5px 15px",
                          borderRadius: "20px",
                          marginRight: "10px",
                          fontSize: "12px",
                          color: "var(--text-color)"
                        }}>ESN</button>
                        <button style={{
                          border: "1px solid var(--divider-color)",
                          background: "var(--secondary-color)",
                          padding: "5px 15px",
                          borderRadius: "20px",
                          marginRight: "10px",
                          fontSize: "12px",
                          color: "var(--text-color)"
                        }}>Digital Transformation</button>
                      </div>
                    </div>
                  </div>

                  {/* Application Form */}
                  <ApplicationForm offerId={offer.id} />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Blog Details Section End */}

        <Footer />
      </>
    );
  } catch (error) {
    console.error("Error in OffreDetailPage:", error);
    return (
      <div className="p-10 text-center">
        <h1 className="text-2xl font-bold text-red-600">Erreur de chargement</h1>
        <p className="mt-4 text-gray-600">
          Une erreur est survenue lors de la récupération des détails de l&apos;offre.
        </p>
        <pre className="mt-4 p-4 bg-gray-100 rounded text-left overflow-auto max-w-full">
          {error instanceof Error ? error.message : String(error)}
        </pre>
        <Link href="/offres" className="mt-6 inline-block text-blue-600 hover:underline">
          Retour aux offres
        </Link>
      </div>
    );
  }
}
