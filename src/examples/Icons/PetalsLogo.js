import PropTypes from "prop-types";

function SimpleFlower({ size }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Center */}
      <circle cx="100" cy="100" r="10" fill="none" stroke="white" strokeWidth="2" />

      {/* Petals */}
      <path d="M 100 40 L 110 60 L 90 60 Z" fill="none" stroke="white" strokeWidth="2"/>
      <path d="M 100 160 L 110 140 L 90 140 Z" fill="none" stroke="white" strokeWidth="2"/>
      <path d="M 40 100 L 60 110 L 60 90 Z" fill="none" stroke="white" strokeWidth="2"/>
      <path d="M 160 100 L 140 110 L 140 90 Z" fill="none" stroke="white" strokeWidth="2"/>
      <path d="M 73 73 L 87 87 L 65 87 Z" fill="none" stroke="white" strokeWidth="2"/>
      <path d="M 127 73 L 141 87 L 119 87 Z" fill="none" stroke="white" strokeWidth="2"/>
      <path d="M 73 127 L 87 141 L 65 141 Z" fill="none" stroke="white" strokeWidth="2"/>
      <path d="M 127 127 L 141 141 L 119 141 Z" fill="none" stroke="white" strokeWidth="2"/>
    </svg>
  );
}

// Setting default values for the props of SimpleFlower
SimpleFlower.defaultProps = {
  size: "200px",
};

// Typechecking props for the SimpleFlower
SimpleFlower.propTypes = {
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default SimpleFlower;
