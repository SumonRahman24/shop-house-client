import { PropTypes } from "prop-types";
import ProductCard from "./ProductCard";
import { useEffect, useState } from "react";
// import { useQuery } from "@tanstack/react-query";
// import useAxiosSecure from "./../../hooks/useAxiosSecure";

const Products = ({ count }) => {
  const [itemPerPage, setItemPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(0);
  const [products, setProducts] = useState([]);
  // const axiosSecure = useAxiosSecure();

  const numberOfPage = Math.ceil(count / itemPerPage);

  const pages = [...Array(numberOfPage).keys()];

  //   const pages = [];
  //   for (let i = 0; i < numberOfPage; i++) {
  //     pages.push(i);
  //   }
  //handle item per page
  const handleItemPerPage = (e) => {
    const val = e.target.value;
    setItemPerPage(val);
    setCurrentPage(0);
  };

  // handle prev page
  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  // handle next page
  const handleNextPage = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  // load product useEffect
  useEffect(() => {
    fetch(
      `http://localhost:5000/products?page=${currentPage}&size=${itemPerPage}`
    )
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [currentPage, itemPerPage]);

  // load products with tanstack query
  // const getServices = async () => {
  //   const res = await axiosSecure.get(
  //     `/products?page=${currentPage}&size=${itemPerPage}`
  //   );
  //   return res;
  // };

  // const { data, isLoading, isError } = useQuery({
  //   queryKey: ["service"],
  //   queryFn: getServices,
  // });

  // if (isError) {
  //   return (
  //     <p className="text-center text-red-400 font-bold text-2xl">
  //       something went wrong
  //     </p>
  //   );
  // }

  // if (isLoading) {
  //   return (
  //     <div className="absolute bg-white dark:text-slate-300 dark:bg-slate-950 h-[100vh] bg-opacity-60 z-10  w-full flex justify-center">
  //       <div className="flex  pt-20">
  //         <span className="text-3xl dark:text-slate-200 mr-4">Loading</span>
  //         <svg
  //           className="animate-spin h-8 w-8 text-gray-800"
  //           xmlns="http://www.w3.org/2000/svg"
  //           fill="none"
  //           viewBox="0 0 24 24"
  //         >
  //           <circle
  //             className="opacity-25"
  //             cx="12"
  //             cy="12"
  //             r="10"
  //             stroke="currentColor"
  //             strokeWidth="4"
  //           ></circle>
  //           <path
  //             className="opacity-75"
  //             fill="currentColor"
  //             d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
  //           ></path>
  //         </svg>
  //       </div>
  //     </div>
  //   );
  // }

  // const productsData = data.data;

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-10 justify-items-center container m-auto px-12  gap-10">
        {products?.map((product) => (
          <ProductCard key={product?._id} product={product} />
        ))}
      </div>
      <div className="flex  justify-center  gap-2 container m-auto px-3">
        <div className="text-center mb-10 space-x-2 space-y-2">
          <button onClick={handlePrevPage} className="btn  bg-gray-500 mr-2">
            Prev
          </button>
          {pages?.map((page) => (
            <button
              onClick={() => setCurrentPage(page)}
              className={
                currentPage === page
                  ? "bg-teal-500 btn"
                  : "btn btn-outline border-teal-500"
              }
              key={page}
            >
              {page}
            </button>
          ))}
          <button onClick={handleNextPage} className="btn  bg-gray-500 ml-2">
            next
          </button>
        </div>
        <div className="pt-2">
          <select
            value={itemPerPage}
            onChange={handleItemPerPage}
            className="select select-accent w-full max-w-xs bg-gray-400 btn  rounded-md border-none "
          >
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
