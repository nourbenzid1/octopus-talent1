import Link from "next/link";

export default function Footer() {
  return (
    <footer className="main-footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="footer-header">
              <div className="footer-logo"></div>
              <div className="footer-social-links">
                <ul>
                  <li>
                    <a
                      href="https://linkedin.com/company/octopus-talent"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="footer-links footer-newsletter-form">
              <h3>Octopus Talent</h3>
              <p>
                Votre partenaire stratégique pour l&apos;expertise IT, Data et
                IA.
              </p>
            </div>
          </div>

          <div className="col-lg-2 col-md-3 col-6">
            <div className="footer-links footer-quick-links">
              <h3>Navigation</h3>
              <ul>
                <li>
                  <Link href="/">Accueil</Link>
                </li>
                <li>
                  <Link href="/about">À propos</Link>
                </li>
                <li>
                  <Link href="/expertises">Expertises</Link>
                </li>
                <li>
                  <Link href="/talents">Nous rejoindre</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-2 col-md-3 col-6">
            <div className="footer-links">
              <h3>Services</h3>
              <ul>
                <li>
                  <Link href="/expertises">Transformation Digitale</Link>
                </li>
                <li>
                  <Link href="/expertises">Expertise Data & IA</Link>
                </li>
                <li>
                  <Link href="/expertises">Cybersécurité</Link>
                </li>
                <li>
                  <Link href="/offres">Offres d&apos;emploi</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-2 col-md-3 col-6">
            <div className="footer-links">
              <h3>Support</h3>
              <ul>
                <li>
                  <Link href="/legal">Mentions Légales</Link>
                </li>
                <li>
                  <Link href="/contact">Contact</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-2 col-md-3 col-6">
            <div className="footer-links">
              <h3>Contact</h3>
              <ul>
                <li>
                  <a href="mailto:contact@octopustalent.com">
                    contact@octopustalent.com
                  </a>
                </li>
                <li>Paris, France</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-copyright">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="footer-copyright-text">
                <p>
                  Copyright © {new Date().getFullYear()} Octopus Talent. Tous
                  droits réservés.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
