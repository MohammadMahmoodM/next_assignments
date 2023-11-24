import Image from "next/image";
import course1 from "../../../public/img/course1.png";
import course2 from "../../../public/img/course2.png";
import course3 from "../../../public/img/course3.png";
import "../../styles/styles.css";

const BestCourse = () => {
  return (
    <section className="facilities">
      <h1>Best Courses</h1>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

      <div className="row">
        <div className="facilities-col">
          <Image src={course1} alt="" />
          <h3>Web Development</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            omnis asperiores atque aperiam.
          </p>
        </div>
        <div className="facilities-col">
          <Image src={course2} alt="" />
          <h3>Artificial Intelligence</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            omnis asperiores atque aperiam.
          </p>
        </div>
        <div className="facilities-col">
          <Image src={course3} alt="" />
          <h3>Data Science</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            omnis asperiores atque aperiam.
          </p>
        </div>
      </div>
    </section>
  );
};

export { BestCourse };
