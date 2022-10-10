import { Link } from 'react-router-dom';
import './style.scss';

export default function Logo(){
    return <Link to="/" className="logo">
        <div>
            <h1>Teambuildingz</h1>
            <h2>not just a game .</h2>
        </div>
    </Link>
}