import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import logo from "../assets/logo.png"
import { FaWhatsapp } from "react-icons/fa"
import { FiSearch } from "react-icons/fi"
import { Menu, X } from "lucide-react"

function Navbar() {

  const [search, setSearch] = useState("")
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()

  const handleSearch = (e) => {
    e.preventDefault()

    if (search.trim() !== "") {
      navigate(`/produits?search=${search}`)
      setSearch("")
      setOpen(false)
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

{/* MENU DESKTOP */}

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

{/* BARRE DE RECHERCHE DESKTOP */}

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

{/* CONTACT + WHATSAPP + HAMBURGER */}

<div className="flex items-center gap-4">

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

{/* HAMBURGER */}

<button
className="md:hidden ml-2"
onClick={()=>setOpen(!open)}
>

{open ? <X size={28}/> : <Menu size={28}/>}

</button>

</div>

</div>

</div>

{/* MENU MOBILE */}

{open && (

<div className="md:hidden bg-white border-t shadow-lg">

<div className="flex flex-col gap-4 p-6 text-lg">

<Link to="/" onClick={()=>setOpen(false)}>
Accueil
</Link>

<Link to="/produits" onClick={()=>setOpen(false)}>
Produits
</Link>

<Link to="/services" onClick={()=>setOpen(false)}>
Services
</Link>

<Link to="/contact" onClick={()=>setOpen(false)}>
Contact
</Link>

{/* SEARCH MOBILE */}

<form
onSubmit={handleSearch}
className="flex items-center bg-gray-100 rounded-full px-4 py-2 mt-4"
>

<FiSearch className="text-gray-500 mr-2"/>

<input
type="text"
placeholder="Rechercher un produit..."
value={search}
onChange={(e)=>setSearch(e.target.value)}
className="bg-transparent outline-none w-full"
/>

</form>

</div>

</div>

)}

</nav>

  )
}

export default Navbar