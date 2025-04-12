/**
 * Home component
 *
 * The section at the top of the page to display image of your
 * choice, name and title that describes your career focus.
 */

import React from "react";
import arrowSvg from "../images/down-arrow.svg";
import PropTypes from "prop-types";

/**
 * Home background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that
 * represents what you see in that image.
 *
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/woman-with-tablet.jpg";

const imageAltText =
  "Adult female in office setting leaning against a glass wall while holding a platinum Microsoft Surface Pro 7 in tablet mode preparing to write with Microsoft Surface Pen";

const Home = ({ name, title }) => {
  return (
    <section id="home" className="min-height" style={{ position: "relative", overflow: "hidden" }}>
      <img
        className="background"
        src={image}
        alt={imageAltText}
        style={{ objectFit: "cover", width: "100%", height: "100%" }}
      />
      <div
        style={{
          position: "absolute",
          top: "30%", // Shifted further upward
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
          animation: "fadeIn 2s ease-in-out",
        }}
      >
        <h1
          style={{
            fontSize: "6rem", // Larger size
            fontWeight: "bold",
            fontFamily: "'Playfair Display', serif", // Elegant font
            background: "linear-gradient(90deg, #ff7e5f, #feb47b)", // Gradient
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            animation: "gradientFlow 3s infinite",
          }}
        >
          {name}
        </h1>
        <h2
          style={{
            fontSize: "2.5rem", // Increased size
            fontStyle: "italic",
            fontFamily: "'Roboto', sans-serif", // Complementary font
            color: "#333", // Dark tone for subtitle
            marginTop: "1rem",
          }}
        >
          {title}
        </h2>
      </div>
      <div
        style={{
          position: "absolute",
          bottom: "3rem",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <img
          src={arrowSvg}
          style={{ height: "4rem", width: "4rem", animation: "bounce 2s infinite" }}
          alt="Scroll down indicator"
        />
      </div>
    </section>
  );
};

// Add CSS animations
const styles = `
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes gradientFlow {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
}
`;

// Inject styles into the document head
if (typeof document !== "undefined") {
  const styleSheet = document.createElement("style");
  styleSheet.type = "text/css";
  styleSheet.innerText = styles;
  document.head.appendChild(styleSheet);
}

Home.defaultProps = {
  name: "",
  title: "",
};

Home.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Home;
