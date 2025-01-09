import { ChevronDown } from 'lucide-react'
import React, { useState } from 'react'
import chat from '../assets/chat.png'
import query from '../assets/query.png'
import Question from '../assets/question.png'
import social from '../assets/social.png'
import telegram from '../assets/telegram.png'
import travelGuide from '../assets/travelGuide.png'
import wave2 from '../assets/wave-2.png'
import whatsapp from '../assets/whatsapp.png'
import freshChat from '../assets/freshChat.png'
import meta from '../assets/meta.png'
import insta from '../assets/insta.png'
import twitter from '../assets/twitter.png'
import linkedin from '../assets/linkedin.png'
import Header from '../components/Header'

export default function HelpPage() {
  const [openSection, setOpenSection] = useState('')

  const toggleSection = (section) => {
    if (openSection === section) {
      setOpenSection('')
    } else {
      setOpenSection(section)
    }
  }

  return ( 
    <div>
    <Header />
    <div className="min-h-screen bg-white pt-20 border-gray-800 relative">
      <img src={wave2} alt="Background" className="absolute inset-0 w-full h-3/2 object-cover" />

      <div className="relative max-w-[1400px] mx-auto px-4 md:px-72 py-8">
        <div className="text-center mb-8">
          <h1 className="text-2xl md:text-4xl font-bold mb-2 text-blue-950">Hello, how can we help you?</h1>
          <p className="text-gray-600">Find Travel guide, FAQ, chat...</p>
        </div>
        {/* faq & Travel Guide  */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 mt-24">
          <div className="bg-white rounded-lg p-6 flex items-center gap-4 shadow-xl">
            <div className="w-12 h-12 rounded-full flex items-center justify-center">
              <img src={Question} alt="" />
            </div>
            <div>
              <h3 className="font-semibold mb-1 text-black">FAQ</h3>
              <p className="text-sm text-gray-600">Most frequently asked questions</p>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 flex items-center gap-4 shadow-xl">
            <div className="w-12 h-12 rounded-full flex items-center justify-center">
              <img src={travelGuide} alt="" />
            </div>
            <div>
              <h3 className="font-semibold mb-1 text-black">Travel Guide</h3>
              <p className="text-sm text-gray-600">Everything you need to know</p>
            </div>
          </div>
        </div>

        <div className="space-y-6 max-w-4xl mx-auto">
          {/* Chat Section */}
          <div className="bg-white rounded-lg shadow-xl">
            <button 
              onClick={() => toggleSection('chat')}
              className="w-full p-6 flex items-center justify-between bg-white text-black"
            >
              <div className="flex items-center gap-2">
                <img src={chat} alt="" />
                <div>
                  <h3 className="font-semibold mb-1 text-black lg:mr-64">Chat</h3>
                  <p className="text-sm text-gray-500 lg:ml-14">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                </div>
              </div>
              <ChevronDown 
                className={`transition-transform ${openSection === 'chat' ? 'rotate-180' : ''}`}
              />
            </button>

            {openSection === 'chat' && (
              <div className="p-6 pt-9">
                <div className="flex flex-wrap gap-4 justify-center">
                  <div className="flex flex-col items-center">
                    <img src={telegram} alt="" className="w-8 h-8 rounded-full flex items-center justify-center text-white" />
                    <p className='text-black text-[12px] mt-2'>Telegram</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <img src={whatsapp} alt="" className="w-8 h-8 rounded-full flex items-center justify-center text-white" />
                    <p className='text-black text-[12px] mt-2'>WhatsApp</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <img src={freshChat} alt="" className="w-8 h-8 rounded-full flex items-center justify-center text-white" />
                    <p className='text-black text-[12px] mt-2'>FreshChat</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Social Section */}
          <div className="bg-white rounded-lg shadow-xl">
            <button 
              onClick={() => toggleSection('social')}
              className="w-full p-6 flex items-center justify-between bg-white text-black"
            >
              <div className="flex items-center gap-2">
                <img src={social} alt="" />
                <div>
                  <h3 className="font-semibold mb-1 text-black">Social</h3>
                  <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                </div>
              </div>
              <ChevronDown 
                className={`transition-transform ${openSection === 'social' ? 'rotate-180' : ''}`}
              />
            </button>

            {openSection === 'social' && (
              <div className="p-6 pt-9">
                <div className="flex flex-wrap gap-4 justify-center">
                  <div className="flex flex-col items-center">
                    <img src={meta} alt="" className="w-8 h-8 flex items-center justify-center text-white" />
                  </div>
                  <div className="flex flex-col items-center">
                    <img src={insta} alt="" className="w-8 h-8 flex items-center justify-center text-white" />
                  </div>
                  <div className="flex flex-col items-center">
                    <img src={twitter} alt="" className="w-8 h-8 flex items-center justify-center text-white" />
                  </div>
                  <div className="flex flex-col items-center">
                    <img src={linkedin} alt="" className="w-8 h-8 flex items-center justify-center text-white" />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Send Query Section */}
          <div className="bg-white rounded-lg shadow-xl">
            <button 
              onClick={() => toggleSection('query')}
              className="w-full p-6 flex items-center justify-between bg-white text-black"
            >
              <div className="flex items-center gap-2">
                <img src={query} alt="" />
                <div>
                  <h3 className="font-semibold mb-1 text-black">Send Query</h3>
                  <p className="text-sm text-gray-500">Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
                </div>
              </div>
              <ChevronDown 
                className={`transition-transform ${openSection === 'query' ? 'rotate-180' : ''}`}
              />
            </button>
            {openSection === 'query' && (
              <div className="p-6 pt-9">
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Name"
                      className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 bg-white"
                    />
                    <input
                      type="email"
                      placeholder="Email"
                      className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 bg-white"
                    />
                  </div>
                  <input
                    type="text"
                    placeholder="Subject"
                    className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 bg-white"
                  />
                  <input
                    type="text"
                    placeholder="Order No."
                    className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 bg-white"
                  />
                  <textarea
                    placeholder="Your Query"
                    rows={4}
                    className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 bg-white"
                  ></textarea>
                  <button
                    type="submit"
                    className="w-full md:w-48 bg-pink-500 text-white py-2 rounded-lg hover:bg-pink-600 transition-colors"
                  >
                    Submit
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}
