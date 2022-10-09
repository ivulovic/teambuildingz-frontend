import Avatar from '../Avatar';
import './style.scss';

export default function Player({
    name,
    image,
    width = 35,
    height = 35,
    nameClassName = '',
}){
    return <div className="player">
        <Avatar 
            img={image}
            width={width}
            height={height}
        />
        <h1 className={`name ${nameClassName}`}>{name}</h1>
    </div>
}