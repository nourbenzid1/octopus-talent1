"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = (await response.json()) as { error?: string };
        throw new Error(errorData.error ?? "Une erreur est survenue");
      }

      setStatus("success");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error: unknown) {
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "Une erreur est survenue");
    }
  };

  return (
    <>
      <Header />

      {/* Page Header Start */}
      <div className="page-header parallaxie" style={{ backgroundImage: `url('/assets/images/real/employee-working-marketing-setting.jpg')` }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className="page-header-box">
                <h1 className="wow fadeInUp">Contactez-nous</h1>
                <nav className="wow fadeInUp" data-wow-delay="0.2s">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link href="/">Accueil</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">Contact</li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Page Header End */}

      {/* Page Contact Us Start */}
      <div className="page-contact-us" style={{ padding: "100px 0" }}>
        <div className="container">
          <div className="row section-row" style={{ marginBottom: "180px" }}>
            <div className="col-lg-12">
              <div className="section-title">
                <h3 className="wow fadeInUp">Contact</h3>
                <h2 className="wow fadeInUp" data-wow-delay="0.2s">
                  Vous avez des questions ? <span>Posez-les à tout moment</span>
                </h2>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12">
              <div className="contact-info-list" style={{ 
                wordBreak: "break-word",
                overflowWrap: "anywhere"
              }}>
                <div className="contact-info-item wow fadeInUp">
                  <div className="icon-box">
                    <img src="/assets/images/icon-phone-accent.svg" alt="Phone" />
                  </div>
                  <div className="contact-info-content">
                    <h3 style={{ color: "#fff" }}>Appelez-nous</h3>
                    <p><a href="tel:+33123456789" style={{ color: "rgba(255,255,255,0.8)" }}>+33 1 23 45 67 89</a></p>
                  </div>
                </div>

                <div className="contact-info-item wow fadeInUp" data-wow-delay="0.2s">
                  <div className="icon-box">
                    <img src="/assets/images/icon-mail-accent.svg" alt="Email" />
                  </div>
                  <div className="contact-info-content">
                    <h3 style={{ color: "#fff" }}>E-mail</h3>
                    <p><a href="mailto:contact@octopustalent.io" style={{ 
                      color: "rgba(255,255,255,0.8)",
                      display: "block",
                      wordBreak: "break-all"
                    }}>contact@octopustalent.io</a></p>
                  </div>
                </div>

                <div className="contact-info-item wow fadeInUp" data-wow-delay="0.4s">
                  <div className="icon-box">
                    <img src="/assets/images/icon-location.svg" alt="Location" />
                  </div>
                  <div className="contact-info-content">
                    <h3 style={{ color: "#fff" }}>Notre Bureau</h3>
                    <p style={{ color: "rgba(255,255,255,0.8)" }}>Paris, France</p>
                  </div>
                </div>
              </div>

              <div 
                className="page-contact-box parallaxie" 
                style={{ 
                  backgroundImage: "url('/assets/images/real/contact-bg.jpg')",
                  padding: "60px",
                  borderRadius: "20px",
                  position: "relative",
                  overflow: "visible", // Ensure it doesn't clip overlapping content
                  marginTop: "0" // The negative margin on info-list handles the spacing
                }}
              >
                {/* Overlay to ensure readability */}
                <div style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  backgroundColor: "rgba(1, 5, 53, 0.8)",
                  zIndex: 1,
                  borderRadius: "20px"
                }}></div>

                <div className="row" style={{ position: "relative", zIndex: 2 }}>
                  <div className="col-lg-12">
                    <div className="contact-us-form">
                      <div className="section-title dark-section wow fadeInUp">
                        <h2 style={{ color: "#fff", marginBottom: "30px", textAlign: "center" }}>Entrez en contact avec nous</h2>
                      </div>

                      <div className="member-contact-form contact-form">
                        <form id="contactForm" onSubmit={handleSubmit} className="wow fadeInUp" data-wow-delay="0.2s">
                          <div className="row">
                            <div className="form-group col-md-6 mb-4">
                              <input 
                                type="text" 
                                name="firstName" 
                                value={formData.firstName}
                                onChange={handleChange}
                                className="form-control" 
                                placeholder="Prénom" 
                                required 
                                style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", color: "#fff", padding: "12px 20px" }} 
                              />
                            </div>
                            <div className="form-group col-md-6 mb-4">
                              <input 
                                type="text" 
                                name="lastName" 
                                value={formData.lastName}
                                onChange={handleChange}
                                className="form-control" 
                                placeholder="Nom" 
                                required 
                                style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", color: "#fff", padding: "12px 20px" }} 
                              />
                            </div>
                            <div className="form-group col-md-6 mb-4">
                              <input 
                                type="text" 
                                name="phone" 
                                value={formData.phone}
                                onChange={handleChange}
                                className="form-control" 
                                placeholder="Téléphone" 
                                style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", color: "#fff", padding: "12px 20px" }} 
                              />
                            </div>
                            <div className="form-group col-md-6 mb-4">
                              <input 
                                type="email" 
                                name="email" 
                                value={formData.email}
                                onChange={handleChange}
                                className="form-control" 
                                placeholder="Email" 
                                required 
                                style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", color: "#fff", padding: "12px 20px" }} 
                              />
                            </div>
                            <div className="form-group col-md-12 mb-5">
                              <textarea 
                                name="message" 
                                value={formData.message}
                                onChange={handleChange}
                                className="form-control" 
                                rows={4} 
                                placeholder="Votre Message" 
                                required
                                style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", color: "#fff", padding: "12px 20px" }} 
                              ></textarea>
                            </div>
                            <div className="col-md-12 text-center">
                              <button 
                                type="submit" 
                                disabled={status === "loading"}
                                className="btn-default btn-highlighted"
                              >
                                {status === "loading" ? "Envoi en cours..." : "Envoyer le message"}
                              </button>
                              
                              {status === "success" && (
                                <div style={{ marginTop: "20px", color: "#4ade80", fontWeight: 600 }}>
                                  Message envoyé avec succès ! Nous vous recontacterons bientôt.
                                </div>
                              )}
                              
                              {status === "error" && (
                                <div style={{ marginTop: "20px", color: "#f87171", fontWeight: 600 }}>
                                  {errorMessage || "Une erreur est survenue lors de l'envoi."}
                                </div>
                              )}
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Page Contact Us End */}

      <Footer />
    </>
  );
}
