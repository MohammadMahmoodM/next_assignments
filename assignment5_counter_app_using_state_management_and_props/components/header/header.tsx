export default function Header() {
  return (
    <div className=" flex flex-col">
        <h1 className="m-5 text-lg font-bold flex justify-center">
            Project Description
        </h1>
      <p  className="m-3"> 
          This is a Simple Project, Built on Next Js framework. And By default Next is 
          static site generation  framework which provide good SEO and A large speed.
          But some time we need interactivity which is not avaible by default, as button click
          and action depending on logic behind button for that we could make some componenet 
          as client componenet by writing 'use client' on top of page. is logic built in this 
          simple project and for state managment, The useState React hook is being used. 
          This project is also built on Typescript. data is being trasnfering amoung files using
          props.
      </p>
    </div>
  );
}
