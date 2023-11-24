import '../../styles/styles.css'

const ContactUs = ()=> {
    return (
    <section className="contact-us">
        <div className="row">
            <div className="content-col">
                <div>
                    <i className="fa fa-home"></i>
                    <span>
                        <h5>Near Noor Masjid</h5>
                        <p>Canal Road , Faisalabad</p>
                    </span>
                </div>
                <div>
                    <i className="fa fa-phone"></i>
                    <span>
                        <h5>+92 3457576867</h5>
                        <p>Monday To Saturday, 9AM To 6PM</p>
                    </span>
                </div>
                <div>
                    <i className="fa fa-envelope"></i>
                    <span>
                        <h5>xyz@email.com</h5>
                        <p>Email Us Yor Query</p>
                    </span>
                </div>
            </div>

            <div className="content-col">
                <form>
                    <input type="text" placeholder="Enter Name" required/>
                    <input type="email" placeholder="Enter Email" required/>
                    <input type="text" placeholder="Enter Subject" required/>
                    <textarea rows={8} placeholder="Message" required></textarea>
                    <button type="submit" className="hero_btn btn">Send Message</button>
                </form>
            </div>
            
        </div>
    </section>
    );
}

export {ContactUs}