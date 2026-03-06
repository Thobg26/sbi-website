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

import PolitiqueCookies from "./pages/PolitiqueCookies"
import PolitiqueConfidentialite from "./pages/PolitiqueConfidentialite"
import MentionsLegales from "./pages/MentionsLegales"

function App() {

  const [searchTerm, setSearchTerm] = useState("")

  return (

    <BrowserRouter>

      <div className="flex flex-col min-h-screen">

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

            {/* PAGE ACCUEIL */}
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

            {/* PAGES LEGALES */}
            <Route
              path="/politique-cookies"
              element={<PolitiqueCookies />}
            />

            <Route
              path="/politique-confidentialite"
              element={<PolitiqueConfidentialite />}
            />

            <Route
              path="/mentions-legales"
              element={<MentionsLegales />}
            />

          </Routes>

        </main>

        {/* FOOTER */}
        <Footer />

      </div>

      {/* BANNIERE COOKIES PREMIUM */}
      <CookieConsent
        location="bottom"
        buttonText="Accepter les cookies"
        declineButtonText="Refuser"
        enableDeclineButton
        cookieName="sbiCookieConsent"
        expires={365}
        style={{
          background: "#111827",
          padding: "18px",
          alignItems: "center",
          fontSize: "14px"
        }}
        buttonStyle={{
          background: "#2563eb",
          color: "#fff",
          fontSize: "14px",
          borderRadius: "6px",
          padding: "8px 16px"
        }}
        declineButtonStyle={{
          background: "#374151",
          color: "#fff",
          fontSize: "14px",
          borderRadius: "6px",
          padding: "8px 16px"
        }}
      >
        Ce site utilise des cookies pour améliorer votre expérience et analyser le trafic.

        <a
          href="/politique-cookies"
          style={{ marginLeft: "8px", color: "#60a5fa" }}
        >
          En savoir plus
        </a>

      </CookieConsent>

    </BrowserRouter>

  )
}

export default App