import './Title.scss';

const Title = ({ title, className, headingLevel = 'h1', children }) => {
    const Heading = headingLevel;
    return (
        <>
            <Heading className={`title ${className}`}>{children}</Heading>
            {/* {undelinedTitle && <span className='title-underline'></span>} */}
        </>
    )
}

export default Title