const Button = ({ text, color, children }) => {
  console.log({ text, color });
  return (
    <button
      onClick={() => {
        console.log({ text }, "클릭");
      }}
      style={{ color: color }}
    >
      {text}
      {children}
    </button>
  );
};

Button.defaultProps = {
  color: "black",
};

export default Button;
