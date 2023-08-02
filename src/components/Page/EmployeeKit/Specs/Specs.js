import Title from "../../../Title/Title"

const WelcomeKitSpecs = ({src, alt, title}) =>{
    return(
        <div className="container">
            {title && <Title title={title.text} className={title.cssClass} />}
            <img className="img-fluid" src={src} alt={alt}  />
        </div>
    )
}

export default WelcomeKitSpecs

