import Header from '../componenet/header'
import Course from '../componenet/course'
import {Campus} from '../componenet/campus'
import {Facilities} from '../componenet/facilities'
import {Testimonials} from '../componenet/testimonials'
import {Call_To_Action} from '../componenet/call_to_action'
import {Footer} from '../componenet/footer'

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
