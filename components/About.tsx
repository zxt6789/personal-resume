import Image from 'next/image'

export default function About() {
  return (
    <section id="about" className="py-12 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <Image
              src="/placeholder.svg?height=300&width=300"
              alt="Your Name"
              width={300}
              height={300}
              className="rounded-full shadow-lg"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">关于我</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              这里是您的个人介绍。描述您的职业规划和价值主张。突出您的优势和独特之处。
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-blue-500 text-white rounded-full text-sm">技能1</span>
              <span className="px-3 py-1 bg-green-500 text-white rounded-full text-sm">技能2</span>
              <span className="px-3 py-1 bg-red-500 text-white rounded-full text-sm">技能3</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

