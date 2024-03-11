import { useSpring, animated } from "@react-spring/web";
import HomeLeftSide from "../components/Home Components/HomeLeftSide";
import HomeCenterSide from "../components/Home Components/HomeCenterSide";
import HomeRightSide from "../components/Home Components/HomeRightSide";

export default function Home() {
  const fadeIn = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1500 },
  });
  const springProps = useSpring({
    from: { transform: "translateY(-50px)", opacity: 0 },
    to: { transform: "translateY(0)", opacity: 1 },
    config: { tension: 300, friction: 5 },
    delay: 1000,
  });
  return (
    <>
      <div className="flex flex-row gap-2 text-primaryTextColor font-extrabold justify-between w-full h-screen flex-wrap">
        <HomeLeftSide />
        <HomeCenterSide />
        <HomeRightSide />
      </div>
    </>
  );
}
