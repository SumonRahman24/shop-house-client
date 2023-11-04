import { Navigate } from "react-router-dom";
import useAuthContext from "../hooks/useAuthContext";
import { PropTypes } from "prop-types";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuthContext();

  if (loading) {
    return (
      <div className="absolute bg-white dark:text-slate-300 dark:bg-slate-950 h-[100vh] bg-opacity-60 z-10  w-full flex justify-center">
        <div className="flex  pt-20">
          <span className="text-3xl dark:text-slate-200 mr-4">Loading</span>
          <svg
            className="animate-spin h-8 w-8 text-gray-800"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        </div>
      </div>
    );
  }

  if (user) {
    return children;
  }

  if (user?.email) {
    return children;
  }

  return <Navigate state={location?.pathname} to={"/login"}></Navigate>;
};

PrivateRoute.propTypes = {
  children: PropTypes.node,
};

export default PrivateRoute;
