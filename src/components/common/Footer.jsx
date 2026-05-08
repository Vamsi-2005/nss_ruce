import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { MdLocationOn, MdPhone, MdEmail } from "react-icons/md";

import logo from "../../assets/images/logo.png";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-black text-white pt-14 pb-6"
    >

      <div className="w-[96%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* LOGO + TEXT */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img src={logo} alt="NSS Logo" className="w-10 h-10 object-contain" />
            <h2 className="text-lg font-semibold">NSS Unit</h2>
          </div>

          <p className="text-gray-400 text-sm leading-relaxed">
            National Service Scheme is a public service program conducted by the Ministry of Youth Affairs and Sports, Government of India. We aim to develop student personality through community service.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>

          <ul className="space-y-3 text-sm">

            {[
              { name: "Home", path: "/" },
              { name: "About", path: "/about" },
              { name: "Events", path: "/events" },
              { name: "Gallery", path: "/gallery" },
              { name: "Blood Finder", path: "/blood" },
              { name: "Contact", path: "/contact" },
              { name: "Register", path: "/register" },
            ].map((link, i) => (
              <li key={i}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `transition ${
                      isActive
                        ? "text-white font-semibold underline"
                        : "text-gray-400 hover:text-white"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}

          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>

          <ul className="space-y-4 text-gray-400 text-sm">

            <li className="flex items-start gap-3">
              <MdLocationOn className="text-lg mt-1" />
              <span>
                NSS Unit, Engineering College Campus, University Road, City - 560001
              </span>
            </li>

            <li className="flex items-center gap-3">
              <MdPhone />
              <span>+91 98765 43210</span>
            </li>

            <li className="flex items-center gap-3">
              <MdEmail />
              <span>nssru@ruce.ac.in</span>
            </li>

          </ul>
        </div>

        {/* SOCIAL */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>

          <div className="flex gap-4 mb-4">

            <a href="https://facebook.com" target="_blank" rel="noreferrer"
              className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition">
              <FaFacebookF />
            </a>

            <a href="https://instagram.com" target="_blank" rel="noreferrer"
              className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-pink-500 transition">
              <FaInstagram />
            </a>

            <a href="https://linkedin.com" target="_blank" rel="noreferrer"
              className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-500 transition">
              <FaLinkedinIn />
            </a>

            <a href="https://youtube.com" target="_blank" rel="noreferrer"
              className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-red-500 transition">
              <FaYoutube />
            </a>

          </div>

          <p className="text-gray-400 text-sm">
            Join us in making a difference in society through community service.
          </p>
        </div>

      </div>

      {/* COPYRIGHT */}
      <div className="border-t border-gray-800 mt-10 pt-4 text-center text-gray-500 text-sm w-[96%] mx-auto">
        © 2026 NSS Unit. All rights reserved.
      </div>

    </motion.footer>
  );
};

export default Footer;