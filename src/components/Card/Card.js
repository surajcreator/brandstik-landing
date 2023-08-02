import './Card.scss';

const Card = ({ data }) => {
    const { title = '', description = '', img = '' } = data
    return (
        <div className='card-wrapper'>
            <div className='card-image'>
                <img src={img} alt={title} />
            </div>

            {(title || description) &&
                <div className="card-content">
                    <div className='card-title'>{title}</div>
                    <div className='card-description'>{description}</div>
                </div>
            }
        </div>
    )
}

export default Card