/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import React from 'react'
import section1 from '@/Assets/section-1.png'
import section2 from '@/Assets/section-2.png'
import section3 from '@/Assets/section-3.png'
import section4 from '@/Assets/section-4.png'
import section5 from '@/Assets/section-5.png'
import section6 from '@/Assets/section-6.png'
import section7 from '@/Assets/section-7.png'
import section8 from '@/Assets/section-8.png'
import section9 from '@/Assets/section-9.png'
import section10 from '@/Assets/section-10.png'
import miniicon1 from '@/Assets/mini-icon-1.png'
import miniicon2 from '@/Assets/mini-icon-2.png'
import miniicon3 from '@/Assets/mini-icon-3.png'
import flames from '@/Assets/flames.png'
import flameicon from '@/Assets/flame-icon.png'
import nighticon from '@/Assets/night-icon.png'
import wired from '@/Assets/wired-logo.png'
import verge from '@/Assets/verge-logo.png'
import usaToday from '@/Assets/USAToday-logo.png'
import cnet from '@/Assets/CNet-logo.png'
import { CircleArrowRight } from 'lucide-react'
import { FaAppStore, FaDownload, FaGooglePlay} from 'react-icons/fa'
import { FaStar } from 'react-icons/fa6'
import Accordion from '../accordion/accordion'
import Footer from '@/components/footer/footer'
import accordionData from '@/Assets/mocks/mockup.json'
import mockup from '@/Assets/mocks/mockup.json'

