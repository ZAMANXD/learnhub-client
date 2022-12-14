import React from 'react';
import { FaStar, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Course.css';

const Course = ({ course }) => {
  return (
    <div className="course-holder lg:m-0 my-4">
      <div className="card shadow-xl h-full">
        <figure>
          <img src={course.image} alt={course.name} />
        </figure>
        <div className="card-body p-4">
          <div className="flex justify-between items-center">
            <div className="bg-pink-500 px-2 py-1 text-white">
              <small>{course.category}</small>
            </div>
            <h2 className="text-2xl">
              <span> $</span>
              <span className="font-bold text-white">
                {course.price === 0 ? 'Free' : course.price}
              </span>
            </h2>
          </div>
          <h2 className="text-lg text-white font-bold">{course.name}</h2>
          <p>
            {course.description.length > 50
              ? course.description.slice(0, 50) + '...'
              : course.description}
          </p>
          <div className="flex items-center">
            <img
              src={course.instructor_image}
              className="rounded-full instructor-img"
              alt={course.instructor}
            />
            <p className="text-white">
              <small>{course.instructor}</small>
            </p>
          </div>
          <div className="divider"></div>

          <div className="card-actions justify-between items-center">
            <div className="flex items-center">
              <FaUser className="mr-2"></FaUser>{' '}
              <span className="text-white">{course.totalEnrolled}</span>
              <FaStar className="ml-3 mr-2"></FaStar>{' '}
              <span className="text-white">{course.rating}</span>
            </div>
            <Link
              to={`/course-details/${course.id}`}
              className="btn btn-primary"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
