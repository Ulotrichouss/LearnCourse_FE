import React, { useState, useEffect } from "react";
import CourseInfo from "../components/CourseInfo";
import ResgisteredList from "../components/lists/ResgisteredList";
import { getRecommendCourses } from "../api/API_Courses";
import NewCourseCard from "../components/NewCourseCard";
import { Link } from "react-router-dom";
function NewCourse(props) {
  const courseId = props.match.params.id;
  const [recommendCourses, setRecommendCourses] = useState([]);
  useEffect(() => {
    getRecommendCourses(courseId, setRecommendCourses);
  }, [courseId]);

  return (
    <div>
      <div className="container m-auto mt-5">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-2/3 order-2 lg:order-1">
            <div className="p-5">
              <ResgisteredList id={courseId} />
            </div>
          </div>
          <div className="w-full lg:w-1/3 order-1 lg:order-2">
            <CourseInfo id={courseId} full={true} />
          </div>
        </div>
        <div>
          <div className="mt-5 lg:px-0 grid grid-cols-1 lg:grid-cols-4 gap-4 gap-y-8">
          {recommendCourses.map((item, index) => {
            return (
              <Link to={"/courses/new/" + item.id}>
                <NewCourseCard key={index} data={item} />
              </Link>
            );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewCourse;
