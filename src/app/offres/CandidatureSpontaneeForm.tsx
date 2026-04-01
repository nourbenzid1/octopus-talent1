"use client";

import { useState } from "react";

export default function CandidatureSpontaneeForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [cvFile, setCvFile] = useState<File | null>(null);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const data = new FormData();
      data.append("firstName", formData.firstName);
      data.append("lastName", formData.lastName);
      data.append("email", formData.email);
      data.append("phone", formData.phone);
      data.append("message", formData.message);
      if (cvFile) data.append("cv", cvFile);

      const response = await fetch("/api/candidature-spontanee", {
        method: "POST",
        body: data,
      });

      if (!response.ok) {
        const err = (await response.json()) as { error?: string };
        throw new Error(err.error ?? "Une erreur est survenue");
      }

      setStatus("success");
      setFormData({ firstName: "", lastName: "", email: "", phone: "", message: "" });
      setCvFile(null);
    } catch (error: unknown) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "Une erreur est survenue",
      );
    }
  };

  const inputStyle = {
    background: "rgba(255,255,255,0.1)",
    border: "1px solid rgba(255,255,255,0.2)",
    color: "#fff",
    padding: "12px 20px",
    borderRadius: "8px",
    width: "100%",
  };

  return (
    <form onSubmit={handleSubmit} className="wow fadeInUp" data-wow-delay="0.2s">
      <div className="row">
        <div className="form-group col-md-6 mb-4">
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="form-control"
            placeholder="Prénom *"
            required
            style={inputStyle}
          />
        </div>
        <div className="form-group col-md-6 mb-4">
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="form-control"
            placeholder="Nom *"
            required
            style={inputStyle}
          />
        </div>
        <div className="form-group col-md-6 mb-4">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="form-control"
            placeholder="Email *"
            required
            style={inputStyle}
          />
        </div>
        <div className="form-group col-md-6 mb-4">
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="form-control"
            placeholder="Numéro de téléphone *"
            required
            style={inputStyle}
          />
        </div>
        <div className="form-group col-md-12 mb-4">
          <label
            style={{
              display: "block",
              color: "rgba(255,255,255,0.7)",
              marginBottom: "8px",
              fontSize: "14px",
            }}
          >
            CV (PDF, DOC, DOCX — max 5 Mo)
          </label>
          <input
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={(e) => setCvFile(e.target.files?.[0] ?? null)}
            className="form-control"
            style={{ ...inputStyle, padding: "10px 20px" }}
          />
        </div>
        <div className="form-group col-md-12 mb-5">
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="form-control"
            rows={4}
            placeholder="Message (facultatif)"
            style={inputStyle}
          />
        </div>
        <div className="col-md-12 text-center">
          <button
            type="submit"
            disabled={status === "loading"}
            className="btn-default btn-highlighted"
          >
            {status === "loading" ? "Envoi en cours..." : "Envoyer ma candidature"}
          </button>

          {status === "success" && (
            <div style={{ marginTop: "20px", color: "#4ade80", fontWeight: 600 }}>
              Candidature envoyée avec succès ! Nous vous contacterons bientôt.
            </div>
          )}

          {status === "error" && (
            <div style={{ marginTop: "20px", color: "#f87171", fontWeight: 600 }}>
              {errorMessage}
            </div>
          )}
        </div>
      </div>
    </form>
  );
}
