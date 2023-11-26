import Image from "next/image";
import Campus1 from "../../public/img/Campus1.png";
import Campus2 from "../../public/img/Campus2.png";
import Campus3 from "../../public/img/Campus3.png";
import "../styles/styles.css";

const Campus = () => {
  return (
    <div className="campus">
      <div className="PageBlock">
        <div className="verticalLine"></div>
        <div className="Clear"></div>
      </div>
      <h1>TAKE OUR VIRTUAL TOUR</h1>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

      <div className="row">
        <div className="campus-col">
          <Image src={Campus1} alt="" />
          <div className="layer">
            <h3>DELHI</h3>
          </div>
        </div>
        <div className="campus-col">
          <Image src={Campus2} alt="" />
          <div className="layer">
            <h3>HYDERABAD</h3>
          </div>
        </div>
        <div className="campus-col">
          <Image src={Campus3} alt="" />
          <div className="layer">
            <h3>MUMBAI</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Campus };
