"use client";

import { useEffect } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// 5 Company Values
const values = [
  {
    id: 1,
    icon: "/assets/images/icon-why-choose-1.svg",
    title: "Confiance",
    description: "Nous établissons des relations durables basées sur la transparence, l'honnêteté et la fiabilité. Chaque engagement est tenu, chaque promesse est respectée.",
  },
  {
    id: 2,
    icon: "/assets/images/icon-why-choose-2.svg",
    title: "Excellence opérationnelle",
    description: "Nous visons l'excellence dans chaque projet, chaque livraison et chaque interaction. La qualité est au cœur de notre démarche.",
  },
  {
    id: 3,
    icon: "/assets/images/icon-why-choose-3.svg",
    title: "Proximité",
    description: "Nous travaillons en étroite collaboration avec nos clients, dans une logique de partenariat et de compréhension mutuelle.",
  },
  {
    id: 4,
    icon: "/assets/images/icon-service-why-choose-1.svg",
    title: "Responsabilité",
    description: "Nous assumons nos engagements et prenons nos responsabilités. Votre réussite est notre priorité absolu.",
  },
  {
    id: 5,
    icon: "/assets/images/icon-service-why-choose-2.svg",
    title: "Ouverture",
    description: "Nous restons ouverts aux nouvelles idées, technologies et approches pour mieux servir vos ambitions.",
  },
];

// 3 Company Pillars
const pillars = [
  {
    id: 1,
    icon: "/assets/images/icon-our-mission.svg",
    title: "Expertise & maîtrise",
    description: "Une équipe de professionnels expérimentés avec une connaissance approfondie des technologies IT, Data et IA. Nous mettons notre expertise technique au service de votre réussite.",
  },
  {
    id: 2,
    icon: "/assets/images/icon-our-vision.svg",
    title: "Engagement & fiabilité",
    description: "Nous nous engageons à respecter nos promesses et à livrer des résultats concrets. Votre confiance est notre plus grande récompense.",
  },
  {
    id: 3,
    icon: "/assets/images/icon-our-value.svg",
    title: "Proximité & adaptation",
    description: "Nous nous adaptons à votre contexte, vos enjeux et votre culture d'entreprise. Une approche sur mesure pour des résultats optimaux.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Header />

      {/* Page Header Start */}
      <div className="page-header parallaxie" style={{ backgroundImage: `url('/assets/images/real/advisory-board-members-meeting-boardroom-establish-future-development-plan.jpg')` }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className="page-header-box">
                <h1 className="wow fadeInUp">À propos de nous</h1>
                <nav className="wow fadeInUp" data-wow-delay="0.2s">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link href="/">Accueil</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">À propos</li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Page Header End */}

      {/* Introduction Section Start */}
      <div className="about-us">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-us-image">
              <div className="about-image-box about-img-1">
                <figure className="image-anime reveal">
                  <img src="/assets/images/real/about-1.jpg" alt="About Octopus Talent" />
                </figure>
              </div>

              <div className="about-image-box">
                <div className="about-img-2">
                  <figure className="image-anime reveal">
                    <img src="/assets/images/real/about-2.jpg" alt="Team" />
                  </figure>
                </div>

                <div className="about-img-3">
                  <figure className="image-anime reveal">
                    <img src="/assets/images/real/about-3.jpg" alt="Office" />
                  </figure>
                </div>
              </div>
                <div className="get-free-security-circle">
                  <a href="/contact">
                    <img src="/assets/images/get-free-security-circle.svg" alt="Contact" />
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="about-us-content">
                <div className="section-title">
                  <h3 className="wow fadeInUp">Qui sommes-nous</h3>
                  <h2 className="wow fadeInUp" data-wow-delay="0.2s">
                    Cabinet de conseil spécialisé en <span>IT, Data, IA et Cybersécurité</span>
                  </h2>
                  <p className="wow fadeInUp" data-wow-delay="0.4s">
                    Octopus Talent est un cabinet de conseil spécialisé dans les domaines de l&apos;IT, de la Data, de l&apos;Intelligence Artificielle et de la Cybersécurité. Nous accompagnons les entreprises dans leur transformation digitale en fournissant des solutions technologiques innovantes et sur mesure.
                  </p>
                </div>

                <div className="about-footer-btn wow fadeInUp" data-wow-delay="0.6s">
                  <a href="/contact" className="btn-default">Contactez-nous</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Introduction Section End */}

      {/* 3 Pillars Section Start */}
      <div className="our-approach parallaxie" style={{
        background: `url("/assets/images/real/hero-bg.jpg")`,
        padding: "100px 0"
      }}>
        <div className="container">
          <div className="row section-row">
            <div className="col-lg-12">
              <div className="section-title">
                <h3 className="wow fadeInUp">Nos piliers</h3>
                <h2 className="wow fadeInUp" data-wow-delay="0.2s">
                  Les fondements de <span>notre engagement</span>
                </h2>
              </div>
            </div>
          </div>

          <div className="row align-items-center no-gutters">
            <div className="col-lg-5">
              <div className="our-approach-content">
                {pillars.map((pillar, index) => (
                  <div
                    key={pillar.id}
                    className="mission-vision-item wow fadeInUp"
                    data-wow-delay={`${index * 0.2}s`}
                  >
                    <div className="icon-box">
                      <img src={pillar.icon} alt={pillar.title} />
                    </div>
                    <div className="mission-vision-content">
                      <h3>{pillar.title.toLowerCase()}</h3>
                      <p>{pillar.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="col-lg-7">
              <div className="our-approach-image">
                <figure className="image-anime reveal">
                  <img src="/assets/images/real/our-approach.jpg" alt="Our Approach" />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 3 Pillars Section End */}

      {/* 5 Values Section Start */}
      <div className="our-feature section-padding">
        <div className="container">
          <div className="row section-row">
            <div className="col-lg-12">
              <div className="section-title">
                <h3 className="wow fadeInUp">Nos valeurs</h3>
                <h2 className="wow fadeInUp" data-wow-delay="0.2s">
                  Les principes qui <span>guident notre action</span>
                </h2>
              </div>
            </div>
          </div>

          <div className="row">
            {values.map((value, index) => (
              <div key={value.id} className="col-lg-4 col-md-6">
                <div
                  className="why-choose-item wow fadeInUp"
                  data-wow-delay={`${index * 0.1}s`}
                >
                  <div className="icon-box">
                    <img src={value.icon} alt={value.title} />
                  </div>
                  <div className="why-choose-item-content">
                    <h3>{value.title.toLowerCase()}</h3>
                    <p>{value.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* 5 Values Section End */}

      <Footer />
    </>
  );
}
