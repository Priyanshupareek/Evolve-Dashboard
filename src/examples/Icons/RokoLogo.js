/*!

*/

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

function RokoLogo({ size }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="100" cy="100" r="80" fill="none" stroke="white" stroke-width="10" />
      <line x1="80" y1="60" x2="80" y2="140" stroke="white" stroke-width="10" />
      <line x1="80" y1="100" x2="120" y2="60" stroke="white" stroke-width="10" />
      <line x1="80" y1="100" x2="120" y2="140" stroke="white" stroke-width="10" />
      <line x1="70" y1="60" x2="130" y2="60" stroke="white" stroke-width="10" />
      <line x1="70" y1="140" x2="130" y2="140" stroke="white" stroke-width="10" />
    </svg>
  );
}

// Setting default values for the props of RokoLogo
RokoLogo.defaultProps = {
  color: "dark",
  size: "16px",
};

// Typechecking props for the RokoLogo
RokoLogo.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "dark",
    "light",
    "white",
  ]),
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default RokoLogo;
