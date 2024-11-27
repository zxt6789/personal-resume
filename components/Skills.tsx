import { Brain, Code, Cpu, Users } from 'lucide-react'

const skills = [
  {
    category: "AI & ML Skills",
    icon: <Brain className="w-8 h-8 text-blue-400" />,
    items: ["Reinforcement Learning", "Deep Learning", "UAV Decision-Making and Planning"]
  },
  {
    category: "Programming Languages",
    icon: <Code className="w-8 h-8 text-green-400" />,
    items: ["Python", "PyTorch", "TensorFlow", "MATLAB"]
  },
  {
    category: "Tools & Technologies",
    icon: <Cpu className="w-8 h-8 text-purple-400" />,
    items: ["OpenAI Gym", "ROS", "Git", "Docker"]
  },
  {
    category: "Soft Skills",
    icon: <Users className="w-8 h-8 text-yellow-400" />,
    items: ["Research Collaboration", "Technical Writing", "Project Management", "Public Speaking"]
  }
]

export default function Skills() {
  return (
    <section id="skills" className="py-16 md:py-24 bg-gray-800">
      <div className="container">
        <h2 className="section-title text-6xl md:text-7xl font-extrabold mb-12 text-center">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 animate-pulse">
            Skills & Expertise
          </span>
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skillCategory, index) => (
            <div key={index} className="card">
              <div className="flex items-center mb-4">
                {skillCategory.icon}
                <h3 className="text-3xl font-semibold ml-4 text-blue-300">{skillCategory.category}</h3>
              </div>
              <div className="flex flex-wrap">
                {skillCategory.items.map((skill, i) => (
                  <span key={i} className="bg-gray-700 text-gray-200 px-3 py-1 rounded-full text-lg mr-2 mb-2 transition-transform hover:scale-105 hover:bg-gray-600">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

