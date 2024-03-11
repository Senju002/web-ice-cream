import { useState, useEffect } from "react";
import { useSpring, animated } from "@react-spring/web";
import CupCakeImg from "../components/Cup Cake Components/CupCakeImg";
import CupCakeDescription from "../components/Cup Cake Components/CupCakeDescription";

export default function CupCake() {
  const [showComponent, setShowComponent] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      // Adjust the threshold as needed
      const scrollThreshold = windowHeight / 2;

      setShowComponent(scrollY > scrollThreshold);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Animation configuration
  const entranceAnimation = useSpring({
    opacity: showComponent ? 1 : 0,
    transform: showComponent ? "translateY(0)" : "translateY(200px)",
  });
  return (
    <>
      <animated.div
        style={entranceAnimation}
        className="flex flex-row gap-2 text-primaryTextColor font-extrabold justify-between w-full h-screen flex-wrap n px-9 relative mt-24"
      >
        <CupCakeImg />
        <CupCakeDescription />
      </animated.div>
    </>
  );
}
