import { useSpring, animated } from "@react-spring/web";
import { ReactSVG } from "react-svg";
import Arrow from "../../assets/arrow.svg";
export default function PlayButton() {
  const springProps = useSpring({
    from: { transform: "translateY(-50px)", opacity: 0 },
    to: { transform: "translateY(0)", opacity: 1 },
    config: { tension: 300, friction: 5 },
  });
  return (
    <animated.div className="relative ml-8" style={springProps}>
      <div className="font-medium text-[1.5rem] h-16 bg-secondary w-[4.5rem] rounded-full z-50 relative transition duration-500 hover:bg-primary flex items-center justify-center">
        <ReactSVG src={Arrow} />
      </div>
      <div className="absolute top-[0rem] ml-2 z-10">
        <div className="font-medium text-[2rem] h-16 opacity-35 bg-secondary w-[4.5rem] rounded-full text-transparent"></div>
      </div>
      <div className="absolute top-[0rem] ml-4 z-30">
        <div className="font-medium text-[2rem] h-16 opacity-35 bg-secondary w-[4.5rem] rounded-full text-transparent"></div>
      </div>
    </animated.div>
  );
}
