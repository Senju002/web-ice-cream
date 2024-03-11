import Arrow from "../../assets/arrow.svg";
import { ReactSVG } from "react-svg";

export default function CupCakePlayButton() {
  return (
    <div className="relative">
      <div className="font-medium text-[1.5rem] h-[4.5rem] bg-tertiary w-[4.5rem] rounded-full z-50 relative transition duration-500 hover:bg-primary flex items-center justify-center">
        <ReactSVG src={Arrow} />
      </div>
      <div className="absolute top-[0rem] ml-2 z-10">
        <div className="font-medium text-[2rem] h-[4.5rem] opacity-35 bg-tertiary w-[4.5rem] rounded-full text-transparent"></div>
      </div>
      <div className="absolute top-[0rem] ml-4 z-30">
        <div className="font-medium text-[2rem] h-[4.5rem] opacity-35 bg-tertiary w-[4.5rem] rounded-full text-transparent"></div>
      </div>
    </div>
  );
}