const Content = () => {
  return (
    <div className="flex flex-col h-full w-full">
      <div className='flex flex-grow justify-around items-center m-24'>
        <div className="mr-65 max-w-[30%]">
          <h2 className='text-4xl font-bold'>{mockup.sections.section1.title}</h2>
          <h3 className='text-base font-normal'>{mockup.sections.section1.subtitle}</h3>
          <h4 className='text-xs font-light'>{mockup.sections.section1.details}</h4>
        </div>
        <div>
          <Image src={section1} alt='orbits icons' width={600} />
        </div>
      </div>
      <div className='flex flex-grow justify-around items-center m-24'>
          <div className="mr-65 max-w-[30%]">
            <h5 className='text-xs font-mono text-orange-50/70'>{mockup.sections.section2.title}</h5>
              <h2 className='text-4xl font-bold'>{mockup.sections.section2.subtitle}</h2>
              <h3 className='text-base font-normal'>{mockup.sections.section2.label}</h3>
              <h3 className='flex flex-grow text-sky-700'><CircleArrowRight className='-rotate-45 mr-2'/>{mockup.sections.section2.linkText}</h3>
              
          </div>
          <div className="">
              <Image src={section2} alt='orbits icons' width={600}/>
          </div>
      </div>
      <div className='flex flex-grow justify-around items-center m-24'>
          <div className="order-2 mr-65 max-w-[30%]">
              <h5 className='text-xs font-mono text-orange-50/70'>{mockup.sections.section3.label}</h5>
              <h2 className='text-4xl font-bold mb-2'>{mockup.sections.section3.title}</h2>
              <h3 className='text-base font-normal mb-2'>{mockup.sections.section3.subtitle}</h3>
              <h3 className='flex flex-grow text-sky-700'><CircleArrowRight className='-rotate-45 mr-2'/>{mockup.sections.section3.linkText}</h3>
          </div>
          <div className="order-1">
              <Image src={section3} alt='orbits icons' width={600} />
          </div>
      </div>
      <div className='flex flex-grow justify-around items-center m-24'>
          <div className="order-1 mr-65 max-w-[30%]">
              <h5 className='text-xs font-mono text-orange-50/70'>{mockup.sections.section4.label}</h5>
              <h2 className='text-4xl font-bold mb-2'>{mockup.sections.section4.title}
                <span className='bg-amber-400 p-0.5 rounded-lg text-xs font-bold text-zinc-950 ml-2 px-2 py-1'>{mockup.sections.section4.beta}</span></h2>
              <h3 className='text-base font-normal mb-2'>{mockup.sections.section4.subtitle}</h3>
              <h3 className='flex flex-grow text-sky-700'><CircleArrowRight className='-rotate-45 mr-2'/>{mockup.sections.section4.linkText}</h3>
          </div>
          <div className="order-2">
              <Image src={section4} alt='orbits icons' width={600} />
          </div>
      </div>
      <div className='flex flex-grow justify-around items-center m-24'>
          <div className="order-2 mr-65 max-w-[30%]">
              <h5 className='text-xs font-mono text-orange-50/70'>{mockup.sections.section5.label}</h5>
              <h2 className='text-4xl font-bold mb-2'>{mockup.sections.section5.title}<span className='bg-amber-400 p-0.5 rounded-lg text-xs font-bold text-zinc-950 ml-2 px-2 py-1'>{mockup.sections.section5.beta}</span></h2>
              <h3 className='text-base font-normal mb-2'>{mockup.sections.section5.subtitle}</h3>
              <h3 className='flex flex-grow text-sky-700'><CircleArrowRight className='-rotate-45 mr-2'/>{mockup.sections.section5.linkText}</h3>
          </div>
          <div className="order-1">
              <Image src={section5} alt='orbits icons' width={600} />
          </div>
      </div>
      <div className='flex flex-grow justify-around items-center m-24'>
          <div className="order-2 mr-65 max-w-[30%]">
              <h5 className='text-xs font-mono text-orange-50/70'>{mockup.midsection.label}</h5>
              <h2 className='text-4xl font-bold mb-2'>{mockup.midsection.title}
              </h2>
              <h3 className='text-base font-normal mb-2'>{mockup.midsection.subtitle}</h3>
              <h3 className='flex flex-grow text-sky-700'><CircleArrowRight className='-rotate-45 mr-2'/>{mockup.midsection.linkText}</h3>
          </div>
          
          <div className="flex flex-col justify-center items-start">
            <div className="flex flex-grow justify-center">
                <div className="bg-white/25 rounded-md w-36 h-40 m-2 h-120 p-3">
                  <Image src={miniicon1} alt='website icon' className='w-10 pb-1' />
                  <h3 className='text-xl font-bold'>{mockup.midsection.statistics[0].percentage1}</h3>
                  <h6 className='text-sm font-normal'>{mockup.midsection.statistics[0].description1}</h6>
                </div>
                <div className="bg-white/25 rounded-md w-36 h-40 m-2 h-120 p-3">
                  <Image src={miniicon2} alt='website icon' className='w-10 pb-1' />
                  <h3 className='text-xl font-bold'>{mockup.midsection.statistics[1].percentage2}</h3>
                  <h6 className='text-sm font-normal'>{mockup.midsection.statistics[1].description2}</h6>
                </div>
                <div className="bg-white/25 rounded-md w-36 h-40 m-2 h-120 p-3">
                  <Image src={miniicon3} alt='website icon' className='w-10 pb-1' />
                  <h3 className='text-xl font-bold'>{mockup.midsection.statistics[2].percentage3}</h3>
                  <h6 className='text-sm font-normal'>{mockup.midsection.statistics[2].description3}.</h6>
                </div>
            </div>
            <div className="mr-65 max-w-[40%]">
              <h3 className='text-base font-bold mb-2'>{mockup.midsection.additionalInfo.title}</h3>
              <p className='text-sm font-normal'>T{mockup.midsection.additionalInfo.description}</p>
                <h5 className='text-xs font-mono text-orange-50/70'>{mockup.midsection.additionalInfo.note}</h5>
            </div>
          </div>
      </div>
      <div className='flex flex-grow justify-between items-center m-24'>
      <div className="order-1 flex flex-col justify-center items-end">
            <div className="flex flex-grow justify-center">
              <div className="">
                <Image src={section6} alt='orbits icons' width={600}/>
              </div>
            </div>
            <div className="mr-65 max-w-[40%]">
              <h3 className='text-base font-normal mb-2'>{mockup.sections.section6.title}</h3>
              <p className='text-sm font-normal'>{mockup.sections.section6.description}</p>
            </div>
        </div>
          <div className="flex flex-col justify-center items-start">
            <div className="flex flex-grow justify-center">
              <div className="">
                <Image src={section7} alt='orbits icons' width={450}/>
              </div>
            </div>
            <div className="mr-65 max-w-[40%]">
              <h3 className='text-base font-bold mb-2'>{mockup.sections.section7.title}</h3>
              <p className='text-sm font-normal'>{mockup.sections.section7.description}</p>
            </div>
          </div>
      </div>
      <div className="flex flex-grow justify-center items-center m-24 pt-10 pb-40">
        <div className="flex justify-center items-center flex-col max-w-screen-sm text-center">
          <h2 className='text-4xl mb-4'>It's a myth that companies need to track you to make money.</h2>
          <h3 className='mb-2 font-sans text-base'>DuckDuckGo has been free to use since day one, and
          private search ads have kept us profitable for nearly a decade. When you search for “car” we show you a car ad — it's that simple.</h3>
          <h4 className='flex flex-grow text-sky-600'><CircleArrowRight className='-rotate-45 mr-2'/>See how we make money</h4>
        </div>
      </div>
      <div className="w-full min-h-screen flex flex-col justify-center items-center">
        <div className="w-full flex justify-center m-0 p-0">
          <Image src={flames} alt="orbits icons" className="w-full h-auto object-cover" />
        </div>
        <div className="bg-gradient-to-b from-[#FFD43F] via-[#FE8F3F] via-[#46008B] via-[#2B0055] to-[#2B0055] w-full flex flex-col justify-center items-center p-0 m-0">
          <h2 className="text-center text-black text-6xl font-bold w-1/2 pt-20 pb-10">
            Get the same Internet, but with more privacy.
          </h2>

          <div className="flex flex-wrap justify-center">
          <div className="flex flex-col items-center mr-3 space-y-3">
              <div className="flex justify-center items-center bg-white/75 rounded-md w-[450px] h-[270px]">
                <Image src={section8} alt="website icon" className="p-3" />
              </div>
              <div className="flex flex-col bg-white/75 rounded-md w-[450px] h-[317px] justify-center items-center">
              {mockup.sections.section8.content.map((text, index) => (
                    <h3
                      key={index}
                      className={`p-2 font-semibold text-black/65 ${
                        text === "Tracker Blocking" ? "text-xl font-extrabold text-black" : ""
                      }`}
                    >
                      {text}
                    </h3>
                  ))}
              </div>
            </div>

            <div className="flex justify-center flex-row">
              <div className="flex bg-white/75 rounded-md mr-3 w-[280px] flex-col justify-start items-center text-black">
                <Image src={section9} alt="website icon" className="w-5/6 h-4/6" />
                <Image src={flameicon} alt="flame icon" className="pt-6" />
                <h3 className="font-bold text-lg pt-2">Burn After Reading</h3>
                <p className="font-normal text-sm text-center w-2/3">
                  Clear your tabs and browsing data with one tap of the Fire Button.
                </p>
              </div>
              <div className="flex bg-white/75 rounded-md w-[280px] bg-gradient-to-b from-[#3A0C74] to-[#000585] flex-col justify-end items-center">
                <Image src={nighticon} alt="night mode icon" className="pb-4" />
                <h3 className="font-bold text-lg pb-6">Dark Mode</h3>
                <Image src={section10} alt="website icon" className="w-5/6 h-4/6" />
              </div>
            </div>
          </div>

          <div className="bg-zinc-900/50 flex flex-grow w-[1037px] mt-16 rounded-md">
            <div className="w-2/3 m-4">
              <h3 className='flex justify-center items-center font-semibold text-lg h-1/3'> Trusted by tens of millions worldwide!</h3>
              <div className="flex flex-grow justify-center items-center m-2">
                <div className="m-5">
                  <h3 className='font-semibold'>100%</h3>
                  <p className='font-light text-xs'>Free</p>
                </div>
                <div className="border-l border-gray-300/50 h-12 mx-4" />
                <div className="m-5">
                  <h3 className='font-semibold'>3 Billion</h3>
                  <p className='font-light text-xs'>Monthly Searches</p>
                </div>
                <div className="border-l border-gray-300/50 h-12 mx-4" />
                <div className="m-5">
                  <h3 className='font-semibold'>6 Million</h3>
                  <p className='font-light text-xs'>Monthly Downloads</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-1/3">
              <div className="bg-stone-900 h-1/2 flex flex-col justify-center items-center rounded-md p-3">
                <h3 className="text-center">Get our free browser today</h3>
                <div className="bg-indigo-400 rounded-md text-black flex flex-grow p-2 justify-center items-center mt-2">
                  <FaDownload size={10} className='mr-2'/> Download DuckDuckGo Browser
                </div>
              </div>
              <div className="bg-zinc-400/20 flex flex-row justify-center items-center h-full">
                <div className="m-2">
                  <div className="bg-slate-50 rounded-md flex justify-center items-center text-black p-1 font-normal text-sm mr-4">
                    <FaAppStore className='mr-2'/> App Store
                  </div>
                  <div className="flex flex-col">
                    <h2 className='flex flex-grow text-xs font-medium m-1'><FaStar size={12}/><FaStar size={12}/><FaStar size={12}/><FaStar size={12}/><FaStar size={12}/> 4.9</h2>
                    <h3 className='font-extralight text-xs text-white/65'>1.5 Millions Ratings</h3>
                  </div>
                </div>

                <div className="">
                <div className="bg-slate-50 rounded-md flex justify-center items-center text-black p-1 font-normal text-sm">
                  <FaGooglePlay className='mr-2'/> Google Play
                </div>
                <div className="flex flex-col">
                    <h2 className='flex flex-grow text-xs font-medium m-1'><FaStar size={12}/><FaStar size={12}/><FaStar size={12}/><FaStar size={12}/><FaStar size={12}/> 4.7</h2>
                    <h3 className='font-extralight text-xs text-white/65'>2 Millions Reviews</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-grow p-4 space-x-2 mt-10">
            <div className="bg-black/30 rounded-md w-[255px]">
              <div className="p-4">
                <h3 className='text-white/80 text-xs mb-4'>
                  {mockup.miniCards[0].text1}
                </h3>
                <div className=" flex flex-grow justify-between items-end">
                <Image src={wired} alt="website icon" className="w-20"/>
                  <CircleArrowRight className='text-white/65 -rotate-45' strokeWidth='2'/>
                </div>
              </div>
            </div>
            <div className="bg-black/30 rounded-md w-[255px]">
              <div className="p-4">
                <h3 className='text-white/80 text-xs mb-4'>
                  {mockup.miniCards[1].text2}
                </h3>
                <div className=" flex flex-grow justify-between">
                  <Image src={verge} alt="website icon" className="w-20" />
                  <CircleArrowRight className='text-white/65 -rotate-45' strokeWidth='2'/>
                </div>
              </div>
            </div>
            <div className="bg-black/30 rounded-md w-[255px]">
              <div className="p-4">
                <h3 className='text-white/80 text-xs mb-4'>
                  {mockup.miniCards[2].text3}
                </h3>
                <div className=" flex flex-grow justify-between">
                <Image src={usaToday} alt="website icon" className="w-16"/>
                  <CircleArrowRight className='text-white/65 -rotate-45' strokeWidth='2'/>
                </div>
              </div>
            </div>
            <div className="bg-black/30 rounded-md w-[255px]">
              <div className="p-4">
                <h3 className='text-white/80 text-xs mb-4'>
                  {mockup.miniCards[3].text4}
                </h3>
                <div className=" flex flex-grow justify-between">
                  <Image src={cnet} alt="website icon" className="w-11" />
                  <CircleArrowRight className='text-white/65 -rotate-45' strokeWidth='2'/>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-grow justify-start mt-10">
            <div className="mr-80">
              <h2 className='text-2xl font-bold mt-10'>Still have questions?</h2>
            </div>
            <div className="max-w-md mt-10">
              {accordionData.accordionItems.map((item, index) => (
                <Accordion key={index} title={item.title} isFirst={index === 0}>
                  <p dangerouslySetInnerHTML={{ __html: item.content }} />
                </Accordion>
              ))}
            </div>
          </div>
          
          <Footer/>
        </div>
      </div>
    </div>
    
  )
}

export default Content