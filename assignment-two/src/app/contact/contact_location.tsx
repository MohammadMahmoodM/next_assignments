import '../../styles/styles.css'

const ContactLocation = () => {
    return (
    <section className="loacation">
        <iframe src="https://www.google.com/maps/d/embed?mid=10K9ZDPjrrBM89g9R4f9EKgN6RuI&hl=en_US&ehbc=2E312F" 
        width={640} height={480}  style={{border:0}} allowFullScreen={true} loading="lazy"></iframe>
    </section>
    )
}

export {ContactLocation}