import React, { useState, useEffect } from 'react';
import { Sun, Moon, } from 'lucide-react';
import  logo from './assets/logo.png';
import  nandani from './assets/nandnai.png';


const ProteinCoffeeWebsite = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Target date: October 1, 2025
  const targetDate = new Date('2025-10-01T00:00:00').getTime();

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const CountdownCard = ({ value, label }: { value: number; label: string }) => (
      <div className="bg-white/10 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20 dark:border-gray-700/50">
        <div className="text-4xl md:text-5xl font-bold text-amber-600 dark:text-amber-400 mb-2">
          {value.toString().padStart(2, '0')}
        </div>
        <div className="text-sm uppercase tracking-wider text-gray-600 dark:text-gray-300">
          {label}
        </div>
      </div>
  );

  return (
      <div className={`min-h-screen transition-all duration-500 ${darkMode ? 'dark' : ''}`}>
        <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
          {/* Header */}
          <header className="relative z-10 p-6">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
              {/* left section (logo, nav etc.) */}
              <div></div>

              {/* right section */}
              <div className="flex items-center space-x-4 justify-end">
                <a
                    href="https://dopaminefits.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400 transition-colors duration-300"
                >
                  Say hello! dopaminefits.com
                </a>

                <button
                    onClick={toggleTheme}
                    className="p-2 rounded-full bg-white/20 dark:bg-gray-800/50 backdrop-blur-sm border border-white/30 dark:border-gray-700/50 hover:bg-white/30 dark:hover:bg-gray-700/50 transition-all duration-300"
                >
                  {darkMode ? (
                      <Sun className="w-5 h-5 text-yellow-500" />
                  ) : (
                      <Moon className="w-5 h-5 text-gray-700" />
                  )}
                </button>
              </div>
            </div>
          </header>



          {/* Main Content */}
          <main className="max-w-7xl mx-auto">
            {/* Hero Section */}
            <section className="text-center ">

              <div className="flex justify-center items-center">
                <img
                    src={logo}
                    alt="Dopamine Fits logo"
                    width={300}
                    height={200}
                    loading="lazy"
                />
              </div>
              <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
          <span className="bg-gradient-to-r from-amber-600 via-orange-600 to-red-500 bg-clip-text text-transparent">
            DopamineFits
          </span>
                <br/>
                <span className="text-gray-800 dark:text-white">
            Coming Soon
          </span>
              </h1>

              {/* Countdown Timer */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto mb-12">
                <CountdownCard value={timeLeft.days} label="Days"/>
                <CountdownCard value={timeLeft.hours} label="Hours"/>
                <CountdownCard value={timeLeft.minutes} label="Minutes"/>
                <CountdownCard value={timeLeft.seconds} label="Seconds"/>
              </div>

              <div className="max-w-2xl mx-auto">
                <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                  At Protein Coffee, we believe the best brews are born from fresh insights and breaking traditional
                  boundaries.
                  We're here to redefine your coffee experience—bold in flavor, rich in protein.
                </p>
              </div>
            </section>


            {/* Team Section */}
            <section className="bg-white dark:bg-transparent">
              <div className="container px-6 py-10 mx-auto">
                <div className="lg:-mx-6 lg:flex lg:items-center">
                  <img className="object-cover object-center lg:w-1/2 lg:mx-6 w-full h-96 rounded-lg lg:h-[36rem]"
                       src={nandani}
                       alt=""/>

                  <div className="mt-8 lg:w-1/2 lg:px-6 lg:mt-0">

                    <h1 className="text-2xl font-semibold text-gray-800 dark:text-white lg:text-3xl lg:w-96">
                      Help us improve our productivity
                    </h1>

                    <p className="max-w-lg mt-6 text-gray-500 dark:text-gray-400 ">
                      created this brand to fuel your hustle with high-protein, guilt-free indulgence. Every sip blends bold flavor with smart nutrition—because you deserve both.
                    </p>

                    <h3 className="mt-6 text-lg font-medium text-blue-500">Nandani Batra</h3>
                    <p className="text-gray-600 dark:text-gray-300">Founder</p>
                  </div>
                </div>
              </div>
            </section>

          </main>
          <footer className="flex justify-center px-4 text-gray-800 bg-white dark:text-white dark:bg-transparent">
            <div className="container px-6 py-6">
              <h1 className="text-lg font-bold text-center lg:text-2xl">
                Join 300+ other and never miss <br/> out on new tips, tutorials, and more.
              </h1>

              <div className="flex flex-col justify-center mx-auto mt-6 space-y-3 md:space-y-0 md:flex-row">
                <input id="email" type="text"
                       className="px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300"
                       placeholder="Email Address"/>

                <button
                    className="w-full px-6 py-2.5 text-sm font-medium tracking-wider text-white transition-colors duration-300 transform md:w-auto md:mx-4 focus:outline-none bg-gray-800 rounded-lg hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80">
                  Subscribe
                </button>
              </div>

              <hr className="h-px bg-gray-200 border-none my-7 dark:bg-gray-700"/>

              <div className="flex flex-col items-center justify-between md:flex-row">
                <a
                    href="https://dopaminefits.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400 transition-colors duration-300"
                >
                  Say hello! dopaminefits.com
                </a>

                <div className="flex mt-4 md:m-0">
                  <div className="-mx-4">
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a href="#"
                       className="px-4 text-sm text-gray-600 transition-colors duration-300 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 hover:underline">About</a>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a href="#"
                       className="px-4 text-sm text-gray-600 transition-colors duration-300 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 hover:underline">Blog</a>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a href="#"
                       className="px-4 text-sm text-gray-600 transition-colors duration-300 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 hover:underline">News</a>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a href="#"
                       className="px-4 text-sm text-gray-600 transition-colors duration-300 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 hover:underline">Contact</a>
                  </div>
                </div>
              </div>
            </div>
          </footer>

          {/* Background Elements */}
          <div className="fixed inset-0 overflow-hidden pointer-events-none">
            <div
                className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-amber-300/20 to-orange-300/20 rounded-full blur-3xl animate-pulse"></div>
            <div
                className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-yellow-300/20 to-red-300/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-amber-200/10 to-orange-200/10 rounded-full blur-3xl animate-pulse delay-500"></div>
          </div>
        </div>
      </div>
  );
};

export default ProteinCoffeeWebsite;
