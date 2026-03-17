import Link from "next/link";

export default function Header() {
  return (
    <>
      {/* Topbar Section Start */}
      <div className="topbar">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-7">
              <div className="topbar-info-text">
                <p>
                  Donnez de la puissance à vos projets IT et à vos données{" "}
                  <Link href="/contact">Contactez-nous</Link>
                </p>
              </div>
            </div>

            <div className="col-md-5">
              <div className="topbar-links">
                <div className="topbar-contact-info">
                  <ul>
                    <li>
                      <Link href="/about">À propos</Link>
                    </li>
                    <li>
                      <Link href="/expertises">Expertises</Link>
                    </li>
                    <li>
                      <Link href="/offres">Offres</Link>
                    </li>
                    <li>
                      <Link href="/contact">Contact</Link>
                    </li>
                  </ul>
                </div>

                <div className="topbar-social-links">
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
          </div>
        </div>
      </div>
      {/* Topbar Section End */}

      {/* Header Start */}
      <header className="main-header">
        <div className="header-sticky">
          <nav className="navbar navbar-expand-lg">
            <div className="container">
              {/* Logo Start */}
              <Link className="navbar-brand" href="/">
                <img
                  src="/assets/images/2.jpg"
                  alt="Logo"
                  width={180}
                  height={50}
                />
              </Link>
              {/* Logo End */}

              {/* Main Menu Start */}
              <div className="navbar-collapse main-menu collapse">
                <div className="nav-menu-wrapper">
                  <ul className="navbar-nav mr-auto" id="menu">
                    <li className="nav-item">
                      <Link className="nav-link" href="/">
                        Accueil
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" href="/about">
                        À propos
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" href="/expertises">
                        Expertises
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" href="/offres">
                        Offres
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" href="/talents">
                        Nous rejoindre
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" href="/contact">
                        Contact
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Header Btn Start */}
                <div className="header-btn">
                  <Link href="/contact" className="btn-default">
                    Get Started
                  </Link>
                </div>
                {/* Header Btn End */}
              </div>
              {/* Main Menu End */}
              <div className="navbar-toggle"></div>
            </div>
          </nav>
          <div className="responsive-menu"></div>
        </div>
      </header>
      {/* Header End */}
    </>
  );
}
