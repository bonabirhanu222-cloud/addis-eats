import PropTypes from 'prop-types';

function Dish({ name, price, category, spicy, currency = 'ETB' }) {
  return (
    <div className="card">
      <h2>{name}</h2>
      <p>
        {price} {currency}
      </p>
      <p>Category: {category}</p>
      <p>{spicy && 'Spicy' || 'Not Spicy'}</p>
    </div>
  );
}

Dish.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  spicy: PropTypes.bool,
};

export default Dish;