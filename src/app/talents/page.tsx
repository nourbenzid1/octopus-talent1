import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const talents = [
  {
    id: 1,
    name: "Michael Johnson",
    role: "Responsable Sécurité",
    image: "/assets/images/team-1.jpg",
  },
  {
    id: 2,
    name: "Sophia Carter",
    role: "Analyste Cybersécurité",
    image: "/assets/images/team-2.jpg",
  },
  {
    id: 3,
    name: "Michael Brown",
    role: "Réponse aux Incidents",
    image: "/assets/images/team-3.jpg",
  },
  {
    id: 4,
    name: "Isabella Moore",
    role: "Sensibilisation Sécurité",
    image: "/assets/images/team-4.jpg",
  },
  {
    id: 5,
    name: "Ava Martinez",
    role: "Expert Forensics",
    image: "/assets/images/team-5.jpg",
  },
  {
    id: 6,
    name: "Grace Harris",
    role: "Analyste Senior",
    image: "/assets/images/team-6.jpg",
  },
  {
    id: 7,
    name: "Olivia Johnson",
    role: "Chercheur Sécurité",
    image: "/assets/images/team-7.jpg",
  },
  {
    id: 8,
    name: "Ethan Wilson",
    role: "Consultant IT",
    image: "/assets/images/team-8.jpg",
  },
];

export default function TalentsPage() {
  return (
    <>
      <Header />

      {/* Page Header Start */}
      <div className="page-header parallaxie" style={{ backgroundImage: `url('/assets/images/real/close-up-computer-scientists-data-center-office-using-ai-automation-tools.jpg')` }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className="page-header-box">
                <h1 className="wow fadeInUp">Nos Talents</h1>
                <nav className="wow fadeInUp" data-wow-delay="0.2s">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link href="/">Accueil</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Talents
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Page Header End */}

      {/* Page Team Start */}
      <div className="page-team" style={{ padding: "100px 0" }}>
        <div className="container">
          <div className="row">
            {talents.map((talent, index) => (
              <div key={talent.id} className="col-lg-3 col-md-6">
                <div
                  className="team-item wow fadeInUp"
                  data-wow-delay={`${index * 0.1}s`}
                  style={{ marginBottom: "30px" }}
                >
                  <div className="team-image">
                    <figure className="image-anime">
                      <img src={talent.image} alt={talent.name} />
                    </figure>

                    <div className="team-social-icon">
                      <ul>
                        <li>
                          <a href="#">
                            <i className="fa-brands fa-x-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-facebook-f"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa-brands fa-instagram"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="team-content">
                    <h3>{talent.name}</h3>
                    <p>{talent.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Page Team End */}

      <Footer />
    </>
  );
}
