import Link from "next/link";

export default function Hero() {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Hello there</h1>
          <p className="py-6">
            This is a Sample Blog Post Site, I'm Just Creating a Sample to Submiteas Assignment.
            Also Im Learning this Project so Later Might Use as Portfolio.
          </p>
          <Link href="/">
          <button className="btn btn-primary">Get Started</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
