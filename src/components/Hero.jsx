import { motion } from "framer-motion"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import productsData from "../data/products"

function Hero() {

  const [search, setSearch] = useState("")
  const navigate = useNavigate()

  /* LISTE DE TOUS LES PRODUITS */

  const allProducts = productsData.flatMap(cat =>
    cat.subcategories.flatMap(sub =>
      sub.items.map(p => p.name)
    )
  )

  /* SUGGESTIONS */

  const suggestions = allProducts
    .filter(p =>
      p.toLowerCase().includes(search.toLowerCase())
    )
    .slice(0,5)

  /* LORSQUE ON TAPE */

  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  /* LORSQUE ON APPUIE SUR ENTER */

  const handleKeyDown = (e) => {

    if (e.key === "Enter" && search.trim() !== "") {

      navigate(`/produits?search=${search}`)

    }

  }

  return (

<section className="bg-gradient-to-r from-primary to-secondary text-white py-16 md:py-24 text-center px-4">

<motion.h2
initial={{ opacity: 0, y: -50 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.8 }}
className="text-3xl md:text-5xl font-bold mb-4 md:mb-6"
>

Solution Bureautique Informatique

</motion.h2>

<motion.p
initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
transition={{ delay: 0.5, duration: 0.8 }}
className="text-base md:text-lg max-w-2xl mx-auto mb-8"
>

Fourniture de matériel bureautique, informatique et consommables
pour administrations et entreprises au Gabon.

</motion.p>

{/* BARRE DE RECHERCHE */}

<div className="relative w-full max-w-xl mx-auto">

<input
type="text"
placeholder="Rechercher un produit..."
value={search}
onChange={handleChange}
onKeyDown={handleKeyDown}
className="w-full px-6 py-4 rounded-xl text-black shadow-lg focus:outline-none focus:ring-2 focus:ring-white"
/>

{/* SUGGESTIONS */}

{search.length > 1 && (

<div className="absolute left-0 right-0 bg-white text-black mt-2 rounded-lg shadow-lg overflow-hidden">

{suggestions.length > 0 ? (

suggestions.map((item,i)=>(

<div
key={i}
onClick={()=>navigate(`/produits?search=${item}`)}
className="px-4 py-3 hover:bg-gray-100 cursor-pointer text-left"
>

{item}

</div>

))

) : (

<div className="px-4 py-3 text-gray-500">
Aucun produit trouvé
</div>

)}

</div>

)}

</div>

</section>

  )
}

export default Hero