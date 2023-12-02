import { cardList } from "../../data";
import Image from "next/image";

interface Params {
  params: {
    img: string;
    title: string;
    slug: string;
    text: string;
  };
}

export default function BlogPage({ params }: Params) {
  //  let blogData = cardList.find((blog) => {
  //      return blog.slug == params.slug;
  //   });

  let blog = cardList.filter((data) => {
    return data.slug === params.slug;
  });

  return (
    <div className="hero min-h-screen bg-base-200">
      {blog.map((blogData) => {
        return (
          <div className="hero-content flex-col lg:flex-row-reverse">
           
            <img
              src={blogData.img}
              className="max-w-sm rounded-lg shadow-2xl"
            />
            <div>
              <h1 className="text-5xl font-bold">{blogData.title}</h1>
              <p className="py-6">
              {blogData.text}
              </p>
              <button className="btn btn-primary">Go Back</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
