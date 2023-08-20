import React from "react";
import {
  IoIosArrowRoundForward,
  IoLogoFacebook,
  IoLogoTwitter,
  IoLogoInstagram,
} from "react-icons/io";

import { LiaWhatsapp } from "react-icons/lia";
export const menuheadings = ["Home", "About us", "Restaurants", "Contacts"];

const Footer = () => {
  const socialLinks = [
    IoLogoFacebook,
    IoLogoTwitter,
    IoLogoInstagram,
    LiaWhatsapp,
  ];
  return (
    <footer className="footer">
      <div className="container">
        <div className="section footer-top grid-list">
          <div className="footer-brand">
            {/* <a href="#" className="logo">
              <img
                src="/logo.png"
                width="148"
                height="38"
                alt="recipequeen home"
               
              />
            </a> */}

            <h2 className="h2 section-title">
              The Best Restaurants in Your Home
            </h2>

            <p className="section-text">
              Vitae congue mauris rhoncus aenean. Enim nulla aliquet porttitor
              lacus luctus accumsan tortor posuere. Tempus egestas sed sed risus
              pretium quam.
            </p>
          </div>

          <ul className="footer-list">
            <li>
              <p className="footer-list-title h5">Menu</p>
            </li>

            {menuheadings.map((el, index) => (
              <li key={index}>
                <a href="#" className="footer-link">
                  <span className="span">{el}</span>
                  <IoIosArrowRoundForward />
                </a>
              </li>
            ))}
          </ul>

          <ul className="footer-list">
            <li>
              <p className="footer-list-title h5">Contacts</p>
            </li>

            <li>
              <address className="address">
                <ion-icon name="location" aria-hidden="true"></ion-icon>

                <span className="span">
                  1717 Harrison St, San Francisco, CA 94103, United States
                </span>
              </address>
            </li>

            <li>
              <a href="mailto:recipequeen@mail.net" className="footer-link">
                <ion-icon name="mail" aria-hidden="true"></ion-icon>

                <span className="span">recipequeen@mail.net</span>
              </a>
            </li>

            <li>
              <a href="tel:+12344567890" className="footer-link">
                <ion-icon name="call" aria-hidden="true"></ion-icon>

                <span className="span">+1 234 456 78 90</span>
              </a>
            </li>

            <li>
              <ul className="social-list">
                {socialLinks.map((SocialIcon, index) => (
                  <li key={index}>
                    <a href="#" className="social-link">
                      <SocialIcon />
                    </a>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            Copyright 2023 recipeQueen. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
