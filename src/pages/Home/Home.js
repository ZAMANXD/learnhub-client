/* eslint-disable array-callback-return */
import React from 'react';
import About from '../../components/About/About';
import Banner from '../../components/Banner/Banner';

import { useLoaderData } from 'react-router-dom';
import Course from '../../components/Course/Course';
import { FaStar } from 'react-icons/fa';
import './Home.css';

const Home = () => {
  const course = useLoaderData();

  return (
    <div>
      <Banner></Banner>
      <About></About>

      <div className="popular lg:w-3/4 w-full py-10 mx-auto">
        <h2 className="text-3xl font-bold text-center text-white">
          Popular Courses
        </h2>
        <p className="lg:flex lg:p-0 p-3 text-center justify-center items-center">
          (Courses that has 5<FaStar className="inline"></FaStar> rating is
          concidered as popular)
        </p>
        <div className="divider"></div>
        <div className="md:grid lg:grid-cols-3 grid-cols-2 lg:p-0 p-4 gap-4 justify-center align-center">
          {course.map((course) => {
            if (course.rating === 5) {
              return <Course key={course.id} course={course}></Course>;
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
