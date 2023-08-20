import React from "react";

const NewsLetter = () => {
  return (
    <section className="section newsletter" aria-label="newsletter">
      <div className="container">
        <figure className="newsletter-banner">
          <img
            src="/newsletter-banenr.png"
            width="680"
            height="405"
            loading="lazy"
            alt="Illustration"
            className="w-100"
          />
        </figure>

        <div className="newsletter-content">
          <h2 className="h4 section-title">
            Get the recipe of your favorite dishes every day
          </h2>

          <div className="input-wrapper">
            <input
              type="email"
              name="email_address"
              placeholder="Enter email address"
              disabled
              required
              className="input-field"
            />

            <button type="submit" className="btn btn-primary has-after">
              <ion-icon
                name="notifications-outline"
                aria-hidden="true"
              ></ion-icon>

              <span className="span">Subscribe</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
