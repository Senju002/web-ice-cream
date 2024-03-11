import IceOne from "../../images/Ice-cream-2.png";
import IceTwo from "../../images/Ice-cream-3.png";
import IceThree from "../../images/Ice-cream-4.png";
import DiscountCard from "./DiscountCard";

export default function HomeRightSide() {
  return (
    <div className="right flex flex-col justify-center font-black  items-center tablet:mr-8">
      <DiscountCard duration={1000} image={IceOne} label={"Strawberry Corn"} />
      <DiscountCard duration={1200} image={IceTwo} label={"Sweet Corn"} />
      <DiscountCard duration={1500} image={IceThree} label={"Vanilla Corn"} />
    </div>
  );
}
