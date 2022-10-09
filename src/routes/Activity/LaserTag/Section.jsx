export default function Section({title, subtitle, children}){
    return <div className="section">
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
        {children}
    </div>
}