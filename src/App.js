import React from 'react';
import './App.css';
import {
  FaReact,
  FaVuejs,
  FaNodeJs,
  FaLaravel,
  FaJava,
  FaGithub,
  FaEnvelope,
  FaPhoneAlt
} from 'react-icons/fa';
import { SiPhp, SiJavascript, SiMysql } from 'react-icons/si';

// Lista de tecnologías
const technologies = [
  { name: 'React', color: 'bg-blue-100', icon: <FaReact className="text-blue-500 text-2xl" /> },
  { name: 'Vue', color: 'bg-green-100', icon: <FaVuejs className="text-green-500 text-2xl" /> },
  { name: 'JavaScript', color: 'bg-yellow-100', icon: <SiJavascript className="text-yellow-500 text-2xl" /> },
  { name: 'Node.js', color: 'bg-green-200', icon: <FaNodeJs className="text-green-700 text-2xl" /> },
  { name: 'PHP', color: 'bg-purple-100', icon: <SiPhp className="text-purple-500 text-2xl" /> },
  { name: 'Laravel', color: 'bg-red-100', icon: <FaLaravel className="text-red-500 text-2xl" /> },
  { name: 'MySQL', color: 'bg-teal-100', icon: <SiMysql className="text-teal-500 text-2xl" /> },
  { name: 'Java', color: 'bg-orange-100', icon: <FaJava className="text-orange-500 text-2xl" /> },
];

function App() {
  return (
    <div className="font-sans bg-gray-50 text-gray-900">
      {/* Portada */}
      <section className="h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Hola, soy Marc Gómez Gálvez</h1>
          <p className="text-lg mb-6">Desarrollador Junior de Aplicaciones Web</p>
          <a href="#about" className="px-6 py-2 bg-white text-gray-900 font-semibold rounded-lg shadow-md transition transform hover:scale-105 hover:bg-gray-200">
            Conóceme
          </a>
        </div>
      </section>

      {/* Sobre mí */}
      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Sobre mí</h2>
          <p className="text-lg text-gray-600 mb-4">
            Soy un desarrollador Junior con experiencia en el diseño de Aplicaciones de forma minimalista e intuitivas.
            Me encanta crear aplicaciones web dinámicas y funcionales. Estoy siempre aprendiendo y buscando mejorar mis habilidades. 
          </p>
          <h3 className="text-2xl font-semibold mb-6">Tecnologías que domino</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {technologies.map(({ name, color, icon }) => (
              <div
                key={name}
                className={`${color} rounded-lg p-4 shadow hover:shadow-md transition flex flex-col items-center justify-center gap-2`}
              >
                {icon}
                <p className="text-gray-800 font-semibold">{name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proyectos */}
      <section id="projects" className="py-16 bg-gray-100">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Proyectos Destacados</h2>
          <div className="flex justify-center">
          <div className="flex justify-center">
            <a
              href="https://cv-puce-six-93.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 max-w-md w-full block text-left hover:cursor-pointer"
            >
              <h3 className="text-xl font-semibold mb-2 text-gray-800">CVMaker Online</h3>
              <p className="text-gray-700">
                Creador de CV con diversos temas, templates y gráficos. Adaptado para también mostrar ofertas de trabajo y estadísticas sobre estas.
              </p>
            </a>
          </div>
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section id="contact" className="py-16 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Contacto</h2>
          <p className="text-lg text-gray-600 mb-4">Puedes encontrarme en las siguientes plataformas:</p>
          <ul className="text-lg text-gray-600 list-none space-y-4 flex flex-col items-center">
            <li className="flex items-center gap-2">
              <FaGithub className="text-xl" />
              <a href="https://github.com/Marcgmz" className="hover:text-blue-500"><strong>GitHub</strong></a>
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-xl" />
              <a href="mailto:marcgomezgalvez@gmail.com" className="hover:text-blue-500"><strong>marcgomezgalvez@gmail.com</strong></a>
            </li>
            <li className="flex items-center gap-2">
              <FaPhoneAlt className="text-xl" />
              <a href="tel:+34 605 87 04 41" className="hover:text-blue-500"><strong>605 87 04 41</strong></a>
            </li>
          </ul>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4 text-center">
        <p><strong>&copy; 2025 Marc Gómez Gálvez. Todos los derechos reservados.</strong></p>
      </footer>
    </div>
  );
}

export default App;
