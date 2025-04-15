import { useRef, useState } from "react";
import { motion, useMotionTemplate, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import { SiVisa } from "react-icons/si";

const CardAnimation = () => {
  const [activeCardIndex, setActiveCardIndex] = useState<number>(0);

  const cards = [
    {
      name: "Flex",
      color: "bg-gradient-to-tr from-[#0569E8] to-[#76D232]",
      holderName: "SAWAN KAPOOR",
      image: null,
    },
    {
      name: "Flex",
      color: "bg-gradient-to-tr from-[#CEA686] to-[#846554]",
      holderName: "SAWAN KAPOOR",
      image: null,
    },
    {
      name: "Flex",
      color: "bg-gradient-to-tr from-black to-[#1E1E1E]",
      holderName: "SAWAN KAPOOR",
      image: null,
    },
  ];

  return (
    <div className="relative w-full max-w-md mx-auto">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCardIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="w-full aspect-[16/10]"
        >
          <EnhancedTiltCard cardData={cards[activeCardIndex]} />
        </motion.div>
      </AnimatePresence>

      <div className="mt-6 flex justify-center gap-2">
        {cards.map((card, index) => (
          <button
            key={index}
            onClick={() => setActiveCardIndex(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === activeCardIndex ? "bg-white scale-110" : "bg-white/30 hover:bg-white/50"
            }`}
            aria-label={`View ${card.name} card ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

const ROTATION_RANGE = 25;
const HALF_ROTATION_RANGE = ROTATION_RANGE / 2;

const EnhancedTiltCard = ({ cardData }: any) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // For card rotation
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const ySpring = useSpring(y, { stiffness: 300, damping: 30 });

  // For highlight effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const transform = useMotionTemplate`perspective(1000px) rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;
  const highlightTransform = useMotionTemplate`translate(${mouseX}px, ${mouseY}px)`;

  const handleMouseMove = (e: any) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseXPos = e.clientX - rect.left;
    const mouseYPos = e.clientY - rect.top;

    // Update highlight position
    mouseX.set(mouseXPos - 150);
    mouseY.set(mouseYPos - 150);

    // Calculate rotation
    const rX = ((mouseYPos / height) * ROTATION_RANGE - HALF_ROTATION_RANGE) * -1;
    const rY = (mouseXPos / width) * ROTATION_RANGE - HALF_ROTATION_RANGE;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  return (
    <div className="relative w-full h-full perspective">
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        style={{
          transformStyle: "preserve-3d",
          transform,
        }}
        className="relative w-full h-full cursor-pointer"
      >
        {/* Card background with gradient */}
        <motion.div
          className={`absolute inset-0 rounded-2xl ${cardData.color} border border-white/10 shadow-xl flex items-center justify-center overflow-hidden`}
          style={{
            transformStyle: "preserve-3d",
          }}
        >
          {/* Large percentage symbol background */}
          <div className="absolute inset-0 flex items-center justify-center left-40 ">
            <img src="/faded.logo.svg" className="h-60" />
          </div>

          {/* Highlight effect */}
          <motion.div
            className="absolute w-64 h-64 bg-white/15 rounded-full blur-2xl pointer-events-none mix-blend-soft-light"
            style={{
              transform: highlightTransform,
              opacity: isHovered ? 1 : 0,
            }}
          />

          {/* Flex Logo */}
          <motion.div
            style={{ transform: "translateZ(40px)" }}
            className="absolute top-6 left-6 text-white text-2xl font-bold"
          >
            <img src="/logo.svg" alt="" className="w-25" />
          </motion.div>

          {/* Card chip */}
          <motion.div
            style={{ transform: "translateZ(30px)" }}
            className="absolute bottom-20 right-5 w-13  rounded-sm flex items-center justify-center"
          >
            <img src="/chip.svg" alt="" />
          </motion.div>

          {/* Cardholder name */}
          <motion.div style={{ transform: "translateZ(50px)" }} className="absolute bottom-8 left-6 text-white">
            <span className="block text-sm font-medium">{cardData.holderName}</span>
          </motion.div>

          {/* VISA logo */}
          <motion.div style={{ transform: "translateZ(40px)" }} className="absolute bottom-0 right-6">
            <SiVisa size={90} />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default CardAnimation;
