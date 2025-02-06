"use client";

import Navbar from "../components/Navbar";
import { FaGithub, FaLinkedin, FaCode, FaLaptopCode, FaUserFriends } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si"
import { HiOutlineMail } from "react-icons/hi"
import Image from "next/image";
import { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { ChevronLeft, ChevronRight } from "lucide-react";
// import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

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
      localStorage.setItem("darkMode", JSON.stringify(darkMode));
    }
  }, [darkMode, mounted]);

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector("nav");
      if (!navbar) return;

      const navbarHeight = navbar.offsetHeight;
      const scrollPosition = window.scrollY;
      setIsSticky(scrollPosition >= navbarHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
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
        <Navbar
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          isSticky={isSticky}
        />

        {/* Hero Section */}
        <main id="hero">
  <section className="min-h-screen pt-5 flex flex-col items-center text-center">
    <div className="p-10">
      <h2 className="font-poppins text-5xl py-2 font-medium pt-20 dark:text-white">
        Emmanuel B. Santos III
      </h2>
      <h3 className="font-sourceCode py-2 text-2xl dark:text-gray-300">
        Web Developer
      </h3>
      <p className="font-sourceCode text-lg py-5 leading-8 max-w-3xl mx-auto dark:text-gray-400">
        Crafting bold web solutions that captivate, deliver, and inspire seamless experiences.
      </p>

      {/* Social Links */}
      <div className="text-4xl flex justify-center gap-6 py-3 text-gray-600 dark:text-gray-300">
        <a
          href="https://www.linkedin.com/in/YOUR_LINKEDIN"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-600 transition"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/YOUR_GITHUB"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-900 dark:hover:text-white transition"
        >
          <FaGithub />
        </a>
        <a
          href="https://leetcode.com/YOUR_LEETCODE"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-orange-500 transition"
        >
          <FaCode />
        </a>
      </div>
    </div>

    {/* Profile Picture */}
    <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-6 overflow-hidden shadow-lg">
      <Image
        src="/assets/emman.jpg"
        layout="fill"
        alt="Profile Picture"
        objectFit="cover"
        objectPosition="top"
      />
    </div>

    {/* Learn More Button */}
    <button
      onClick={scrollToAbout}
      className="mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-full shadow-md hover:bg-blue-700 transition flex items-center gap-2 text-center block mx-auto"
    >
      Learn More
      <span className="bg-white text-blue-600 px-3 py-1 rounded-full">
        →
      </span>
    </button>
  </section>
</main>

        {/* About Me Section */}
        <main
  id="about"
  className="flex flex-col items-center justify-center min-h-screen px-8 py-20"
>
  <h1 className="font-poppins text-4xl font-bold pb-12 text-center dark:text-white">
    About Me
  </h1>

  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full max-w-6xl">
    {/* About Me Text */}
    <div className="space-y-6 text-lg leading-relaxed font-sourceCode dark:text-gray-300">
      <p>
        {`Hello! I'm `}
        <span className="font-bold bg-blue-800 text-white px-2 py-1 rounded">
          Emmanuel Santos III
        </span>
        {`, a passionate web developer dedicated to crafting modern, user-friendly web applications. With expertise in both front-end and back-end development, I love transforming ideas into interactive digital experiences.`}
      </p>
      <p>
        {`I focus on building solutions that are `}
        <span className="font-bold bg-blue-800 text-white px-2 py-1 rounded">
          efficient, responsive, and accessible
        </span>
        {` to all users.`}
      </p>
      <p>
        {`Beyond coding, I enjoy `}
        <span className="font-bold bg-blue-800 text-white px-2 py-1 rounded">
          exploring new technologies, contributing to open-source projects
        </span>
        {`, and collaborating with other developers. If you’re looking for someone to bring your vision to life, let's connect!`}
      </p>

      {/* Quick Skills Overview */}
      <div className="flex gap-6 text-blue-700 dark:text-blue-400 text-2xl pt-4">
        <div className="flex flex-col items-center">
          <FaCode />
          <span className="text-sm text-gray-700 dark:text-gray-400">Full-Stack</span>
        </div>
        <div className="flex flex-col items-center">
          <FaLaptopCode />
          <span className="text-sm text-gray-700 dark:text-gray-400">Web Dev</span>
        </div>
        <div className="flex flex-col items-center">
          <FaUserFriends />
          <span className="text-sm text-gray-700 dark:text-gray-400">Collaboration</span>
        </div>
      </div>
    </div>

    {/* Animated Gallery */}
    <div className="grid grid-cols-2 gap-6">
      {["certificate1", "certificate2", "certificate3", "certificate4"].map(
        (cert, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-xl shadow-lg transform transition duration-300 hover:scale-105"
          >
            <Image
              src={`/assets/${cert}.png`}
              width={300}
              height={200}
              alt={`Certificate ${index + 1}`}
              className="w-full h-auto object-cover"
            />
          </div>
        )
      )}
    </div>
  </div>
</main>

        {/* Experiences Section */}
        <main
          id="experience"
          className="flex flex-col items-center justify-center min-h-screen px-6 py-10"
        >
          <h1 className="font-poppins text-4xl font-bold pb-10 text-center">
            Experience
          </h1>

          <div className="relative w-full max-w-6xl">
            {/* Vertical Line */}
            <div className="absolute left-1/2 w-1 h-full bg-gray-300 transform -translate-x-1/2"></div>

            {/* Experience Items */}
            {[
              {
                role: "Web Developer",
                company: "Saguaro International Inc.",
                duration: "2023 - Present",
                description:
                  "Work on Front-end, Simple Automation and Mobile Development (Swift)",
                skills: [
                  "HTML",
                  "CSS",
                  "JavaScript",
                  "PHP",
                  "Bootstrap",
                  "MySQL",
                  "Jquery"
                ],
              },
              {
                role: "IT Associate",
                company: "Aktus Global Management Inc.",
                duration: "2017-2018",
                description:
                  "Full Stack Web development and maintain companies applications",
                skills: ["Bootstrap", "HTML", "CSS", "PHP(DAO, MVC)", "Javascript", "Jquery"],
              },
            ].map((exp, index) => (
              <div
                key={index}
                className={`relative flex items-center w-full mb-10 ${
                  index % 2 === 0 ? "justify-start" : "justify-end"
                }`}
              >
                {/* Timeline Circle */}
                <div className="absolute left-1/2 w-6 h-6 bg-blue-500 border-4 border-white rounded-full transform -translate-x-1/2"></div>

                {/* Experience Card */}
                <div
                  className={`w-5/12 p-6 bg-white shadow-lg rounded-lg ${
                    index % 2 === 0 ? "ml-auto" : "mr-auto"
                  }`}
                >
                  <h3 className="text-xl font-semibold text-gray-800">
                    {exp.role}
                  </h3>
                  <p className="text-gray-600">{exp.company}</p>
                  <p className="text-gray-500 italic">{exp.duration}</p>
                  <p className="mt-3 text-gray-700">{exp.description}</p>
                  {/* Skills Used */}
                  <div className="mt-3 flex flex-wrap gap-2">
                    {exp.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="bg-blue-100 text-blue-600 text-xs px-3 py-1 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
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
            {[
              {
                title: "Front-End Development",
                icon: "/assets/front-end.png", // Replace with actual image path
                services: ["UI/UX Implementation", "Performance Optimization"],
              },
              {
                title: "Website Development",
                icon: "/assets/app-development.png", // Replace with actual image path
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
                icon: "/assets/back-end.png", // Replace with actual image path
                services: ["Database Integration", "API Development"],
              },
            ].map((service, index) => (
              <div
                key={index}
                className="relative group overflow-hidden text-center shadow-lg p-8 rounded-xl bg-white w-full sm:w-[80%] md:w-[45%] lg:w-[30%] hover:scale-105 transition-transform duration-300"
              >
                {/* Icon as Image */}
                <div className="mb-4 flex justify-center">
                  <Image
                    src={service.icon}
                    alt={service.title}
                    width={80} // Adjust the size as needed
                    height={80}
                    className="object-contain"
                  />
                </div>

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
              { name: "HTML", level: "80%", logo: "/assets/html.png" },
              { name: "CSS", level: "50%", logo: "/assets/css-3.png" },
              {
                name: "Bootstrap",
                level: "50%",
                logo: "/assets/bootstrap.png",
              },
              { name: "JavaScript", level: "25%", logo: "/assets/js.png" },
              { name: "PHP", level: "40%", logo: "/assets/php.png" },
              { name: "MySQL", level: "40%", logo: "/assets/mysql.png" },
              { name: "Git", level: "20%", logo: "/assets/git.png" },
              { name: "VSCode", level: "30%", logo: "/assets/vscode.png" },
              { name: "Python", level: "30%", logo: "/assets/python.png" },
              { name: "GitHub", level: "20%", logo: "/assets/Github.png" },
              { name: "Swift", level: "20%", logo: "/assets/swift.png" },
              { name: "Django", level: "20%", logo: "/assets/Django.png" },
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
                    width="50"
                    height="50"
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
                tags: ["HTML", "CSS", "JavaScript", ""],
                link: "#",
              },
              {
                title: "Medicine Inventory and Patient Information System",
                image: "https://via.placeholder.com/600x400",
                description:
                  "A web-based school clinic management system designed to streamline medicine inventory tracking and patient information management, ensuring efficient healthcare services for students.",
                tags: ["PHP", "Bootstrap", "HTML", "JQuery"],
                link: "#",
              },
              {
                title: "Thinkerville (quizzer)",
                image: "https://via.placeholder.com/600x400",
                description:
                  "A web app to test your knowledge in taking the CSC exam.",
                tags: ["Bootstrap", "JavaScript"],
                link: "#",
              },
              {
                title: "Merbeth - Gym Management System",
                image: "https://via.placeholder.com/600x400",
                description: "Personal Gym Management",
                tags: ["JavaScript", "PHP", "CSS", "HTML"],
                link: "#",
              },
              {
                title: "Solid Waste Management",
                image: "https://via.placeholder.com/600x400",
                description:
                  "A web app to manage daily tasks with authentication.",
                tags: ["CodeIgniter", "PHP", "JQuery", "CSS"],
                link: "#",
              },
              {
                title: "Centralized Data Repository System",
                image: "https://via.placeholder.com/600x400",
                description:
                  "A web-based centralized data repository system for university campuses, designed to efficiently store, manage, and access institutional data in a secure and organized manner.",
                tags: ["PHP(OOP, MVC)", "JQuery", "Bootstrap"],
                link: "#",
              },
            ].map((project, index) => (
              <div
                key={index}
                className="relative group overflow-hidden rounded-xl shadow-lg bg-white flex flex-col"
              >
                {/* Image */}
                <Image
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
                  width="50"
                  height="50"
                />

                {/* Project Info */}
                <div className="p-6 flex flex-col flex-grow justify-between">
                  <div>
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
                  </div>

                  {/* View Project Button (Pinned to Bottom) */}
                  <a
                    href={project.link}
                    target="_blank"
                    className="inline-block mt-4 px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition self-start"
                  >
                    View Project
                  </a>
                </div>
              </div>
            ))}
          </div>
        </main>

        {/* Contact Me Section */}
        <main
          id="contact"
          className="flex flex-col items-center justify-center min-h-screen px-6 py-10"
        >
          {/* Introduction */}
          <section className="text-center mb-10">
            <h6 className="font-poppins text-3xl font-semibold">
              {"Let's Build Something Great Together - Contact Me"}
            </h6>
            <p className="font-sourceCode mt-4 max-w-2xl mx-auto">
              {
                "I'd love to hear from you! Whether you have a project in mind, need a web solution, or just want to say hi, feel free to drop me a message."
              }
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

        <footer
  className={`text-center py-6 mt-12 border-t ${
    darkMode ? "border-gray-700 text-gray-300" : "border-gray-300 text-gray-800"
  }`}
>
  <p className="font-sourceCode">
    &copy; {new Date().getFullYear()} Emmanuel Santos III. All Rights Reserved.
  </p>

  {/* Social Links */}
  <div className="flex justify-center space-x-6 mt-3 text-2xl">
    <a
      href="https://linkedin.com/in/yourprofile"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-blue-600 transition"
      aria-label="LinkedIn"
    >
      <FaLinkedin />
    </a>
    <a
      href="https://github.com/yourgithub"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-gray-600 transition"
      aria-label="GitHub"
    >
      <FaGithub />
    </a>
    <a
      href="https://leetcode.com/yourleetcode"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-orange-500 transition"
      aria-label="LeetCode"
    >
      <SiLeetcode />
    </a>
    <a
      href="mailto:your-email@example.com"
      className="hover:text-red-600 transition"
      aria-label="Email"
    >
      <HiOutlineMail />
    </a>
  </div>
</footer>

      </div>
    </>
  );
}
