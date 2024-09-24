/* eslint-disable react/prop-types */

function Button({ text, className }) {
  return (
    <button className={`${className} transition duration-300`}>{text}</button>
  );
}

export default Button;
