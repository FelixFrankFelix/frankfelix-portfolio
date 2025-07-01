"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Mail,
  Phone,
  Github,
  Linkedin,
  Twitter,
  ExternalLink,
  Calendar,
  Users,
  Brain,
  Cloud,
  Database,
  Zap,
  Target,
  BookOpen,
  MessageSquare,
  ChevronDown,
  Menu,
  X,
} from "lucide-react"
import emailjs from "@emailjs/browser"

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "hero",
        "about",
        "experience",
        "skills",
        "services",
        "portfolio",
        "certifications",
        "community",
        "contact",
      ]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      await emailjs.send(
        "service_wy4fkp5", // Service ID
        "template_rucejmw", // Template ID
        formData,
        "OQP4nVSADdPYo5QWN", // Public Key
      )

      setSubmitStatus("success")
      setFormData({
        user_name: "",
        user_email: "",
        subject: "",
        message: "",
      })
    } catch (error) {
      console.error("EmailJS error:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  const navItems = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "skills", label: "Skills" },
    { id: "services", label: "Services" },
    { id: "portfolio", label: "Portfolio" },
    { id: "certifications", label: "Certifications" },
    { id: "community", label: "Community" },
    { id: "contact", label: "Contact" },
  ]

  const skills = {
    primary: [
      "Artificial Intelligence (AI)",
      "Machine Learning",
      "Generative AI & LLMs",
      "TensorFlow & PyTorch",
      "Python Programming",
      "Data Science",
      "Feature Engineering",
      "LangChain & LangGraph",
      "Time Series Forecasting",
      "Data Modeling",
      "SQL & BigQuery",
      "Vector Databases",
    ],
    secondary: [
      "Amazon Web Services (AWS)",
      "Microsoft Azure",
      "AWS SageMaker",
      "Azure AI Foundry",
      "Cloud Infrastructure",
      "Solution Architecture",
      "CI/CD Pipelines",
      "MLOps",
      "Containerization",
      "Git & GitHub Actions",
      "System Design",
      "Performance Optimization",
    ],
    supporting: [
      "Technical Writing",
      "Team Leadership",
      "Project Management",
      "Team Building",
      "Tutoring",
      "Linear Algebra",
      "Web Content Writing",
      "Graphic Design",
    ],
  }

  const projects = [
    {
      title: "Quizly - AI Quiz Generator",
      description: "Intelligent quiz generation with dynamic difficulty levels",
      fullDescription:
        "An intelligent quiz generation system that creates context-based multiple-choice questions with dynamic difficulty levels. Leverages AI to generate customized quizzes based on user-provided contexts, suitable for learning and assessment across different knowledge domains. Solves the problem of teaching and evaluation for multiple students with limited teachers.",
      technologies: ["Streamlit", "FastAPI", "AWS Bedrock", "Claude AI", "Pinecone"],
      category: "AI Engineering",
      link: "https://github.com/FelixFrankFelix/Quizly-POC",
    },
    {
      title: "LocalRAG - PDF Chat System",
      description: "Local RAG application for document interaction using Ollama + LangChain",
      fullDescription:
        "A powerful local RAG (Retrieval Augmented Generation) application that lets you chat with your PDF documents using Ollama and LangChain. Perfect for organizations that don't want their data to leave their environment due to regulations. Allows organizations to leverage AI while keeping policy documents secure and enabling users to ask questions locally.",
      technologies: ["Ollama", "LangChain", "Streamlit"],
      category: "AI Engineering",
      link: "https://github.com/FelixFrankFelix/LocalRAG",
    },
    {
      title: "MavunoX",
      description: "Agricultural harvest prediction system using environmental factors",
      fullDescription:
        "A comprehensive machine learning system dedicated to predicting harvest seasons by analyzing environmental factors. Focused on leveraging technology for sustainable agriculture and optimizing crop yield predictions. Uses three models: Main predictor, Soil pH predictor, and Water availability model.",
      technologies: ["Python", "Machine Learning", "Data Science"],
      category: "Data Science",
      link: "https://github.com/FelixFrankFelix/MavunoX_DS",
    },
    {
      title: "NeuroScan AI",
      description: "Brain tumor classification using CNNs and MRI scans",
      fullDescription:
        "A brain tumor classification system using machine learning, particularly Convolutional Neural Networks (CNNs). Aims to improve the accuracy, accessibility, and speed of brain tumor diagnosis, especially in regions with limited medical resources. Classifies brain tumors into four categories: glioma, meningioma, pituitary tumor, and no tumor using MRI scans.",
      technologies: ["TensorFlow", "CNN", "Medical Imaging"],
      category: "AI Research",
      link: "https://github.com/FelixFrankFelix/NeuroScanAI",
    },
    {
      title: "Fraud Detection Model",
      description: "ML-based fraud detection with advanced preprocessing",
      fullDescription:
        "A comprehensive fraud detection model using machine learning techniques, with emphasis on preprocessing, feature engineering, and model evaluation. Developed to create an effective fraud detection system to identify fraudulent activities in financial datasets.",
      technologies: ["Python", "Scikit-learn", "Feature Engineering"],
      category: "Machine Learning",
      link: "https://github.com/FelixFrankFelix/Fraud-Detection-Model--DFA23-Datathon",
    },
    {
      title: "Nigerian Food Recommender",
      description: "Cultural food recommendation system using similarity algorithms",
      fullDescription:
        "A Nigerian food recommendation system that uses similarity algorithms to suggest foods based on user preferences. Built with GPT-3.5 generated data and augmented with prompts. Helps people new to Nigerian food culture get recommendations based on similarity, promoting cultural preservation through technology.",
      technologies: ["Python", "Recommendation Systems", "GPT-3.5"],
      category: "AI Engineering",
      link: "https://github.com/FelixFrankFelix/Nigerian-Food-Recommender",
    },
  ]

  const certifications = {
    aws: [
      {
        name: "AWS Certified Advanced Networking – Specialty",
        badge: "/images/badges/aws-networking-specialty.png",
        link: "https://www.credly.com/badges/3312abf4-c5b3-488b-b507-acdaef803127/public_url",
      },
      {
        name: "AWS Certified AI Practitioner",
        badge: "/images/badges/aws-ai-practitioner.png",
        link: "https://www.credly.com/badges/c291200e-4416-4775-9185-c34ae1d80e85/public_url",
      },
      {
        name: "AWS Certified Machine Learning - Specialty",
        badge: "/images/badges/aws-ml-specialty.png",
        link: "https://www.credly.com/badges/16303e58-31d7-46b5-8d99-4fe324fbb4a7/public_url",
      },
      {
        name: "AWS Certified Solutions Architect - Professional",
        badge: "/images/badges/aws-solutions-architect-pro.png",
        link: "https://www.credly.com/badges/2a35d27d-e847-4f6c-a0b9-f82519515be6",
      },
      {
        name: "AWS Certified Solutions Architect - Associate",
        badge: "/images/badges/aws-solutions-architect-associate.png",
        link: "https://www.credly.com/badges/9da234b9-485c-451d-a8a4-b37d54bb09e4/public_url",
      },
    ],
    microsoft: [
      {
        name: "Microsoft Certified: Azure Data Scientist Associate",
        badge: "/images/badges/azure-data-scientist-zoomed.png",
        link: "https://learn.microsoft.com/api/credentials/share/en-us/FrankFelixAI/BC8B82410DAB9888?sharingId=44FE7BA01528B020",
      },
      {
        name: "Microsoft Certified: Azure Developer Associate",
        badge: "/images/badges/azure-developer.png",
        link: "https://learn.microsoft.com/api/credentials/share/en-us/FrankFelixAI/25997AA278EDEB69?sharingId=studentamb_274181",
      },
      {
        name: "Microsoft Certified: Azure AI Engineer",
        badge: "/images/badges/azure-ai-engineer-zoomed.png",
        link: "#",
      },
      {
        name: "Microsoft Certified: Azure Fabric Data Engineer",
        badge: "/images/badges/azure-fabric-engineer.png",
        link: "#",
      },
    ],
  }

  // Add this new array for the scrolling section
  const allCertifications = [...certifications.aws, ...certifications.microsoft]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold text-blue-400">FrankFelixAI</div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors hover:text-blue-400 ${
                    activeSection === item.id ? "text-blue-400" : "text-gray-300"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Navigation Button */}
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-800">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left py-2 text-sm font-medium transition-colors hover:text-blue-400 ${
                    activeSection === item.id ? "text-blue-400" : "text-gray-300"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-purple-400 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse delay-2000"></div>
          <div className="absolute bottom-1/3 right-1/4 w-1 h-1 bg-yellow-400 rounded-full animate-pulse delay-3000"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="mb-8">
            <img
              src="/images/felix-profile.png"
              alt="Felix Frank-Felix"
              className="w-48 h-48 rounded-full mx-auto mb-6 border-4 border-blue-400/50 object-cover"
            />
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            Felix <span className="text-blue-400">Frank-Felix</span>
          </h1>

          <div className="text-xl md:text-2xl text-gray-300 mb-6">
            <span className="text-blue-400">FrankFelixAI</span>
          </div>

          <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
            AI/ML Engineer | Cloud Solutions Architect | 5x AWS & 4x Azure Certified
          </p>

          <p className="text-base md:text-lg text-gray-500 mb-12 max-w-2xl mx-auto">
            Passionate about solving real-world problems through AI and fostering community knowledge sharing
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700" onClick={() => scrollToSection("portfolio")}>
              View Portfolio
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-gray-600 text-white hover:bg-gray-800 bg-transparent"
              onClick={() => scrollToSection("contact")}
            >
              Get In Touch
            </Button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-gray-400" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-900/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">
            About <span className="text-blue-400">Me</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-blue-400">Professional Journey</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                I'm an accomplished AI/ML Engineer and Data Scientist with a strong foundation in Cloud Solutions
                Architecture. My passion lies in solving complex problems through innovative AI solutions and fostering
                community knowledge sharing.
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                With 5x AWS and 4x Azure certifications, I specialize in designing and implementing scalable AI systems
                that drive real business value. My approach combines cutting-edge technology with practical
                problem-solving to deliver solutions that make a meaningful impact.
              </p>
              <p className="text-gray-300 leading-relaxed">
                As a community leader, I've improved engagement by 160% and regularly host events to share knowledge and
                inspire the next generation of AI practitioners.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-6 text-blue-400 flex items-center gap-2">
                <BookOpen size={24} />
                Education
              </h3>
              <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white">University of Benin</CardTitle>
                  <CardDescription className="text-gray-400">Feb 2019 - Nov 2023</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-2">Bachelor of Science in Computer Science</p>
                  <p className="text-blue-400 font-semibold mb-4">Grade: First Class Honours</p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="bg-gray-700 text-gray-300">
                      Linear Algebra
                    </Badge>
                    <Badge variant="secondary" className="bg-gray-700 text-gray-300">
                      Machine Learning
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-800 border-gray-700 mt-4">
                <CardHeader>
                  <CardTitle className="text-white">Udacity</CardTitle>
                  <CardDescription className="text-gray-400">Specialized Training</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">Machine Learning Specialization</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Scrolling Certifications Banner */}
      <section className="py-12 bg-gradient-to-r from-orange-900/20 via-blue-900/20 to-orange-900/20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-bold text-center mb-8 text-blue-400">Professional Certifications</h3>
          <div className="relative flex justify-center items-center">
            <div className="flex animate-scroll-fast space-x-12 items-center">
              {/* First set of badges */}
              {allCertifications.map((cert, index) => (
                <div key={index} className="flex-shrink-0 flex flex-col items-center space-y-3">
                  <img
                    src={cert.badge || "/placeholder.svg"}
                    alt={cert.name}
                    className={`object-contain transition-all duration-300 ${
                      index % 5 === 2
                        ? "w-32 h-32"
                        : // Center position (biggest)
                          index % 5 === 1 || index % 5 === 3
                          ? "w-28 h-28"
                          : // Left and right of center
                            "w-24 h-24" // Positions 1 and 5 (smallest)
                    }`}
                  />
                  <p className="text-sm text-gray-300 text-center leading-tight max-w-32">{cert.name}</p>
                </div>
              ))}
              {/* Duplicate set for seamless scrolling */}
              {allCertifications.map((cert, index) => (
                <div key={`duplicate-${index}`} className="flex-shrink-0 flex flex-col items-center space-y-3">
                  <img
                    src={cert.badge || "/placeholder.svg"}
                    alt={cert.name}
                    className={`object-contain transition-all duration-300 ${
                      index % 5 === 2
                        ? "w-32 h-32"
                        : // Center position (biggest)
                          index % 5 === 1 || index % 5 === 3
                          ? "w-28 h-28"
                          : // Left and right of center
                            "w-24 h-24" // Positions 1 and 5 (smallest)
                    }`}
                  />
                  <p className="text-sm text-gray-300 text-center leading-tight max-w-32">{cert.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">
            Professional <span className="text-blue-400">Experience</span>
          </h2>

          <div className="relative">
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-blue-400"></div>

            <div className="space-y-12">
              {/* Current Roles */}
              <div className="relative flex items-center">
                <div className="absolute left-2 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-blue-400 rounded-full border-4 border-black"></div>
                <div className="ml-12 md:ml-0 md:w-1/2 md:pr-8">
                  <Card className="bg-gray-800 border-gray-700">
                    <CardHeader>
                      <CardTitle className="text-white">AI Engineer</CardTitle>
                      <CardDescription className="text-blue-400">Rubies • Nov 2024 - Present</CardDescription>
                      <CardDescription className="text-gray-400">Lagos State, Nigeria</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300 mb-3">
                        Building AI-powered solutions for enterprise banking systems.
                      </p>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <Brain size={16} className="text-blue-400" />
                          <span className="text-sm text-gray-300">
                            Building AI-powered solutions for enterprise banking systems
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MessageSquare size={16} className="text-blue-400" />
                          <span className="text-sm text-gray-300">
                            Developing conversational AI interfaces and customer analytics platforms
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div className="relative flex items-center md:justify-end">
                <div className="absolute left-2 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-blue-400 rounded-full border-4 border-black"></div>
                <div className="ml-12 md:ml-0 md:w-1/2 md:pl-8">
                  <Card className="bg-gray-800 border-gray-700">
                    <CardHeader>
                      <CardTitle className="text-white">Machine Learning Engineer</CardTitle>
                      <CardDescription className="text-blue-400">QuCoon Limited • Jan 2024 - Present</CardDescription>
                      <CardDescription className="text-gray-400">Lagos, Nigeria</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300 mb-3">
                        Leading AI solution development and deployment for enterprise clients.
                      </p>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <Brain size={16} className="text-blue-400" />
                          <span className="text-sm text-gray-300">
                            Led AI solution development for 25+ enterprise clients
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Zap size={16} className="text-blue-400" />
                          <span className="text-sm text-gray-300">
                            Implemented CI/CD pipelines reducing deployment time
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Target size={16} className="text-blue-400" />
                          <span className="text-sm text-gray-300">
                            Built RubiesAI with 40% improved response accuracy
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users size={16} className="text-blue-400" />
                          <span className="text-sm text-gray-300">
                            Developed segmentation system for 20M+ customers
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Database size={16} className="text-blue-400" />
                          <span className="text-sm text-gray-300">
                            Architected IoT infrastructure reducing costs by 90%
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Previous Experience */}
              <div className="relative flex items-center">
                <div className="absolute left-2 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-gray-400 rounded-full border-4 border-black"></div>
                <div className="ml-12 md:ml-0 md:w-1/2 md:pr-8">
                  <Card className="bg-gray-800 border-gray-700">
                    <CardHeader>
                      <CardTitle className="text-white">Campus Community Lead</CardTitle>
                      <CardDescription className="text-green-400">
                        DSN - Data Scientists Network • Jun 2022 - Jul 2023
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300 mb-3">
                        Led community initiatives and significantly improved engagement.
                      </p>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <Users size={16} className="text-green-400" />
                          <span className="text-sm text-gray-300">Improved community engagement by 160%</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar size={16} className="text-green-400" />
                          <span className="text-sm text-gray-300">Hosted average of 2 events monthly</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Target size={16} className="text-green-400" />
                          <span className="text-sm text-gray-300">67 participants per event average</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div className="relative flex items-center md:justify-end">
                <div className="absolute left-2 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-gray-400 rounded-full border-4 border-black"></div>
                <div className="ml-12 md:ml-0 md:w-1/2 md:pl-8">
                  <Card className="bg-gray-800 border-gray-700">
                    <CardHeader>
                      <CardTitle className="text-white">IT Support Specialist</CardTitle>
                      <CardDescription className="text-gray-400">
                        Administrative Staff College of Nigeria • Jan 2022 - Jun 2022
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300">
                        Provided technical support and maintained IT infrastructure for the organization.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-900/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">
            Technical <span className="text-blue-400">Skills</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Primary Skills */}
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-blue-400 flex items-center gap-2">
                  <Brain size={24} />
                  AI/ML Skills
                </CardTitle>
                <CardDescription className="text-gray-400">Primary Focus</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {skills.primary.map((skill, index) => (
                    <Badge key={index} variant="secondary" className="bg-blue-900/30 text-blue-300 mr-2 mb-2">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Secondary Skills */}
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-purple-400 flex items-center gap-2">
                  <Cloud size={24} />
                  Cloud & Architecture
                </CardTitle>
                <CardDescription className="text-gray-400">Secondary Focus</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {skills.secondary.map((skill, index) => (
                    <Badge key={index} variant="secondary" className="bg-purple-900/30 text-purple-300 mr-2 mb-2">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Supporting Skills */}
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-green-400 flex items-center gap-2">
                  <Zap size={24} />
                  Supporting Skills
                </CardTitle>
                <CardDescription className="text-gray-400">Additional Expertise</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {skills.supporting.map((skill, index) => (
                    <Badge key={index} variant="secondary" className="bg-green-900/30 text-green-300 mr-2 mb-2">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">
            My <span className="text-blue-400">Services</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-gray-800 border-gray-700 hover:border-blue-400 transition-colors group">
              <CardHeader>
                <Brain className="w-12 h-12 text-blue-400 mb-4 group-hover:scale-110 transition-transform" />
                <CardTitle className="text-white">AI Engineering</CardTitle>
                <CardDescription className="text-gray-400">
                  Custom AI solution development and implementation
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  End-to-end AI solution development, from concept to deployment, tailored to your business needs.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700 hover:border-purple-400 transition-colors group">
              <CardHeader>
                <Database className="w-12 h-12 text-purple-400 mb-4 group-hover:scale-110 transition-transform" />
                <CardTitle className="text-white">Data Science</CardTitle>
                <CardDescription className="text-gray-400">
                  Advanced analytics, predictive modeling, and insights generation
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Transform your data into actionable insights with advanced analytics and machine learning models.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700 hover:border-green-400 transition-colors group">
              <CardHeader>
                <BookOpen className="w-12 h-12 text-green-400 mb-4 group-hover:scale-110 transition-transform" />
                <CardTitle className="text-white">AI Research</CardTitle>
                <CardDescription className="text-gray-400">
                  Cutting-edge research in machine learning and artificial intelligence
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Stay ahead with innovative AI research and experimental implementations of emerging technologies.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700 hover:border-yellow-400 transition-colors group">
              <CardHeader>
                <MessageSquare className="w-12 h-12 text-yellow-400 mb-4 group-hover:scale-110 transition-transform" />
                <CardTitle className="text-white">AI Strategy & Consulting</CardTitle>
                <CardDescription className="text-gray-400">
                  Strategic guidance for AI adoption and implementation
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Expert consultation on AI strategy, technology selection, and implementation roadmaps.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700 hover:border-red-400 transition-colors group lg:col-span-2">
              <CardHeader>
                <Cloud className="w-12 h-12 text-red-400 mb-4 group-hover:scale-110 transition-transform" />
                <CardTitle className="text-white">Cloud Solutions Architecture</CardTitle>
                <CardDescription className="text-gray-400">
                  Design and deployment of scalable cloud infrastructure
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Architect and deploy robust, scalable cloud solutions on AWS and Azure platforms with focus on AI/ML
                  workloads.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-gray-900/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">
            Featured <span className="text-blue-400">Projects</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="bg-gray-800 border-gray-700 hover:border-blue-400 transition-all duration-300 group hover:scale-105"
              >
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="secondary" className="bg-blue-900/30 text-blue-300">
                      {project.category}
                    </Badge>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 group-hover:text-blue-400 transition-colors"
                    >
                      <ExternalLink size={16} />
                    </a>
                  </div>
                  <CardTitle className="text-white group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-gray-400">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="border-gray-600 text-gray-300 text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">
            Professional <span className="text-blue-400">Certifications</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* AWS Certifications */}
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-orange-400">AWS Certifications (5)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 gap-4">
                  {certifications.aws.map((cert, index) => (
                    <a
                      key={index}
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors group"
                    >
                      <img
                        src={cert.badge || "/placeholder.svg"}
                        alt={cert.name}
                        className="w-16 h-16 object-contain group-hover:scale-110 transition-transform"
                        style={{
                          objectFit:
                            cert.name.includes("Azure Data Scientist") || cert.name.includes("Azure AI Engineer")
                              ? "cover"
                              : "contain",
                        }}
                      />
                      <div className="flex-1">
                        <span className="text-gray-300 group-hover:text-orange-400 transition-colors text-sm">
                          {cert.name}
                        </span>
                      </div>
                      <ExternalLink size={16} className="text-gray-400 group-hover:text-orange-400 transition-colors" />
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Microsoft Certifications */}
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-blue-400">Microsoft Certifications (4)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 gap-4">
                  {certifications.microsoft.map((cert, index) => (
                    <a
                      key={index}
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors group"
                    >
                      <img
                        src={cert.badge || "/placeholder.svg"}
                        alt={cert.name}
                        className="w-16 h-16 object-contain group-hover:scale-110 transition-transform"
                        style={{
                          objectFit:
                            cert.name.includes("Azure Data Scientist") || cert.name.includes("Azure AI Engineer")
                              ? "cover"
                              : "contain",
                        }}
                      />
                      <div className="flex-1">
                        <span className="text-gray-300 group-hover:text-blue-400 transition-colors text-sm">
                          {cert.name}
                        </span>
                      </div>
                      <ExternalLink size={16} className="text-gray-400 group-hover:text-blue-400 transition-colors" />
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section id="community" className="py-20 bg-gray-900/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">
            Community & <span className="text-blue-400">Volunteering</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-orange-400">AWS Community Builder</CardTitle>
                <CardDescription className="text-gray-400">January 2025 - Present</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Contributing to the AWS community through knowledge sharing and technical content creation.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-blue-400">Microsoft Learn Student Ambassador</CardTitle>
                <CardDescription className="text-gray-400">Aug 2023 - Sep 2024</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Promoted Microsoft technologies and organized learning events for students.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-green-400">Program Manager - 30 days of Data Science</CardTitle>
                <CardDescription className="text-gray-400">Microsoft • Oct 2022 - Nov 2022</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Led a month-long data science learning program, coordinating activities and mentoring participants.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-purple-400">Media and Publicity Team</CardTitle>
                <CardDescription className="text-gray-400">Data Community Africa • Apr 2023 - Present</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Managing communications and promoting data science initiatives across Africa.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">
            Get In <span className="text-blue-400">Touch</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h3 className="text-2xl font-semibold mb-8 text-blue-400">Let's Connect</h3>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <Mail className="text-blue-400" size={24} />
                  <div>
                    <p className="text-gray-300">Email</p>
                    <a
                      href="mailto:frankfelixai@gmail.com"
                      className="text-white hover:text-blue-400 transition-colors"
                    >
                      frankfelixai@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <Phone className="text-blue-400" size={24} />
                  <div>
                    <p className="text-gray-300">Phone</p>
                    <a href="tel:+2348136704134" className="text-white hover:text-blue-400 transition-colors">
                      +234 813 670 4134
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h4 className="text-lg font-semibold mb-6 text-blue-400">Follow Me</h4>
                <div className="flex gap-4">
                  <a
                    href="https://www.linkedin.com/in/frankfelixai/"
                    className="p-3 bg-gray-800 rounded-lg hover:bg-blue-600 transition-colors"
                  >
                    <Linkedin size={24} />
                  </a>
                  <a
                    href="https://x.com/FrankFelixAI"
                    className="p-3 bg-gray-800 rounded-lg hover:bg-blue-600 transition-colors"
                  >
                    <Twitter size={24} />
                  </a>
                  <a
                    href="https://github.com/FelixFrankFelix"
                    className="p-3 bg-gray-800 rounded-lg hover:bg-blue-600 transition-colors"
                  >
                    <Github size={24} />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Send a Message</CardTitle>
                <CardDescription className="text-gray-400">I'd love to hear from you</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Input
                      name="user_name"
                      value={formData.user_name}
                      onChange={handleInputChange}
                      placeholder="Your Name"
                      className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                      required
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      name="user_email"
                      value={formData.user_email}
                      onChange={handleInputChange}
                      placeholder="Your Email"
                      className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                      required
                    />
                  </div>
                  <div>
                    <Input
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="Subject"
                      className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                      required
                    />
                  </div>
                  <div>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Your Message"
                      rows={5}
                      className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-50"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>

                  {submitStatus === "success" && (
                    <div className="text-green-400 text-center text-sm">
                      Message sent successfully! I'll get back to you soon.
                    </div>
                  )}

                  {submitStatus === "error" && (
                    <div className="text-red-400 text-center text-sm">
                      Failed to send message. Please try again or contact me directly.
                    </div>
                  )}
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-900 border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-400">© 2025 Felix Frank-Felix. All rights reserved.</p>
              <p className="text-gray-500 text-sm mt-1">Built with passion for AI and community</p>
            </div>

            <div className="flex gap-4">
              <a
                href="https://hashnode.com/@FrankFelixAI"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                Hashnode
              </a>
              <a
                href="https://medium.com/@frankfelixai"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                Medium
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
