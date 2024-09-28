import React from 'react';
import './ContactUs.css'; // Create a new CSS file specific for this section

const ContactUs = () => {
    return (
        <div className="contact-container">
            <h2>Contact Us</h2>
            <p>If you have any questions or need more information, feel free to get in touch with us using the form below.</p>
            
            <form className="contact-form">
                <div className="form-group">
                    <label htmlFor="name">Full Name</label>
                    <input type="text" id="name" name="name" placeholder="Enter your full name" required />
                </div>
                
                <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input type="email" id="email" name="email" placeholder="Enter your email" required />
                </div>
                
                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" rows="5" placeholder="Write your message here" required></textarea>
                </div>
                
                <button type="submit" className="submit-btn">Submit</button>
            </form>
        </div>
    );
};

export default ContactUs;
