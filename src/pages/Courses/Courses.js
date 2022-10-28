import { Link, useLoaderData } from 'react-router-dom';
import Course from '../../components/Course/Course';
import './Courses.css';

const Courses = () => {
  const courses = useLoaderData();
  let categoryArray = [];

  return (
    <div>
      <div className="course-container lg:flex">
        <div className="lg:w-2/3 w-100 mx-auto py-10 grid lg:grid-cols-2 gap-5">
          {courses.map((course) => (
            <Course key={course.id} course={course}></Course>
          ))}
        </div>
        <div className="lg:w-1/3 w-100 p-10">
          <p className="text-xl font-bold mb-5">Filter By Category</p>
          <div className="divider"></div>
          <ul className="menu">
            {
              // eslint-disable-next-line array-callback-return
              courses.map((course) => {
                if (!categoryArray.includes(course.category)) {
                  categoryArray.push(course.category);
                  return (
                    <li key={course.id} className="hover-bordered">
                      <Link
                        to={{
                          state: { category: course.category },
                          pathname: `/filter/${course.category}`,
                        }}
                      >
                        {course.category}
                      </Link>
                    </li>
                  );
                }
              })
            }
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Courses;
