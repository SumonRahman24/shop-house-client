{
  /* <table className="min-w-full divide-y  rounded-lg  divide-gray-200 overflow-x-auto hidden">
        <thead className="dark:bg-gradient-to-r from-gray-700 via-gray-900 to-black text-white">
          <tr className="">
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Product Info
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Price
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Status
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Date
            </th>

            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Actions
            </th>
          </tr>
        </thead>
        <tbody className=" divide-y dark:divide-y-0 dark:text-white dark:bg-gradient-to-r from-gray-700 via-gray-900 to-black text-white divide-gray-200">
          {carts?.map((cart) => (
            <tr key={cart?._id} className="dark:text-white">
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="flex-shrink-0 h-10 w-10">
                    <img
                      className="h-10 w-10 rounded-full"
                      src="https://i.pravatar.cc/150?img=1/"
                    />
                  </div>
                  <div className="ml-4">
                    <div className="text-sm font-medium text-gray-900">
                      {cart?.productName}
                    </div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">{cart?.price}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                  {cart?.status === "confirm" ? "Approve " : "pending"}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {cart?.date}
              </td>

              <td className="px-6 py-4 whitespace-nowrap  text-sm font-medium">
                {cart?.status === "confirm" ? (
                  <span className="text-green-600">confirmed</span>
                ) : (
                  <button
                    onClick={() => handleConfirm(cart?._id)}
                    className="ml-2 btn btn-sm capitalize text-red-600 hover:text-red-900"
                  >
                    confirm
                  </button>
                )}
                <button
                  onClick={() => handleDelete(cart?._id)}
                  className="ml-2 capitalize btn btn-sm text-red-600 hover:text-red-900"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table> */
}
