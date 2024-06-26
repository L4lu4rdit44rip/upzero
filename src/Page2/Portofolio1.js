import React from "react";

function Portofolio1(props) {
  return (
    <div className="mx-5 xl:mx-auto max-w-screen-lg">
      <div className="flex flex-col md:flex-row px-4 md:px-0 py-5">
        <div className="w-full md:w-3/5">
          <h1 className="font-bold text-xl md:text-2xl mt-4 md:mt-28 pl-5">{props.judul}</h1>
          <p className="text-xl md:text-lg my-6 md:my-10 pr-4 md:pr-10 pl-5">{props.desct}</p>
        </div>
        <div className="w-full md:w-2/5">
          <img className="w-full md:max-w-full rounded-xl" src={props.src} alt={props.alt} />
        </div>
      </div>
    </div>

  );
}

export default Portofolio1;
