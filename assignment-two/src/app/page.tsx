import Header from '../components/header'
import Course from '../components/course'
import {Campus} from '../components/campus'
import {Facilities} from '../components/facilities'
import {Testimonials} from '../components/testimonials'
import {Call_To_Action} from '../components/call_to_action'
import {Footer} from '../components/footer'

export default function Home() {
  return (
    <main>
     <Header/>
     <Course/>
     <Campus/>
     <Facilities/>
     <Testimonials/>
     <Call_To_Action />
     <Footer />
    </main>
  )
}
