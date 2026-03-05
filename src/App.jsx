import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState } from "react"

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