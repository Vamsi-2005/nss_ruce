const Motto = () => {
  return (
    <section className="bg-gray-100 py-10 px-4 md:px-10">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">

        {/* LEFT CARD */}
        <div className="bg-blue-900 text-white rounded-lg p-8 shadow-md">
          <div className="text-red-500 text-3xl mb-4">
            👥
          </div>

          <h2 className="text-xl font-bold tracking-wide mb-3">
            OUR MOTTO
          </h2>

          <h3 className="text-lg font-bold text-red-500 mb-4">
            "NOT ME BUT YOU"
          </h3>

          <p className="text-sm leading-relaxed text-gray-200">
            This reflects the essence of democratic living and upholds the need 
            for self-less service. NSS helps the students development & appreciation 
            to other person's point of view and also show consideration to other living beings.
          </p>
        </div>

        {/* RIGHT CARD */}
        <div className="bg-gray-50 rounded-lg p-8 shadow-md">
          <h2 className="text-lg font-semibold text-gray-800 mb-6">
            Legacy of Impact
          </h2>

          {/* STATS */}
          <div className="flex gap-10 mb-6">
            <div>
              <h3 className="text-2xl font-bold text-red-600">1969</h3>
              <p className="text-xs text-gray-500">
                Launched in Birth Centenary Year of Gandhiji
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-red-600">3.8M+</h3>
              <p className="text-xs text-gray-500">
                Active Student Volunteers Pan-India
              </p>
            </div>
          </div>

          {/* SYMBOL SECTION */}
          <div className="flex gap-4 items-start">
            <div className="w-14 h-14 bg-blue-900 flex items-center justify-center rounded">
              {/* Replace with actual image if needed */}
              <span className="text-red-500 text-xl">✳️</span>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-gray-800 mb-1">
                The Symbol: Rath Wheel
              </h4>

              <p className="text-xs text-gray-600 leading-relaxed">
                The symbol for the NSS has been based on the giant Rath Wheel 
                of the world famous Konark Sun Temple. The wheel portrays the 
                cycle of creation, preservation and release and signifies the 
                movement in life across time and space.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Motto;