import React, { useState, useMemo } from "react"
import { motion } from "framer-motion"
import { useSearchParams } from "react-router-dom"
import productsData from "../data/products"

import {
  FaCamera,
  FaCalculator,
  FaPrint,
  FaLaptop,
  FaPhone,
  FaBook,
  FaArchive,
  FaChevronDown
} from "react-icons/fa"

export default function Products() {

  const [searchParams] = useSearchParams()
  const searchQuery = searchParams.get("search") || ""

  const [selectedCategory, setSelectedCategory] = useState(null)
  const [selectedSubcategory, setSelectedSubcategory] = useState(null)

  const [sortOption, setSortOption] = useState("name")
  const [currentPage, setCurrentPage] = useState(1)
  const [productsPerPage, setProductsPerPage] = useState(16)

  /* couleurs catégories */

  const categoryColors = {
    "Matériels de bureau": "hover:bg-red-500",
    "Cartouches & Toners laser": "hover:bg-blue-900",
    "Informatique": "hover:bg-purple-600",
    "Matériels d'impression": "hover:bg-pink-600",
    "Papeterie": "hover:bg-yellow-400"
  }

  /* icones sous categories */

  const subcategoryIcons = {

    "Appareils photo": <FaCamera />,
    "Calculatrices": <FaCalculator />,

    "Cartouches jet d'encre": <FaPrint />,
    "Consommables RISO": <FaPrint />,
    "Rubans & Encreurs": <FaPrint />,
    "Toners laser": <FaPrint />,

    "Ordinateurs": <FaLaptop />,
    "Périphériques d'ordinateurs": <FaLaptop />,
    "Logiciels": <FaLaptop />,
    "Stockage": <FaArchive />,
    "Téléphonie": <FaPhone />,
    "Image & Son": <FaCamera />,

    "Imprimantes": <FaPrint />,
    "Imprimantes photos": <FaPrint />,
    "Duplicopieurs & Com Color": <FaPrint />,

    "Adhésifs, Agrafage & Découpe": <FaArchive />,
    "Agendas": <FaBook />,
    "Cahiers, Blocs & Feuilles": <FaBook />,
    "Classement & Archivage": <FaArchive />,
    "Ecriture & Correction": <FaBook />,
    "Enveloppes & Etiquettes": <FaArchive />,
    "Fournitures scolaires": <FaBook />,
    "Librairie": <FaBook />,
    "Papier": <FaArchive />,
    "Reliure & Présentation": <FaArchive />,
    "Répertoires & Manifolds": <FaBook />,
    "Tampons": <FaArchive />
  }

  /* transformer les données */

  const products = useMemo(() => {

    return productsData.flatMap(category =>
      category.subcategories.flatMap(sub =>
        sub.items.map(item => ({
          ...item,
          category: category.category,
          subcategory: sub.name
        }))
      )
    )

  }, [])

  /* suggestions automatiques */

  const suggestions = useMemo(() => {

    if (!searchQuery) return []

    return products
      .filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
      .slice(0,5)

  }, [searchQuery, products])

  /* filtrage */

  const filteredProducts = useMemo(() => {

    let filtered = [...products]

    if (searchQuery) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.subcategory.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }

    if (selectedSubcategory) {
      filtered = filtered.filter(p => p.subcategory === selectedSubcategory)
    }
    else if (selectedCategory) {
      filtered = filtered.filter(p => p.category === selectedCategory)
    }

    switch (sortOption) {

      case "price-asc":
        filtered.sort((a,b)=>a.price-b.price)
        break

      case "price-desc":
        filtered.sort((a,b)=>b.price-a.price)
        break

      default:
        filtered.sort((a,b)=>a.name.localeCompare(b.name))

    }

    return filtered

  }, [products, selectedCategory, selectedSubcategory, sortOption, searchQuery])

  /* pagination */

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage)

  const indexLast = currentPage * productsPerPage
  const indexFirst = indexLast - productsPerPage

  const currentProducts = filteredProducts.slice(indexFirst, indexLast)

  return (

<div className="flex flex-col md:flex-row gap-6 p-4 md:p-6 bg-gray-50">

{/* SIDEBAR */}

<div className="w-full md:w-72 bg-white shadow rounded-xl p-4 h-fit">

<h2 className="font-bold text-lg mb-4">Catégories</h2>

{productsData.map(cat => (

<div key={cat.category}>

<div
onClick={()=>{

if(selectedCategory === cat.category){
setSelectedCategory(null)
setSelectedSubcategory(null)
}else{
setSelectedCategory(cat.category)
setSelectedSubcategory(null)
}

setCurrentPage(1)

}}

className={`flex justify-between items-center p-2 cursor-pointer rounded mb-1 transition
${categoryColors[cat.category]}
${selectedCategory === cat.category ? "bg-primary text-white" : ""}
`}
>

<span>{cat.category}</span>

<motion.span
animate={{ rotate:selectedCategory === cat.category ? 180:0 }}
>
<FaChevronDown/>
</motion.span>

</div>

{selectedCategory === cat.category && (

<motion.div
initial={{height:0,opacity:0}}
animate={{height:"auto",opacity:1}}
className="ml-4 overflow-hidden"
>

{cat.subcategories.map(sub => (

<div
key={sub.name}

onClick={()=>{
setSelectedSubcategory(sub.name)
setCurrentPage(1)
}}

className="flex items-center gap-2 p-2 cursor-pointer rounded hover:bg-gray-100"
>

<span>{subcategoryIcons[sub.name]}</span>

{sub.name}

</div>

))}

</motion.div>

)}

</div>

))}

</div>

{/* PRODUCTS */}

<div className="flex-1">

{/* suggestions */}

{searchQuery && suggestions.length > 0 && (

<div className="bg-white border rounded-xl p-4 mb-6">

<p className="text-sm text-gray-500 mb-2">
Suggestions :
</p>

<div className="flex flex-wrap gap-2">

{suggestions.map(item=>(
<span
key={item.id}
className="px-3 py-1 bg-gray-100 rounded-full text-sm"
>
{item.name}
</span>
))}

</div>

</div>

)}

{/* SORT */}

<div className="flex flex-col sm:flex-row gap-3 justify-between mb-6">

<select
value={sortOption}
onChange={(e)=>setSortOption(e.target.value)}
className="px-3 py-2 border rounded"
>

<option value="name">Nom</option>
<option value="price-asc">Prix croissant</option>
<option value="price-desc">Prix décroissant</option>

</select>

<select
value={productsPerPage}
onChange={(e)=>{
setProductsPerPage(Number(e.target.value))
setCurrentPage(1)
}}
className="px-3 py-2 border rounded"
>

<option value={8}>8 / page</option>
<option value={16}>16 / page</option>
<option value={24}>24 / page</option>
<option value={32}>32 / page</option>

</select>

</div>

{/* GRID */}

<div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

{currentProducts.map(product => (

<motion.div
key={product.id}
whileHover={{y:-6}}
initial={{opacity:0,y:20}}
animate={{opacity:1,y:0}}

className="bg-white rounded-2xl border hover:shadow-xl transition overflow-hidden flex flex-col"
>

<div className="h-40 md:h-48 bg-gray-100 flex items-center justify-center p-4">

<img
src={product.image}
alt={product.name}
className="max-h-full object-contain"
/>

</div>

<div className="p-4 flex flex-col flex-grow">

<span className="text-xs text-gray-400 mb-1">
{product.category}
</span>

<h3 className="font-semibold text-sm md:text-base line-clamp-2 mb-2">
{product.name}
</h3>

<p className="text-xs text-gray-500 mb-3">
{product.subcategory}
</p>

<div className="mt-auto">

<span className="text-primary font-bold text-lg">
{product.price}
</span>

</div>

</div>

</motion.div>

))}

</div>

{/* PAGINATION */}

<div className="flex justify-center gap-2 mt-8 flex-wrap text-sm">

{Array.from({length: totalPages}, (_,i)=>i+1).map(page => (

<button
key={page}
onClick={()=>setCurrentPage(page)}
className={`px-4 py-2 border rounded
${currentPage===page ? "bg-primary text-white":"bg-white"}
`}
>

{page}

</button>

))}

</div>

</div>

</div>

)

}