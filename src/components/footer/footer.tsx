/* eslint-disable react/no-unescaped-entities */
import React from 'react'

const Footer = () => {
  return (
    <div className="flex flex-col p-4 m-10">
        <hr className="border-gray-300/20 my-4" />
    <div className="flex flex-grow justify-center items-start mb-4"> {/* Alterado para justify-center */}
        <div className="flex flex-col mx-4 w-1/6"> {/* Adicionando mx-4 para espaçamento */}
            <h3 className="text-sm font-thin mb-2">LEARN MORE</h3>
            <a href="#" className="text-indigo-500 text-xs mb-1">DuckDuckGo Browser</a>
            <a href="#" className="text-indigo-500 text-xs mb-1">Who We Are</a>
            <a href="#" className="text-indigo-500 text-xs mb-1">Privacy Blog</a>
            <a href="#" className="text-indigo-500 text-xs mb-1">Careers</a>
            <a href="#" className="text-indigo-500 text-xs mb-1">Privacy Policy</a>
            <a href="#" className="text-indigo-500 text-xs mb-1">Terms of Service</a>
        </div>
        <div className="flex flex-col mx-4 w-1/6"> {/* Alterado para manter a mesma largura */}
            <h3 className="text-sm font-thin mb-2">OTHER RESOURCES</h3>
            <a href="#" className="text-indigo-500 text-xs mb-1">What’s New</a>
            <a href="#" className="text-indigo-500 text-xs mb-1">Help</a>
            <a href="#" className="text-indigo-500 text-xs mb-1">Privacy Newsletter</a>
            <a href="#" className="text-indigo-500 text-xs mb-1">Spread DuckDuckGo</a>
            <a href="#" className="text-indigo-500 text-xs mb-1">Press Kit</a>
            <a href="#" className="text-indigo-500 text-xs mb-1">Advertise on Search</a>
        </div>
        <div className="flex flex-col mx-4 w-2/6"> {/* Alterado para manter a mesma largura */}
            <h3 className="text-sm font-thin mb-2">ABOUT DUCKDUCKGO</h3>
            <p className="text-xs">
                DuckDuckGo is the independent Internet privacy company for anyone who’s tired of being tracked
                online and wants an easy solution. Unlike Chrome and other browsers, our free, go-to browser
                comes with over a dozen powerful privacy protections built-in, including our search engine that
                replaces Google and doesn't track your search history. The DuckDuckGo browser’s uniquely
                <span className="text-indigo-500">comprehensive privacy protections</span> are used by tens of millions of people to protect their everyday
                online activities, from searching to browsing, emailing, and more. Available for download on <span className="text-indigo-500">Mac,
                Windows, iOS</span>, and <span className="text-indigo-500">Android</span>.
            </p>
        </div>
    </div>
    <hr className="border-gray-300/20 my-4" />
    <div className="text-center flex flex-row justify-center">
        <p className='mr-10'>© 2023 DuckDuckGo</p>
        <p>Privacy, simplified</p>
    </div>
</div>

  )
}

export default Footer