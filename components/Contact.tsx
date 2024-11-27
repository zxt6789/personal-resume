import { Mail, MapPin, Github, Linkedin, Twitter, ExternalLink } from 'lucide-react'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export default function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 z-0"></div>
      <div className="container relative z-10">
        <h2 className="section-title text-6xl md:text-7xl font-extrabold mb-12 text-center">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 animate-pulse">
            Contact
          </span>
        </h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-8">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-blue-500/50 transition-shadow duration-300">
              <h3 className="text-2xl font-semibold text-blue-300 mb-4">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="text-blue-400 mr-3" size={24} />
                  <div>
                    <h4 className="font-semibold text-blue-300 text-lg">Email</h4>
                    <a href="mailto:3282044697@qq.com" className="text-gray-300 hover:text-blue-400 transition-colors text-lg">
                      3282044697@qq.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center">
                  <MapPin className="text-blue-400 mr-3" size={24} />
                  <div>
                    <h4 className="font-semibold text-blue-300 text-lg">Office</h4>
                    <p className="text-gray-300 text-lg">School of Aeronautics and Astronautics</p>
                    <p className="text-gray-300 text-lg">University of Electronic Science and Technology of China, Chengdu</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-purple-500/50 transition-shadow duration-300">
              <h3 className="text-2xl font-semibold text-purple-300 mb-4">Connect Online</h3>
              <div className="flex space-x-6">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <a href="https://github.com/zxt6789" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-purple-400 transition-colors">
                        <Github size={32} />
                      </a>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>View my GitHub profile</p>
                    </TooltipContent>
                  </Tooltip>

                  <Tooltip>
                    <TooltipTrigger asChild>
                      <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-purple-400 transition-colors">
                        <Linkedin size={32} />
                      </a>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Connect on LinkedIn</p>
                    </TooltipContent>
                  </Tooltip>

                  <Tooltip>
                    <TooltipTrigger asChild>
                      <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-purple-400 transition-colors">
                        <Twitter size={32} />
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
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-pink-500/50 transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-pink-300 mb-4">Schedule a Meeting</h3>
            <p className="text-gray-300 text-lg mb-4">Interested in collaboration or have questions about my research? Let's schedule a virtual meeting!</p>
            <a 
              href="https://calendly.com/yourusername" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center bg-pink-600 text-white px-6 py-3 rounded-full text-lg hover:bg-pink-700 transition-colors"
            >
              Book a Time Slot
              <ExternalLink className="ml-2" size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
