import { useSpring, animated } from "@react-spring/web";

export default function DiscountCard({ image, label, duration }) {
  const springProps = useSpring({
    from: { transform: "translateY(-50px)", opacity: 0 },
    to: { transform: "translateY(0)", opacity: 1 },
    config: { tension: 300, friction: 5 },
    delay: duration,
  });
  return (
    <animated.div
      style={{ ...springProps }}
      className="flex flex-col justify-center font-black  items-center"
    >
      <div className="flex z-50 justify-center items-center bg-gradient-to-b from-primary to-secondary rounded-t-[18.75rem] rounded-b-[8.125rem] h-80 w-48  tablet:h-40 tablet:w-28 mr-[4rem] tablet:mr-[1rem] transform rotate-[-90deg] flex-col">
        <img
          src={image}
          alt="Ice Cream"
          className="absolute tablet:mb-20 tablet:ml-24 rotate-[90deg] tablet:h-20 h-48 ml-48 mb-64 "
        />
        <p className="rotate-[90deg] text-center text-2xl w-[12rem] mt-8 tablet:text-sm ">
          50% Off <br /> {label}
        </p>
      </div>
      <div className="absolute z-10 flex justify-center items-center bg-gradient-to-b from-primary to-secondary rounded-t-[18.75rem] rounded-b-[8.125rem] tablet:h-40 tablet:w-28 h-80 w-48 mr-[6rem] tablet:mr-[2.5rem] transform rotate-[-90deg] opacity-35"></div>
      <div className="absolute z-10 flex justify-center items-center bg-gradient-to-b from-primary to-secondary rounded-t-[18.75rem] rounded-b-[8.125rem] tablet:h-40 tablet:w-28 h-80 w-48 mr-[8rem] tablet:mr-[3.5rem] transform rotate-[-90deg] opacity-35"></div>
    </animated.div>
  );
}
