import React, { useState } from 'react';
import { FaPlus, FaTrash } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [forms, setForms] = useState([
    {
      firstName: "",
      lastName: "",
      street1: "",
      street2: "",
      email: "",
      textInput: '',
      selectInput: '',
      fileInput: null,
      dob: '',
    }
  ]);

  const handleInputChange = (event, index) => {
    const { name, value } = event.target;
    const newForms = [...forms];
    newForms[index] = { ...newForms[index], [name]: value };
    setForms(newForms);

    if (name === 'dob') {
      const selectedDate = new Date(value);
      const today = new Date();
      const ageDiff = today.getFullYear() - selectedDate.getFullYear();
      const monthDiff = today.getMonth() - selectedDate.getMonth();
      const isOver18 = ageDiff > 18 || (ageDiff === 18 && monthDiff >= 0);

      if (!isOver18) {
        console.log('Age must be greater than 18');
        alert('Age must be greater than 18');

      }
    }

  };

  const handleFileChange = (e, index) => {
    const newForms = [...forms];
    newForms[index].fileInput = e.target.files[0];
    setForms(newForms);
  };

  const handleAddForm = () => {
    setForms([...forms, {
      textInput: '',
      selectInput: '',
      fileInput: null,
      dob: ''
    }]);
  };


  const handleDeleteForm = (index) => {
    const newForms = [...forms];
    newForms.splice(index, 1);
    setForms(newForms);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(forms);
  };

  return (
    <div className="App">
      <div className="container">
        <form onSubmit={handleSubmit} style={{ width: '60%', margin: 'auto' }}>
          <h1>Registration Form</h1>
          <div className="row mb-3">
            <div className="col-md-6">
              <label htmlFor="firstName" className="form-label">First Name: <span style={{ color: 'red' }}>*</span></label>
              <input
                type="text"
                className="form-control"
                id="firstName"
                name="firstName"
                value={forms.firstName}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="lastName" className="form-label">Last Name: <span style={{ color: 'red' }}>*</span></label>
              <input
                type="text"
                className="form-control"
                id="lastName"
                name="lastName"
                value={forms.lastName}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-md-6">
              <label htmlFor="email" className="form-label">Email: <span style={{ color: 'red' }}>*</span></label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={forms.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="dob" className="form-label">Date of Birth: <span style={{ color: 'red' }}>*</span></label>
              <input
                type="date"
                className="form-control"
                id="dob"
                name="dob"
                value={forms.dob}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-md-6">
              <label htmlFor="street1" className="form-label">Street 1: <span style={{ color: 'red' }}>*</span></label>
              <input
                type="text"
                className="form-control"
                id="street1"
                name="street1"
                value={forms.street1}
                onChange={handleInputChange}
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="street2" className="form-label">Street 2: <span style={{ color: 'red' }}>*</span></label>
              <input
                type="text"
                className="form-control"
                id="street2"
                name="street2"
                value={forms.street2}
                onChange={handleInputChange}
              />
            </div>
          </div>


          <div className="col-md-6">
            <div className="form-check mt-4">
              <input
                className="form-check-input"
                type="checkbox"
                id="sameAsResidential"
              />
              <label className="form-check-label" htmlFor="sameAsResidential">
                Same as Residential Address
              </label>
            </div>
          </div>

          <h5>Permanent Address</h5>

          <div className="row mb-3">
            <div className="col-md-6">
              <label htmlFor="street1" className="form-label">Street 1: <span style={{ color: 'red' }}>*</span></label>
              <input
                type="text"
                className="form-control"
                id="street1"
                name="street1"
                value={forms.street1}
                onChange={handleInputChange}
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="street2" className="form-label">Street 2: <span style={{ color: 'red' }}>*</span></label>
              <input
                type="text"
                className="form-control"
                id="street2"
                name="street2"
                value={forms.street2}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="mb-3">
            <h5>Upload Documents</h5>
            {forms.map((form, index) => (
              <div key={index} className="row mb-3">
                <div className="col-md-4">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Document Name"
                    value={form.textInput}
                    onChange={(e) => handleInputChange(e, index)}
                    name="textInput"
                  />
                </div>
                <div className="col-md-4">
                  <select
                    className="form-select"
                    value={form.selectInput}
                    onChange={(e) => handleInputChange(e, index)}
                    name="selectInput"
                  >
                    <option value="">Select Type</option>
                    <option value="Type 1">Type 1</option>
                    <option value="Type 2">Type 2</option>
                  </select>
                </div>
                <div className="col-md-3">
                  <input
                    type="file"
                    className="form-control"
                    onChange={(e) => handleFileChange(e, index)}
                    name="fileInput"
                  />
                </div>
                <div className="col-md-1">
                  {index === forms.length - 1 ? (
                    <FaPlus onClick={handleAddForm} style={{ cursor: 'pointer' }} />
                  ) : (
                    <FaTrash onClick={() => handleDeleteForm(index)} style={{ cursor: 'pointer' }} />
                  )}
                </div>
              </div>
            ))}
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
