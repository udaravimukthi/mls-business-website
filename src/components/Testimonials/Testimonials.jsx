import React, { useEffect, useState } from "react";
import "./Testimonials.css";
import fm from "front-matter";

function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    async function fetchTestimonials() {
      const files = ["sarah-johnson.md", "michael-chen.md", "emily-rodriguez.md"];
      const data = await Promise.all(
        files.map(async (file) => {
          const res = await fetch(`${process.env.PUBLIC_URL}/content/testimonials/${file}`);
          const text = await res.text();
          const content = fm(text);
          return content.attributes;
        })
      );
      setTestimonials(data);
    }

    fetchTestimonials();
  }, []);

  return (
    <div id="testimonials">
      <div className="testimonial-header">
        <h2>What Our Clients Say</h2>
        <p>
          Don't just take our word for it. Here's what business leaders have to say
          about our digital marketing results.
        </p>
      </div>

      <div className="testimonials-grid">
        {testimonials.map((t, idx) => (
          <div key={idx} className="testimonial-card">

            <p>"{t.quote}"</p>
            <strong>{t.name}</strong>
            <span className="role">{t.role}</span>
            <p>Rating: {"⭐".repeat(t.rating)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;