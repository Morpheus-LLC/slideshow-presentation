"use client"

import { useState, useEffect } from "react"
import {
  ChevronLeft,
  ChevronRight,
  Users,
  Target,
  Code,
  Cpu,
  Lightbulb,
  Trophy,
  Play,
  Pause,
  RotateCcw,
  Zap,
  Brain,
  Rocket,
  Globe,
  Sparkles,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

const slides = [
  // Title Slide
  {
    id: 1,
    type: "hero",
    title: "After-School Technology & Innovation Program",
    subtitle: "Transforming Students into Tech Innovators",
    content: "Classes 5-12 • 2-3 Hours Daily • 3-5 Days Weekly",
    background: "from-indigo-900 via-purple-900 to-pink-900",
  },

  // Program Overview
  {
    id: 2,
    type: "feature",
    title: "Program Overview",
    subtitle: "Where Innovation Meets Education",
    content: [
      { icon: <Users className="w-6 h-6" />, text: "Designed for students in Classes 5 to 12" },
      { icon: <Zap className="w-6 h-6" />, text: "Immersive technology and innovation experience" },
      { icon: <Brain className="w-6 h-6" />, text: "2-3 hours per day, 3-5 days per week" },
      { icon: <Rocket className="w-6 h-6" />, text: "Transform passive consumers into active creators" },
    ],
  },

  // Program Goals Title
  {
    id: 3,
    type: "section",
    title: "Program Goals",
    subtitle: "Building Tomorrow's Innovators",
    background: "from-blue-600 to-cyan-600",
  },

  // Goal 1
  {
    id: 4,
    type: "goal",
    title: "Spark Curiosity & Creativity",
    icon: <Lightbulb className="w-16 h-16" />,
    color: "from-yellow-400 to-orange-500",
    content: [
      "Move beyond textbook theories",
      "Explore real-world problem solving",
      "Encourage questions and experimentation",
      "Build solutions limited only by imagination",
      "Ignite genuine passion for technology",
    ],
  },

  // Goal 2
  {
    id: 5,
    type: "goal",
    title: "Build Foundational Skills",
    icon: <Code className="w-16 h-16" />,
    color: "from-blue-500 to-indigo-600",
    content: [
      "Programming fundamentals",
      "Artificial Intelligence basics",
      "Internet of Things (IoT)",
      "Robotics and automation",
      "Hands-on practical experience",
    ],
  },

  // Goal 3
  {
    id: 6,
    type: "goal",
    title: "Encourage Innovation & Teamwork",
    icon: <Users className="w-16 h-16" />,
    color: "from-green-500 to-emerald-600",
    content: [
      "Collaborative project-based learning",
      "Communication and presentation skills",
      "Problem-solving methodologies",
      "Creative thinking development",
      "Team navigation and leadership",
    ],
  },

  // Goal 4
  {
    id: 7,
    type: "goal",
    title: "Age-Appropriate Projects",
    icon: <Target className="w-16 h-16" />,
    color: "from-purple-500 to-pink-600",
    content: [
      "Curriculum matched to cognitive development",
      "Beginner to advanced progression",
      "Tangible, hands-on projects",
      "Abstract concepts made concrete",
      "Every student engaged and challenged",
    ],
  },

  // Session Structure Title
  {
    id: 8,
    type: "section",
    title: "Session Structure",
    subtitle: "Dynamic 2-3 Hour Learning Experience",
    background: "from-emerald-600 to-teal-600",
  },

  // Session Structure
  {
    id: 9,
    type: "timeline",
    title: "Each Session Flow",
    content: [
      {
        time: "15 mins",
        title: "Warm-up",
        description: "Brain teasers, logic puzzles, coding challenges, tech news discussions",
        color: "from-red-500 to-pink-500",
        icon: <Brain className="w-8 h-8" />,
      },
      {
        time: "45-60 mins",
        title: "Concept Learning",
        description: "Interactive demos, real-life examples, storytelling approach",
        color: "from-blue-500 to-indigo-500",
        icon: <Lightbulb className="w-8 h-8" />,
      },
      {
        time: "60-75 mins",
        title: "Hands-On Activity",
        description: "Practical projects, coding, building, experimenting",
        color: "from-green-500 to-emerald-500",
        icon: <Code className="w-8 h-8" />,
      },
      {
        time: "15-30 mins",
        title: "Show & Share",
        description: "Present work, demonstrate creations, peer feedback",
        color: "from-purple-500 to-pink-500",
        icon: <Trophy className="w-8 h-8" />,
      },
    ],
  },

  // Curriculum Title
  {
    id: 10,
    type: "section",
    title: "Age-wise Curriculum",
    subtitle: "Tailored Learning Paths",
    background: "from-violet-600 to-purple-600",
  },

  // Classes 5-7
  {
    id: 11,
    type: "curriculum",
    title: "Classes 5-7: Beginner Level",
    subtitle: "Making Technology Fun & Intuitive",
    level: "Beginner",
    color: "from-green-400 to-blue-500",
    focus: [
      "Visual Programming (Scratch, Blockly)",
      "Basic Robotics (LEGO Mindstorms)",
      "Introduction to IoT (Smart devices)",
      "AI Exploration (Teachable Machine)",
    ],
    projects: ["Digital Story/Game in Scratch", "Light-Sensing Robot", "Smart Plant Watering System"],
  },

  // Classes 8-9
  {
    id: 12,
    type: "curriculum",
    title: "Classes 8-9: Intermediate Level",
    subtitle: "Building Solid Foundations",
    level: "Intermediate",
    color: "from-blue-500 to-purple-500",
    focus: [
      "Python Programming Basics",
      "Electronics (Arduino, Raspberry Pi)",
      "Applied IoT (Cloud platforms)",
      "Practical AI (Chatbots, Voice recognition)",
      "Web Development (HTML, CSS, JavaScript)",
    ],
    projects: ["Line-Following Robot", "FAQ Chatbot in Python", "IoT Weather Station", "Personal Portfolio Website"],
  },

  // Classes 10-12
  {
    id: 13,
    type: "curriculum",
    title: "Classes 10-12: Advanced Level",
    subtitle: "Real-world Applications & Innovation",
    level: "Advanced",
    color: "from-purple-500 to-pink-500",
    focus: [
      "Advanced Python & Libraries",
      "AI & Machine Learning",
      "Advanced Robotics",
      "Cloud-Integrated IoT",
      "App Development Basics",
      "Entrepreneurship & Innovation",
    ],
    projects: [
      "AI-Powered Attendance System",
      "Home Automation with IoT",
      "Obstacle-Avoiding Robot",
      "AI Content Generator",
    ],
  },

  // Weekly Schedule
  {
    id: 14,
    type: "schedule",
    title: "Sample Weekly Schedule",
    subtitle: "Balanced Skill Development",
    schedule: [
      {
        day: "Monday",
        focus: "Programming",
        activity: "Animated stories (Scratch) or Mini-games (Python)",
        color: "from-red-500 to-pink-500",
        icon: <Code className="w-6 h-6" />,
      },
      {
        day: "Tuesday",
        focus: "Robotics",
        activity: "Build and program robots with sensors",
        color: "from-blue-500 to-indigo-500",
        icon: <Cpu className="w-6 h-6" />,
      },
      {
        day: "Wednesday",
        focus: "IoT",
        activity: "Sensor-based projects and alerts",
        color: "from-green-500 to-emerald-500",
        icon: <Globe className="w-6 h-6" />,
      },
      {
        day: "Thursday",
        focus: "AI",
        activity: "Image recognition or custom AI models",
        color: "from-purple-500 to-violet-500",
        icon: <Brain className="w-6 h-6" />,
      },
      {
        day: "Friday",
        focus: "Innovation Lab",
        activity: "Team projects and presentations",
        color: "from-yellow-500 to-orange-500",
        icon: <Sparkles className="w-6 h-6" />,
      },
    ],
  },

  // Teaching Approach
  {
    id: 15,
    type: "approach",
    title: "Our Teaching Philosophy",
    subtitle: "Learning That Sticks",
    approaches: [
      {
        icon: <Play className="w-12 h-12" />,
        title: "Fun-first Learning",
        description: "Engaging games, stories, and real-world examples that make learning enjoyable",
        color: "from-yellow-400 to-orange-500",
      },
      {
        icon: <Target className="w-12 h-12" />,
        title: "Hands-on Experience",
        description: "Every session produces tangible results - code, robots, apps, or AI models",
        color: "from-blue-500 to-indigo-600",
      },
      {
        icon: <Users className="w-12 h-12" />,
        title: "Collaborative Learning",
        description: "Team projects that build communication and leadership skills",
        color: "from-green-500 to-emerald-600",
      },
      {
        icon: <Rocket className="w-12 h-12" />,
        title: "Progressive Growth",
        description: "Curriculum that evolves with students, from basics to advanced concepts",
        color: "from-purple-500 to-pink-600",
      },
    ],
  },

  // Outcomes Title
  {
    id: 16,
    type: "section",
    title: "Program Outcomes",
    subtitle: "Preparing Future Innovators",
    background: "from-rose-600 to-pink-600",
  },

  // Outcomes
  {
    id: 17,
    type: "outcomes",
    title: "What Students Will Achieve",
    outcomes: [
      {
        icon: <Code className="w-12 h-12" />,
        title: "Technical Mastery",
        description: "Solid understanding of coding, AI, IoT, and robotics as practical tools",
        color: "from-blue-500 to-indigo-600",
        stats: "4+ Technologies",
      },
      {
        icon: <Trophy className="w-12 h-12" />,
        title: "Project Portfolio",
        description: "Collection of projects showcasing skills for college applications",
        color: "from-yellow-500 to-orange-600",
        stats: "10+ Projects",
      },
      {
        icon: <Users className="w-12 h-12" />,
        title: "21st Century Skills",
        description: "Teamwork, communication, and creative problem-solving abilities",
        color: "from-green-500 to-emerald-600",
        stats: "Soft Skills",
      },
      {
        icon: <Lightbulb className="w-12 h-12" />,
        title: "Future Ready",
        description: "Inspiration and confidence to pursue STEM careers and entrepreneurship",
        color: "from-purple-500 to-pink-600",
        stats: "Career Ready",
      },
    ],
  },

  // Thank You
  {
    id: 18,
    type: "closing",
    title: "Ready to Begin?",
    subtitle: "Transform Your Students into Tech Innovators",
    content: "Questions & Discussion Welcome",
    background: "from-indigo-900 via-purple-900 to-pink-900",
  },
]

export default function TechProgramSlideshow() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(false)
  const [slideDirection, setSlideDirection] = useState<"next" | "prev">("next")

  useEffect(() => {
    if (!isAutoPlay) return

    const interval = setInterval(() => {
      setSlideDirection("next")
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlay])

  const nextSlide = () => {
    setSlideDirection("next")
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setSlideDirection("prev")
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToSlide = (index: number) => {
    setSlideDirection(index > currentSlide ? "next" : "prev")
    setCurrentSlide(index)
  }

  const toggleAutoPlay = () => {
    setIsAutoPlay(!isAutoPlay)
  }

  const resetSlideshow = () => {
    setCurrentSlide(0)
    setIsAutoPlay(false)
  }

  const slide = slides[currentSlide]

  const renderSlide = () => {
    switch (slide.type) {
      case "hero":
        return (
          <div className={`relative h-full bg-gradient-to-br ${slide.background} overflow-hidden`}>
            {/* Animated background elements */}
            <div className="absolute inset-0">
              <div className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full animate-pulse"></div>
              <div className="absolute bottom-32 right-32 w-24 h-24 bg-white/5 rounded-full animate-bounce"></div>
              <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/10 rounded-full animate-ping"></div>
            </div>

            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center space-y-12 px-8">
              <div className="space-y-8 animate-fade-in">
                <h1 className="text-5xl md:text-8xl font-black text-white leading-tight">
                  <span className="block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                    Technology &
                  </span>
                  <span className="block bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                    Innovation
                  </span>
                  <span className="block text-white text-3xl md:text-5xl font-medium mt-4">Program</span>
                </h1>
                <p className="text-2xl md:text-3xl text-cyan-200 font-light max-w-4xl">{slide.subtitle}</p>
                <p className="text-xl text-white/80 font-medium">{slide.content}</p>
              </div>

              <div className="flex space-x-8 animate-bounce-in">
                <div className="p-6 bg-white/20 backdrop-blur-sm rounded-2xl">
                  <Cpu className="w-16 h-16 text-cyan-300" />
                </div>
                <div className="p-6 bg-white/20 backdrop-blur-sm rounded-2xl">
                  <Code className="w-16 h-16 text-blue-300" />
                </div>
                <div className="p-6 bg-white/20 backdrop-blur-sm rounded-2xl">
                  <Lightbulb className="w-16 h-16 text-yellow-300" />
                </div>
              </div>
            </div>
          </div>
        )

      case "section":
        return (
          <div className={`relative h-full bg-gradient-to-br ${slide.background} overflow-hidden`}>
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center space-y-12">
              <div className="space-y-8 animate-slide-up">
                <h1 className="text-6xl md:text-9xl font-black text-white leading-tight">{slide.title}</h1>
                <p className="text-3xl text-white/90 font-light">{slide.subtitle}</p>
              </div>
            </div>
          </div>
        )

      case "feature":
        return (
          <div className="h-full bg-gradient-to-br from-slate-900 to-slate-800 p-12">
            <div className="max-w-6xl mx-auto h-full flex flex-col">
              <div className="text-center mb-16">
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">{slide.title}</h1>
                <p className="text-2xl text-slate-300">{slide.subtitle}</p>
              </div>

              <div className="flex-1 grid md:grid-cols-2 gap-8">
                {slide.content.map((item: any, index: number) => (
                  <Card
                    key={index}
                    className="group p-8 bg-gradient-to-br from-slate-800 to-slate-700 border-slate-600 hover:from-slate-700 hover:to-slate-600 transition-all duration-500 hover:scale-105 hover:shadow-2xl"
                  >
                    <div className="flex items-center space-x-6">
                      <div className="p-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl text-white group-hover:scale-110 transition-transform duration-300">
                        {item.icon}
                      </div>
                      <p className="text-xl text-slate-200 font-medium">{item.text}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        )

      case "goal":
        return (
          <div className="h-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-12">
            <div className="max-w-6xl mx-auto h-full flex items-center">
              <div className="grid md:grid-cols-2 gap-16 w-full">
                <div className="flex flex-col justify-center space-y-8">
                  <div className={`inline-flex p-6 bg-gradient-to-br ${slide.color} rounded-3xl w-fit`}>
                    <div className="text-white">{slide.icon}</div>
                  </div>
                  <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">{slide.title}</h1>
                </div>

                <div className="space-y-6">
                  {slide.content.map((item: string, index: number) => (
                    <div
                      key={index}
                      className="group flex items-start space-x-4 p-4 rounded-xl hover:bg-slate-800/50 transition-all duration-300"
                    >
                      <div
                        className={`w-3 h-3 bg-gradient-to-r ${slide.color} rounded-full mt-2 group-hover:scale-125 transition-transform duration-300`}
                      ></div>
                      <span className="text-xl text-slate-200 group-hover:text-white transition-colors duration-300">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )

      case "timeline":
        return (
          <div className="h-full bg-gradient-to-br from-slate-900 to-slate-800 p-12">
            <div className="max-w-6xl mx-auto h-full flex flex-col">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-16 text-center">{slide.title}</h1>

              <div className="flex-1 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {slide.content.map((item: any, index: number) => (
                  <Card
                    key={index}
                    className="group relative overflow-hidden bg-gradient-to-br from-slate-800 to-slate-700 border-slate-600 hover:scale-105 transition-all duration-500"
                  >
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                    ></div>

                    <div className="relative p-8 h-full flex flex-col">
                      <div className={`inline-flex p-4 bg-gradient-to-br ${item.color} rounded-2xl w-fit mb-6`}>
                        <div className="text-white">{item.icon}</div>
                      </div>

                      <div
                        className={`bg-gradient-to-r ${item.color} text-white px-4 py-2 rounded-full text-sm font-bold mb-4 w-fit`}
                      >
                        {item.time}
                      </div>

                      <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                      <p className="text-slate-300 flex-1">{item.description}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        )

      case "curriculum":
        return (
          <div className="h-full bg-gradient-to-br from-slate-900 to-slate-800 p-12">
            <div className="max-w-6xl mx-auto h-full flex flex-col">
              <div className="text-center mb-12">
                <div
                  className={`inline-block px-6 py-3 bg-gradient-to-r ${slide.color} text-white rounded-full text-lg font-bold mb-6`}
                >
                  {slide.level}
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">{slide.title}</h1>
                <p className="text-2xl text-slate-300">{slide.subtitle}</p>
              </div>

              <div className="flex-1 grid md:grid-cols-2 gap-12">
                <Card className="group p-8 bg-gradient-to-br from-slate-800 to-slate-700 border-slate-600 hover:shadow-2xl transition-all duration-500">
                  <div className="flex items-center space-x-4 mb-8">
                    <div className={`p-3 bg-gradient-to-r ${slide.color} rounded-xl`}>
                      <Target className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-blue-400">Curriculum Focus</h3>
                  </div>
                  <div className="space-y-4">
                    {slide.focus.map((item: string, index: number) => (
                      <div
                        key={index}
                        className="flex items-start space-x-3 p-3 rounded-lg hover:bg-slate-700/50 transition-colors duration-300"
                      >
                        <div className={`w-2 h-2 bg-gradient-to-r ${slide.color} rounded-full mt-2`}></div>
                        <span className="text-slate-200 font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </Card>

                <Card className="group p-8 bg-gradient-to-br from-slate-800 to-slate-700 border-slate-600 hover:shadow-2xl transition-all duration-500">
                  <div className="flex items-center space-x-4 mb-8">
                    <div className={`p-3 bg-gradient-to-r ${slide.color} rounded-xl`}>
                      <Rocket className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-green-400">Mini Projects</h3>
                  </div>
                  <div className="space-y-4">
                    {slide.projects.map((item: string, index: number) => (
                      <div
                        key={index}
                        className="flex items-start space-x-3 p-3 rounded-lg hover:bg-slate-700/50 transition-colors duration-300"
                      >
                        <div className={`w-2 h-2 bg-gradient-to-r ${slide.color} rounded-full mt-2`}></div>
                        <span className="text-slate-200 font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            </div>
          </div>
        )

      case "schedule":
        return (
          <div className="h-full bg-gradient-to-br from-slate-900 to-slate-800 p-12">
            <div className="max-w-6xl mx-auto h-full flex flex-col">
              <div className="text-center mb-16">
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">{slide.title}</h1>
                <p className="text-2xl text-slate-300">{slide.subtitle}</p>
              </div>

              <div className="flex-1 space-y-6">
                {slide.schedule.map((item: any, index: number) => (
                  <Card
                    key={index}
                    className="group p-6 bg-gradient-to-r from-slate-800 to-slate-700 border-slate-600 hover:scale-105 hover:shadow-2xl transition-all duration-500"
                  >
                    <div className="flex items-center space-x-8">
                      <div
                        className={`flex items-center space-x-4 p-4 bg-gradient-to-r ${item.color} rounded-2xl min-w-[200px]`}
                      >
                        <div className="text-white">{item.icon}</div>
                        <div className="text-white font-bold text-lg">{item.day}</div>
                      </div>

                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-white mb-2">{item.focus}</h3>
                        <p className="text-slate-300 text-lg">{item.activity}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        )

      case "approach":
        return (
          <div className="h-full bg-gradient-to-br from-slate-900 to-slate-800 p-12">
            <div className="max-w-6xl mx-auto h-full flex flex-col">
              <div className="text-center mb-16">
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">{slide.title}</h1>
                <p className="text-2xl text-slate-300">{slide.subtitle}</p>
              </div>

              <div className="flex-1 grid md:grid-cols-2 gap-8">
                {slide.approaches.map((approach: any, index: number) => (
                  <Card
                    key={index}
                    className="group relative overflow-hidden p-8 bg-gradient-to-br from-slate-800 to-slate-700 border-slate-600 hover:scale-105 transition-all duration-500"
                  >
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${approach.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                    ></div>

                    <div className="relative">
                      <div className={`inline-flex p-4 bg-gradient-to-br ${approach.color} rounded-2xl mb-6`}>
                        <div className="text-white">{approach.icon}</div>
                      </div>

                      <h3 className="text-2xl font-bold text-white mb-4">{approach.title}</h3>
                      <p className="text-slate-300 text-lg leading-relaxed">{approach.description}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        )

      case "outcomes":
        return (
          <div className="h-full bg-gradient-to-br from-slate-900 to-slate-800 p-12">
            <div className="max-w-6xl mx-auto h-full flex flex-col">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-16 text-center">{slide.title}</h1>

              <div className="flex-1 grid md:grid-cols-2 gap-8">
                {slide.outcomes.map((outcome: any, index: number) => (
                  <Card
                    key={index}
                    className="group relative overflow-hidden p-8 bg-gradient-to-br from-slate-800 to-slate-700 border-slate-600 hover:scale-105 hover:shadow-2xl transition-all duration-500"
                  >
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${outcome.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                    ></div>

                    <div className="relative">
                      <div className="flex items-start justify-between mb-6">
                        <div className={`p-4 bg-gradient-to-br ${outcome.color} rounded-2xl`}>
                          <div className="text-white">{outcome.icon}</div>
                        </div>
                        <div
                          className={`px-4 py-2 bg-gradient-to-r ${outcome.color} text-white rounded-full text-sm font-bold`}
                        >
                          {outcome.stats}
                        </div>
                      </div>

                      <h3 className="text-2xl font-bold text-white mb-4">{outcome.title}</h3>
                      <p className="text-slate-300 text-lg leading-relaxed">{outcome.description}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        )

      case "closing":
        return (
          <div className={`relative h-full bg-gradient-to-br ${slide.background} overflow-hidden`}>
            <div className="absolute inset-0">
              <div className="absolute top-32 left-32 w-40 h-40 bg-white/10 rounded-full animate-pulse"></div>
              <div className="absolute bottom-40 right-40 w-32 h-32 bg-white/5 rounded-full animate-bounce"></div>
              <div className="absolute top-1/3 right-1/4 w-20 h-20 bg-white/10 rounded-full animate-ping"></div>
            </div>

            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center space-y-12 px-8">
              <div className="space-y-8">
                <h1 className="text-6xl md:text-9xl font-black text-white leading-tight">{slide.title}</h1>
                <p className="text-3xl md:text-4xl text-cyan-200 font-light max-w-4xl">{slide.subtitle}</p>
                <p className="text-2xl text-white/80 font-medium">{slide.content}</p>
              </div>

              <div className="flex space-x-6">
                <div className="p-8 bg-white/20 backdrop-blur-sm rounded-3xl">
                  <Sparkles className="w-20 h-20 text-yellow-300" />
                </div>
                <div className="p-8 bg-white/20 backdrop-blur-sm rounded-3xl">
                  <Rocket className="w-20 h-20 text-blue-300" />
                </div>
              </div>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-slate-900">
      <div className="h-screen flex flex-col relative overflow-hidden">
        <div
          className={`flex-1 transition-all duration-700 ease-in-out ${
            slideDirection === "next" ? "animate-slide-left" : "animate-slide-right"
          }`}
        >
          {renderSlide()}
        </div>

        <div className="bg-slate-900/95 backdrop-blur-sm border-t border-slate-700 p-6">
          <div className="flex items-center justify-between max-w-7xl mx-auto">
            {/* Previous Button */}
            <Button
              onClick={prevSlide}
              variant="outline"
              size="lg"
              className="flex items-center space-x-3 bg-slate-800 border-slate-600 text-white hover:bg-slate-700 hover:border-slate-500 transition-all duration-300"
            >
              <ChevronLeft className="w-5 h-5" />
              <span className="font-medium">Previous</span>
            </Button>

            {/* Control Center */}
            <div className="flex items-center space-x-6">
              {/* Auto-play controls */}
              <div className="flex items-center space-x-3">
                <Button
                  onClick={toggleAutoPlay}
                  variant="outline"
                  size="sm"
                  className={`bg-slate-800 border-slate-600 hover:bg-slate-700 transition-all duration-300 ${
                    isAutoPlay ? "text-green-400 border-green-500" : "text-white"
                  }`}
                >
                  {isAutoPlay ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                </Button>

                <Button
                  onClick={resetSlideshow}
                  variant="outline"
                  size="sm"
                  className="bg-slate-800 border-slate-600 text-white hover:bg-slate-700 transition-all duration-300"
                >
                  <RotateCcw className="w-4 h-4" />
                </Button>
              </div>

              {/* Slide Indicators */}
              <div className="flex items-center space-x-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-125 ${
                      index === currentSlide
                        ? "bg-gradient-to-r from-blue-500 to-purple-500 scale-125"
                        : "bg-slate-600 hover:bg-slate-500"
                    }`}
                  />
                ))}
              </div>

              {/* Slide Counter */}
              <div className="text-slate-300 font-medium bg-slate-800 px-4 py-2 rounded-lg">
                <span className="text-white font-bold">{currentSlide + 1}</span>
                <span className="mx-2">/</span>
                <span>{slides.length}</span>
              </div>
            </div>

            {/* Next Button */}
            <Button
              onClick={nextSlide}
              variant="outline"
              size="lg"
              className="flex items-center space-x-3 bg-slate-800 border-slate-600 text-white hover:bg-slate-700 hover:border-slate-500 transition-all duration-300"
            >
              <span className="font-medium">Next</span>
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
