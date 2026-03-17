"use client";

import { useEffect } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// 9 Expertises with detailed content from Cahier des Charges
const expertises = [
  {
    id: 1,
    icon: "/assets/images/icon-service-1.svg",
    title: "Transformation digitale",
    subtitle: "Modernisez vos processus et systèmes",
    description: "Accompagnement stratégique pour moderniser vos processus et systèmes d'information. Nous vous aidons à naviguer dans votre transformation digitale avec des solutions sur mesure.",
    features: [
      "Audit des processus existants",
      "Stratégie de digitalisation",
      "Implémentation de solutions agiles",
      "Accompagnement au changement",
      "Optimisation continue",
    ],
  },
  {
    id: 2,
    icon: "/assets/images/icon-service-2.svg",
    title: "Gouvernance de la donnée",
    subtitle: "Politiques et structures de gestion",
    description: "Mise en place de politiques, processus et structures organisationnelles pour assurer une gestion optimale, sécurisée et conforme de vos données.",
    features: [
      "Définition des politiques de données",
      "Organisation et gouvernance",
      "Qualité et conformité des données",
      "Gestion des risques et sécurité",
      "Formation et sensibilisation",
    ],
  },
  {
    id: 3,
    icon: "/assets/images/icon-service-3.svg",
    title: "Data Management",
    subtitle: "Organisation et gestion des données",
    description: "Solutions complètes pour l'organisation, le stockage, la maintenance et l'exploitation de vos données. Architecture, intégration et qualité des données.",
    features: [
      "Architecture de données",
      "Intégration et ETL",
      "Stockage et distribution",
      "Sécurité et confidentialité",
      "Maintenance et évolution",
    ],
  },
  {
    id: 4,
    icon: "/assets/images/icon-service-4.svg",
    title: "Business Intelligence & Analytics",
    subtitle: "Tableaux de bord et analyse",
    description: "Conception et déploiement de solutions de Business Intelligence pour transformer vos données en insights actionnables. Tableaux de bord interactifs et analyses prédictives.",
    features: [
      "Tableaux de bord interactifs",
      "Reporting automatisé",
      "Analyses prédictives",
      "Data visualisation",
      "KPIs et métriques",
    ],
  },
  {
    id: 5,
    icon: "/assets/images/icon-service-5.svg",
    title: "Big Data & Data Engineering",
    subtitle: "Architecture et pipelines de données",
    description: "Conception et mise en œuvre d'architectures Big Data et de pipelines de données robustes pour traiter, stocker et analyser vos volumes de données importants.",
    features: [
      "Architecture Big Data",
      "Pipelines de données",
      "Traitement distribué",
      "Stockage scalable",
      "Orchestration et automatisation",
    ],
  },
  {
    id: 6,
    icon: "/assets/images/icon-service-6.svg",
    title: "Intelligence Artificielle & Machine Learning",
    subtitle: "Solutions d'IA et ML",
    description: "Développement et déploiement de solutions d'Intelligence Artificielle et de Machine Learning pour automatiser vos processus et optimiser vos décisions.",
    features: [
      "Machine Learning",
      "Deep Learning",
      "IA Générative & LLM",
      "Computer Vision",
      "NLP & Traitement du langage",
    ],
  },
  {
    id: 7,
    icon: "/assets/images/icon-ferature-1.svg",
    title: "Cybersécurité",
    subtitle: "Protection des infrastructures",
    description: "Protection complète de vos infrastructures, systèmes et données contre les menaces numériques. Audit, prévention, détection et réponse aux incidents de sécurité.",
    features: [
      "Audit de sécurité",
      "Protection des infrastructures",
      "Gestion des identités et accès",
      "Détection et réponse aux incidents",
      "Conformité et réglementation",
    ],
  },
  {
    id: 8,
    icon: "/assets/images/icon-ferature-2.svg",
    title: "Acculturation & Change Management",
    subtitle: "Formation et accompagnement",
    description: "Programmes de formation et d'accompagnement au changement pour aider vos équipes à adopter les nouvelles technologies et méthodes de travail.",
    features: [
      "Formations techniques",
      "Ateliers pratiques",
      "Coaching et mentoring",
      "Conduite du changement",
      "Certifications professionnelles",
    ],
  },
  {
    id: 9,
    icon: "/assets/images/icon-ferature-3.svg",
    title: "Benchmark & Sélection de solutions",
    subtitle: "Analyse et recommandation",
    description: "Analyse comparative du marché et recommandation des meilleures solutions technologiques adaptées à vos besoins et à votre contexte.",
    features: [
      "Analyse du marché",
      "Benchmark concurrentiel",
      "Évaluation des solutions",
      "Recommandations personnalisées",
      "Accompagnement au choix",
    ],
  },
];

