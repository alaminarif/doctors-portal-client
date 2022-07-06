import React from "react";
import Chair from "../../images/chair.png";

const Banner = () => {
  return (
    <div className="hero min-h-screen ">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <img src={Chair} class="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 class="text-5xl font-bold">Box Office News!</h1>
          <p class="py-6 mr-10 text-xl ">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a
            id nisi.
          </p>
          <button class="btn btn-primary text-white uppercase font-bold bg-gradient-to-r from-secondary to-primary ">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
