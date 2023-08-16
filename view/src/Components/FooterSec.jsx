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
    <footer class="footer">
      <div class="container">
        <div class="section footer-top grid-list">
          <div class="footer-brand">
            {/* <a href="#" class="logo">
              <img
                src="/logo.png"
                width="148"
                height="38"
                alt="recipequeen home"
               
              />
            </a> */}

            <h2 class="h2 section-title">The Best Restaurants in Your Home</h2>

            <p class="section-text">
              Vitae congue mauris rhoncus aenean. Enim nulla aliquet porttitor
              lacus luctus accumsan tortor posuere. Tempus egestas sed sed risus
              pretium quam.
            </p>
          </div>

          <ul class="footer-list">
            <li>
              <p class="footer-list-title h5">Menu</p>
            </li>

            {menuheadings.map((el, index) => (
              <li key={index}>
                <a href="#" class="footer-link">
                  <span class="span">{el}</span>
                  <IoIosArrowRoundForward />
                </a>
              </li>
            ))}
          </ul>

          <ul class="footer-list">
            <li>
              <p class="footer-list-title h5">Contacts</p>
            </li>

            <li>
              <address class="address">
                <ion-icon name="location" aria-hidden="true"></ion-icon>

                <span class="span">
                  1717 Harrison St, San Francisco, CA 94103, United States
                </span>
              </address>
            </li>

            <li>
              <a href="mailto:recipequeen@mail.net" class="footer-link">
                <ion-icon name="mail" aria-hidden="true"></ion-icon>

                <span class="span">recipequeen@mail.net</span>
              </a>
            </li>

            <li>
              <a href="tel:+12344567890" class="footer-link">
                <ion-icon name="call" aria-hidden="true"></ion-icon>

                <span class="span">+1 234 456 78 90</span>
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

        <div class="footer-bottom">
          <p class="copyright">
            Copyright 2023 recipeQueen. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer
