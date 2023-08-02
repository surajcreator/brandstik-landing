import './RibbonWithTitle.scss'

const RibbonWithTitle = ({text}) =>{
    return(
        <div className="ribbon-with-title">
            <a href='#'><h1 className="text-uppercase">{text}</h1></a>
        </div>
    )
}

export default RibbonWithTitle