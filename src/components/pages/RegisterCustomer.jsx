import React, { useState } from "react";

const RegisterCustomer = () => {
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    Address: {
      street: "",
      zipCode: "",
      city: "",
      country: "",
    },
  });

  const handleFormChange = (e) => {
    const { name, value } = e.target;

    // Check if the name is in the top level of formValues or nested in Address
    if (name in formValues) {
      setFormValues({ ...formValues, [name]: value });
    } else {
      setFormValues({
        ...formValues,
        Address: {
          ...formValues.Address,
          [name]: value,
        },
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);
    // Add logic to submit formValues to backend or perform further actions
  };

  return (
    <>
      <div className="mt-6">
        <input
          type="text"
          name="firstName"
          placeholder="Firstname"
          value={formValues.firstName}
          onChange={handleFormChange}
        />
        <input
          type="text"
          name="lastName"
          placeholder="Lastname"
          value={formValues.lastName}
          onChange={handleFormChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formValues.email}
          onChange={handleFormChange}
        />
        <input
          type="text"
          name="phoneNumber"
          placeholder="Phonenumber"
          value={formValues.phoneNumber}
          onChange={handleFormChange}
        />
        <h1>Address</h1>
        <input
          type="text"
          name="street"
          placeholder="Street"
          value={formValues.Address.street}
          onChange={handleFormChange}
        />
        <input
          type="text"
          name="zipCode"
          placeholder="ZipCode"
          value={formValues.Address.zipCode}
          onChange={handleFormChange}
        />
        <input
          type="text"
          name="city"
          placeholder="City"
          value={formValues.Address.city}
          onChange={handleFormChange}
        />
        <input
          type="text"
          name="country"
          placeholder="Country"
          value={formValues.Address.country}
          onChange={handleFormChange}
        />
        <button
          onClick={handleSubmit}
          type="submit"
          className="bg-slate-500 hover:bg-slate-700 text-white text-xs font-bold py-2 px-4 rounded"
        >
          Register
        </button>
      </div>
    </>
  );
};

export default RegisterCustomer;
