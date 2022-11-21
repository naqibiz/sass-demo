import React, { useState } from "react";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import Link from "next/link";

const LoginRegComponent = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="login_reg_main">
      <h1>Anmelden oder Kundenkonto erstellen</h1>
      <div className="login_reg_content">
        <div className="login_box login_reg_box">
          <div className="login_box_inner">
            <h3>Willkommen zurück!</h3>
            <div className="login_box_inner_content">
              <p>
                Wenn Sie bereits ein Benutzerkonto bei uns besitzen, melden dich
                bitte hier an.
              </p>
              <form>
                <div className="form_group">
                  <label>
                    E-Mail-Adresse<span>*</span>
                  </label>
                  <input type="email" />
                </div>

                <div className="form_group">
                  <label>
                    Passwort<span>*</span>
                  </label>
                  <div className="pass_input">
                    <input type={showPassword ? "text" : "password"} />
                    {showPassword ? (
                      <FaEye onClick={() => setShowPassword(false)} />
                    ) : (
                      <FaEyeSlash onClick={() => setShowPassword(true)} />
                    )}
                  </div>
                </div>
              </form>
              <div className="login_info_area">
                <p>
                  Diese Website ist durch reCAPTCHA geschützt und es gelten die{" "}
                  <a>Datenschutzbestimmungen</a> von Google.
                </p>
                <span>Passwort vergessen?</span>
              </div>
              <button>Anmelden</button>
            </div>
          </div>
        </div>
        {/* ========================= */}

        <div className="registration_box login_reg_box">
          <div className="login_box_inner">
            <h3>Ich bin neu hier</h3>
            <div className="reg_box_inner_content">
              <p className="reg_info_para">
                <span>Profitieren</span> Sie von den <span>Vorteilen</span> des
                Kundenkontos, indem Sie sich <span>jetzt</span> registrieren.
              </p>
              <div className="reg_detail_section">
                <p>Ihre Vorteile:</p>
                <span>
                  <img src="/assets/tick-icon.svg" />
                  Übersicht aller Bestellungen
                </span>
                <span>
                  <img src="/assets/tick-icon.svg" />
                  Wunschliste von Ihren Lieblingsprodukten
                </span>
                <span>
                  <img src="/assets/tick-icon.svg" />
                  Schnellerer Bestellvorgang
                </span>
                <span>
                  <img src="/assets/tick-icon.svg" />
                  u.v.m.
                </span>
              </div>
              <Link href="/registration">
                <button>Zur Registrierung</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginRegComponent;
