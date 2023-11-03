import { Dropdown } from "flowbite-react";
import { Link, NavLink } from "react-router-dom";
import useAuthContext from "../../hooks/useAuthContext";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, logOut } = useAuthContext();

  const handleSignOut = () => {
    logOut()
      .then(() => {
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Logout Successful",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => console.log(error.message));
  };

  const navLinks = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/bookings"}>MyCart</NavLink>
      </li>
      <li>
        <NavLink to={"/login"}>Login</NavLink>
      </li>
      <li>
        <NavLink to={"/register"}>Register</NavLink>
      </li>
    </>
  );

  return (
    <div>
      <nav className="bg-white border-gray-200 dark:bg-gray-900 hidden">
        <div className="w-full flex flex-wrap items-center justify-between mx-auto p-4">
          <Link to={"/"} className="flex items-center">
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              ShopHouse
            </span>
          </Link>
          <div className="flex items-center md:order-2">
            <div>
              {user ? (
                <Dropdown
                  arrowIcon={false}
                  inline
                  label={
                    <div className="avatar">
                      <div className="w-9 mr-4 rounded-full ring  ring-offset-base-100 ring-offset-2">
                        <img src={user?.photoURL} />
                      </div>
                    </div>
                  }
                >
                  <Dropdown.Header>
                    <li className="block text-sm font-bold">
                      {user?.displayName}
                    </li>
                  </Dropdown.Header>

                  <Dropdown.Item>
                    <li className="hover:text-blue-600" onClick={handleSignOut}>
                      Sign out
                    </li>
                  </Dropdown.Item>
                </Dropdown>
              ) : (
                <Link
                  to={"/login"}
                  className="btn  bg-[#7F265B] btn-primary border-none text-white  btn-sm h-9 mr-3"
                >
                  Login
                </Link>
              )}
            </div>
          </div>
          {/* navbar small device */}
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-user"
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              {navLinks}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
