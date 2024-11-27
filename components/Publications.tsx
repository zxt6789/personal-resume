'use client'

import { useState } from 'react'
import { FileText, Link, Award } from 'lucide-react'

const publications = [
  {
    title: "Deep Reinforcement Learning for Molecular Design",
    authors: "Smith, J., Johnson, A., & [Your Name]",
    journal: "Nature Machine Intelligence",
    year: 2023,
    doi: "10.1038/s42256-023-00001-x",
    citations: 45,
    type: "journal"
  },
  {
    title: "Multi-Agent Reinforcement Learning in Complex Chemical Environments",
    authors: "[Your Name], Brown, R., & Davis, M.",
    conference: "International Conference on Machine Learning (ICML)",
    year: 2022,
    doi: "10.1109/ICML.2022.1234567",
    citations: 28,
    type: "conference"
  },
  {
    title: "Quantum-Inspired Algorithms for Reinforcement Learning in High-Dimensional Spaces",
    authors: "Johnson, A., [Your Name], & Williams, P.",
    journal: "Artificial Intelligence",
    year: 2023,
    doi: "10.1016/j.artint.2023.103871",
    citations: 12,
    type: "journal"
  }
]

export default function Publications() {
  const [filter, setFilter] = useState('all')

  const filteredPublications = publications.filter(pub => 
    filter === 'all' || pub.type === filter
  )

  return (
    <section id="publications" className="py-16 md:py-24 bg-gray-800">
      <div className="container">
        <h2 className="section-title text-6xl md:text-7xl font-extrabold mb-12 text-center">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 animate-pulse">
            Publications
          </span>
        </h2>
        <div className="mb-8 flex justify-center">
          {['all', 'journal', 'conference'].map((type) => (
            <button 
              key={type}
              onClick={() => setFilter(type)} 
              className={`mx-2 px-4 py-2 rounded-full text-sm transition-colors ${
                filter === type 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </button>
          ))}
        </div>
        <div className="space-y-6">
          {filteredPublications.map((pub, index) => (
            <div key={index} className="card">
              <h3 className="text-2xl font-semibold mb-3 text-blue-300">{pub.title}</h3>
              <p className="text-lg text-gray-400 mb-3">{pub.authors}</p>
              <p className="text-lg text-gray-500 mb-3">
                {pub.journal || pub.conference}, {pub.year}
              </p>
              <div className="flex items-center mb-2">
                <Link className="text-blue-400 mr-2" size={16} />
                <a href={`https://doi.org/${pub.doi}`} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline text-lg">
                  {pub.doi}
                </a>
              </div>
              <div className="flex items-center text-gray-400 text-base">
                <Award className="mr-2" size={16} />
                <span>Citations: {pub.citations}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

