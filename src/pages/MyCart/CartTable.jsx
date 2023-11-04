import { PropTypes } from "prop-types";

const cartTable = ({ carts, handleDelete, handleConfirm }) => {
  return (
    <div
      data-aos="fade-right"
      data-aos-duration="1500"
      className="container m-auto mt-10"
    >
      {/* mytable */}
      <div className=" min-h-screen">
        <div className="col-span-12 ">
          <div className="overflow-auto lg:overflow-visible ">
            <table className="table text-gray-400 border-separate space-y-6 text-sm ">
              <thead className="dark:bg-gray-800 bg-gradient-to-r from-gray-400 via-gray-600 to-blue-800 text-gray-200 text-[1rem]   dark:text-gray-300">
                <tr>
                  <th className="p-3">Product</th>
                  <th className="p-3 text-left">date</th>
                  <th className="p-3 text-left">Price</th>
                  <th className="p-3 text-left">Status</th>
                  <th className="p-3 text-left">Action</th>
                </tr>
              </thead>
              <tbody>
                {carts?.map((cart) => (
                  <tr key={cart?._id} className="bg-gray-800">
                    <td className="md:p-3 pr-16 ">
                      <div className="flex align-items-center">
                        <img
                          className="rounded-full h-12 w-12  object-cover"
                          src="https://images.unsplash.com/photo-1613588718956-c2e80305bf61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80"
                          alt="unsplash image"
                        />
                        <div className="ml-3 flex  items-center text-md">
                          <div>{cart?.productName}</div>
                        </div>
                      </div>
                    </td>
                    <td className="p-3">{cart?.date}</td>
                    <td className="p-3 font-bold">{cart?.price}</td>
                    <td className="p-3 ">
                      <span
                        className={
                          cart?.status === "confirm"
                            ? "text-green-400"
                            : " text-red-400 rounded-md px-2"
                        }
                      >
                        {cart?.status === "confirm" ? "Approve" : "pending"}
                      </span>
                    </td>
                    <td className="p-3 flex items-center space-x-5">
                      {cart?.status === "confirm" ? (
                        <span className="text-green-600">confirmed</span>
                      ) : (
                        <button
                          onClick={() => handleConfirm(cart?._id)}
                          className="inline-flex items-center px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-white text-sm font-medium rounded-md"
                        >
                          confirm
                        </button>
                      )}

                      <button
                        onClick={() => handleDelete(cart?._id)}
                        className="inline-flex items-center px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-md"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          />
                        </svg>
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

cartTable.propTypes = {
  carts: PropTypes.array.isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleConfirm: PropTypes.func.isRequired,
};

export default cartTable;
