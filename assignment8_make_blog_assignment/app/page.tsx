import Image from "next/image";
import { Hero, SearchBar, CustomFilter, CarCard, ShowMore } from "@/components";
import {fetchCars} from '@/utils';
import {fuelTypes, yearsOfProduction} from '@/constants'

export default async function Home({ searchParams }: any) {

  const allCars = await fetchCars({
    manufacturer: searchParams.manufacturer || '',
    year: searchParams.year || 2022, 
    fuel: searchParams.fuel || '',
    limit: searchParams.limit || 15,
    model: searchParams.model || '',
   });
   console.log(allCars);

   const isDataEmpty = !Array.isArray(allCars) || allCars.length === 0 || !allCars;   

  return (
    <main className="overflow-hidden">
      <Hero />

      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl">Car Catalogue</h1>
          <p>Explore the carsyou might like</p>
        
        <div className="home__filters">
          <SearchBar />

          <div className="home__filter-container">

            <CustomFilter title="fuel" options={fuelTypes}/>
            <CustomFilter title="year" options={yearsOfProduction}/>
          </div>
        </div>

        </div>


        {isDataEmpty ? (
          <section className="home__error-container">
           <h2 className="text-xl font-bold text-black">No Data Found</h2>
            {allCars.message}
          </section>
        ) :(
          <section>
            <div className="home__cars-wrapper">
              {allCars.map((Car)=> {
                return (
                 
                <>
                  <CarCard Car={Car}/>
                </>
                  
                )
              })}
              </div>

              <ShowMore pageNumber={(searchParams.limit || 10) / 10}
              isNext = {(searchParams.limit || 10) > allCars.length }/>
          </section>
        )}

      </div>
    </main>
  );
}
