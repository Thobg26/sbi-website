import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState } from "react"
import { Helmet } from "react-helmet"
import CookieConsent from "react-cookie-consent"

import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Products from "./components/Products"
import Services from "./components/Services"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

function App() {

  const [searchTerm, setSearchTerm] = useState("")

  return (

    <BrowserRouter>

      {/* STRUCTURE PRINCIPALE */}
      <div className="flex flex-col min-h-screen">

        {/* SEO */}
        <Helmet>

          <title>SBI Gabon | Matériel Informatique & Bureautique</title>

          <meta
            name="description"
            content="SBI Gabon fournit du matériel informatique, bureautique et des solutions technologiques aux entreprises et administrations de Libreville et tout le Gabon."
          />

          <meta
            name="keywords"
            content="SBI Gabon, informatique Gabon, matériel bureautique, solutions IT, Libreville"
          />

          <meta name="robots" content="index, follow" />

          <link rel="canonical" href="https://sbigabon.com" />

        </Helmet>

        {/* NAVBAR */}
        <Navbar />

        {/* CONTENU PRINCIPAL */}
        <main className="flex-grow">

          <Routes>

            {/* ACCUEIL */}
            <Route
              path="/"
              element={
                <>
                  <Hero onSearch={setSearchTerm} />
                  <Products searchTerm={searchTerm} />
                  <Services />
                  <Contact />
                </>
              }
            />

            {/* PRODUITS */}
            <Route
              path="/produits"
              element={<Products searchTerm={searchTerm} />}
            />

            {/* SERVICES */}
            <Route
              path="/services"
              element={<Services />}
            />

            {/* CONTACT */}
            <Route
              path="/contact"
              element={<Contact />}
            />

          </Routes>

        </main>

        {/* FOOTER */}
        <Footer />

        {/* COOKIE CONSENT */}
        <CookieConsent
          location="bottom"
          buttonText="Accepter"
          declineButtonText="Refuser"
          enableDeclineButton
          cookieName="sbiCookieConsent"
          style={{ background: "#1f2937" }}
          buttonStyle={{ color: "#fff", background: "#2563eb", fontSize: "14px" }}
          declineButtonStyle={{ color: "#fff", background: "#6b7280", fontSize: "14px" }}
          expires={365}
        >
          Ce site utilise des cookies afin d'améliorer votre expérience de navigation
          et d'analyser le trafic.
        </CookieConsent>

      </div>

    </BrowserRouter>

  )
}

export default App