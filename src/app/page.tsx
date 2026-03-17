"use client";

import { useEffect } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// 9 Expertises data from Cahier des Charges
const expertises = [
  {
    id: 1,
    icon: "/assets/images/icon-service-1.svg",
    title: "Transformation digitale",
  },
  {
    id: 2,
    icon: "/assets/images/icon-service-2.svg",
    title: "Gouvernance de la donnée",
  },
  {
    id: 3,
    icon: "/assets/images/icon-service-3.svg",
    title: "Data Management",
  },
  {
    id: 4,
    icon: "/assets/images/icon-service-4.svg",
    title: "Business Intelligence & Analytics",
  },
  {
    id: 5,
    icon: "/assets/images/icon-service-5.svg",
    title: "Big Data & Data Engineering",
  },
  {
    id: 6,
    icon: "/assets/images/icon-service-6.svg",
    title: "Intelligence Artificielle & Machine Learning",
  },
  {
    id: 7,
    icon: "/assets/images/icon-ferature-1.svg",
    title: "Cybersécurité",
  },
  {
    id: 8,
    icon: "/assets/images/icon-ferature-2.svg",
    title: "Acculturation & Change Management",
  },
  {
    id: 9,
    icon: "/assets/images/icon-ferature-3.svg",
    title: "Benchmark & Sélection de solutions",
  },
];

export default function HomePage() {
  return (
    <>
      <Header />

      {/* Hero Section Start */}
      <div className="hero parallaxie">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <div className="hero-content">
                <div className="section-title dark-section">
                  <h1 className="wow fadeInUp" data-wow-delay="0.2s">
                    Donnez de la puissance à vos projets IT et à vos données
                  </h1>
                  <p className="wow fadeInUp" data-wow-delay="0.4s">
                    Nous accompagnons vos initiatives technologiques grâce à une expertise capable d&apos;allier stratégie, maîtrise technique et efficacité opérationnelle.
                  </p>
                </div>

                <div className="hero-content-body wow fadeInUp" data-wow-delay="0.6s">
                  <div className="hero-btn">
                    <a href="/contact" className="btn-default btn-highlighted">Nous contacter</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Hero Section End */}

      {/* Our Services Section Start */}
      <div className="our-services">
        <div className="container">
          <div className="row section-row">
            <div className="col-lg-12">
              <div className="section-title">
                <h3 className="wow fadeInUp">Nos expertises</h3>
                <h2 className="wow fadeInUp" data-wow-delay="0.2s">
                  Des solutions complètes pour <span>votre transformation digitale</span>
                </h2>
              </div>
            </div>
          </div>

          <div className="row">
            {expertises.map((expertise, index) => (
              <div key={expertise.id} className="col-lg-4 col-md-6">
                <div
                  className={`service-item wow fadeInUp`}
                  data-wow-delay={`${index * 0.1}s`}
                >
                  <div className="icon-box">
                    <img src={expertise.icon} alt={expertise.title} />
                  </div>
                  <div className="service-title-box">
                    <div className="service-title">
                      <h3><Link href="/expertises">{expertise.title}</Link></h3>
                    </div>
                    <div className="service-btn">
                      <a href="/expertises" aria-label={`Voir ${expertise.title}`}>
                        <i className="fa-solid fa-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="row">
            <div className="col-lg-12">
              <div className="cta-box wow fadeInUp" data-wow-delay="0.8s" style={{ textAlign: "center", marginTop: "40px", borderRadius: "15px", overflow: "hidden" }}>
                <div className="container" style={{ position: "relative", zIndex: 2 }}>
                  <h2 style={{ color: "#fff", marginBottom: "20px" }}>Prêt à donner de la puissance à vos projets ?</h2>
                  <p style={{ marginBottom: "30px", fontSize: "18px", color: "#fff", opacity: "0.8" }}>
                    Pour échanger sur vos projets, discuter de vos enjeux ou obtenir un premier retour, nous sommes disponibles.
                  </p>
                  <a href="/contact" className="btn-default btn-highlighted">Nous contacter</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Our Services Section End */}

      <Footer />
    </>
  );
}
