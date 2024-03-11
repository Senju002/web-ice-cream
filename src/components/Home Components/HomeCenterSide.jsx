import React from "react";
import IceCreamOne from "../../images/Ice-cream-1.png";
import { useSpring, animated } from "@react-spring/web";
export default function HomeCenterSide() {
  const fadeIn = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1500 },
  });
  const springProps = useSpring({
    from: { transform: "translateY(-50px)", opacity: 0 },
    to: { transform: "translateY(0)", opacity: 1 },
    config: { tension: 300, friction: 5 },
  });
  return (
    <animated.div
      className="center flex flex-col justify-center ml-[12rem] mobile:ml-0 items-center tablet:ml-8"
      style={fadeIn}
    >
      <div className="bg-gradient-to-b z-50 from-primary to-secondary h-[51rem] w-[37rem]  tablet:h-[11rem] tablet:w-[9rem] mr-80 tablet:mr-0 w-90% rounded-t-[18.75rem] rounded-b-[3.125rem]">
        <animated.img
          src={IceCreamOne}
          style={springProps}
          alt="Ice Cream"
          className="ml-20 mt-[-3.5rem] tablet:ml-10 tablet:mt-[-2.3rem]"
        />
      </div>
      <div className=" absolute bg-gradient-to-b z-10 from-primary to-secondary h-[50rem] w-[37rem] tablet:h-[11rem] tablet:w-[9rem] ml-5 mb-[1rem] opacity-35 mr-80 tablet:mr-0 w-90% rounded-t-[18.75rem] rounded-b-[3.125rem]">
        <img
          src={IceCreamOne}
          alt="Ice Cream"
          className="max-w-full max-h-full h-auto pl-6 opacity-0 mb-20 "
        />
      </div>
      <div className=" absolute bg-gradient-to-b z-10 from-primary to-secondary h-[49rem] w-[37rem] tablet:h-[11rem] tablet:w-[9rem] ml-10 mb-[2rem] opacity-35 mr-80 tablet:mr-0 w-90% rounded-t-[18.75rem] rounded-b-[3.125rem]">
        <img
          src={IceCreamOne}
          alt="Ice Cream"
          className="max-w-full max-h-full h-auto pl-6 opacity-0 "
        />
      </div>
    </animated.div>
  );
}
