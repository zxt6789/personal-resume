import Image from 'next/image'

const projects = [
  {
    name: "项目A",
    description: "这是一个使用React和Node.js开发的全栈应用",
    image: "/placeholder.svg?height=200&width=300",
    techStack: ["React", "Node.js", "MongoDB"],
    link: "https://projecta.com"
  },
  {
    name: "项目B",
    description: "一个基于Vue.js的响应式网站",
    image: "/placeholder.svg?height=200&width=300",
    techStack: ["Vue.js", "Vuex", "SCSS"],
    link: "https://projectb.com"
  },
  {
    name: "项目C",
    description: "使用Python开发的数据分析工具",
    image: "/placeholder.svg?height=200&width=300",
    techStack: ["Python", "Pandas", "Matplotlib"],
    link: "https://projectc.com"
  }
]

export default function Projects() {
  return (
    <section id="projects" className="py-12 bg-gray-100 dark:bg-gray-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-white">项目展示</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-2">
              <Image
                src={project.image}
                alt={project.name}
                width={300}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{project.name}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech, i) => (
                    <span key={i} className="px-2 py-1 bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 rounded text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
                >
                  查看项目
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

