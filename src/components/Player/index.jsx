import Avatar from "../Avatar";
import "./style.scss";

export default function Player({
  name,
  image,
  title,
  width = 35,
  height = 35,
  className = "",
  nameClassName = "",
}) {
  return (
    <div className={`player ${className}`} title={title}>
      <Avatar img={image} width={width} height={height} />
      <h1 className={`name ${nameClassName}`}>{name}</h1>
    </div>
  );
}
