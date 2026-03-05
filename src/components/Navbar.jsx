import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import logo from "../assets/logo.png"
import { FaWhatsapp } from "react-icons/fa"
import { FiSearch } from "react-icons/fi"

function Navbar() {

  const [search, setSearch] = useState("")
  const navigate = useNavigate()

  const handleSearch = (e) => {
    e.preventDefault()

    if (search.trim() !== "") {
      navigate(`/produits?search=${search}`)
      setSearch("")
    }
  }

  return (

<nav className="sticky top-0 z-50 backdrop-blur-md bg-white/90 border-b border-gray-200 shadow-sm">

<div className="max-w-7xl mx-auto px-6">

<div className="flex justify-between items-center h-20">

{/* LOGO */}

<Link to="/" className="flex items-center gap-3">

<img
src={logo}
alt="SBI Logo"
className="h-10 w-auto"
/>

<span className="text-2xl font-bold text-gray-800 tracking-wide">
SBI
</span>

</Link>


{/* MENU */}

<div className="hidden md:flex items-center gap-10 text-gray-700 font-medium">

<Link to="/" className="hover:text-primary transition">
Accueil
</Link>

<Link to="/produits" className="hover:text-primary transition">
Produits
</Link>

<Link to="/services" className="hover:text-primary transition">
Services
</Link>

<Link to="/contact" className="hover:text-primary transition">
Contact
</Link>

</div>


{/* BARRE DE RECHERCHE */}

<form
onSubmit={handleSearch}
className="hidden lg:flex items-center bg-gray-100 rounded-full px-4 py-2 w-64 focus-within:ring-2 focus-within:ring-primary transition"
>

<FiSearch className="text-gray-500 mr-2"/>

<input
type="text"
placeholder="Rechercher un produit..."
value={search}
onChange={(e)=>setSearch(e.target.value)}
className="bg-transparent outline-none w-full text-sm"
/>

</form>


{/* CONTACT + WHATSAPP */}

<div className="flex items-center gap-6">

<div className="hidden md:flex flex-col text-sm text-right leading-tight">

<span className="text-gray-500">
Appelez-nous
</span>

<span className="font-semibold text-gray-800">
+241 66 48 84 55
</span>

</div>


<a
href="https://wa.me/24166488455"
target="_blank"
rel="noopener noreferrer"
className="flex items-center justify-center bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-md transition hover:scale-110"
>

<FaWhatsapp size={20} />

</a>

</div>

</div>

</div>

</nav>

  )
}

export default Navbar