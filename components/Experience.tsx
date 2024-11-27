import { useState } from 'react'

const experiences = [
  {
    company: "公司A",
    position: "高级开发工程师",
    period: "2020年1月 - 至今",
    achievements: [
      "领导了一个5人团队,成功开发并上线了公司核心产品",
      "优化了系统性能,使页面加载速度提升了50%",
      "实现了自动化测试,将测试时间缩短了30%"
    ]
  },
  {
    company: "公司B",
    position: "开发工程师",
    period: "2018年3月 - 2019年12月",
    achievements: [
      "参与开发了公司的主要Web应用",
      "实现了响应式设计,提高了移动端用户体验",
      "编写了详细的技术文档,方便了团队协作"
    ]
  }
]

export default function Experience() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="experience" className="py-12 bg-gray-100 dark:bg-gray-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-white">专业经历</h2>
        <div className="space-y-4">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition-all duration-300 ${
                hoveredIndex === index ? 'transform -translate-y-1' : ''
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{exp.company}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-2">{exp.position}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{exp.period}</p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
                {exp.achievements.map((achievement, i) => (
                  <li key={i}>{achievement}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

