import { useNavigate } from "react-router-dom";

const CTA = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-gray-100 py-12 md:py-16">

      {/* 96% WIDTH */}
      <div
        className="
          w-[96%] mx-auto text-center text-white
          rounded-xl md:rounded-2xl
          px-4 py-8 sm:px-6 sm:py-10 md:px-10 md:py-12
          bg-gradient-to-r from-[#c98a00] via-[#c4001a] to-[#c98a00]
        "
      >

        {/* TITLE */}
        <h2 className="text-xl sm:text-2xl md:text-4xl font-semibold mb-3 md:mb-4">
          Ready to Make a Difference?
        </h2>

        {/* DESCRIPTION */}
        <p className="max-w-2xl mx-auto text-xs sm:text-sm md:text-lg text-white/90 mb-6 md:mb-8">
          Join the movement and become a part of the most prestigious social service
          organization in the country. Your contribution matters.
        </p>

        {/* BUTTONS */}
        <div className="flex justify-center items-center gap-3 sm:gap-4">

          {/* JOIN BUTTON */}
          <button
            onClick={() => navigate("/register")}
            className="
              bg-white text-blue-700 px-4 sm:px-6 py-2.5 sm:py-3
              text-xs sm:text-sm md:text-base font-medium
              rounded-lg shadow-md
              transition-all duration-300
              hover:scale-105 hover:shadow-xl
              active:scale-95
            "
          >
            Join NSS Today
          </button>

          {/* EVENTS BUTTON */}
          <button
            onClick={() => navigate("/events")}
            className="
              border border-white px-4 sm:px-6 py-2.5 sm:py-3
              text-xs sm:text-sm md:text-base font-medium
              rounded-lg
              transition-all duration-300
              hover:bg-white hover:text-red-600 hover:scale-105
              active:scale-95
            "
          >
            View Events
          </button>

        </div>

      </div>

    </section>
  );
};

export default CTA;