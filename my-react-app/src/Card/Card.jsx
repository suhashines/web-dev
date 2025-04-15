import cardImage from '../assets/image.png';
import './Card.css';
import PropTypes from 'prop-types';

function Card({title="default title", text="default text"}) {

    return (
        <div className="card">
            <img className="card-image" src={cardImage} alt="Card image" />
            <h2 className='card-title'> {title}</h2>
            <p className='card-content'>{text}.</p>
        </div>
    );
}

Card.propTypes = {
    title: PropTypes.string,
    text: PropTypes.string,
};

export default Card;