import "./style.scss";

export default function Input({ name, label, ...restProps }) {
  return (
    <div className="input">
      <label htmlFor={`input${name}`}>{label}</label>
      <input id={name} {...restProps} />
    </div>
  );
}
