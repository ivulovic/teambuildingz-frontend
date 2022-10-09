import './style.scss';

export default function Section({title, subtitle, children}){
    return <section className="section">
        <h1>{title}</h1>
        {subtitle && <h2>{subtitle}</h2>}
         {children}
    </section>
}