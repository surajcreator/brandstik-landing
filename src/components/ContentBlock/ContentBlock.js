import Title from "../Title/Title";
import parse from 'html-react-parser';
import './ContentBlock.scss'

const ContentBlock = ({title, content, contentClass, children}) =>{
    return(
        <div className="content-block">
            {title.text && <Title className={title.cssClass}>{parse(title.text)}</Title>}
            {
                content &&
                <div className={`content-description ${contentClass}`}>
                    {parse(content)}
                    {children && children}
                </div>
            }
        </div>
    )
}

export default ContentBlock