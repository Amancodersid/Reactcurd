import React, { useEffect, useState } from "react";

export default function Home() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const [data, setData] = useState([]);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("crudData")) || [];
    setData(storedData);
  }, []);
  const handleDelete = (id) => {
    setData(data.filter((e) => e.id != id.id));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAdd = () => {
    setData([...data, { id: Date.now(), ...formData }]);
    setFormData({ firstName: "", lastName: "", email: "", phone: "" });
  };

  const handleEdit = (item) => {
    setFormData({ ...item });
    const handleDelete = (id) => {
      setData(data.filter((e) => e.id != id));
    };
     handleDelete (item.id)
  };

  const handleUpdate = (item) => {
    setData((prevData) =>
      prevData.map((item) => (item.id === formData.id ? formData : item))
    );
    setFormData({
      id: null,
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
    });
  };


  useEffect(() => {
    localStorage.setItem("crudData", JSON.stringify(data));
  }, [data]);
  return (
    <div>
      <h2>CRUD App</h2>
      <form>
        <label>
          First Name:
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Last Name:
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Phone:
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
          />
        </label>
        <button type="button" onClick={handleAdd}>
          Add
        </button>
      </form>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.firstName}</td>
              <td>{item.lastName}</td>
              <td>{item.email}</td>
              <td>{item.phone}</td>
              <td>
                <button onClick={() => handleEdit(item)}>Edit</button>
                <button onClick={() => handleDelete(item)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
