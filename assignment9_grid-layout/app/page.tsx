import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="grid  sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-2 m-8">
        <div className="relative h-64 border-2 border-black md:col-span-2 lg:col-span-2 ">
          A
        </div>
        <div className="relative min-h-64 border-2 border-black md:row-span-2 lg:row-span-2">
        B
        </div>

        <div className="relative min-h-64 border-2 border-black md:row-span-2 lg:row-span-2">
        C
        </div>
 
        <div className="relative h-64 border-2 border-black">
        D
        </div>

        <div className="relative h-64 border-2 border-black md:col-span-2 lg:col-span-2">
        E
        </div>
      </div>
    </main>
  );
}
