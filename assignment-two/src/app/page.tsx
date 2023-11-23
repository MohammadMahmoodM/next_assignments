import Image from 'next/image'
import Header from '../compnenet/header'
import Course from '../compnenet/course'
import {Campus} from '../compnenet/campus'
import {Facilities} from '../compnenet/facilities'
import {Testimonials} from '../compnenet/testimonials'
import {Call_To_Action} from '../compnenet/call_to_action'
import {Footer} from '../compnenet/footer'

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
