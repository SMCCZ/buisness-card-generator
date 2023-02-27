import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import "./Blog.css";
const Blogs = () => {
  const [blogs, setBlogs] = useState([
    {
      heading: "50 blog headers guaranteed to draw readers into any post",
      shortDesc:
        "Pick a template from the myriads out there all readily available on any platform and you'll be good to go, right?",
    },
    {
      heading: "50 blog headers guaranteed to draw readers into any post",
      shortDesc:
        "Pick a template from the myriads out there all readily available on any platform and you'll be good to go, right?",
    },
    {
      heading: "50 blog headers guaranteed to draw readers into any post",
      shortDesc:
        "Pick a template from the myriads out there all readily available on any platform and you'll be good to go, right?",
    },
    {
      heading: "50 blog headers guaranteed to draw readers into any post",
      shortDesc:
        "Pick a template from the myriads out there all readily available on any platform and you'll be good to go, right?",
    },
    {
      heading: "50 blog headers guaranteed to draw readers into any post",
      shortDesc:
        "Pick a template from the myriads out there all readily available on any platform and you'll be good to go, right?",
    },
    {
      heading: "50 blog headers guaranteed to draw readers into any post",
      shortDesc:
        "Pick a template from the myriads out there all readily available on any platform and you'll be good to go, right?",
    },
    {
      heading: "50 blog headers guaranteed to draw readers into any post",
      shortDesc:
        "Pick a template from the myriads out there all readily available on any platform and you'll be good to go, right?",
    },
    {
      heading: "50 blog headers guaranteed to draw readers into any post",
      shortDesc:
        "Pick a template from the myriads out there all readily available on any platform and you'll be good to go, right?",
    },
    {
      heading: "50 blog headers guaranteed to draw readers into any post",
      shortDesc:
        "Pick a template from the myriads out there all readily available on any platform and you'll be good to go, right?",
    },
    {
      heading: "50 blog headers guaranteed to draw readers into any post",
      shortDesc:
        "Pick a template from the myriads out there all readily available on any platform and you'll be good to go, right?",
    },
    {
      heading: "50 blog headers guaranteed to draw readers into any post",
      shortDesc:
        "Pick a template from the myriads out there all readily available on any platform and you'll be good to go, right?",
    },
    {
      heading: "50 blog headers guaranteed to draw readers into any post",
      shortDesc:
        "Pick a template from the myriads out there all readily available on any platform and you'll be good to go, right?",
    },
    {
      heading: "50 blog headers guaranteed to draw readers into any post",
      shortDesc:
        "Pick a template from the myriads out there all readily available on any platform and you'll be good to go, right?",
    },
    {
      heading: "50 blog headers guaranteed to draw readers into any post",
      shortDesc:
        "Pick a template from the myriads out there all readily available on any platform and you'll be good to go, right?",
    },
  ]);
  return (
    <div
      style={{
        paddingLeft: "5vw",
        paddingTop: "32px",
      }}
    >
      <Header />
      {blogs.map((element, index) => {
        return (
          <div key={index} className="blog-short-card">
            <div>
              <h5>8 Mins Read</h5>
              <h6>02 Jul 21</h6>
            </div>
            <div
              style={{
                paddingLeft: "61px",
              }}
            >
              <h1>{element.heading}</h1>
              <p>{element.shortDesc}</p>
            </div>
            <div
              style={{
                paddingLeft: "61px",
              }}
            >
              <Link to={"56789"} className={"learn-more"}>
                Learn More
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Blogs;
