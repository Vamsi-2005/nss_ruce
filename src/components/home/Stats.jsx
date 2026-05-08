import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const Stats = () => {
  const statsData = [
    {
      id: 1,
      value: 1200,
      suffix: "+",
      label: "Active Volunteers",
    },
    {
      id: 2,
      value: 85,
      suffix: "+",
      label: "Events Conducted",
    },
    {
      id: 3,
      value: 25,
      suffix: "+",
      label: "Blood Camps",
    },
    {
      id: 4,
      value: 15,
      suffix: "+",
      label: "Awards Won",
    },
  ];

  const sectionRef = useRef(null);

  const isInView = useInView(sectionRef, {
    once: true,
    margin: "-100px",
  });

  const [counts, setCounts] = useState(
    statsData.map(() => 0)
  );

  // smooth easing
  const easeOutCubic = (t) => {
    return 1 - Math.pow(1 - t, 3);
  };

  useEffect(() => {
    if (!isInView) return;

    statsData.forEach((item, index) => {
      const duration = 1800;
      const startTime = performance.now();

      const animate = (currentTime) => {
        const elapsed = currentTime - startTime;

        const progress = Math.min(
          elapsed / duration,
          1
        );

        const eased = easeOutCubic(progress);

        const currentValue = Math.floor(
          eased * item.value
        );

        setCounts((prev) => {
          const updated = [...prev];
          updated[index] = currentValue;
          return updated;
        });

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    });
  }, [isInView]);

  return (
    <section
      ref={sectionRef}
      className="
        w-screen
        left-1/2 right-1/2
        -ml-[50vw] -mr-[50vw]
        relative

        bg-green-700

        py-10 md:py-12
        overflow-hidden
      "
    >

      <div
        className="
          w-full

          grid
          grid-cols-2
          md:grid-cols-4

          gap-y-8
          md:gap-y-0
        "
      >

        {statsData.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
            }}
            className="text-center"
          >

            {/* NUMBER */}
            <h2
              className="
                text-white
                font-bold

                text-4xl
                md:text-6xl
              "
            >
              {counts[index]}
              {item.suffix}
            </h2>

            {/* LABEL */}
            <p
              className="
                text-green-100
                mt-3

                text-sm
                sm:text-base
                md:text-lg
              "
            >
              {item.label}
            </p>

          </motion.div>
        ))}

      </div>

    </section>
  );
};

export default Stats;