export default function ExpertisesPage() {
  return (
    <>
      <Header />

      {/* Page Header Start */}
      <div className="page-header parallaxie">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className="page-header-box">
                <h1 className="wow fadeInUp">Nos Domaines d&apos;Intervention</h1>
                <nav className="wow fadeInUp" data-wow-delay="0.2s">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link href="/">Accueil</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">Expertises</li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Page Header End */}

      {/* Our Services Section - Expertises Grid Start */}
      <div className="our-services page-services">
        <div className="container">
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
                      <h3>{expertise.title}</h3>
                    </div>
                    <div className="service-btn">
                      <a href="#contact" aria-label={`Contactez-nous pour ${expertise.title}`}>
                        <i className="fa-solid fa-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                  <div className="service-content">
                    <p>{expertise.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Our Services Section - Expertises Grid End */}

      {/* Detailed Expertises Section Start */}
      <div className="what-we-do">
        <div className="container">
          <div className="row section-row">
            <div className="col-lg-12">
              <div className="section-title">
                <h3 className="wow fadeInUp">Détail des expertises</h3>
                <h2 className="wow fadeInUp" data-wow-delay="0.2s">
                  Nos domaines <span>d&apos;intervention</span>
                </h2>
              </div>
            </div>
          </div>

          <div className="row">
            {expertises.map((expertise, index) => (
              <div key={expertise.id} className="col-lg-12">
                <div
                  className={`service-item wow fadeInUp`}
                  data-wow-delay={`${index * 0.1}s`}
                  style={{
                    marginBottom: "30px",
                    padding: "30px",
                    backgroundColor: "var(--secondary-color)",
                    borderRadius: "10px",
                  }}
                >
                  <div className="row align-items-center">
                    <div className="col-lg-1">
                      <div className="icon-box" style={{ marginBottom: 0 }}>
                        <img src={expertise.icon} alt={expertise.title} style={{ width: "48px", height: "48px" }} />
                      </div>
                    </div>
                    <div className="col-lg-11">
                      <div className="service-title-box">
                        <div className="service-title">
                          <h3 style={{ marginBottom: "10px" }}>{expertise.title}</h3>
                          <p style={{ color: "var(--accent-color)", fontWeight: 500, marginBottom: "15px" }}>
                            {expertise.subtitle}
                          </p>
                        </div>
                      </div>
                      <div className="service-content">
                        <p style={{ marginBottom: "20px" }}>{expertise.description}</p>
                        <div className="what-we-do-body">
                          <ul style={{ listStyle: "none", padding: 0 }}>
                            {expertise.features.map((feature, idx) => (
                              <li key={idx} style={{ 
                                position: "relative", 
                                paddingLeft: "25px", 
                                marginBottom: "8px",
                                color: "var(--text-color)"
                              }}>
                                <i className="fa-solid fa-check" style={{ 
                                  position: "absolute", 
                                  left: 0, 
                                  top: "2px", 
                                  color: "var(--accent-color)" 
                                }}></i>
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Detailed Expertises Section End */}

      {/* CTA Section Start */}
      <div className="cta-box wow fadeInUp" style={{ textAlign: "center", borderRadius: "15px", overflow: "hidden", margin: "0 15px" }}>
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <div className="row">
            <div className="col-lg-12">
              <h2 style={{ color: "var(--white-color)", marginBottom: "20px", fontSize: "36px" }}>
                Prêt à démarrer votre projet ?
              </h2>
              <p style={{ color: "var(--white-color)", opacity: 0.9, marginBottom: "30px", fontSize: "18px" }}>
                Contactez-nous pour discuter de vos besoins et découvrir comment nous pouvons vous aider.
              </p>
              <a href="/contact" className="btn-default btn-highlighted">
                Contactez-nous
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* CTA Section End */}

      <Footer />
    </>
  );
}
