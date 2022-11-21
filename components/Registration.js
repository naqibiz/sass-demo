import Link from "next/link";
import React from "react";

const RegistrationComp = () => {
  return (
    <div className="registration_main">
      <div className="registration_inner">
        <h1>Registrieren</h1>
        <div className="registration_content">
          <p>
            Mit der Registrierung profitieren Sie von den Vorteilen des
            Kundenkontos. Sie behalten Ihre kompletten Bestellungen, Ihr
            Merkzettel mit den favorisierten Artikeln und Ihre persönlichen
            Daten im Überblick. Ihre Daten werden im Kundenkonto sicher
            gespeichert.
          </p>
          <p>
            Bitte geben Sie folgende Informationen ein, um Ihr Kundenkonto
            anzulegen.
          </p>
          <form>
            <div className="form_row">
              <div className="form_group">
                <label>
                  Vorname<span>*</span>
                </label>
                <input type="text" />
              </div>
              <div className="form_group">
                <label>
                  Nachname<span>*</span>
                </label>
                <input type="text" />
              </div>
            </div>

            <div className="form_row">
              <div className="form_group">
                <label>
                  E-Mail<span>*</span>
                </label>
                <input type="email" />
              </div>
              <div className="form_group">
                <label>
                  Telefon<span>*</span>
                </label>
                <input type="text" />
              </div>
            </div>

            <div className="form_row">
              <div className="form_group_half form_group">
                <label>
                  Straße<span>*</span>
                </label>
                <input type="email" />
              </div>
              <div className="form_group_half form_group">
                <label>
                  Nr.<span>*</span>
                </label>
                <input type="text" />
              </div>
            </div>

            <div className="form_row">
              <div className="form_group">
                <label>
                  PLZ<span>*</span>
                </label>
                <input type="email" />
              </div>
              <div className="form_group">
                <label>
                  Stadt<span>*</span>
                </label>
                <input type="text" />
              </div>
            </div>

            <div className="form_row">
              <div className="from_group_full form_group">
                <label>
                  Land<span>*</span>
                </label>
                <input type="email" placeholder="Deutschland" />
              </div>
            </div>

            <div className="form_row">
              <div className="form_group">
                <label>
                  Passwort<span>*</span>
                </label>
                <input type="password" />
              </div>
              <div className="form_group">
                <label>
                  Passwort wiederholen<span>*</span>
                </label>
                <input type="password" />
              </div>
            </div>

            <div className="form_group_checkbox">
              <label class="container">
                <input type="checkbox" />
                <span class="checkmark"></span>
                Ja, ich möchste per E-Mail Newsletter Über Trends, Aktionen und
                Gutscheine informiert werden. Die Abmeldung ist jederzeit
                möglich.
              </label>

              <label class="container">
                <input type="checkbox" />
                <span class="checkmark"></span>
                Ich habe die AGBs gelesen und stimme diesen ausdrücklich zu. Ich
                habe die Widerrufsbelehrung gelesen.
              </label>
            </div>
          </form>
          <button>Registrieren</button>
        </div>
      </div>
    </div>
  );
};

export default RegistrationComp;
