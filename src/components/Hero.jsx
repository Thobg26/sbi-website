import { motion } from "framer-motion"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Hero() {

  const [search, setSearch] = useState("")
  const navigate = useNavigate()

  const handleSearch = (e) => {

    const value = e.target.value
    setSearch(value)

    if (value.length > 2) {
      navigate(`/produits?search=${value}`)
    }

  }

  return (

<section className="bg-gradient-to-r from-primary to-secondary text-white py-24 text-center px-4">

<motion.h2
initial={{ opacity: 0, y: -50 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.8 }}
className="text-4xl md:text-5xl font-bold mb-6"
>

Solution Bureautique Informatique

</motion.h2>

<motion.p
initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
transition={{ delay: 0.5, duration: 0.8 }}
className="text-lg max-w-2xl mx-auto mb-10"
>

Fourniture de matériel bureautique, informatique et consommables
pour administrations et entreprises au Gabon.

</motion.p>


{/* BARRE DE RECHERCHE */}

<motion.input
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
transition={{ delay: 0.8 }}
type="text"
placeholder="Rechercher un produit..."
value={search}
onChange={handleSearch}
className="w-full max-w-xl px-6 py-4 rounded-xl text-black shadow-lg focus:outline-none focus:ring-2 focus:ring-white"
/>

</section>

  )
}

export default Hero