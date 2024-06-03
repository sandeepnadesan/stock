import React from 'react';
import '../About.css';

const About = () => {
  return (
    <div className="about-content">
      <h2>About Us</h2>
      <section>
        <h3>Our Mission</h3>
        <p>
          At <strong>STOCKS</strong>, our mission is to streamline the stock management process for businesses of all sizes.
          We understand that keeping track of imported goods and managing inventory can be a complex and time-consuming task.
          Our goal is to simplify this process, allowing stockholders and goods managers to focus on what they do best – growing their business.
        </p>
      </section>

      <section>
        <h3>What We Offer</h3>
        <p><strong>STOCKS</strong> provides a comprehensive platform where you can easily monitor and manage your inventory. Our key features include:</p>
        <ul>
          <li><strong>Inventory Tracking:</strong> Keep detailed records of the items and the quantity of goods imported.</li>
          <li><strong>Real-Time Updates:</strong> Get real-time updates on your stock levels to avoid overstocking or running out of essential items.</li>
          <li><strong>User-Friendly Interface:</strong> Our intuitive interface ensures that you can quickly navigate through your inventory data without any hassle.</li>
          <li><strong>Data Security:</strong> We prioritize the security of your data, ensuring that all your inventory information is safely stored and accessible only to authorized personnel.</li>
        </ul>
      </section>

      <section>
        <h3>Who Can Benefit?</h3>
        <p>
          Our platform is designed for stockholders and goods managers who need an efficient and reliable way to manage their inventory.
          Whether you are a small business owner or manage inventory for a large corporation, <strong>STOCKS</strong> can help you keep track of your goods effortlessly.
        </p>
      </section>

      <section>
        <h3>Why Choose STOCKS?</h3>
        <ul>
          <li><strong>Efficiency:</strong> Save time and reduce errors with our automated inventory management system.</li>
          <li><strong>Accuracy:</strong> Ensure that your stock levels are always accurate, helping you make informed business decisions.</li>
          <li><strong>Support:</strong> Our dedicated support team is always here to assist you with any questions or issues you might have.</li>
        </ul>
      </section>

      <section>
        <h3>Contact Us</h3>
        <p>
          We are always here to help you with your inventory management needs. If you have any questions or need assistance,
          feel free to reach out to us through our <a href="/contact">Contact Page</a>.
        </p>
      </section>

      <p>Thank you for choosing <strong>STOCKS</strong>. We look forward to helping you manage your inventory more efficiently!</p>
    </div>
  );
};

export default About;
