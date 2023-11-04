import useAuthContext from "../../hooks/useAuthContext";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import useAxiosSecure from "./../../hooks/useAxiosSecure";
import CartTable from "./CartTable";

const MyCart = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuthContext();
  const [carts, setCarts] = useState([]);

  // loadData
  useEffect(() => {
    if (user?.email) {
      axiosSecure
        .get(`/cart?email=${user?.email}`)
        .then((res) => setCarts(res.data));
    }
  }, [user, axiosSecure]);

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://shop-house-server.vercel.app/cart/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              // success alert
              Swal.fire({
                position: "top-center",
                icon: "success",
                title: "Delete Successful",
                showConfirmButton: false,
                timer: 1500,
              });
            }
            console.log("delete data", data);
            const remaining = carts.filter((item) => item._id !== _id);
            setCarts(remaining);
          });

        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };

  // handleConfirm
  const handleConfirm = (_id) => {
    fetch(`https://shop-house-server.vercel.app/cart/${_id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: "confirm" }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          // success alert
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Confirm Successful",
            showConfirmButton: false,
            timer: 1500,
          });

          //update state
          const remaining = carts.filter((item) => item._id !== _id);
          const updated = carts.find((item) => item._id === _id);
          updated.status = "confirm";
          const newCart = [updated, ...remaining];
          setCarts(newCart);
        }
      });
  };

  return (
    <div>
      <CartTable
        carts={carts}
        handleDelete={handleDelete}
        handleConfirm={handleConfirm}
      />
    </div>
  );
};

export default MyCart;
