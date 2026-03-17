"use client";

import { useState } from "react";

interface ApplicationFormProps {
  offerId: string;
}

export default function ApplicationForm({ offerId }: ApplicationFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null as string | null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    formData.append("offerId", offerId);

    try {
      const response = await fetch("/api/applications", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        const data = (await response.json()) as { error?: string };
        throw new Error(data.error ?? "Une erreur est survenue.");
      }

      setSubmitted(true);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Une erreur est survenue.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div
        className="replay-area-details py-5 text-center"
        style={{
          marginTop: "60px",
          paddingTop: "60px",
          borderTop: "1px solid var(--divider-color)",
          textAlign: "center",
        }}
      >
        <div className="icon mb-4">
          <i
            className="fa-solid fa-circle-check"
            style={{
              fontSize: "60px",
              color: "#55CEE3",
            }}
          ></i>
        </div>
        <h4
          className="title"
          style={{
            fontSize: "28px",
            fontWeight: 700,
            color: "var(--primary-color)",
            marginBottom: "15px",
          }}
        >
          Candidature Envoyée !
        </h4>
        <p
          className="disc"
          style={{
            color: "var(--text-color)",
            lineHeight: "1.8em",
            marginBottom: "20px",
          }}
        >
          Merci pour votre intérêt. Votre candidature a bien été transmise à nos
          équipes. Nous reviendrons vers vous dans les plus brefs délais.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="btn-default"
          style={{
            marginTop: "20px",
            padding: "12px 30px",
          }}
        >
          Retourner au formulaire
        </button>
      </div>
    );
  }

  return (
    <div
      className="replay-area-details"
      id="postuler"
      style={{
        marginTop: "60px",
        paddingTop: "60px",
        borderTop: "1px solid var(--divider-color)",
      }}
    >
      <h4
        className="title"
        style={{
          fontSize: "28px",
          fontWeight: 700,
          color: "var(--primary-color)",
          marginBottom: "30px",
        }}
      >
        Postuler à cette offre
      </h4>
      <form onSubmit={handleSubmit}>
        <div className="row g-4">
          <div className="col-lg-6">
            <input
              name="firstName"
              type="text"
              placeholder="Prénom"
              required
              style={{
                width: "100%",
                padding: "15px 20px",
                border: "1px solid var(--divider-color)",
                borderRadius: "8px",
                outline: "none",
                fontFamily: "inherit",
                fontSize: "14px",
              }}
            />
          </div>
          <div className="col-lg-6">
            <input
              name="lastName"
              type="text"
              placeholder="Nom"
              required
              style={{
                width: "100%",
                padding: "15px 20px",
                border: "1px solid var(--divider-color)",
                borderRadius: "8px",
                outline: "none",
                fontFamily: "inherit",
                fontSize: "14px",
              }}
            />
          </div>
          <div className="col-lg-6">
            <input
              name="email"
              type="email"
              placeholder="Email"
              required
              style={{
                width: "100%",
                padding: "15px 20px",
                border: "1px solid var(--divider-color)",
                borderRadius: "8px",
                outline: "none",
                fontFamily: "inherit",
                fontSize: "14px",
              }}
            />
          </div>
          <div className="col-lg-6">
            <input
              name="phone"
              type="tel"
              placeholder="Téléphone"
              required
              style={{
                width: "100%",
                padding: "15px 20px",
                border: "1px solid var(--divider-color)",
                borderRadius: "8px",
                outline: "none",
                fontFamily: "inherit",
                fontSize: "14px",
              }}
            />
          </div>
          <div className="col-12">
            <textarea
              name="message"
              placeholder="Message / Lettre de motivation"
              required
              style={{
                width: "100%",
                padding: "15px 20px",
                border: "1px solid var(--divider-color)",
                borderRadius: "8px",
                outline: "none",
                fontFamily: "inherit",
                fontSize: "14px",
                minHeight: "150px",
                resize: "vertical",
              }}
            ></textarea>
          </div>
          <div className="col-12">
            <label
              className="d-block mb-2 font-bold"
              style={{
                display: "block",
                marginBottom: "10px",
                fontWeight: 600,
                color: "var(--primary-color)",
                fontSize: "14px",
              }}
            >
              Votre CV (Format PDF uniquement)
            </label>
            <input
              name="cv"
              type="file"
              accept=".pdf"
              className="form-control"
              required
              style={{
                width: "100%",
                padding: "12px 15px",
                border: "1px solid var(--divider-color)",
                borderRadius: "8px",
                fontFamily: "inherit",
                fontSize: "14px",
              }}
            />
          </div>
          <div className="col-12">
            <div
              className="form-check"
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "10px",
                marginTop: "10px",
              }}
            >
              <input
                className="form-check-input"
                type="checkbox"
                required
                id="rgpd"
                style={{
                  marginTop: "5px",
                  cursor: "pointer",
                }}
              />
              <label
                className="form-check-label"
                htmlFor="rgpd"
                style={{
                  fontSize: "14px",
                  color: "var(--text-color)",
                  cursor: "pointer",
                  lineHeight: "1.5",
                }}
              >
                J&apos;accepte que mes données soient traitées dans le cadre de
                la gestion de ma candidature conformément à la politique de
                confidentialité.
              </label>
            </div>
          </div>
        </div>
        {error && (
          <div
            className="alert alert-danger mt-4"
            style={{
              padding: "15px",
              borderRadius: "8px",
              backgroundColor: "#fff5f5",
              border: "1px solid #feb2b2",
              color: "#c53030",
              fontSize: "14px",
            }}
          >
            {error}
          </div>
        )}
        <button
          type="submit"
          className="btn-default"
          disabled={loading}
          style={{
            marginTop: "30px",
            padding: "15px 40px",
            border: "none",
            cursor: loading ? "not-allowed" : "pointer",
            fontWeight: 700,
            opacity: loading ? 0.7 : 1,
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          {loading ? (
            <>
              <i className="fa-solid fa-spinner fa-spin"></i> Envoi en cours...
            </>
          ) : (
            <>
              Envoyer ma candidature <i className="fa-solid fa-arrow-right"></i>
            </>
          )}
        </button>
      </form>
    </div>
  );
}
