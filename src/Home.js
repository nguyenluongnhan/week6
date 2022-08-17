import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Link to={'Search'}>
        <h2>Search</h2>
      </Link>
      <Link to={'Register'}>
        <h2>Register</h2>
      </Link>
      <Link to={'QuizApp'}>
        <h2>Quiz App</h2>
      </Link>
    </div>
  );
};

export default Home;