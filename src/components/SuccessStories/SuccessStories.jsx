import React, { useEffect, useState } from "react";
import "./SuccessStories.css";
import fm from "front-matter";

function SuccessStories() {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    async function fetchStories() {
      const files = ["techvision.md", "growthwave.md", "brandpulse.md"];
      const data = await Promise.all(
        files.map(async (file) => {
          const res = await fetch(`${process.env.PUBLIC_URL}/content/success_stories/${file}`);
          const text = await res.text();
          const content = fm(text);
          return content.attributes;
        })
      );
      setStories(data);
    }

    fetchStories();
  }, []);

  return (
    <section id="success-stories" className="success-stories-section">
      <div className="success-header">
        <h2>Featured Success Stories</h2>
        <p>
          Explore how we've helped businesses across various industries achieve
          remarkable growth through strategic digital marketing campaigns.
        </p>
      </div>

      <div className="success-grid">
        {stories.map((story, idx) => (
          <div key={idx} className="success-card">
            <img src={story.image} alt={story.title} />
            <h3>{story.title}</h3>
            <p>{story.description}</p>
            <a href={story.cta_link}>{story.cta_text}</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SuccessStories;