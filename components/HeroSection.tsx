import Image from 'next/image'
import { Mail, FileText, Github, Linkedin, Twitter } from 'lucide-react'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export default function HeroSection() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center bg-gray-900 bg-opacity-50 bg-[url('/ai-background.jpg')] bg-cover bg-center bg-blend-overlay">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <Image
              src="/your-image.jpg"
              alt="Xirui Li"
              width={300}
              height={300}
              className="rounded-full border-4 border-blue-500 shadow-lg shadow-blue-500/50"
            />
          </div>
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
              Xirui Li
            </h1>
            <h2 className="text-2xl md:text-3xl text-blue-300 mb-4">AI Researcher | Reinforcement Learning Specialist</h2>
            <p className="text-lg text-gray-300 mb-6 max-w-2xl">
              Pushing the boundaries of AI and reinforcement learning to solve complex real-world problems and shape the future of intelligent systems.
            </p>
            <div className="flex justify-center md:justify-start space-x-4 mb-6">
              <a href="#publications" className="bg-blue-600 text-white px-6 py-2 rounded-full text-sm hover:bg-blue-700 transition-colors">
                View Publications
              </a>
              <a href="/Xurui_Liu_CV.pdf" download className="bg-transparent border-2 border-blue-400 text-blue-400 px-6 py-2 rounded-full text-sm hover:bg-blue-400 hover:text-white transition-colors">
                Download CV
              </a>
            </div>
            <div className="flex justify-center md:justify-start space-x-4">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <a href="mailto:3282044697@qq.com" className="text-gray-300 hover:text-blue-400 transition-colors">
                      <Mail size={24} />
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Send me an email</p>
                  </TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <a href="https://github.com/zxt6789" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-colors">
                      <Github size={24} />
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>View my GitHub profile</p>
                  </TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-colors">
                      <Linkedin size={24} />
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Connect on LinkedIn</p>
                  </TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-colors">
                      <Twitter size={24} />
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Follow me on Twitter</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
