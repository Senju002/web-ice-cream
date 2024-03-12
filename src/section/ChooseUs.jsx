import { useState, useEffect } from "react";
import { useSpring, animated } from "@react-spring/web";
import ChooseUsDescription from "../components/ChooseUs Component/ChooseUsDescription";
import Money from "../images/money.png";

export default function ChooseUs() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const elementPosition = document.getElementById("chooseUs").offsetTop;

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
        style={springProps}
        className="flex flex-row gap-2 text-primaryTextColor font-extrabold justify-between w-full h-screen flex-wrap n px-9 relative tablet:mt-[-25rem] mt-[-6rem]"
        id="chooseUs"
      >
        {/* <CupCakeImg /> */}
        <div className="flex items-center justify-around tablet:items-center tablet:mt-48 tablet:w-full tablet:ml-0w-[50%] flex-wrap mobile:gap-20 w-[50%] ">
          <div className="bg-primaryTextColor w-[17rem] h-[17rem] tablet:w-[13rem] tablet:h-[13rem] tablet:rounded-[3rem] rounded-[5rem] flex justify-center items-center flex-col">
            <img
              src={Money}
              alt="moneyyy"
              className="bg-backgroundColor w-24 tablet:w-16 tablet:rounded-2xl rounded-3xl"
            />
            <h1 className="text-backgroundColor text-center mt-2 text-2xl tablet:text-xl">
              10K+
            </h1>
            <h1 className="text-backgroundColor text-center mt-2 text-2xl tablet:text-xl font-semibold">
              DAILY SELL
            </h1>
          </div>

          {/* adasda */}
          <div className="bg-primaryTextColor w-[17rem] h-[17rem] tablet:w-[13rem] tablet:h-[13rem] tablet:rounded-[3rem] rounded-[5rem] flex justify-center items-center flex-col">
            <img
              src={Money}
              alt="moneyyy"
              className="bg-backgroundColor w-24 tablet:w-16 tablet:rounded-2xl rounded-3xl"
            />
            <h1 className="text-backgroundColor text-center mt-2 text-2xl tablet:text-xl">
              10K+
            </h1>
            <h1 className="text-backgroundColor text-center mt-2 text-2xl tablet:text-xl font-semibold">
              DAILY SELL
            </h1>
          </div>
        </div>

        <ChooseUsDescription />
      </animated.div>
    </>
  );
}
