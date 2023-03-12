import React, { useEffect, useState } from "react";
import { Tab } from "@headlessui/react";
import {
  AcademicCapIcon,
  BookOpenIcon,
  PlusCircleIcon,
} from "@heroicons/react/outline";
import { Link } from "react-router-dom";

import CourseInfo from "../components/CourseInfo";
import AssignmentList from "../components/lists/AssignmentList";
import { isTeacher } from "../api/Session";
import MaterialList from "../components/lists/MaterialList";
import ReactPlayer from "react-player";
import { getCourseInfo } from "../api/API_Courses";
import UserAvatar from "../components/UserAvatar";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function CourseDetail(props) {
  const courseId = props.match.params.id;
  const [course, setCourse] = useState([]);
  useEffect(() => {
    getCourseInfo(courseId, setCourse);
  }, []);
  return (
    <>
      <div className="container m-auto mt-5">
        <div className="flex flex-wrap">
          <div className="w-full">
            <div className="bg-green-400 p-3 rounded">
              <p className="text-3xl font-bold text-white">
                {course.courseTitle}
              </p>
              <p className="text-xl text-white">{course.courseIntroduction}</p>
              <div className="flex items-center">
                <UserAvatar link={course.teacherAvatar} />
                <Link
                  to={`/profile/${course.teacherId}`}
                  className="text-gray-500 text-lg font-medium"
                >
                  {course.teacherName}
                </Link>
              </div>
            </div>
          </div>
          <div className="absolute right-20">
            <div className="m-5 bg-white border rounded-xl drop-shadow-xl">
              <ReactPlayer
                url="https://www.youtube.com/watch?v=uMQnn8xU7qs&ab_channel=SyedZano"
                width="450px"
                height="250px"
                controls={true}
              />
              <CourseInfo id={courseId} full={false} />
            </div>
          </div>
          <div className="w-2/3">
            <div>
              <div className="my-5">

              </div>
              <Tab.Group>
                <Tab.List>
                  <div className="flex justify-between">
                    <Tab
                      className={({ selected }) =>
                        classNames(
                          "w-36 lg:w-72 py-2 bg-green-400 text-white font-semibold rounded-xl",
                          selected ? "opacity-100 shadow-lg" : "opacity-25"
                        )
                      }
                    >
                      <AcademicCapIcon className="w-10 m-auto" />
                      Assignments
                    </Tab>
                    <Tab
                      className={({ selected }) =>
                        classNames(
                          "w-36 lg:w-72 py-2 bg-green-400 text-white font-semibold rounded-xl",
                          selected ? "opacity-100 shadow-lg" : "opacity-25"
                        )
                      }
                    >
                      <BookOpenIcon className="w-10 m-auto" />
                      Materials
                    </Tab>
                  </div>
                </Tab.List>
                <Tab.Panels>
                  <Tab.Panel className="mt-5">
                    {isTeacher() && (
                      <Link
                        to={"/assignment/create/" + courseId}
                        className="p-2 mb-5 w-72 flex justify-center items-center bg-white text-gray-500 text-lg font-medium border-r-2 rounded-md shadow-md hover:shadow relative"
                      >
                        <PlusCircleIcon className="animate-pulse w-5 mr-2 text-green-400" />
                        New assignment
                      </Link>
                    )}
                    <AssignmentList id={courseId} />
                  </Tab.Panel>
                  <Tab.Panel className="mt-5">
                    {isTeacher() && (
                      <div className="flex justify-end">
                        <Link
                          to={"/material/create/" + courseId}
                          className="p-2 mb-5 w-72 flex justify-center items-center bg-white text-gray-500 text-lg font-medium border-r-2 rounded-md shadow-md hover:shadow relative"
                        >
                          <PlusCircleIcon className="animate-pulse w-5 mr-2 text-green-400" />
                          New material
                        </Link>
                      </div>
                    )}
                    <MaterialList id={courseId} />
                  </Tab.Panel>
                </Tab.Panels>
              </Tab.Group>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CourseDetail;
