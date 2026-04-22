/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import Link from "next/link";

// Image imports
const footerBg = "/aivora/bg/footer-bg.png";
const emailIcon = "/aivora/icon/email-icon.svg";
const locationIcon = "/aivora/icon/location-icon.svg";
const callIcon = "/aivora/icon/call-icon.svg";

const Footer: React.FC = () => {
  const arrowIcon = (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="5.06641"
        y="19.2783"
        width="20.5712"
        height="2.61221"
        transform="rotate(-40.2798 5.06641 19.2783)"
        fill="white"
      />
      <rect
        x="7.97144"
        y="6.54443"
        width="2.61221"
        height="2.61221"
        transform="rotate(-40.2798 7.97144 6.54443)"
        fill="white"
      />
      <rect
        x="11.6528"
        y="6.84814"
        width="2.61221"
        height="2.61221"
        transform="rotate(-40.2798 11.6528 6.84814)"
        fill="white"
      />
      <rect
        x="15.3345"
        y="7.15186"
        width="2.61221"
        height="2.61221"
        transform="rotate(-40.2798 15.3345 7.15186)"
        fill="white"
      />
      <rect
        x="18.7124"
        y="11.1372"
        width="2.61221"
        height="2.61221"
        transform="rotate(-40.2798 18.7124 11.1372)"
        fill="white"
      />
      <rect
        x="18.4089"
        y="14.8198"
        width="2.61221"
        height="2.61221"
        transform="rotate(-40.2798 18.4089 14.8198)"
        fill="white"
      />
      <rect
        x="18.1045"
        y="18.501"
        width="2.61221"
        height="2.61221"
        transform="rotate(-40.2798 18.1045 18.501)"
        fill="white"
      />
    </svg>
  );

  // ONLY YOUR ORIGINAL 4 SOCIALS
  const socials = [
    {
      icon: <i className="fa-brands fa-facebook"></i>,
      name: "Facebook",
      url: "https://www.facebook.com/",
    },
    {
      icon: (
        <svg
          width="19"
          height="19"
          viewBox="0 0 19 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.46973 0C14.6996 0 18.9395 4.25357 18.9395 9.5C18.9394 14.7464 14.6996 19 9.46973 19C4.24002 18.9998 8.74258e-05 14.7463 0 9.5C0 4.25366 4.23997 0.000150177 9.46973 0ZM8.27441 10.1201L4.02344 15.0771H4.98438L8.70117 10.7422L11.6709 15.0771H14.9131L10.5039 8.64062L14.5586 3.91309H13.5977L10.0771 8.01758L7.26562 3.91309H4.02344L8.27441 10.1201ZM13.5977 14.3848H12.1221L5.33008 4.63867H6.80566L13.5977 14.3848Z"
            fill="#FFF"
          />
        </svg>
      ),
      name: "Twitter",
      url: "https://twitter.com/",
    },
    {
      icon: <i className="fa-brands fa-linkedin"></i>,
      name: "LinkedIn",
      url: "https://www.linkedin.com/",
    },
    {
      icon: <i className="fa-brands fa-square-youtube"></i>,
      name: "YouTube",
      url: "https://www.youtube.com/",
    },
  ];

  return (
    <footer
      className="footer footer-style-one pt-145 bg_img"
      style={{ backgroundImage: `url(${footerBg})` }}
    >
      <div className="xb-footer-wrap">
        {/* Footer Heading */}
        <div className="xb-footer-heading wow zoomIn" data-wow-delay="0ms" data-wow-duration="600ms">
          <h1 className="title">SignalForge</h1>
          <a className="mail" href="mailto:hello@signalforge.app">
            <img src={emailIcon} alt="email" /> hello@signalforge.app
          </a>
        </div>

        {/* Footer Navigation */}
        <div className="xb-footer-nav">
          <div className="xb-footer-nav-item">
            <span className="sub-title">Ask the AI</span>
            <h2 className="title">
              <Link href="/chat">Chat</Link>
            </h2>
          </div>
          <div className="xb-footer-nav-item">
            <span className="sub-title">Find setups</span>
            <h2 className="title">
              <Link href="/scanner">Scanner</Link>
            </h2>
          </div>
          <div className="xb-footer-nav-item">
            <span className="sub-title">Get pinged</span>
            <h2 className="title">
              <Link href="/alerts">Alerts</Link>
            </h2>
          </div>
          <div className="xb-footer-nav-item">
            <span className="sub-title">News that moves</span>
            <h2 className="title">
              <Link href="/calendar">Calendar</Link>
            </h2>
          </div>
          <div className="xb-footer-nav-item">
            <span className="sub-title">Configure</span>
            <h2 className="title">
              <Link href="/settings">Settings</Link>
            </h2>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="xb-social-media-wrap">
          {socials.map((social, idx) => (
            <div className="xb-social-media-item ul_li_between" key={idx}>
              <div className="xb-item--holder ul_li">
                <div className="xb-item--icon">{social.icon}</div>
                <span className="xb-item--name">{social.name}</span>
              </div>

              <span className="xb-item--arrow">{arrowIcon}</span>

              <a
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name} 
                className="xb-overlay"
              ></a>
            </div>
          ))}
        </div>

        {/* Footer Bottom */}
        <div className="xb-footer-bottom">
          <div className="contact-item">
            <img src={locationIcon} alt="location" />
            <span className="contact-method">Local-first · Your data stays yours</span>
          </div>

          <div className="contact-item copyright-item">
            <p>
              Copyright © {new Date().getFullYear()} <Link href="/">SignalForge</Link>. AI analysis, not financial advice.
            </p>
          </div>

          <div className="contact-item">
            <a href="/chat">
              <img src={callIcon} alt="open" />
            </a>
            <a className="contact-method" href="/chat">
              Open the app
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
