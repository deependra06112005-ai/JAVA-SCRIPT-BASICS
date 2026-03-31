export default function Home() {
  return (
    <main className="bg-black text-white scroll-smooth">

      {/* HERO */}
      <section className="h-screen flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
          Hi, I'm Deependra 👋
        </h1>
        <p className="mt-4 text-gray-400 text-lg">
          Aspiring Full Stack Developer
        </p>

        <div className="flex gap-6 mt-6 text-gray-300">
          <a href="#projects" className="hover:text-white">Projects</a>
          <a href="#about" className="hover:text-white">About</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-20 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">About Me</h2>
        <p className="text-gray-400 leading-7">
          I'm Deependra, a passionate developer who builds modern web apps.
          I have already created full stack projects and deployed them.
          Now I am focusing on improving UI/UX and exploring better domains.
        </p>
      </section>

      {/* SKILLS */}
      <section className="py-20 px-6 bg-gradient-to-b from-black to-gray-900">
        <h2 className="text-3xl font-bold text-center mb-10">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Next.js",
            "Node.js",
            "MongoDB",
            "Git",
          ].map((skill) => (
            <div key={skill} className="p-4 bg-black/40 backdrop-blur rounded-2xl border border-gray-800 hover:scale-105 transition">
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-20 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center">Projects</h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-6 bg-gray-900/50 backdrop-blur rounded-2xl border border-gray-800 hover:scale-105 transition">
            <h3 className="text-xl font-semibold">Full Stack App</h3>
            <p className="text-gray-400 mt-2">
              A complete web app built using modern technologies and deployed online.
            </p>
          </div>

          <div className="p-6 bg-gray-900/50 backdrop-blur rounded-2xl border border-gray-800 hover:scale-105 transition">
            <h3 className="text-xl font-semibold">Portfolio Website</h3>
            <p className="text-gray-400 mt-2">
              Personal portfolio website to showcase my work and skills.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20 px-6 text-center bg-black">
        <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
        <p className="text-gray-400">youremail@gmail.com</p>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-6 text-gray-500 border-t border-gray-800">
        © 2026 Deependra. All rights reserved.
      </footer>

    </main>
  );
}
