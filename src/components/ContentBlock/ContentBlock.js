import Title from "../Title/Title";
import parse from 'html-react-parser';

const ContentBlock = ({title, content, contentClass}) =>{
    return(
        <div className="content-block">
            {title.text && <Title className={title.cssClass}>{parse(title.text)}</Title>}
            {
                content &&
                <div className={`content-description ${contentClass}`}>
                    {parse(content)}
                </div>
            }
        </div>
    )
}

export default ContentBlock