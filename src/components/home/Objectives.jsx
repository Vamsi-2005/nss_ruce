import { motion } from "framer-motion";
import { Users, Sparkles, Megaphone, Wrench } from "lucide-react";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

const iconVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.4 },
  },
  hover: {
    scale: 1.15,
    rotate: 3,
    transition: { type: "spring", stiffness: 200 },
  },
};

const Objectives = () => {
  return (
    <section className="bg-gray-100 py-16">

      <div className="w-[96%] mx-auto">

        {/* HEADER */}
        <div className="mb-12 max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-3">
            Core NSS Objectives
          </h2>
          <p className="text-gray-600 text-sm md:text-base">
            NSS aims at the personality development of students through community service.
            Here are our pillars of impact at Rayalaseema University.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

          {/* SOCIAL WELFARE */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            className="md:col-span-7 bg-[#dbe4f0] p-6 md:p-8 rounded-2xl"
          >
            <motion.div
              variants={iconVariants}
              whileHover="hover"
              className="mb-4 inline-block"
            >
              <Users className="text-blue-900" size={28} />
            </motion.div>

            <h3 className="text-xl md:text-2xl font-semibold mb-3">
              Social Welfare
            </h3>

            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              Identifying the needs and problems of the community and involving students in the solution-finding process to foster a sense of civic responsibility.
            </p>
          </motion.div>

          {/* PERSONALITY DEVELOPMENT */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            className="md:col-span-5 bg-blue-900 text-white p-6 md:p-8 rounded-2xl"
          >
            <motion.div
              variants={iconVariants}
              whileHover="hover"
              className="mb-4 inline-block"
            >
              <Sparkles className="text-yellow-300" size={28} />
            </motion.div>

            <h3 className="text-lg md:text-xl font-semibold mb-3">
              Personality Development
            </h3>

            <p className="text-sm md:text-base text-white/80 leading-relaxed">
              Developing a sense of social and civic responsibility and leadership qualities among the young student volunteers.
            </p>
          </motion.div>

          {/* SOCIAL AWARENESS */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={2}
            className="md:col-span-5 border-2 border-blue-900 p-6 md:p-8 rounded-2xl"
          >
            <motion.div
              variants={iconVariants}
              whileHover="hover"
              className="mb-4 inline-block"
            >
              <Megaphone className="text-blue-900" size={26} />
            </motion.div>

            <h3 className="text-lg md:text-xl font-semibold mb-3">
              Social Awareness
            </h3>

            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              Sensitizing student youth towards social issues like health, environment, literacy, and national integration.
            </p>
          </motion.div>

          {/* SKILL BUILDING */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={3}
            className="md:col-span-7 bg-[#e7e1d3] p-6 md:p-8 rounded-2xl flex justify-between items-center"
          >
            <div>
              <h3 className="text-lg md:text-xl font-semibold mb-3">
                Skill Building
              </h3>

              <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-md">
                Acquiring mobilization skills for community participation and developing the capacity to meet emergencies and natural disasters.
              </p>
            </div>

            <motion.div
              variants={iconVariants}
              whileHover="hover"
              className="hidden md:block"
            >
              <Wrench className="text-yellow-700" size={40} />
            </motion.div>

          </motion.div>

        </div>

      </div>

    </section>
  );
};

export default Objectives;