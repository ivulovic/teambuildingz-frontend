import "./style.scss";

export default function Button({
  className = "",
  type = "primary",
  children,
  ...restProps
}) {
  return (
    <button className={`button ${type} ${className}`} {...restProps}>
      {children}
    </button>
  );
}
