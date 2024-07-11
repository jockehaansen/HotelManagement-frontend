import React, { useState } from "react";

const RegisterCustomer = () => {
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    address: {
      street: "",
      number: "",
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
        address: {
          ...formValues.address,
          [name]: value,
        },
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);
    createCustomer(formValues);
    // Add logic to submit formValues to backend or perform further actions
  };

  const createCustomer = async (formValues) => {
    try {
      const response = await fetch("http://localhost:8080/customers/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formValues),
      });

      if (!response.ok) {
        throw new Error("Customer creation failed");
      }
    } catch (error) {
      console.log("Error fetching customer data", error);
    }
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
          value={formValues.address.street}
          onChange={handleFormChange}
        />
        <input
          type="text"
          name="number"
          placeholder="number"
          value={formValues.address.number}
          onChange={handleFormChange}
        />
        <input
          type="text"
          name="zipCode"
          placeholder="ZipCode"
          value={formValues.address.zipCode}
          onChange={handleFormChange}
        />
        <input
          type="text"
          name="city"
          placeholder="City"
          value={formValues.address.city}
          onChange={handleFormChange}
        />
        <input
          type="text"
          name="country"
          placeholder="Country"
          value={formValues.address.country}
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
