import Image from "next/image";
import "../styles/styles.css";
import Link from "next/link";

export default function Header() {
  // const router = useRouter()
  return (
    <section className="header">
      <nav>
        <Link href="/" className="logo">
          Xplore
          <i className="fab fa-staylinked"></i>kill
        </Link>
        <div className="nav-links" id="navLinks">
          {/* <i className="fa fa-times" onclick="hideMenu()"></i> */}
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/course">Course</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        {/* <i className="fa fa-bars" onclick="showMenu()"></i> */}
      </nav>

      <div className="text_box">
        <h2>GET READY</h2>
        <p id="headtext">TO DISCOVER CAMPUS</p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit
          consequuntur corrupti sapiente aut porro
          <br /> esse blanditiis in quae perspiciatis quo.
        </p>
        <a href="/about" className="hero_btn">
          Visit Us To Know More
        </a>
      </div>
    </section>
  );
}
