import { PropTypes } from "prop-types";
import ProductCard from "./ProductCard";
import { useEffect, useState } from "react";

const Products = ({ count }) => {
  const [productsData, setProductsData] = useState([]);
  const [itemPerPage, setItemPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(0);

  const numberOfPage = Math.ceil(count / itemPerPage);
  const pages = [...Array(numberOfPage).keys()];

  //   const pages = [];
  //   for (let i = 0; i < numberOfPage; i++) {
  //     pages.push(i);
  //   }

  const handleItemPerPage = (e) => {
    const val = e.target.value;
    setItemPerPage(val);
    setCurrentPage(0);
  };

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  // load products
  useEffect(() => {
    fetch(
      `https://shop-house-server.vercel.app/products?page=${currentPage}&size=${itemPerPage}`
    )
      .then((res) => res.json())
      .then((data) => setProductsData(data));
  }, [currentPage, itemPerPage]);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-10 justify-items-center container m-auto px-12  gap-10">
        {productsData?.map((product) => (
          <ProductCard key={product?._id} product={product} />
        ))}
      </div>
      <div className="text-center mb-10">
        <button onClick={handlePrevPage} className="btn  bg-gray-500 mr-2">
          Prev
        </button>
        {pages?.map((page) => (
          <button
            onClick={() => setCurrentPage(page)}
            className={
              currentPage === page ? "bg-red-400 btn" : "bg-green-400 btn"
            }
            key={page}
          >
            {page}
          </button>
        ))}
        <button onClick={handleNextPage} className="btn  bg-gray-500 ml-2">
          Next
        </button>
        <div>
          <select value={itemPerPage} onChange={handleItemPerPage}>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="50">50</option>
          </select>
        </div>
      </div>
    </div>
  );
};

Products.propTypes = {
  count: PropTypes.number.isRequired,
};

export default Products;
