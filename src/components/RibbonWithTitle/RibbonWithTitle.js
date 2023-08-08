import './RibbonWithTitle.scss'

const RibbonWithTitle = ({text, redirectLink}) =>{
    return(
        <div className="ribbon-with-title">
            <a href={redirectLink && redirectLink.link} target={redirectLink && redirectLink.target}>
                <h1 className="text-uppercase"><strong>{text}</strong></h1>
            </a>
        </div>
    )
}

export default RibbonWithTitle