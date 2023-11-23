import Image from 'next/image'
import '../styles/styles.css'
import Link from 'next/link'
import About from '../compnenet/About/About'
// import { useRouter } from 'next/router'

export default function Header() {
    // const router = useRouter()
  return (
     <section className="header">
        <nav>
            <Link href="/" className="logo">Xplore
                <i className="fab fa-staylinked"></i>kill
            </Link>
            <div className="nav-links" id="navLinks">
                <ul>
                    <li><Link href="/About">About</Link></li>
                </ul>
            </div>
            
        </nav>

        
    </section>
  )
}
