
import { useState } from "react";

export default function CoursesPage() {
  const [courses, setCourses] = useState([
    "MCA",
    "MBA",
    "BCA",
    "BBA",
    "B.Com",
    "B.Sc"
  ]);

  const [newCourse, setNewCourse] = useState("");

  function addCourse() {
    if (newCourse.trim()) {
      setCourses([...courses, newCourse.trim()]);
      setNewCourse("");
    }
  }

  function deleteCourse(index) {
    setCourses(courses.filter((_, i) => i !== index));
  }

  return (
    <main className="page">
      <h1>Course Management</h1>
      <p className="intro">Add and manage available courses.</p>

      <div className="student-form">
        <label>Course Name</label>
        <input
          value={newCourse}
          onChange={(e) => setNewCourse(e.target.value)}
          placeholder="Enter course name"
        />

        <button className="button" onClick={addCourse}>
          + Add Course
        </button>
      </div>

      <div className="course-grid">
        {courses.map((course, index) => (
          <div className="course-card" key={index}>
            <h2>📚 {course}</h2>
            <button
              className="action-button delete-action-button"
              onClick={() => deleteCourse(index)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}
