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
import Footer from '../footer/footer'

const Content = () => {
  return (
    <div className="flex flex-col h-full w-full">
      <div className='flex flex-grow justify-around items-center m-24'>
          <div className="mr-65 max-w-[30%]">
              <h2 className='text-4xl font-bold'>One super⚡charged app, mutiple types of privacy protection</h2>
              <h3 className='text-base font-normal'>The DuckDuckGo app includes our Web and App Tracking
              Protection, Smarter Encryption, Private Search, Email
              Protection, and more.</h3>
              <h4 className='text-xs font-light'>See app listings for platform-specific details: iOS, Android, Firefox, Chrome, Edge, and Safari.</h4>
          </div>
          <div className="">
              <Image src={section1} alt='orbits icons' width={600}/>
          </div>
      </div>
      <div className='flex flex-grow justify-around items-center m-24'>
          <div className="mr-65 max-w-[30%]">
            <h5 className='text-xs font-mono text-orange-50/70'>SEARCH PROTETION</h5>
              <h2 className='text-4xl font-bold'>Search without being tracked.</h2>
              <h3 className='text-base font-normal'>Other search engines track your every search, from
              where you go to what you buy. We don't track you. Ever.</h3>
              <h3 className='flex flex-grow text-sky-700'><CircleArrowRight className='-rotate-45 mr-2'/> Learn more</h3>
              
          </div>
          <div className="">
              <Image src={section2} alt='orbits icons' width={600}/>
          </div>
      </div>
      <div className='flex flex-grow justify-around items-center m-24'>
          <div className="order-2 mr-65 max-w-[30%]">
              <h5 className='text-xs font-mono text-orange-50/70'>Web Tracking Protection</h5>
              <h2 className='text-4xl font-bold mb-2'>Stop creepy tracking from Facebook and Google.</h2>
              <h3 className='text-base font-normal mb-2'>DuckDuckGo's powerful tracker blocking stops most trackers before they even load, evading hidden data collectors and speeding up websites.</h3>
              <h3 className='flex flex-grow text-sky-700'><CircleArrowRight className='-rotate-45 mr-2'/> Learn more</h3>
          </div>
          <div className="order-1">
              <Image src={section3} alt='orbits icons' width={600} />
          </div>
      </div>
      <div className='flex flex-grow justify-around items-center m-24'>
          <div className="order-1 mr-65 max-w-[30%]">
              <h5 className='text-xs font-mono text-orange-50/70'>App Tracking Protection</h5>
              <h2 className='text-4xl font-bold mb-2'>Intercept and remove email trackers.<span className='bg-amber-400 p-0.5 rounded-lg text-xs font-bold text-zinc-950 ml-2 px-2 py-1'>BETA!</span></h2>
              <h3 className='text-base font-normal mb-2'>85% of emails sent through Duck Addresses contained
                hidden email trackers before we stripped them out. Email
                Protection zaps most trackers and forwards email to your
                regular inbox so you can read in peace.</h3>
              <h3 className='flex flex-grow text-sky-700'><CircleArrowRight className='-rotate-45 mr-2'/> Learn more</h3>
          </div>
          <div className="order-2">
              <Image src={section4} alt='orbits icons' width={600} />
          </div>
      </div>
      <div className='flex flex-grow justify-around items-center m-24'>
          <div className="order-2 mr-65 max-w-[30%]">
              <h5 className='text-xs font-mono text-orange-50/70'>App Tracking Protection</h5>
              <h2 className='text-4xl font-bold mb-2'>Block app trackers, day or night.<span className='bg-amber-400 p-0.5 rounded-lg text-xs font-bold text-zinc-950 ml-2 px-2 py-1'>BETA!</span></h2>
              <h3 className='text-base font-normal mb-2'>Over 96% of popular free Android apps we tested allow
                other companies to invade your privacy, like using your
                location to map everywhere you go. Stop most of their
                spying and take back control on Android!</h3>
              <h3 className='flex flex-grow text-sky-700'><CircleArrowRight className='-rotate-45 mr-2'/> Learn more</h3>
          </div>
          <div className="order-1">
              <Image src={section5} alt='orbits icons' width={600} />
          </div>
      </div>
      <div className='flex flex-grow justify-around items-center m-24'>
          <div className="order-2 mr-65 max-w-[30%]">
              <h5 className='text-xs font-mono text-orange-50/70'>App Tracking Protection</h5>
              <h2 className='text-4xl font-bold mb-2'>Google, Facebook, and other companies make your personal data their product.
              </h2>
              <h3 className='text-base font-normal mb-2'>Even everyday online activities like purchasing
                groceries or looking up the local weather can result
                in dozens of companies tracking you.</h3>
              <h3 className='flex flex-grow text-sky-700'><CircleArrowRight className='-rotate-45 mr-2'/> Learn more</h3>
          </div>
          
          <div className="flex flex-col justify-center items-start">
            <div className="flex flex-grow justify-center">
                <div className="bg-white/25 rounded-md w-36 h-40 m-2 h-120 p-3">
                  <Image src={miniicon1} alt='website icon' className='w-10 pb-1' />
                  <h3 className='text-xl font-bold'>85%</h3>
                  <h6 className='text-sm font-normal'>of popular sites
                    have third-party
                    trackers.</h6>
                </div>
                <div className="bg-white/25 rounded-md w-36 h-40 m-2 h-120 p-3">
                  <Image src={miniicon2} alt='website icon' className='w-10 pb-1' />
                  <h3 className='text-xl font-bold'>85%</h3>
                  <h6 className='text-sm font-normal'>of emails have
                    third-party
                    trackers.</h6>
                </div>
                <div className="bg-white/25 rounded-md w-36 h-40 m-2 h-120 p-3">
                  <Image src={miniicon3} alt='website icon' className='w-10 pb-1' />
                  <h3 className='text-xl font-bold'>96%</h3>
                  <h6 className='text-sm font-normal'>of popular
                    Android apps
                    have third-party
                    trackers.</h6>
                </div>
            </div>
            <div className="mr-65 max-w-[40%]">
              <h3 className='text-base font-bold mb-2'>Trackers lurk nearly everywhere.</h3>
              <p className='text-sm font-normal'>Trackers can pick up your location history, search history,
                  browsing history, and more, inferring your age, ethnicity,
                  gender, interests, and habits.</p>
                <h5 className='text-xs font-mono text-orange-50/70'>† Based on research for Web, Email, Apps.</h5>
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
              <h3 className='text-base font-normal mb-2'>They auction off your data to the highest bidder.</h3>
              <p className='text-sm font-normal'>Companies use your data to create detailed profiles about you
                that even include info on your friends and families. This lets
                companies follow us around with ads so creepy it can seem
                like our devices are listening in on our conversations (even
                when they aren't).</p>
            </div>
        </div>
          <div className="flex flex-col justify-center items-start">
            <div className="flex flex-grow justify-center">
              <div className="">
                <Image src={section7} alt='orbits icons' width={450}/>
              </div>
            </div>
            <div className="mr-65 max-w-[40%]">
              <h3 className='text-base font-bold mb-2'>They're doing more than just following you around
              with creepy ads.</h3>
              <p className='text-sm font-normal'>These profiles are used to influence what you see online, and
                can lead to manipulation and discrimination based on what
                they know about you.</p>
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
        <div className="bg-gradient-to-b from-[#FFD43F] via-[#FE8F3F] via-[#46008B] to-[#2B0055] w-full flex flex-col justify-center items-center p-0 m-0">
          <h2 className="text-center text-black text-6xl font-bold w-1/2 pt-20 pb-10">
            Get the same Internet, but with more privacy.
          </h2>

          <div className="flex flex-wrap justify-center">
          <div className="flex flex-col items-center mr-3 space-y-3">
              <div className="flex justify-center items-center bg-white/75 rounded-md w-[450px] h-[270px]">
                <Image src={section8} alt="website icon" className="p-3" />
              </div>
              <div className="flex bg-white/75 rounded-md w-[450px] h-[317px] justify-center items-center">
                <div className="flex flex-col text-black text-center">
                  <h3 className="p-2 font-semibold text-black/65">Voice Search, Favorites, Downloads</h3>
                  <h3 className="p-2 font-semibold text-black/65">Bookmarks, Smarter Encryption</h3>
                  <h3 className="text-xl font-extrabold">Tracker Blocking</h3>
                  <h3 className="p-2 font-semibold text-black/65">Local search! Bang shortcuts</h3>
                  <h3 className="p-2 font-semibold text-black/65">App Lock, Custom Themes, Maps</h3>
                </div>
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
                  The company best known for
                  its search engine is launching a
                  new set of tools aimed at
                  creating an ‘easy button’ for
                  protecting your data online.
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
                  The company best known for
                  its search engine is launching a
                  new set of tools aimed at
                  creating an ‘easy button’ for
                  protecting your data online.
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
                  The company best known for
                  its search engine is launching a
                  new set of tools aimed at
                  creating an ‘easy button’ for
                  protecting your data online.
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
                  The company best known for
                  its search engine is launching a
                  new set of tools aimed at
                  creating an ‘easy button’ for
                  protecting your data online.
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
              <Accordion title="What is DuckDuckGo?" isFirst>
                <p>DuckDuckGo is an independent Internet privacy company that aims to make getting privacy
                  simple and accessible for everyone. Our free web browser for iOS, Android, Mac, and
                  Windows lets you search and browse the web, but — unlike Google Search and Chrome —
                  we don’t track your searches or browsing history, and we block other companies from trying
                  to track you, all by default. Learn more.</p>
              </Accordion>
              <Accordion title="How does DuckDuckGo protect my privacy?2">
                <p>How does DuckDuckGo protect my privacy?</p>
              </Accordion>
              <Accordion title="Does DuckDuckGo block all trackers on websites I visit?">
                <p>Does DuckDuckGo block all trackers on websites I visit?</p>
              </Accordion>
              <Accordion title="How many people use DuckDuckGo?">
                <p>How many people use DuckDuckGo?</p>
              </Accordion>
              <Accordion title="How does DuckDuckGo make money?">
                <p>How does DuckDuckGo make money?</p>
              </Accordion>
              <Accordion title="Why use DuckDuckGo instead of Google?">
                <p>Why use DuckDuckGo instead of Google?</p>
              </Accordion>
              <Accordion title="Is Incognito mode private?">
                <p>Is Incognito mode private?</p>
              </Accordion>
              <Accordion title="How do DuckDuckGo Search results compare to Google's?">
                <p>How do DuckDuckGo Search results compare to Google's?</p>
              </Accordion>
              <Accordion title="Is DuckDuckGo owned by Google or any other entity?">
                <p>Is DuckDuckGo owned by Google or any other entity?</p>
              </Accordion>
            </div>
          </div>
          
          <Footer/>
        </div>
      </div>
    </div>
    
  )
}

export default Content