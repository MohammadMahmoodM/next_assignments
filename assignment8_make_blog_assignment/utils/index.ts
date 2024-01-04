import {CarProps, FilterProps} from '@/types'

export async function fetchCars(filter: FilterProps) {

    const {manufacturer, year, model, limit, fuel} = filter;

    const options = {
        method: 'GET',
        headers: {
		'X-RapidAPI-Key': '633f6904d9mshbf76c4e7fcd217ep1665f0jsn453d27bbf746',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }}

    const url = `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`;



    let result = await fetch(url, options)
    
    let jsonResult = await result.json()

    return jsonResult
}

export const calculateCarRent = (city_mpg: number, year: number) => {
    const basePricePerDay = 50; // Base rental price per day in dollars
    const mileageFactor = 0.1; // Additional rate per mile driven
    const ageFactor = 0.05; // Additional rate per year of vehicle age
  
    // Calculate additional rate based on mileage and age
    const mileageRate = city_mpg * mileageFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;
  
    // Calculate total rental rate per day
    const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;
  
    return rentalRatePerDay.toFixed(0);
  };

  export const generateCarImageUrl = (Car: CarProps, angle?: string) => {
      const url = new URL('https://cdn.image.studio/getimage');

      const {make, year, model} = Car;

     url.searchParams.append('customer', 'hrjavascript-mastery');
     url.searchParams.append('make', make)
     url.searchParams.append('modelFamily', model.split(" ")[0])
     url.searchParams.append('zoomType', 'fullscreen')
     url.searchParams.append('modelYear', `${year}`)
     url.searchParams.append('angle', `${angle}`)
 
    return `${url}`;
    } 