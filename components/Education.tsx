import { GraduationCap, Award, BookOpen } from 'lucide-react'

const education = [
  {
    degree: "Ph.D. in Artificial Intelligence",
    institution: "Stanford University",
    logo: "/placeholder.svg?height=60&width=60",
    period: "2018 - 2022",
    gpa: "3.95/4.0",
    honors: [
      "Outstanding Doctoral Thesis in AI",
      "Stanford AI Lab Fellowship"
    ],
    courses: [
      "Advanced Reinforcement Learning",
      "Deep Learning for Scientific Discovery",
      "Multi-Agent Systems"
    ]
  },
  {
    degree: "M.S. in Computer Science",
    institution: "Massachusetts Institute of Technology",
    logo: "/placeholder.svg?height=60&width=60",
    period: "2016 - 2018",
    gpa: "3.92/4.0",
    honors: [
      "Dean's List (All Semesters)",
      "Best Master's Thesis in Machine Learning"
    ],
    courses: [
      "Machine Learning",
      "Artificial Intelligence",
      "Probabilistic Graphical Models"
    ]
  },
]

export default function Education() {
  return (
    <section id="education" className="py-16 md:py-24 bg-gray-900">
      <div className="container">
        <h2 className="section-title text-6xl md:text-7xl font-extrabold mb-12 text-center">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 animate-pulse">
            Education
          </span>
        </h2>
        <div className="space-y-8">
          {education.map((edu, index) => (
            <div key={index} className="card">
              <div className="flex items-center mb-4">
                <img src={edu.logo} alt={edu.institution} className="w-16 h-16 mr-4 rounded-full bg-gray-700" />
                <div>
                  <h3 className="text-3xl font-semibold text-blue-300 mb-1">{edu.degree}</h3>
                  <p className="text-2xl text-gray-400">{edu.institution}</p>
                </div>
              </div>
              <p className="text-lg text-gray-500 mb-3">{edu.period} | GPA: {edu.gpa}</p>
              <div className="mb-4">
                <h4 className="text-base font-semibold mb-2 flex items-center text-blue-400">
                  <Award className="mr-2" size={18} /> Honors and Awards:
                </h4>
                <ul className="list-disc list-inside text-base text-gray-400 pl-5">
                  {edu.honors.map((honor, i) => (
                    <li key={i}>{honor}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-base font-semibold mb-2 flex items-center text-blue-400">
                  <BookOpen className="mr-2" size={18} /> Relevant Coursework:
                </h4>
                <div className="flex flex-wrap">
                  {edu.courses.map((course, i) => (
                    <span key={i} className="bg-blue-900 text-blue-200 text-xs px-2 py-1 rounded-full mr-2 mb-2">
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

