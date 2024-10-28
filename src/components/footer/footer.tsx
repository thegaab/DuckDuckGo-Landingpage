/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import mock from '@/Assets/mocks/mockup.json'

const Footer = () => {
  return (
    <div className="flex flex-col p-4 m-10">
      <hr className="border-gray-300/20 my-4" />
      <div className="flex flex-grow justify-center items-start mb-4">
        {mock.footerSections.map((section, index) => (
          <div key={index} className="flex flex-col mx-4 w-1/6">
            <h3 className="text-sm font-thin mb-2">{section.title}</h3>
            {section.links ? (
              section.links.map((link, idx) => (
                <a key={idx} href={link.url} className="text-indigo-500 text-xs mb-1">
                  {link.text}
                </a>
              ))
            ) : (
              <p className="text-xs" dangerouslySetInnerHTML={{ __html: section.description }} />
            )}
          </div>
        ))}
        <div className="flex flex-col mx-4 w-2/6">
          <h3 className="text-sm font-thin mb-2">ABOUT DUCKDUCKGO</h3>
          <p className="text-xs" dangerouslySetInnerHTML={{ __html: mock.footerSections[2].description || '' }} />
        </div>
      </div>
      <hr className="border-gray-300/20 my-4" />
      <div className="text-center flex flex-row justify-center">
        <p className='mr-10'>{mock.footerInfo.text1}</p>
        <p>{mock.footerInfo.text2}</p>
      </div>
    </div>
  )
}

export default Footer;
