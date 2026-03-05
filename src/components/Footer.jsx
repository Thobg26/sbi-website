import logo from "../assets/logo.png"
import { Phone, Mail, MapPin } from "lucide-react"
import { Link } from "react-router-dom"

function Footer() {
  return (
    <footer className="bg-gray-900 text-white">

      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-12">

        {/* LOGO */}
        <div>

          <div className="flex items-center gap-3 mb-6">
            <img src={logo} alt="SBI Logo" className="h-12" />
            <h3 className="text-2xl font-bold">
              SBI
            </h3>
          </div>

          <p className="text-gray-400 leading-relaxed">
            Solution Bureautique Informatique (SBI) accompagne
            les entreprises, administrations et institutions
            dans leurs besoins en équipements informatiques,
            solutions bureautiques et services technologiques.
          </p>

        </div>

        {/* SERVICES */}
        <div>

          <h4 className="text-xl font-semibold mb-6">
            Nos Services
          </h4>

          <ul className="space-y-3 text-gray-400">

            <li className="hover:text-white transition">
              Matériel Informatique
            </li>

            <li className="hover:text-white transition">
              Fournitures de Bureau
            </li>

            <li className="hover:text-white transition">
              Maintenance Informatique
            </li>

            <li className="hover:text-white transition">
              Installation de matériel informatique
            </li>

            <li className="hover:text-white transition">
              Impression & Photocopie
            </li>

          </ul>

        </div>

        {/* CONTACT */}
        <div>

          <h4 className="text-xl font-semibold mb-6">
            Contact
          </h4>

          <ul className="space-y-4 text-gray-400">

            <li className="flex items-center gap-3">
              <Phone size={18} />
              +241 (0) 66 48 84 55
            </li>

            <li className="flex items-center gap-3">
              <Mail size={18} />
              sbi2023akebeville@gmail.com
            </li>

            <li className="flex items-center gap-3">
              <MapPin size={18} />
              B.P. 7511 Libreville, Gabon
            </li>

          </ul>

        </div>

      </div>

      {/* BAS DU FOOTER */}
      <div className="border-t border-gray-700">

        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">

          <Link
  to="/services?open=web"
  className="flex items-center gap-2 mb-2 md:mb-0 hover:opacity-80 transition"
>
  <img src={logo} alt="SBI Logo" className="h-6" />
  <span>
    Réalisé par <span className="text-white font-semibold">SBI</span>
  </span>
</Link>

          <p>
            © {new Date().getFullYear()} Solution Bureautique Informatique — Tous droits réservés
          </p>

        </div>

      </div>

    </footer>
  )
}

export default Footer