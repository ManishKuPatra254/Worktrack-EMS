import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    dob: '',
    street1: '',
    street2: '',
    residentialAddress: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Do something with the form data, like sending it to a server
    console.log(formData);
  };

  return (
    <div className="App">
      <div className="container">
        <form onSubmit={handleSubmit} style={{ width: '50%', margin: 'auto' }}>
          <div className="row mb-3">
            <div className="col-md-6">
              <label htmlFor="firstName" className="form-label">First Name:</label>
              <input
                type="text"
                className="form-control"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="lastName" className="form-label">Last Name:</label>
              <input
                type="text"
                className="form-control"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-md-6">
              <label htmlFor="email" className="form-label">Email:</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-md-3">
              <label htmlFor="dob" className="form-label">Date of Birth:</label>
              <input
                type="date"
                className="form-control"
                id="dob"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-md-6">
              <label htmlFor="street1" className="form-label">Street 1:</label>
              <input
                type="text"
                className="form-control"
                id="street1"
                name="street1"
                value={formData.street1}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="street2" className="form-label">Street 2:</label>
              <input
                type="text"
                className="form-control"
                id="street2"
                name="street2"
                value={formData.street2}
                onChange={handleChange}
              />
            </div>
          </div>


          <div className="col-md-6">
            <div className="form-check mt-4">
              <input
                className="form-check-input"
                type="checkbox"
                id="sameAsResidential"
              // checked={sameAsResidential}
              // onChange={handleCheckboxChange}
              />
              <label className="form-check-label" htmlFor="sameAsResidential">
                Same as Residential Address
              </label>
            </div>
          </div>

          <h5>Permanent Address</h5>

          <div className="row mb-3">
            <div className="col-md-6">
              <label htmlFor="street1" className="form-label">Street 1:</label>
              <input
                type="text"
                className="form-control"
                id="street1"
                name="street1"
                value={formData.street1}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="street2" className="form-label">Street 2:</label>
              <input
                type="text"
                className="form-control"
                id="street2"
                name="street2"
                value={formData.street2}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="container">
            <h5 className="mb-4">Upload Documents</h5>
            <form onSubmit={handleSubmit}>
              <div className="row mb-3">
                <div className="col-md-4">
                  <label htmlFor="textInput" className="form-label">Text Input:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="textInput"
                    name="textInput"
                    value={formData.textInput}
                  // onChange={handleInputChange}
                  />
                </div>
                <div className="col-md-4">
                  <label htmlFor="selectInput" className="form-label">Select Input:</label>
                  <select
                    className="form-select"
                    id="selectInput"
                    name="selectInput"
                    value={formData.selectInput}
                  // onChange={handleInputChange}
                  >
                    <option value="">Select an option...</option>
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                  </select>
                </div>
                <div className="col-md-4">
                  <label htmlFor="fileInput" className="form-label">File Input:</label>
                  <input
                    type="file"
                    className="form-control"
                    id="fileInput"
                    name="fileInput"
                  // onChange={handleFileChange}
                  />
                </div>
              </div>
            </form>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="row mb-3">
              <div className="col-md-4">
                <label htmlFor="textInput" className="form-label">Text Input:</label>
                <input
                  type="text"
                  className="form-control"
                  id="textInput"
                  name="textInput"
                  value={formData.textInput}
                // onChange={handleInputChange}
                />
              </div>
              <div className="col-md-4">
                <label htmlFor="selectInput" className="form-label">Select Input:</label>
                <select
                  className="form-select"
                  id="selectInput"
                  name="selectInput"
                  value={formData.selectInput}
                // onChange={handleInputChange}
                >
                  <option value="">Select an option...</option>
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </select>
              </div>
              <div className="col-md-4">
                <label htmlFor="fileInput" className="form-label">File Input:</label>
                <input
                  type="file"
                  className="form-control"
                  id="fileInput"
                  name="fileInput"
                // onChange={handleFileChange}
                />
              </div>
            </div>
          </form>
          <div className="row mb-3">
            <div className="col-md-12 d-flex justify-content-center">
              <button type="submit" className="btn btn-primary" style={{ backgroundColor: 'black' }}>Submit</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
