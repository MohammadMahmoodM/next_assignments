import Link from 'next/link'
import '../../styles/styles.css'

const AboutHeading = () => {
    return (
        <section className="Sub-header">
        <nav>
            <Link href="/" className="logo">Xplore
                <i className="fab fa-staylinked"></i>kill
            </Link>
            <div className="nav-links" id="navLinks">
                {/* <i className="fa fa-times" onclick="hideMenu()"></i> */}
                <ul>
                    <li><Link href="/">Home</Link></li>
                    <li><a href="course.html">Course</a></li>
                    <li><a href="blog.html">Blog</a></li>
                    <li><Link href="/About">About</Link></li>
                    <li><a href="contact.html">Contact</a></li>
                </ul>
            </div>
            {/* <i className="fa fa-bars" onclick="showMenu()"></i> */}
           
        </nav>
        <h1>About Us</h1>
    </section>
    )
}

export {AboutHeading}