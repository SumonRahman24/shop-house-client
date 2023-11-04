import { Link, NavLink } from "react-router-dom";
import useAuthContext from "../../hooks/useAuthContext";
import Swal from "sweetalert2";
import { AiOutlineMenuUnfold, AiFillCloseCircle } from "react-icons/ai";
import { useState } from "react";
import { FiLogOut } from "react-icons/fi";
import { BiSolidUserAccount } from "react-icons/bi";

const Navbar = () => {
  const { user, logOut } = useAuthContext();
  const [isActive, setIsActive] = useState(true);

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
        <NavLink to={"/myCart"}>MyCart</NavLink>
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
      <nav className=" container m-auto">
        <div className="w-full flex flex-wrap items-center justify-between mx-auto p-2">
          {/* menubar */}
          <div
            onClick={() => setIsActive(!isActive)}
            className={`dropdown md:hidden `}
          >
            <label tabIndex={0}>
              {isActive ? (
                <AiOutlineMenuUnfold className="text-3xl " />
              ) : (
                <AiFillCloseCircle className="text-3xl 0" />
              )}
            </label>
            <ul
              tabIndex={0}
              className={`menu menu-sm  text-white  dropdown-content  mt-3 z-[1] pt-2 w-52`}
            >
              <div
                className={
                  isActive
                    ? "hidden"
                    : "block bg-gradient-to-r from-gray-700 via-gray-900 p-3 to-black  rounded-lg "
                }
              >
                {navLinks}
              </div>
            </ul>
          </div>

          <Link to={"/"} className="flex items-center">
            <h1 className="font-extrabold text-transparent text-2xl bg-clip-text bg-gradient-to-r from-gray-400 via-gray-600 to-blue-800">
              ShopHouse
            </h1>
          </Link>
          <div className="flex items-center md:order-2">
            <div>
              {user ? (
                <details className="dropdown dropdown-end">
                  <summary
                    tabIndex={0}
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div className="w-10 rounded-full">
                      <img src={user?.photoURL} />
                    </div>
                  </summary>
                  <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content mt-3 z-[1] p-2 rounded  shadow-md  bg-gradient-to-r from-gray-700 via-gray-900 to-black w-60"
                  >
                    <li className="font-bold flex justify-center items-center">
                      <div>
                        <img
                          className="rounded-full h-16 w-16"
                          src={user?.photoURL}
                        />
                      </div>
                    </li>
                    <li className="font-bold">
                      <a className=" hover:bg-gray-400 text-gray-300  hover:rounded">
                        <BiSolidUserAccount className="text-lg " />
                        {user?.displayName}
                      </a>
                    </li>

                    <li onClick={handleSignOut}>
                      <a className=" text-[0.97rem]  text-blue-500 font-bold hover:bg-gray-400 hover:rounded">
                        <FiLogOut className="text-lg" /> Logout
                      </a>
                    </li>
                  </ul>
                </details>
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
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0   dark:border-gray-700">
              {navLinks}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
