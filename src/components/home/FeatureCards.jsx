import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const FeatureCards = () => {
  const data = [
    {
      title: "Upcoming Events",
      desc: "Stay updated with our latest community service schedules and plantation drives.",
      link: "View Calendar",
      img: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac",
      path: "/events",
    },
    {
      title: "Blood Finder",
      desc: "Our dedicated portal to connect donors with those in urgent need of life-saving blood.",
      link: "Find Donors",
      img: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b",
      path: "/blood",
    },
    {
      title: "Photo Gallery",
      desc: "A visual journey through our impactful service initiatives across the district.",
      link: "Browse Photos",
      img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
      path: "/gallery",
    },
    {
      title: "Contact Us",
      desc: "Have queries? Reach out to the Program Coordinator's office at Rayalaseema University.",
      link: "Get in Touch",
      img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
      path: "/contact",
    },
  ];

  return (
    <section className="bg-gray-100 py-16">

      <div className="w-[96%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

        {data.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: index * 0.1, duration: 0.4 }}

            className="
              group
              bg-white rounded-md overflow-hidden border border-gray-200
              w-full max-w-[280px] mx-auto

              transform-gpu will-change-transform
              transition-all duration-300 ease-out

              hover:-translate-y-2
              hover:shadow-lg
              hover:border-blue-300
            "
          >

            {/* IMAGE */}
            <div className="h-44 overflow-hidden">
              <img
                src={item.img}
                alt={item.title}
                loading="lazy"
                className="
                  w-full h-full object-cover
                  transition-transform duration-300
                  group-hover:scale-[1.03]
                "
              />
            </div>

            {/* CONTENT */}
            <div className="p-5">

              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {item.title}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                {item.desc}
              </p>

              {/* LINK */}
              <Link
                to={item.path}
                className="text-blue-700 text-sm font-semibold inline-flex items-center group/link"
              >
                {item.link}
                <span className="ml-1 transition-transform duration-200 group-hover/link:translate-x-1">
                  →
                </span>
              </Link>

            </div>

          </motion.div>
        ))}

      </div>

    </section>
  );
};

export default FeatureCards;