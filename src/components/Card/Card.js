import './Card.scss';
import {GoDownload} from 'react-icons/go'

const Card = ({ data, hasDownload = false, readMore }) => {
    const { title = '', description = '', img = '' } = data
    return (
        <div className='card-wrapper'>
            <div className='card-image'>
                <img src={img} alt={title} />
            </div>

            {(title || description) &&
                <div className="card-content">
                    {hasDownload && <div className='card-title text-center'><a target='_blank' href={data.downloadLink}><GoDownload /> {title}</a></div>}
                    {title && !hasDownload &&<div className='card-title'>{title}</div>}
                    {description && <div className='card-description'>{description}</div>}
                    {readMore && <a href={readMore}>Read more</a>}
                </div>
            }
        </div>
    )
}

export default Card