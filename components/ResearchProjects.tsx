'use client'

import { useState } from 'react'
import Image from 'next/image'

const projects = [
  {
    title: "Quantum Cryptography Protocol Development",
    period: "2022 - Present",
    description: "Leading a team to develop novel quantum cryptography protocols...",
    responsibilities: [
      "Designing quantum circuits for key distribution",
      "Simulating quantum noise and decoherence effects",
      "Collaborating with experimentalists for practical implementations"
    ],
    outcomes: [
      "Published 2 high-impact papers",
      "Filed a patent for a new quantum key distribution method",
      "Presented findings at 3 international conferences"
    ],
    image: "/placeholder.svg?height=200&width=300"
  },
  {
    title: "Machine Learning for Drug Discovery",
    period: "2020 - 2022",
    description: "Applied deep learning techniques to accelerate the drug discovery process...",
    responsibilities: [
      "Developed AI models for predicting drug-target interactions",
      "Implemented large-scale data processing pipelines",
      "Collaborated with pharmaceutical companies for real-world testing"
    ],
    outcomes: [
      "Reduced early-stage drug screening time by 40%",
      "Published findings in Nature Machine Intelligence",
      "Open-sourced the ML framework, garnering 500+ GitHub stars"
    ],
    image: "/placeholder.svg?height=200&width=300"
  },
  // Add more projects as needed
]

export default function ResearchProjects() {
  const [expandedProject, setExpandedProject] = useState<number | null>(null)

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-serif font-bold mb-8 text-center">Research Projects</h2>
        <div className="space-y-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.period}</p>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <button 
                onClick={() => setExpandedProject(expandedProject === index ? null : index)}
                className="text-blue-600 hover:underline mb-4"
              >
                {expandedProject === index ? 'Hide Details' : 'Show Details'}
              </button>
              {expandedProject === index && (
                <div className="mt-4 space-y-4">
                  <div>
                    <h4 className="font-bold mb-2">Responsibilities:</h4>
                    <ul className="list-disc list-inside">
                      {project.responsibilities.map((resp, i) => (
                        <li key={i}>{resp}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Outcomes:</h4>
                    <ul className="list-disc list-inside">
                      {project.outcomes.map((outcome, i) => (
                        <li key={i}>{outcome}</li>
                      ))}
                    </ul>
                  </div>
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={300}
                    height={200}
                    className="rounded-lg shadow-md"
                  />
                </div>
)}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

