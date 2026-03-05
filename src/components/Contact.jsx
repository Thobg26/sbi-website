import { Phone, Mail, MapPin } from "lucide-react"
import { motion } from "framer-motion"

function Contact() {
  return (

<motion.section
className="bg-gray-50 py-24"
initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
transition={{ duration: 0.8 }}
>

<div className="max-w-6xl mx-auto px-6">

<h2 className="text-4xl font-bold text-center text-primary mb-16">
Contactez-nous
</h2>

<div className="grid md:grid-cols-2 gap-12">

{/* INFORMATIONS */}

<div className="space-y-8">

<p className="text-gray-600 text-lg leading-relaxed">
Notre équipe est à votre disposition pour répondre à vos
besoins en matériel informatique, bureautique et solutions
technologiques pour entreprises et administrations.
</p>

<div className="space-y-6">

<motion.div
className="flex items-center gap-4"
initial={{ opacity: 0, x: -40 }}
whileInView={{ opacity: 1, x: 0 }}
transition={{ duration: 0.5 }}
viewport={{ once: true }}
>

<div className="bg-primary text-white p-3 rounded-lg">
<Phone size={20} />
</div>

<div>
<p className="font-semibold">Téléphone</p>
<p className="text-gray-600">+241 (0) 66 48 84 55</p>
</div>

</motion.div>

<motion.div
className="flex items-center gap-4"
initial={{ opacity: 0, x: -40 }}
whileInView={{ opacity: 1, x: 0 }}
transition={{ duration: 0.6 }}
viewport={{ once: true }}
>

<div className="bg-primary text-white p-3 rounded-lg">
<Mail size={20} />
</div>

<div>
<p className="font-semibold">Email</p>
<p className="text-gray-600">
sbi2023akebeville@gmail.com
</p>
</div>

</motion.div>

<motion.div
className="flex items-center gap-4"
initial={{ opacity: 0, x: -40 }}
whileInView={{ opacity: 1, x: 0 }}
transition={{ duration: 0.7 }}
viewport={{ once: true }}
>

<div className="bg-primary text-white p-3 rounded-lg">
<MapPin size={20} />
</div>

<div>
<p className="font-semibold">Adresse</p>
<p className="text-gray-600">
B.P. 7511 Libreville, Gabon
</p>
</div>

</motion.div>

</div>

</div>

{/* FORMULAIRE */}

<motion.form
className="bg-white p-10 rounded-2xl shadow-lg space-y-6"
initial={{ opacity: 0, x: 40 }}
whileInView={{ opacity: 1, x: 0 }}
transition={{ duration: 0.6 }}
viewport={{ once: true }}
>

<input
type="text"
placeholder="Nom complet"
className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"
/>

<input
type="email"
placeholder="Adresse email"
className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"
/>

<textarea
placeholder="Votre message"
rows="5"
className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"
></textarea>

<button
type="submit"
className="w-full bg-primary text-white py-4 rounded-lg font-semibold text-lg hover:bg-secondary transition"
>
Envoyer le message
</button>

</motion.form>

</div>

</div>

</motion.section>

  )
}

export default Contact