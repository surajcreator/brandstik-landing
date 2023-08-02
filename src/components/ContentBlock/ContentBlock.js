import Title from "../Title/Title";
import ReactHtmlParser from 'react-html-parser';

const ContentBlock = ({title, content, contentClass}) =>{
    return(
        <div className="content-block">
            {title.text && <Title className={title.cssClass}>{ReactHtmlParser(title.text)}</Title>}
            {
                content &&
                <div className={`content-description ${contentClass}`}>
                    {ReactHtmlParser(content)}
                </div>
            }
        </div>
    )
}

export default ContentBlock