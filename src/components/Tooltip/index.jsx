import './style.scss';

export default function Tooltip({children, content}){
    return <div className="tooltip">
        {children}
        <div className="tooltip-text">
         {content}
        </div>
    </div>
}