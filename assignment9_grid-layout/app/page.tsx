import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="grid  sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-2 m-8">
        <div className="relative h-64 border-2 border-black md:col-span-2 lg:col-span-2 ">
          <Image src="/1.png" fill  alt="first image"/>
        </div>
        <div className="relative min-h-64 border-2 border-black md:row-span-2 lg:row-span-2">
        <Image src="/2.jpg" fill  alt="first image"/>
        </div>

        <div className="relative min-h-64 border-2 border-black md:row-span-2 lg:row-span-2">
        <Image src="/3.jpg" fill  alt="first image"/>
        </div>
 
        <div className="relative h-64 border-2 border-black">
        <Image src="/4.png" fill  alt="first image"/>
        </div>

        <div className="relative h-64 border-2 border-black md:col-span-2 lg:col-span-2">
        <Image src="/5.png" fill  alt="first image"/>
        </div>
      </div>
    </main>
  );
}
