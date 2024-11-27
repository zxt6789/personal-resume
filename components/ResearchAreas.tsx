import { Brain, GitBranch, Cpu } from 'lucide-react'

const researchAreas = [
  {
    icon: <Brain className="w-12 h-12 mb-4 text-blue-400" />,
    title: "Deep Reinforcement Learning",
    description: "Exploring advanced RL algorithms for complex decision-making tasks in dynamic environments.",
    keywords: ["Policy Gradients", "Q-Learning", "Actor-Critic Methods"],
  },
  {
    icon: <GitBranch className="w-12 h-12 mb-4 text-purple-400" />,
    title: "Multi-Agent Systems",
    description: "Developing cooperative and competitive AI agents in multi-agent reinforcement learning scenarios.",
    keywords: ["Swarm Intelligence", "Decentralized Control", "Emergent Behavior"],
  },
  {
    icon: <Cpu className="w-12 h-12 mb-4 text-green-400" />,
    title: "AI for Scientific Discovery",
    description: "Applying machine learning and RL techniques to accelerate breakthroughs in chemistry and materials science.",
    keywords: ["Molecular Design", "Reaction Prediction", "Materials Informatics"],
  },
]

export default function ResearchAreas() {
  return (
    <section id="research" className="py-24 md:py-32 bg-gray-900">
      <div className="container">
        <h2 className="section-title text-4xl md:text-5xl font-extrabold mb-12 text-center">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 animate-pulse">
            Research Areas
          </span>
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {researchAreas.map((area, index) => (
            <div key={index} className="card">
              <div className="flex justify-center">
                <div className="p-3 rounded-full bg-gray-700 neon-border">
                  {area.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center mt-4 neon-text">{area.title}</h3>
              <p className="text-sm text-gray-300 mb-4 text-center">{area.description}</p>
              <div className="flex flex-wrap justify-center">
                {area.keywords.map((keyword, i) => (
                  <span key={i} className="bg-blue-900 text-blue-200 text-xs px-2 py-1 rounded-full m-1">
                    {keyword}
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

