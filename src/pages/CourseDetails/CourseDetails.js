import React from 'react';
import { FaDownload } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import Broken from '../Broken/Broken';
import './CourseDetails.css';
import Pdf from 'react-to-pdf';

const CourseDetails = () => {
  const data = useLoaderData();
  const ref = React.createRef();

  return data.id ? (
    <div className="relative">
      <div className="py-10 lg:w-3/4 w-full mx-auto course-contents">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white">Course Details</h1>
          <div className="divider"></div>
        </div>

        <div className="lg:flex justify-between">
          <div className="lg:w-1/2">
            <h1 className="text-xl">
              Course Name: <span className="text-white">{data.name}</span>
            </h1>
            <p className="mt-10 mb-3 bg-success inline-block px-3 rounded text-black">
              Instructor
            </p>
            <div className="flex items-center">
              <img
                src={data.instructor_image}
                className="rounded-full instructor-img"
                alt=""
              />
              <h1 className="text-xl ml-3">
                <span className="text-white">{data.instructor}</span>
              </h1>
            </div>

            <div ref={ref}>
              <p className="mt-10 mb-3 bg-success  inline-block px-3 rounded">
                Details:{' '}
                <span className="text-justify text-white">
                  {data.description}
                </span>
              </p>
            </div>
          </div>
          <div className="lg:w-1/2 flex justify-end">
            <Pdf targetRef={ref} filename="course-details.pdf">
              {({ toPdf }) => (
                <button onClick={toPdf} className="btn btn-outline btn-primary">
                  Download Pdf <FaDownload className="ml-2"></FaDownload>
                </button>
              )}
            </Pdf>
          </div>
        </div>

        <div className="mt-5  lg:overflow-hidden overflow-x-auto">
          <table className=" table w-full text-center ">
            <thead className="bg-slate-100">
              <tr>
                <th>Duration</th>
                <th>Lectures</th>
                <th>Quizzes</th>
                <th>Assignments</th>
                <th>Projects</th>
                <th>Ratings</th>
                <th>Students</th>
              </tr>
            </thead>
            <tbody className="table-body">
              <tr>
                <td>{data.totalHours} Hours</td>
                <td>{data.totalLectures}</td>
                <td>{data.totalQuizzes}</td>
                <td>{data.totalAssignments}</td>
                <td>{data.totalProjects}</td>
                <td>{data.rating}</td>
                <td>{data.totalEnrolled}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-5 text-end">
          <Link
            to={`/checkout/${data.id}`}
            className="btn btn-outline btn-primary"
          >
            {' '}
            Get premium access
          </Link>
        </div>
      </div>
    </div>
  ) : (
    <Broken></Broken>
  );
};

export default CourseDetails;
