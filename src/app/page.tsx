"use client";

import { GrLinkedin, GrGithub } from "react-icons/gr";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  const [isSticky, setIsSticky] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setDarkMode(localStorage.getItem("darkMode") === "true");
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      localStorage.setItem("darkMode", darkMode);
    }
  }, [darkMode, mounted]);

  useEffect(() => {
    const handleScroll = () => {
      const navbarHeight = document.querySelector("nav").offsetHeight;
      const scrollPosition = window.scrollY;
      setIsSticky(scrollPosition >= navbarHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToAbout = () => {
    document.getElementById("about").scrollIntoView({ behavior: "smooth" });
  };

  if (!mounted) {
    return null;
  }
  return (
    <>
      <div
        className={`${
          darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-800"
        } px-6 sm:px-10 lg:px-20 min-h-screen`}
      >
        {/* Navigation Menu */}
        <nav
          className={`py-6 flex justify-between items-center w-full px-6 sm:px-10 lg:px-20 ${
            isSticky
              ? `${
                  darkMode ? "bg-gray-800 shadow-lg" : "bg-white shadow-md"
                } fixed top-0 left-0 w-full z-50`
              : "absolute top-0 left-1/2 transform -translate-x-1/2 w-full"
          }`}
        >
          <h1 className="font-Inter text-xl">Emmanuel Santos III</h1>
          <ul className="flex space-x-6 items-center mx-auto">
            <li>
              <a href="#resume" className="font-sourceCode">
                Resume
              </a>
            </li>
            <li>
              <a href="#services" className="font-sourceCode">
                Services
              </a>
            </li>
            <li>
              <a href="#skills" className="font-sourceCode">
                Skills
              </a>
            </li>
            <li>
              <a href="#projects" className="font-sourceCode">
                Projects
              </a>
            </li>
          </ul>
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition"
            >
              {darkMode ? "Light Mode" : "Dark Mode"}
            </button>
            <a
              href="#contact"
              className="bg-blue-700 text-white font-sourceCode px-4 py-2 rounded-lg hover:bg-blue-800 transition duration-300"
            >
              Contact Me
            </a>
          </div>
        </nav>

        {/* Hero Section */}
        <main>
          <section className="min-h-screen pt-20">
            <div className="text-center p-10">
              <h2 className="font-poppins text-5xl py-2 font-medium pt-20">
                Emmanuel B. Santos III
              </h2>
              <h3 className="font-sourceCode py-2 text-2xl">Web Developer</h3>
              <p className="font-sourceCode text-lg py-5 leading-8max-w-3xl mx-auto">
                Crafting bold web solutions that captivate, deliver, and inspire
                seamless experiences.
              </p>
              {/* Links Icons */}
              <div className="text-5xl flex justify-center gap-8 py-3 text-gray-600">
                <a href="#" className="hover:text-blue-600 transition">
                  <GrLinkedin />
                </a>
                <a href="#" className="hover:text-gray-900 transition">
                  <GrGithub />
                </a>
              </div>
            </div>

            {/* Profile Picture */}
            <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-1 overflow-hidden pb-20">
  <Image 
    src="/assets/emman.jpg" 
    layout="fill" 
    alt="Profile Picture" 
    objectFit="cover" 
    objectPosition="top" 
    className="scale-10"
  />
</div>

            <button 
  onClick={scrollToAbout} 
  className="mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-full shadow-md hover:bg-blue-700 transition flex items-center gap-2 text-center block mx-auto pt-50"
>
  Learn More 
  <span className="bg-white text-blue-600 px-3 py-1 rounded-full">→</span>
</button>

          </section>
        </main>

        {/* About Me Section */}
        <main
          id="about"
          className="flex flex-col items-center justify-center min-h-screen px-8 py-20"
        >
          <h1 className="font-poppins text-4xl font-bold pb-12 text-center">
            About Me
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full max-w-6xl">
            {/* About Me Text */}
            <div className="space-y-6 text-lg leading-relaxed font-sourceCode">
              <p>
                {`Hello! I'm <span className="font-bold bg-blue-800 text-white p-1 rounded">Emmanuel Santos III</span>, a passionate web developer dedicated to crafting user-friendly, modern web applications. With expertise in both front-end and back-end development, I enjoy turning creative ideas into functional and visually appealing digital experiences. My goal is to build solutions that are <span className="font-bold bg-blue-800 text-white p-1 rounded">efficient, responsive, and accessible</span> to all users.`}
              </p>
              <p>
                {`When I'm not coding, I love <span className="font-bold bg-blue-800 text-white p-1 rounded">exploring new technologies, contributing to open-source projects</span>, and continuously improving my skills. I'm always open to exciting opportunities and collaborations, so feel free to connect with me!`}
              </p>
            </div>
            {/* Gallery */}
            <div className="grid grid-cols-2 gap-6">
              <div className="overflow-hidden rounded-xl shadow-lg">
                <Image
                  src="/assets/certificate1.png"
                  width={300}
                  height={200}
                  alt="Certificate 1"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="overflow-hidden rounded-xl shadow-lg">
                <Image
                  src="/assets/certificate2.png"
                  width={300}
                  height={200}
                  alt="Certificate 2"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="overflow-hidden rounded-xl shadow-lg">
                <Image
                  src="/assets/certificate3.png"
                  width={300}
                  height={200}
                  alt="Certificate 3"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="overflow-hidden rounded-xl shadow-lg">
                <Image
                  src="/assets/certificate4.png"
                  width={300}
                  height={200}
                  alt="Certificate 4"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </main>

        {/* Services Section */}
        <main
          id="services"
          className="flex flex-col items-center justify-center min-h-screen px-6 py-10"
        >
          <h1 className="font-poppins text-4xl font-bold pb-10 text-center">
            Services
          </h1>

          <div className="flex flex-wrap justify-center gap-10 w-full max-w-6xl">
            {/* Service Card */}
            {[
              {
                title: "Front-End Development",
                icon: "🎨",
                services: ["UI/UX Implementation", "Performance Optimization"],
              },
              {
                title: "Website Development",
                icon: "🌐",
                services: [
                  "Custom Website Design & Development",
                  "Responsive Web Design",
                  "Single Page Application (SPA)",
                  "Troubleshooting & Bug Fixing",
                  "Portfolio Websites",
                  "Landing Pages",
                  "Web Consultation",
                ],
              }, 
              {
                title: "Back-End Development",
                icon: "🖥️",
                services: ["Database Integration", "API Development"],
              },
              
            ].map((service, index) => (
              <div
                key={index}
                className="relative group overflow-hidden text-center shadow-lg p-8 rounded-xl bg-white w-full sm:w-[80%] md:w-[45%] lg:w-[30%] hover:scale-105 transition-transform duration-300"
              >
                {/* Icon */}
                <div className="text-5xl mb-4">{service.icon}</div>

                {/* Title */}
                <h6 className="font-poppins text-xl font-semibold text-gray-800">
                  {service.title}
                </h6>

                {/* Underline Effect */}
                <div className="h-1 w-10 bg-blue-500 mx-auto my-2 transition-all group-hover:w-20"></div>

                {/* Services List */}
                <ul className="font-sourceCode text-gray-700 text-base mt-4 text-left">
                  {service.services.map((item, i) => (
                    <li key={i} className="py-1 flex items-center gap-2">
                      <span className="text-blue-500">✔</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </main>

        <main
          id="skills"
          className="flex flex-col items-center justify-center min-h-screen px-6 py-10"
        >
          <h6 className="font-poppins text-4xl font-bold pb-8 text-center">
            Skills
          </h6>

          <div className="flex flex-wrap justify-center gap-8 w-full max-w-5xl">
            {/* Skill Item */}
            {[
              { name: "HTML", level: "90%", logo: "/assets/html.png" },
              { name: "CSS", level: "85%", logo: "/assets/css-3.png" },
              {
                name: "Bootstrap",
                level: "80%",
                logo: "/assets/bootstrap.png",
              },
              { name: "JavaScript", level: "75%", logo: "/assets/js.png" },
              { name: "PHP", level: "80%", logo: "/assets/php.png" },
              { name: "MySQL", level: "85%", logo: "/assets/mysql.png" },
              { name: "Git", level: "80%", logo: "/assets/git.png" },
              { name: "VSCode", level: "85%", logo: "/assets/vscode.png" },
              { name: "Python", level: "75%", logo: "/assets/python.png" },
              { name: "GitHub", level: "70%", logo: "/assets/Github.png" },
              { name: "Swift", level: "60%", logo: "/assets/swift.png" },
              { name: "Django", level: "65%", logo: "/assets/Django.png" },
            ].map((skill, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-6 rounded-xl shadow-lg bg-white w-full sm:w-[80%] md:w-[45%] lg:w-[30%]"
              >
                {/* Logo */}
                <div className="w-16 h-16">
                  <Image
                    src={skill.logo}
                    alt={`${skill.name} logo`}
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Text & Progress Bar */}
                <div className="w-full">
                  <div className="flex justify-between font-sourceCode font-semibold text-lg text-gray-800">
                    <span>{skill.name}</span>
                    <span>{skill.level}</span>
                  </div>
                  <div className="w-full bg-gray-300 rounded-full h-3 mt-2">
                    <div
                      className="bg-blue-600 h-3 rounded-full transition-all duration-500"
                      style={{ width: skill.level }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>

        {/* Projects Section */}
        <main
          id="projects"
          className="flex flex-col items-center justify-center min-h-screen px-6 py-10"
        >
          <h1 className="font-poppins text-4xl font-bold pb-10 text-center">
            Projects
          </h1>

          <div className="grid gap-8 w-full max-w-screen-xl grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {/* Project Card */}
            {[
              {
                title: "Portfolio Website",
                image: "https://via.placeholder.com/600x400",
                description:
                  "A personal portfolio website showcasing my skills and projects.",
                tags: ["HTML", "CSS", "JavaScript"],
                link: "#",
              },
              {
                title: "E-Commerce Store",
                image: "https://via.placeholder.com/600x400",
                description:
                  "An online store with payment integration and admin panel.",
                tags: ["Laravel", "Bootstrap", "MySQL"],
                link: "#",
              },
              {
                title: "Task Manager App",
                image: "https://via.placeholder.com/600x400",
                description:
                  "A web app to manage daily tasks with authentication.",
                tags: ["React", "Firebase", "Tailwind"],
                link: "#",
              },
            ].map((project, index) => (
              <div
                key={index}
                className="relative group overflow-hidden rounded-xl shadow-lg bg-white"
              >
                {/* Image */}
                <Image
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
                />

                {/* Project Info */}
                <div className="p-6">
                  <h3 className="font-poppins text-xl font-semibold text-gray-800">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm mt-2">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-3">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="bg-blue-100 text-blue-600 text-xs px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* View Project Button */}
                  <a
                    href={project.link}
                    target="_blank"
                    className="inline-block mt-4 px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition"
                  >
                    View Project
                  </a>
                </div>
              </div>
            ))}
          </div>
        </main>

        {/* Contact Me Section */}
        <main id="contact" className="flex flex-col items-center justify-center min-h-screen px-6 py-10">
          {/* Introduction */}
          <section className="text-center mb-10">
            <h6 className="font-poppins text-3xl font-semibold">
              {"Let's Build Something Great Together - Contact Me"}
            </h6>
            <p className="font-sourceCode mt-4 max-w-2xl mx-auto">
              {"I'd love to hear from you! Whether you have a project in mind, need a web solution, or just want to say hi, feel free to drop me a message."}
            </p>
          </section>

          {/* Contact Form and Location Section */}
          <section className="w-full max-w-screen-lg grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Location Information */}
            <div className="space-y-6 px-6">
              <h6 className="font-poppins text-xl font-semibold  mb-4">
                Location
              </h6>
              <p className="font-sourceCode py-1">Leyte, Philippines</p>
              <p className="font-sourceCode py-1 max-w-md">
                {`I'm always excited to work on new projects and turn ideas
                into reality. Whether you’re looking to build a website from
                scratch, improve your existing platform, or collaborate on
                something unique, let’s make it happen. Drop me a message, and
                I’ll get back to you as soon as possible!`}
              </p>
            </div>

            {/* Contact Form */}
            <div className="space-y-6 px-6">
              <h6 className="font-poppins text-xl font-semibold ">
                Contact Form
              </h6>
              <form action="" className="space-y-6">
                <div>
                  <input
                    type="text"
                    name="Name"
                    placeholder="Your Name"
                    className="w-full p-4 border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="Email"
                    placeholder="Your Email"
                    className="w-full p-4 border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="Subject"
                    placeholder="Subject"
                    className="w-full p-4 border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    placeholder="Write your message here..."
                    className="w-full p-4 border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  ></textarea>
                </div>
                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </section>
        </main>

        <footer className="text-center py-6 mt-12 border-t ${darkMode ? 'border-gray-700 text-white' : 'border-gray-300 text-gray-800'}">
          <p className="font-sourceCode">
            &copy; {new Date().getFullYear()} Emmanuel Santos III. All Rights
            Reserved.
          </p>
          <div className="flex justify-center space-x-4 mt-2">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GrLinkedin
                size={24}
                className="hover:text-blue-600 transition"
              />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GrGithub size={24} className="hover:text-gray-600 transition" />
            </a>
          </div>
        </footer>
      </div>
    </>
  );
}
