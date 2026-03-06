import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState } from "react"
import { Helmet } from "react-helmet"

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


    <>
      <Helmet>
        <title>SBI Gabon | Matériel Informatique & Bureautique</title>
        <meta name="description" content="SBI Gabon fournit du matériel informatique, bureautique et des solutions technologiques aux entreprises et administrations de Libreville et tout le Gabon." />
        <meta name="keywords" content="SBI Gabon, informatique Gabon, matériel bureautique, solutions IT, Libreville" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://sbigabon.com" />
      </Helmet>

      {/* ton site ici */}
    </>

      {/* NAVBAR */}
      <Navbar />

      {/* ROUTES */}
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

      {/* FOOTER */}
      <Footer />

    </BrowserRouter>
  )
}

export default App