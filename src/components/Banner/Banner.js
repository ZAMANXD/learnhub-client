import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css';

const Banner = () => {
  return (
    <div className="hero-banner py-20 px-40">
      <div className=" mx-auto">
        <div className="">
          <h1 className="lg:text-5xl text-xl font-bold text-white">LearnHub</h1>

          <h4 className="lg:text-xl mt-5">
            “The more that you read, the more things you will know. The more
            that you learn, the more places you’ll go.” ― Dr. Seuss
          </h4>
          <h4 className="lg:text-xl mt-5">
            “Bodily exercise, when compulsory, does no harm to the body; but
            knowledge which is acquired under compulsion obtains no hold on the
            mind.” ― Plato
          </h4>

          <div className="mt-10">
            <Link
              to="/courses"
              className="btn btn-outline btn-primary mr-5 rounded-full px-10"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
