import React, { useState } from 'react';
import BookDetails from './components/BookDetails';
import BlogDetails from './components/BlogDetails';
import CourseDetails from './components/CourseDetails';

function App() {
  const [view, setView] = useState("book");

  return (
    <div style={{ padding: "20px" }}>
      <h1>Blogger App</h1>

      <div>
        <button onClick={() => setView("book")}>Show Book</button>
        <button onClick={() => setView("blog")}>Show Blog</button>
        <button onClick={() => setView("course")}>Show Course</button>
      </div>

      <hr />

      
      {view === "book" && <BookDetails />}
      {view === "blog" && <BlogDetails />}
      {view === "course" && <CourseDetails />}
    </div>
  );
}

export default App;
