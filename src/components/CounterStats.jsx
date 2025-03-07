import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "../styles/CounterStats.css";

const CounterStats = () => {
  const stats = [
    { id: 1, label: "Hiring Companies", target: 100, suffix: "+" },
    { id: 2, label: "Industries Served", target: 30, suffix: "+" },
    { id: 3, label: "Successful Hires", target: 5000, suffix: "+" },
    { id: 4, label: "Active Jobs", target: 200, suffix: "+" },
  ];

  const duration = 2000;

  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const startTime = performance.now();
    const updateCounts = () => {
      const elapsedTime = performance.now() - startTime;
      if (elapsedTime >= duration) {
        setCounts(stats.map((stat) => stat.target));
        return;
      }
      setCounts(
        stats.map((stat) =>
          Math.min(
            stat.target,
            Math.round((stat.target * elapsedTime) / duration)
          )
        )
      );
      requestAnimationFrame(updateCounts);
    };
    requestAnimationFrame(updateCounts);
  }, []);

  return (
    <div className="counter-container">
      {stats.map((stat, index) => (
        <div key={stat.id} className={`counter-item counter-${stat.id}`}>
          <div className="counter-number-wrapper">
            <motion.span className="counter-number">
              {counts[index]}
              <sup className="counter-plus-icon">{stat.suffix}</sup>
            </motion.span>
          </div>
          <span className="counter-label">{stat.label}</span>
        </div>
      ))}
    </div>
  );
};

export default CounterStats;
