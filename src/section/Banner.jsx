import { useState, useEffect } from "react";
import { useSpring, animated } from "@react-spring/web";
import Background from "../images/ice-bg.png";
export default function Banner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const elementPosition = document.getElementById("banner").offsetTop;

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
        id="banner"
        style={{ ...springProps, backgroundImage: `url(${Background})` }}
        className=" relative bg-contain bg-center bg-no-repeat overflow-hidden max-w-full  w-screen h-screen flex items-center mx-auto mobile:mt-[30rem]"
      >
        <div className=" px-9 flex flex-col gap-2 text-primaryTextColor font-extrabold justify-between w-[90%]">
          <h1 className="text-[3.75rem] font-bold tablet:text-left text-left w-full  leading-[5rem] tablet:text-[1rem] tablet:leading-[1.5rem]">
            On Sunday Special
          </h1>
          <h1 className="text-[8rem] w-full font-bold  leading-[8rem] tablet:text-left tablet:leading-[3rem] text-left font-body  tablet:text-[2rem]">
            buy 2 Get 1 <br className="mobile:hidden" />
            Free
          </h1>
          <h1 className="text-[3.75rem] cursor-pointer hover:text-primaryTextColor/55 transition duration-300 font-bold tablet:text-left text-left w-full underline underline-offset-8 leading-[5rem] tablet:text-[1rem] tablet:leading-[1.5rem]">
            Get Now
          </h1>
        </div>
      </animated.div>
    </>
  );
}
