import React, { useState, useEffect } from "react";
import {Sun, Moon, Instagram, Facebook, Twitter} from "lucide-react";
import  logo from './assets/logo.png';
import  nandani from './assets/nandni.jpg';

const ProteinCoffeeWebsite = () => {
  const [darkMode, setDarkMode] = useState(true);

  // Target date: October 1, 2025
  const targetDate = new Date("2025-10-01T00:00:00").getTime();

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;
      if (distance > 0) {
        // countdown logic if needed
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  // Apply theme to <html> element
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleTheme = () => setDarkMode(!darkMode);

  return (
      <div className="min-h-screen transition-all duration-500">
        <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 text-gray-800 dark:text-gray-100 transition-colors duration-500">
          {/* Header */}
          <header className="relative z-10 p-6">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
              <div></div>

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

          {/* Main content */}
          <main className="max-w-7xl mx-auto">
            <section className="text-center px-6 py-12">
              <div className="flex justify-center items-center">
                <img
                    src={logo}
                    alt="Dopamine Fits logo"
                    width={300}
                    height={200}
                    loading="lazy"
                />
              </div>


                <div className="text-center">
                  <h1 className="text-8xl font-bold bg-gradient-to-r from-amber-600 via-orange-600 to-red-500 bg-clip-text text-transparent">
                    Dopamine
                  </h1>
                  <p className="text-2xl font-semibold text-gray-300 mt-0">
                    Fits
                  </p>

              </div>

              <div className="max-w-2xl mx-auto">
                <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                  At Protein Coffee, we believe the best brews are born from fresh
                  insights and breaking traditional boundaries. We're here to
                  redefine your coffee experience—bold in flavor, rich in protein.
                </p>
              </div>
            </section>

            {/* Team Section */}
            <section className="bg-white/80 dark:bg-gray-800/60 backdrop-blur-sm rounded-3xl mx-6 shadow-xl mt-12 transition-colors duration-500">
              <div className="container px-6 py-20 mx-auto">
                <div className="lg:-mx-6 lg:flex lg:items-center">
                  <img className="object-cover object-center lg:w-1/2 lg:mx-6 w-full h-96 rounded-lg lg:h-[36rem]"
                       src={nandani}
                       alt=""/>

                  <div className="mt-8 lg:w-1/2 lg:px-6 lg:mt-0">
                    <h1 className="text-2xl font-semibold text-gray-800 dark:text-white lg:text-3xl lg:w-96">
                      Help us improve our productivity
                    </h1>

                    <p className="max-w-lg mt-6 text-gray-600 dark:text-gray-300">
                      Created this brand to fuel your hustle with high-protein,
                      guilt-free indulgence. Every sip blends bold flavor with
                      smart nutrition—because you deserve both.
                    </p>

                    <h3 className="mt-6 text-lg font-medium text-amber-600 dark:text-amber-400">
                      Nandni Batra
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">Founder</p>

                    <div className="flex gap-4 mt-6">
                      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                         className="text-gray-600 dark:text-gray-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors duration-300">
                        <Instagram className="w-6 h-6" />
                      </a>
                      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
                         className="text-gray-600 dark:text-gray-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors duration-300">
                        <Facebook className="w-6 h-6" />
                      </a>
                      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
                         className="text-gray-600 dark:text-gray-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors duration-300">
                        <Twitter className="w-6 h-6" />
                      </a>
                    </div>
                  </div>

                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
  );
};

export default ProteinCoffeeWebsite;
