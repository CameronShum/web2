import { useState, useEffect } from "react";

// Get Window dimensions
const getWindowDimensions = () => {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
};

const generateValues = windowDimensions => ({ dimType, size, value }) => {
  if (windowDimensions[dimType] > size) {
    console.log(value);
    return value;
  }
};

const OnDimensionChange = arr => {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return arr.map(generateValues(windowDimensions));
};

export default OnDimensionChange;
