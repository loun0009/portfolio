import React from 'react'

function Contact() {
  return (
    <section id="contact" className="max-w-5xl mx-auto px-4 py-16 text-center">
      <h2 className="text-2xl font-bold mb-6">Contact</h2>
      <p className="mb-4">Tu veux collaborer ou discuter ? Envoie-moi un message 👇</p>
      <a href="mailto:tonemail@example.com" className="inline-block px-5 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
        Me contacter
      </a>
    </section>
  )
}

export default Contact
