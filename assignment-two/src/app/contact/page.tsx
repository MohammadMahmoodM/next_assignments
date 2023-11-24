import {ContactHeader} from './contact_header'
import {ContactLocation} from './contact_location'
import {ContactUs} from './contact_us'
import {ContactFooter} from './contact_footer'

export default function Contact() {
    return (
        <main>
            <ContactHeader />
            <ContactLocation />
            <ContactUs />
            <ContactFooter />
        </main>
    );
}