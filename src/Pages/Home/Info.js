import React from "react";
import InfoCard from "./InfoCard";
import Clock from "../../images/icons/clock.svg";
import Marker from "../../images/icons/marker.svg";
import Phone from "../../images/icons/phone.svg";

const Info = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      <InfoCard
        bgClass="bg-gradient-to-r from-secondary to-primary"
        cardTitle="Opening Hours"
        cardText="Lorem Ipsum is simply dummy text of the pri"
        img={Clock}
      />
      <InfoCard bgClass="bg-accent" cardTitle="Visit our location" cardText="Brooklyn, NY 10036, United States" img={Marker} />
      <InfoCard bgClass="bg-gradient-to-r from-secondary to-primary" cardTitle="Contact us now" cardText="0179391158" img={Phone} />
    </div>
  );
};

export default Info;
