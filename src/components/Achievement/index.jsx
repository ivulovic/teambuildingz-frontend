import Avatar from "../Avatar";
import Tooltip from "../Tooltip";
import "./style.scss";

export default function Achievement({
  path,
  image,
  title,
  points,
  description,
  descriptionLong,
}) {
  return (
    <div className="achievement">
      <Tooltip content={<div className="tooltip-content">
        <h1>{title}</h1>
        <p>{descriptionLong}</p>
      </div>}>
        <Avatar width={50} height={50} img={image} />
        <p>{description}</p>
        <h2>{points}</h2>
      </Tooltip>
    </div>
  );
}
