import { useState } from "react"
import { useSearchParams } from "react-router-dom"
import { useEffect } from "react"
import { motion } from "framer-motion"

function Services() {

  const [activeIndex, setActiveIndex] = useState(null)
  const [searchParams] = useSearchParams()

  const services = [
    {
      title: "FOURNITURE DE MATÉRIEL BUREAUTIQUE & INFORMATIQUE",
      description:
        "SBI fournit du matériel professionnel adapté aux administrations et entreprises : ordinateurs de bureau et portables, imprimantes réseau, scanners, onduleurs, accessoires informatiques et solutions d'impression pour documents administratifs et techniques.",
      color: "bg-purple-600"
    },
    {
      title: "CONSOMMABLES INFORMATIQUES & BUREAUTIQUES",
      description:
        "Approvisionnement en consommables fiables et durables : cartouches jet d'encre, toners laser, papiers, ramettes, accessoires informatiques et fournitures bureautiques nécessaires au bon fonctionnement de votre organisation.",
      color: "bg-green-700"
    },
    {
      title: "INSTALLATION & MAINTENANCE INFORMATIQUE",
      description:
        "Installation, maintenance et réparation d'équipements informatiques. Nos techniciens assurent des interventions rapides et efficaces afin de garantir la continuité de vos infrastructures technologiques.",
      color: "bg-pink-600"
    },
    {
      title: "SOLUTIONS D'IMPRESSION & REPROGRAPHIE",
      description:
        "Services d'impression et reproduction de documents : noir/blanc ou couleur, recto-verso, grands volumes et impression grand format pour affiches, plans et supports visuels professionnels.",
      color: "bg-indigo-700"
    },
    {
      title: "CRÉATION DE TAMPONS PROFESSIONNELS",
      description:
        "Fabrication de tampons personnalisés pour administrations et entreprises : tampons officiels, tampons d'entreprise, tampons dateurs et cachets administratifs.",
      color: "bg-yellow-400 text-black"
    },
    {
      title: "DÉVELOPPEMENT WEB & APPLICATIONS",
      description:
        "Conception de sites web professionnels, applications web et solutions digitales adaptées aux entreprises et institutions.",
      color: "bg-red-600"
    },
    {
      title: "CONSEIL & ACCOMPAGNEMENT TECHNOLOGIQUE",
      description:
        "SBI accompagne les institutions et entreprises dans le choix, l'acquisition et le déploiement de solutions informatiques.",
      color: "bg-fuchsia-600"
    },
    {
      title: "LIVRAISON & SUPPORT TECHNIQUE",
      description:
        "Livraison rapide et support technique avec maintenance planifiée ou interventions ponctuelles.",
      color: "bg-black"
    }
  ]

  useEffect(() => {
    const open = searchParams.get("open")

    if (open === "web") {
      setActiveIndex(5)

      setTimeout(() => {
        document.getElementById("services")?.scrollIntoView({
          behavior: "smooth"
        })
      }, 200)
    }
  }, [searchParams])

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (

<motion.section
id="services"
className="py-24 bg-gray-50"
initial={{ opacity: 0, y: 60 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.7 }}
>

<h2 className="text-4xl font-bold text-center text-primary mb-16 tracking-wide">
NOS SERVICES
</h2>

<div className="max-w-5xl mx-auto px-6 space-y-6">

{services.map((service, index) => (

<motion.div
key={index}
initial={{ opacity: 0, y: 40 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 0.5, delay: index * 0.1 }}
viewport={{ once: true }}
className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden hover:shadow-xl transition"
>

<button
onClick={() => toggleAccordion(index)}
className="w-full flex justify-between items-center px-8 py-6 bg-primary text-white font-semibold text-lg tracking-wide"
>

{service.title}

<span
className={`text-2xl transform transition-transform duration-300 ${
activeIndex === index ? "rotate-180" : "rotate-0"
}`}
>
⌄
</span>

</button>

<div
className={`grid transition-all duration-500 ease-in-out ${
activeIndex === index
? "grid-rows-[1fr] opacity-100"
: "grid-rows-[0fr] opacity-0"
}`}
>

<div className="overflow-hidden">

<p className={`px-8 py-8 leading-relaxed text-xl font-light text-white rounded-b-2xl ${service.color}`}>
{service.description}
</p>

</div>

</div>

</motion.div>

))}

</div>

</motion.section>

  )
}

export default Services