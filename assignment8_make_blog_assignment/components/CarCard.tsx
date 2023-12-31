import {CarProps} from '@/types'
import {CustomButton} from '@/components'
import {calculateCarRent} from '@/utils'

interface CarPropsType{
    Car : CarProps
}

const CarCard = ({Car}: CarPropsType) => {

    // const {city_mpg, year,combination_mpg,cylinders,make} = Car;

    const carRent = calculateCarRent(Car.city_mpg, Car.year)

    return (
        <div className="car-card group">
            <div className="car-card__content">
                {/* {year } {cylinders} */}
                <h2>{Car.make} {Car.year}</h2>
            </div>

            <p>
                <span>
                    {carRent}
                </span>
            </p>
           
        </div>
    )
}

export default CarCard
