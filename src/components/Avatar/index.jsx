const Avatar = ({ img, width = 40, height = 40, name, text, style }) => {
  return (
    <div className="ui-avatar">
      {img && (
        <img
          className="rounded avatar"
          src={img}
          alt={name}
          width={width}
          height={height}
        />
      )}
      {text && (
        <p className="avatar" style={{ ...style }}>
          {text}
        </p>
      )}
    </div>
  );
};

export default Avatar;
