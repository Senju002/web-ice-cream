import { useSpring, animated } from "@react-spring/web";
import HomeTitle from "./HomeTitle";
import PrimaryButton from "./PrimaryButton";
import PlayButton from "./PlayButton";

export default function HomeLeftSide() {
  const fadeIn = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1500 },
  });

  return (
    <animated.div
      style={fadeIn}
      className="left pl-8 flex flex-col  justify-center "
    >
      <HomeTitle />
      <div className="flex flex-row">
        <PrimaryButton />
        <PlayButton />
      </div>
    </animated.div>
  );
}
