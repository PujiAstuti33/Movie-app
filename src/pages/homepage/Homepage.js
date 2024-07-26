// src/pages/Homepage/Homepage.js
import React from "react";
import PropTypes from "prop-types";
import Card from "../../components/card";

const Homepage = ({ title, welcomeMessage }) => {
  return (
    <Card>
      <h2 className="text-2xl font-bold mb-4">Homepage</h2>
      <p>Welcome to the Movie App!</p>
    </Card>
  );
};

Homepage.propTypes = {
  title: PropTypes.string,
  welcomeMessage: PropTypes.string,
};

Homepage.defaultProps = {
  title: "Homepage",
  welcomeMessage: "Welcome to the Movie App!",
};

export default Homepage;
