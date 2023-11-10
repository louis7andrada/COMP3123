import React, { useState } from 'react';

function DataEntryForm() {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    address: '',
    address2: '',
    city: '',
    province: '',
    postalCode: '',
    terms: false
  });

  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);
  };

  return (
      <div className="data-entry-form-container">
        <h2>Data Entry Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <label>
              Email
              <input type="email" name="email" value={formData.email} onChange={handleChange} />
            </label>
            <label>
              Name
              <input type="text" name="name" value={formData.name} onChange={handleChange} />
            </label>
          </div>
          <div className="form-row">
            <label>
              Address
              <input type="text" name="address" value={formData.address} onChange={handleChange} />
            </label>
          </div>
          <div className="form-row">
            <label>
              Address 2
              <input type="text" name="address2" value={formData.address2} onChange={handleChange} />
            </label>
          </div>
          <div className="form-row">
            <label>
              City
              <input type="text" name="city" value={formData.city} onChange={handleChange} />
            </label>
            <label>
              Province
              <select name="province" value={formData.province} onChange={handleChange}>
                <option value="">Choose...</option>
                <option value="Alberta">Alberta</option>
                <option value="British Columbia">British Columbia</option>
                <option value="Manitoba">Manitoba</option>
                <option value="New Brunswick">New Brunswick</option>
                <option value="Newfoundland and Labrador">Newfoundland and Labrador</option>
                <option value="Nova Scotia">Nova Scotia</option>
                <option value="Ontario">Ontario</option>
                <option value="Prince Edward Island">Prince Edward Island</option>
                <option value="Quebec">Quebec</option>
                <option value="Saskatchewan">Saskatchewan</option>
              </select>
            </label>
            <label>
              Postal Code
              <input type="text" name="postalCode" value={formData.postalCode} onChange={handleChange} />
            </label>
          </div>
          <div className="form-row">
            <label className="checkbox-label">
              <input type="checkbox" name="terms" checked={formData.terms} onChange={handleChange} />
              Agree Terms & Conditions?
            </label>
          </div>
          <div className="form-row">
            <button type="submit">Submit</button>
          </div>
        </form>
        {submittedData && (
            <div className="submission-data">
              <p><strong>Email:</strong> {formData.email}</p>
              <p><strong>Full Name:</strong> {formData.name}</p>
              <p><strong>Address:</strong> {formData.address}</p>
              <p><strong>City:</strong> {formData.city}</p>
              <p><strong>Province:</strong> {formData.province}</p>
              <p><strong>Postal Code:</strong> {formData.postalCode}</p>
            </div>
        )}
      </div>
  );
}

export default DataEntryForm;
