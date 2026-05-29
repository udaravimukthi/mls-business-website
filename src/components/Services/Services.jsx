import React, { useEffect, useState } from "react";
import "./Services.css";
import fm from "front-matter";

function Services() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    async function fetchServices() {
      const files = ["seo.md", "ppc-advertising.md", "content-marketing.md"];
      const data = await Promise.all(
        files.map(async (file) => {
          const res = await fetch(`${process.env.PUBLIC_URL}/content/services/${file}`);
          const text = await res.text();
          const content = fm(text);
          return content.attributes;
        })
      );
      setServices(data);
    }

    fetchServices();
  }, []);

  return (
    <section id="services" className="services-section">
      <div className="services-header">
        <h2>Our Marketing Services</h2>
        <p>
          We combine proven strategies with cutting-edge techniques to deliver
          measurable results across all digital marketing channels.
        </p>
      </div>

      <div className="services-grid">
        {services.map((service, idx) => (
          <div key={idx} className="service-card">
            <img src={service.icon} alt={service.name} />
            <h3>{service.name}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;