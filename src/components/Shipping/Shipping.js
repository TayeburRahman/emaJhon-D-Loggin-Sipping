import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import "./Shipping.css";

const Shipping = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const {user} =useAuth();
  const onSubmit = (data) => {

      console.log(data)

    };
  return (
    <div>
      <form className="shipping-from " onSubmit={handleSubmit(onSubmit)}>
        <br />
        <h4>Name</h4>
        <input defaultValue={user.displayName} {...register("example")} />
        <br />
        <h4>Email</h4>
        <input defaultValue={user.email} {...register("email", { required: true })} />

        <br />
        <h4>Address</h4>
        <input defaultValue="your address" {...register("address")} />

        <br />
        <h4>City</h4>
        <input defaultValue="City" {...register("city name")} />

        <br />
        <h4>Phone Number</h4>
        <input defaultValue="Your Phone Number" {...register("Phone Number")} />


        {errors.email && <span className="error">This field is required</span>}
        <br />
        <input type="submit" />
      </form>
    </div>
  );
};

export default Shipping;

/*
-------------
auth hooks-STP.6
---------------
  Data Shipping export
    * app.js

*/
