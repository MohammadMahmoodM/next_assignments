import Image from 'next/image';
import libary from '../../public/img/libary.png'
import playground from '../../public/img/playground.png'
import food from '../../public/img/food.png'


const Facilities = () => {
    return (
        <div className="facilities">
            <div className="PageBlock">
                <div className="verticalLine"></div>
                <div className="Clear"></div>
            </div>
            <h1>Our Facilities</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

            <div className="row">
                <div className="facilities-col">
                    <Image src={libary} alt=""/>
                        <h3>Best Libary</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio omnis asperiores atque aperiam.
                        </p>
                </div>
                <div className="facilities-col">
                    <Image src={playground} alt=""/>
                        <h3>Athletics</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio omnis asperiores atque aperiam.
                        </p>
                </div>
                <div className="facilities-col">
                    <Image src={food} alt=""/>
                        <h3>Tasty and Healthy Food</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio omnis asperiores atque aperiam.
                        </p>
                </div>
            </div>
        </div>
    )
}

export {Facilities};