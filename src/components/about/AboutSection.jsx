import bannerImg from "../../assets/images/logo.png"; // use your image

const AboutSection = () => {
  return (
    <section className="px-4 md:px-10 py-10 bg-gray-100">
      <div className="max-w-6xl mx-auto">

        {/* HERO BANNER */}
        <div
          className="relative rounded-xl overflow-hidden shadow-lg"
        >
          {/* BACKGROUND IMAGE */}
          <img
            src={bannerImg}
            alt="NSS Banner"
            className="w-full h-[300px] md:h-[350px] object-cover"
          />

          {/* GRADIENT OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-purple-800/60 to-red-600/70"></div>

          {/* CONTENT */}
          <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-12 text-white">

            {/* Small Label */}
            <p className="text-sm text-red-300 mb-2 font-semibold">
              Central Sector Scheme
            </p>

            {/* Heading */}
            <h1 className="text-2xl md:text-4xl font-bold leading-snug mb-4 max-w-2xl">
              Empowering Youth through Community Service
            </h1>

            {/* Description */}
            <p className="text-sm md:text-base text-gray-200 max-w-2xl leading-relaxed">
              The National Service Scheme (NSS) is a Central Sector Scheme of Government 
              of India, Ministry of Youth Affairs & Sports. It provides opportunity to 
              the student youth of 11th & 12th Class of schools at +2 Board level and 
              student youth of Technical Institution, Graduate & Post Graduate at colleges 
              and University level of India to take part in various government led 
              community service activities & programmes.
            </p>

          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;