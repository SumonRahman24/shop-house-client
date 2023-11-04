import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { _id, brand, product_name, price } = product || {};
  return (
    <>
      <div className="w-72  bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
        <div href="#">
          <img
            src="https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt="Product"
            className="h-80 w-72 object-cover rounded-t-xl"
          />
          <div className="px-4 py-3 w-72">
            <span className="text-gray-400 mr-3 uppercase text-xs">
              {brand}
            </span>
            <p className="text-lg font-bold text-black truncate block capitalize">
              {product_name}
            </p>
            <div className="flex items-center">
              <p className="text-lg font-semibold text-black cursor-auto my-3">
                ${price}
              </p>

              <div className="ml-auto">
                <Link to={`/checkOut/${_id}`}>
                  <button className="btn">Cart</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProductCard;
