import { useState, useEffect } from "react";
import { useSpring, animated } from "@react-spring/web";
import TopSellingDescription from "../components/Top Selling Component/TopSellingDescription";
import Card from "../components/Top Selling Component/Card";
import BananaOne from "../images/banana-1.png";
import BananaTwo from "../images/banana-2.png";

export default function TopSelling() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const elementPosition = document.getElementById("topSelling").offsetTop;

      // Adjust the threshold as needed
      const threshold = window.innerHeight * 0.8;

      setIsVisible(scrollPosition > elementPosition - threshold);
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Remove the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const springProps = useSpring({
    opacity: isVisible ? 1 : 0,
    translateY: isVisible ? 0 : 100,
    config: { tension: 120, friction: 5 },
  });
  return (
    <>
      <animated.div
        id="topSelling"
        style={springProps}
        className="flex flex-row gap-2 text-primaryTextColor font-extrabold justify-between w-full h-screen flex-wrap n px-9 relative mt-[-4rem] overflow-hidden"
      >
        <TopSellingDescription />
        <div className=" w-[64rem] flex items-center justify-around  flex-row px-10  ">
          <Card
            title={"Soft banana, Cholate Flyover"}
            image={BananaOne}
            price={"Rs. 350/-"}
          />
          <Card
            title={"Thic banana, Cholate Flyover"}
            image={BananaTwo}
            price={"Rs. 150/-"}
          />
        </div>
      </animated.div>
    </>
  );
}
