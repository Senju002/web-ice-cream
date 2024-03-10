import { useSpring, animated } from "@react-spring/web";
export default function PrimaryButton() {
  const springProps = useSpring({
    from: { transform: "translateY(-50px)", opacity: 0 },
    to: { transform: "translateY(0)", opacity: 1 },
    config: { tension: 300, friction: 5 },
  });
  return (
    <animated.div className="relative" style={springProps}>
      <button className="font-medium text-[1.5rem] h-16 bg-secondary w-[12rem] rounded-full z-50 relative transition duration-500 hover:bg-primary">
        Order Now
      </button>
      <div className="absolute top-[0rem] ml-2 z-10">
        <div className="font-medium text-[2rem] h-16 opacity-35 bg-secondary w-[12rem] rounded-full text-transparent"></div>
      </div>
      <div className="absolute top-[0rem] ml-4 z-30">
        <div className="font-medium text-[2rem] h-16 opacity-35 bg-secondary w-[12rem] rounded-full text-transparent"></div>
      </div>
    </animated.div>
  );
}
