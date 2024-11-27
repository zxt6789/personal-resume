import { FaMicrophoneAlt, FaUserGraduate, FaChalkboardTeacher } from 'react-icons/fa'

const activities = [
  {
    type: "Conference Presentations",
    icon: <FaMicrophoneAlt className="text-3xl text-blue-600 dark:text-blue-400" />,
    items: [
      {
        title: "Quantum Computing for Cryptographic Applications",
        event: "International Symposium on Quantum Information",
        year: 2023,
        location: "Tokyo, Japan"
      },
      {
        title: "Machine Learning in Drug Discovery: Challenges and Opportunities",
        event: "AI in Healthcare Conference",
        year: 2022,
        location: "San Francisco, USA"
      }
    ]
  },
  {
    type: "Academic Service",
    icon: <FaUserGraduate className="text-3xl text-green-600 dark:text-green-400" />,
    items: [
      {
        role: "Reviewer",
        for: "Nature Quantum Information",
        period: "2021 - Present"
      },
      {
        role: "Program Committee Member",
        for: "International Conference on Machine Learning (ICML)",
        period: "2022"
      }
    ]
  },
  {
    type: "Workshops & Seminars",
    icon: <FaChalkboardTeacher className="text-3xl text-red-600 dark:text-red-400" />,
    items: [
      {
        title: "Advanced Quantum Algorithms Workshop",
        role: "Organizer",
        institution: "Stanford University",
        year: 2023
      },
      {
        title: "Bioinformatics and AI Seminar Series",
        role: "Guest Speaker",
        institution: "MIT",
        year: 2022
      }
    ]
  }
]

export default function AcademicActivities() {
  return (
    <section id="activities" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-800 dark:text-white">Academic Activities</h2>
        <div className="space-y-8">
          {activities.map((activity, index) => (
            <div key={index} className="card p-6">
              <div className="flex items-center mb-4">
                {activity.icon}
                <h3 className="text-2xl font-bold ml-4 text-gray-800 dark:text-white">{activity.type}</h3>
              </div>
              <ul className="space-y-4">
                {activity.items.map((item, i) => (
                  <li key={i} className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-bold text-gray-800 dark:text-white">{item.title || item.role}</h4>
                    <p className="text-gray-600 dark:text-gray-300">{item.event || item.for}</p>
                    <p className="text-gray-700 dark:text-gray-400">{item.year || item.period}</p>
                    {item.location && <p className="text-gray-700 dark:text-gray-400">{item.location}</p>}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

