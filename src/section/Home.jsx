import { useSpring, animated } from "@react-spring/web";
import HomeLeftSide from "../components/Home Components/HomeLeftSide";
import HomeCenterSide from "../components/Home Components/HomeCenterSide";
import HomeRightSide from "../components/Home Components/HomeRightSide";
import { ReactSVG } from "react-svg";
import FirstConfetti from "../assets/firstConfetti.svg";
import SecondConfetti from "../assets/secondConfetti.svg";

export default function Home() {
  const springProps = useSpring({
    from: { transform: "translateY(-50px)", opacity: 0 },
    to: { transform: "translateY(0)", opacity: 1 },
    config: { tension: 300, friction: 5 },
    delay: 1000,
  });
  return (
    <>
      <div className="flex flex-row gap-2 text-primaryTextColor font-extrabold justify-between w-full h-screen flex-wrap tablet:overflow-hidden">
        <animated.div style={springProps}>
          {/* <ReactSVG
            src={FirstConfetti}
            className="absolute mt-[50rem] ml-[30rem] h-36 w-36 "
          />
        </animated.div>
        <animated.div style={springProps}>
          <ReactSVG
            src={SecondConfetti}
            className="absolute mt-[10rem] ml-[80rem] h-36 w-36 tablet:h-12 tablet:w-12 tablet:ml-[36rem] tablet:mt-[33rem]"
          /> */}
        </animated.div>
        <HomeLeftSide />
        <HomeCenterSide />
        <HomeRightSide />
      </div>
    </>
  );
}
