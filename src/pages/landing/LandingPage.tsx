import { useEffect, useState } from "react";
import CardAnimation from "../../components/CardAnimation";
import { motion } from "framer-motion";
import { ChevronRight, Lock } from "lucide-react";

const LandingPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 300);
  }, []);

  const handleJoinWaitlist = () => {
    window.location.href = "https://www.payforwhatyouowe.com";
  };

  return (
    <div className="fixed  w-full h-full min-h-screen bg-gradient-to-r from-[#0569E8] to-[#76D232] text-white overflow-x-hidden overflow-y-auto md:overflow-y-hidden">
      {/* Background elements - improved for better visual effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-white/5 filter blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-72 h-72 rounded-full bg-white/5 filter blur-3xl" />
        <div className="absolute bottom-1/4 left-1/3 w-56 h-56 rounded-full bg-white/5 filter blur-3xl" />
        <div className="absolute top-1/3 right-1/3 w-80 h-80 rounded-full bg-white/5 filter blur-3xl" />
      </div>

      {/* COMING SOON banner */}
      <motion.div
        className="sticky top-0  backdrop-blur-sm py-2 z-30 text-center bg-black/25"
        initial={{ y: -50 }}
        animate={{ y: isLoaded ? 0 : -50 }}
        transition={{ duration: 0.7, delay: 1 }}
      >
        <p className="font-bold  tracking-widest text-sm sm:text-base">COMING SOON</p>
      </motion.div>

      <section className="flex flex-col lg:flex-row min-h-screen relative z-10 pt-10 pb-16">
        {/* Left side - Branding and CTA */}
        <div className="flex-1 flex flex-col justify-center items-center lg:items-start px-6 sm:px-8 lg:px-12 xl:px-24 py-8 order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mb-8 w-full max-w-lg"
          >
            <div className="flex items-center justify-center lg:justify-start mb-6">
              <img src="/logo.svg" alt="Flexcard logo" className="w-64 sm:w-72 md:w-96" />
            </div>

            <h2 className="text-xl sm:text-2xl lg:text-3xl font-light max-w-md mb-6 text-center lg:text-left">
              Pay For What You Owe <br />
              No More, No Less
            </h2>

            {/* Coming Soon Badge */}
            <div className="flex justify-center lg:justify-start mb-8">
              <div className="inline-block bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-4 py-2">
                <span className="font-medium text-sm sm:text-base">Launching Summer 2025</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={handleJoinWaitlist}
                className="bg-white text-[#0569E8] hover:bg-white/90 py-3 px-8 rounded-lg flex items-center justify-center transition-all group shadow-lg font-semibold"
              >
                Join the Waitlist
                <ChevronRight size={18} className="ml-1 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* <button className="bg-transparent border border-white hover:bg-white/10 font-medium py-3 px-8 rounded-lg flex items-center justify-center transition-all">
                Learn More
              </button> */}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="flex flex-wrap justify-center lg:justify-start gap-4 mt-4 w-full max-w-lg"
          >
            {/* <div className="flex items-center bg-white/10 rounded-lg p-3 backdrop-blur-sm">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mr-3">
                <CheckCircle size={20} strokeWidth={2} />
              </div>
              <div>
                <h3 className="font-medium">No Annual Fee</h3>
                <p className="text-sm text-white/70">Ever.</p>
              </div>
            </div> */}

            <div className="flex items-center bg-white/10 rounded-lg p-3 backdrop-blur-sm">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mr-3">
                <Lock size={20} strokeWidth={2} />
              </div>
              <div>
                <h3 className="font-medium">Secure</h3>
                <p className="text-sm text-white/70">Advanced protection</p>
              </div>
            </div>

            <div className="flex items-center bg-white/10 rounded-lg p-3 backdrop-blur-sm">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mr-3">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M12 8V12L15 15M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-medium">24/7 Support</h3>
                <p className="text-sm text-white/70">Always available</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right side - Card Animation with Coming Soon overlay */}
        <div className="flex-1 flex flex-col justify-center items-center px-4 py-6 lg:py-12 relative order-1 lg:order-2">
          {/* Large "COMING SOON" diagonal banner */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: isLoaded ? 1 : 0, scale: isLoaded ? 1 : 0.8 }}
            transition={{ duration: 0.7, delay: 1.2 }}
            className="absolute z-20 transform rotate-12"
          >
            <div className="bg-white/20 backdrop-blur-md border-2 border-white/30 px-4 sm:px-6 py-1 sm:py-2 rounded-lg shadow-xl">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-wider">COMING SOON</h2>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: isLoaded ? 1 : 0, scale: isLoaded ? 1 : 0.9 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="w-full max-w-md lg:max-w-lg"
          >
            <CardAnimation />

            <div className="mt-6 lg:mt-8 text-center px-4 lg:px-6">
              <h3 className="text-lg sm:text-xl font-medium mb-2">Experience the difference</h3>
              <p className="text-white/70 text-sm sm:text-base">
                Flexcard combines modern technology with financial transparency
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
