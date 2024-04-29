import React from "react";
import ScheduleCard from "../ScheduleCard";
import images from "../../constants/images";

const ScheduleSection = () => {
  return (
    <div className="container ss-container">
      <div className="row ss-row">
        <div className="col-md-5 ss-col">
          <div className="ss-card-container">
            <ScheduleCard
              name="Erin"
              videoImage={images.placeholder6}
              videoDuartion={"3:15"}
            />
          </div>
        </div>
        <div className="col-md-1 line-break-container">
          <div className="line-break-vertical"></div>
        </div>
        <div className="col-md-5 ss-col">
          <div className="ss-card-container">
            <ScheduleCard
              name="Kate"
              videoImage={images.placeholder6}
              videoDuartion={"3:15"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScheduleSection;
