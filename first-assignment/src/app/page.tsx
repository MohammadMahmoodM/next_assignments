import Image from "next/image";
import img from "../../public/img/first_image.jpg";
import heroImage from "../../src/media/red-p-logo.png";

export default function Home() {
  return (
    <main>
      <div
        style={{
          textAlign: "center",
          backgroundColor: "#15876A",
          height: "400px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "Center",
        }}
      >
        <h1
          style={{
            fontSize: "35px",
            fontWeight: "bold",
            color: "white",
            verticalAlign: "center",
          }}
        >
          Certified Web 3.0 and Metaverse Developer: <br />
          A Nationwide Program in Karachi, Lahore, <br />
          Islamabad, and Peshawar
        </h1>

        <p
          style={{ fontSize: "18px", color: "white", verticalAlign: "center" }}
        >
          Getting Ready for the Next Generation and Future of the Internet -
          Join a 13 Trillion Dollar Industry with 5 Billion Users
        </p>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "2rem 8rem 2rem 8rem",
          fontSize: "2.1rem",
          border: "1px solid black",
          textAlign: "center",
        }}
      >
        <h1 style={{color: "#159957",}}>
          Certified Web 3.0 and Metaverse Developer: A <br />
          Nationwide Program in Karachi, Lahore, Islamabad, <br />
          and Peshawar
        </h1>
        <p>
          <Image src={heroImage} height={500} style={{maxWidth: "100%"}}/>
        </p>

        <h2 style={{marginTop: "2rem", marginBottom: "1rem", color: "#159957",}}>
        The Future of the Web is Web 3.0, Metaverse, and Edge Computing. 
        Panaverse DAO is a movement to spread these technolgies globally. 
        It is community of Web 3 and Metavers developers, designers, trainers, 
        startup founders and service provider..
        </h2>

        <h2>
        <a style={{color: "#1e6bb8", textDecoration: "none",}} href="https://www.piaic.org/">
          Admissions Now Open in Karachi, Lahore, Islamabad, and Peshawar</a>
        </h2>
      </div>

      <h2>Video From Net</h2>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/Aa_YupAVO8E?si=VQjnx20Sntc2_r_5"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>

      <h2>Video From Local</h2>
      <video controls>
        <source src="/video/video4.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <h2>Image from Local</h2>
      <Image
        src={img}
        width={400}
        height={400}
        className="App-logo"
        alt="logo"
      />

      <img src="/img/first_image.jpg" width="560" height="315" />
    </main>
  );
}
