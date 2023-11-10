import React, { useState } from 'react';
import './App.css'; // Make sure the path to your CSS file is correct

function DataEntryForm() {
    const [formData, setFormData] = useState({
        email: '',
        name: '',
        address: '',
        city: '',
        province: '',
        postalCode: '',
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true); // This will trigger the display of the entered information
    };

    return (
        <div className="data-entry-form-container">
            <form onSubmit={handleSubmit}>
                {/* ... form inputs ... */}
                <button type="submit">Submit</button>
            </form>
            {submitted && (
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
