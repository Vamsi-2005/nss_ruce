import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section
      className="
        relative
        w-screen
        h-[76vh] md:h-[80vh]
        overflow-hidden

        left-1/2 right-1/2
        -ml-[50vw] -mr-[50vw]
      "
    >

      {/* BACKGROUND IMAGE */}
      <img
        src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=2070&auto=format&fit=crop"
        alt="NSS Hero"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/55" />

      {/* GRADIENT OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-900/40 via-black/20 to-black/20" />

      {/* CONTENT */}
      <div className="relative z-10 flex items-center justify-center h-full px-5">

        <div className="text-center max-w-5xl">

          {/* SMALL BADGE */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="
              inline-flex items-center gap-2

              bg-white/10 backdrop-blur-md
              border border-white/20

              px-3 py-1.5 md:px-4 md:py-2
              rounded-full

              mb-4 md:mb-5
            "
          >

            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>

            <span className="text-white uppercase text-[11px] md:text-xs font-medium tracking-wide">
              Not Me But You
            </span>

          </motion.div>

          {/* TITLE */}
          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="
              text-white font-bold leading-tight

              text-4xl
              sm:text-5xl
              md:text-6xl
              lg:text-7xl
            "
          >
            National

            <span className="block text-yellow-400">
              Service Scheme
            </span>

          </motion.h1>

          {/* DESCRIPTION */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="
              mt-5 md:mt-6
              mx-auto

              text-gray-200
              text-sm
              sm:text-base
              md:text-lg
              lg:text-xl

              leading-relaxed
              max-w-3xl
            "
          >
            Empowering youth through community service,
            leadership, social awareness, and nation-building
            initiatives at Rayalaseema University.
          </motion.p>

          {/* BUTTONS */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="
              flex flex-wrap justify-center
              gap-3 md:gap-4
              mt-8 md:mt-10
            "
          >

            {/* PRIMARY BUTTON */}
            <button
              onClick={() => navigate("/register")}
              className="
                bg-green-600 hover:bg-green-700
                text-white

                px-6 py-3
                md:px-8 md:py-4

                rounded-lg
                font-medium

                text-sm md:text-base

                transition-all duration-300
                hover:scale-105 hover:shadow-xl
                active:scale-95
              "
            >
              Become a Volunteer
            </button>

            {/* SECONDARY BUTTON */}
            <button
              onClick={() => navigate("/events")}
              className="
                border border-white/40
                bg-white/10 backdrop-blur-md
                text-white

                px-6 py-3
                md:px-8 md:py-4

                rounded-lg
                font-medium

                text-sm md:text-base

                transition-all duration-300
                hover:bg-white hover:text-black
                hover:scale-105
                active:scale-95
              "
            >
              Explore Events
            </button>

          </motion.div>

        </div>

      </div>

    </section>
  );
};

export default Hero;