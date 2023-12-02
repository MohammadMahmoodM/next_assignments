import Link from 'next/link'
import Image from 'next/image'
import {cardList} from "../data"



export default function BlogPage() {
  return (

    
    <>

    <div className="flex justify-center items-center my-4">
      <h1 className="text-4xl">All My Blogs</h1>
    </div>
    <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 cs:grid-cols-1 gap-6 m-4">
      {cardList.map((card, index) => {
        return (

          <Link href={`/blog/${card.slug}`}>
        
          <div key={index} className="card w-full md:w-70 sm:w-70 glass m-3">
            <figure>
              <img src={card.img} width="100%" alt="car!" />
            </figure>
            <div className="card-body">
            <h2 className="card-title">{card.title}</h2>
              
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Learn now!</button>
              </div>
            </div>
          </div>
          </Link>
        
        )
      })}
      </div>
    </>

    
  );
}
