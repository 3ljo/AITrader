/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import Link from "next/link";

// Image imports (using your provided path)
const heroBg = "/aivora/bg/hero_bg.png";
const heroIcon = "/aivora/icon/animated-gif02.gif";
const featureIcon1 = "/aivora/icon/feature-icon01.svg";
const featureIcon2 = "/aivora/icon/feature-icon02.svg";
const featureIcon3 = "/aivora/icon/feature-icon03.svg";

const HeroSection: React.FC = () => {
  return (
    <section
      className="hero hero-style pos-rel bg_img"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="container">
        <div className="row">
          {/* ---------- Left Content ---------- */}
          <div className="col-lg-9 col-md-9">
            <div className="hero-content">
              <h2 className="title scale-animation wow">
                Stop staring at charts. Get pinged when the setup is real.
              </h2>
              <p className="sub-title scale-animation wow">
                SignalForge is your personal AI trading analyst. Ask for any pair,
                upload a chart, or scan your watchlist &mdash; the AI writes a full
                trade plan that respects your risk rules, then pings you on Telegram
                the moment the market fires it.
              </p>
              <div className="hero-btn scale-animation wow">
                <Link className="thm-btn agency-btn" href="/chat">
                  <span className="text">Start analyzing free</span>
                  <span className="arrow">
                    <span className="arrow-icon">
                      <svg
                        width="28"
                        height="28"
                        viewBox="0 0 28 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="5.06592"
                          y="19.9785"
                          width="20.5712"
                          height="2.61221"
                          transform="rotate(-40.2798 5.06592 19.9785)"
                          fill="white"
                        />
                        <rect
                          x="7.97095"
                          y="7.24463"
                          width="2.61221"
                          height="2.61221"
                          transform="rotate(-40.2798 7.97095 7.24463)"
                          fill="white"
                        />
                        <rect
                          x="11.6523"
                          y="7.54834"
                          width="2.61221"
                          height="2.61221"
                          transform="rotate(-40.2798 11.6523 7.54834)"
                          fill="white"
                        />
                        <rect
                          x="15.334"
                          y="7.85205"
                          width="2.61221"
                          height="2.61221"
                          transform="rotate(-40.2798 15.334 7.85205)"
                          fill="white"
                        />
                        <rect
                          x="18.7119"
                          y="11.8374"
                          width="2.61221"
                          height="2.61221"
                          transform="rotate(-40.2798 18.7119 11.8374)"
                          fill="white"
                        />
                        <rect
                          x="18.4084"
                          y="15.52"
                          width="2.61221"
                          height="2.61221"
                          transform="rotate(-40.2798 18.4084 15.52)"
                          fill="white"
                        />
                        <rect
                          x="18.104"
                          y="19.2012"
                          width="2.61221"
                          height="2.61221"
                          transform="rotate(-40.2798 18.104 19.2012)"
                          fill="white"
                        />
                      </svg>
                      <svg
                        width="28"
                        height="28"
                        viewBox="0 0 28 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="5.06592"
                          y="19.9785"
                          width="20.5712"
                          height="2.61221"
                          transform="rotate(-40.2798 5.06592 19.9785)"
                          fill="white"
                        />
                        <rect
                          x="7.97095"
                          y="7.24463"
                          width="2.61221"
                          height="2.61221"
                          transform="rotate(-40.2798 7.97095 7.24463)"
                          fill="white"
                        />
                        <rect
                          x="11.6523"
                          y="7.54834"
                          width="2.61221"
                          height="2.61221"
                          transform="rotate(-40.2798 11.6523 7.54834)"
                          fill="white"
                        />
                        <rect
                          x="15.334"
                          y="7.85205"
                          width="2.61221"
                          height="2.61221"
                          transform="rotate(-40.2798 15.334 7.85205)"
                          fill="white"
                        />
                        <rect
                          x="18.7119"
                          y="11.8374"
                          width="2.61221"
                          height="2.61221"
                          transform="rotate(-40.2798 18.7119 11.8374)"
                          fill="white"
                        />
                        <rect
                          x="18.4084"
                          y="15.52"
                          width="2.61221"
                          height="2.61221"
                          transform="rotate(-40.2798 18.4084 15.52)"
                          fill="white"
                        />
                        <rect
                          x="18.104"
                          y="19.2012"
                          width="2.61221"
                          height="2.61221"
                          transform="rotate(-40.2798 18.104 19.2012)"
                          fill="white"
                        />
                      </svg>
                    </span>
                  </span>
                </Link>
              </div>
            </div>
          </div>

          {/* ---------- Right Icon ---------- */}
          <div className="col-lg-3 col-md-3">
            <div
              className="hero-icon wow zoomIn"
              data-wow-delay="700ms"
              data-wow-duration="800ms"
            >
              <img src={heroIcon} alt="Hero icon" />
            </div>
          </div>
        </div>

        {/* ---------- Features ---------- */}
        <div className="row mt-55">
          <div className="col-lg-4 col-md-6 mt-30">
            <div
              className="xb-feature-item wow fadeInUp"
              data-wow-delay="700ms"
              data-wow-duration="600ms"
            >
              <div className="xb-item--inner xb-border">
                <span className="xb-item--icon">
                  <img src={featureIcon1} alt="icon" />
                </span>
                <div className="xb-item--holder">
                  <h2 className="xb-item--title">Smarter signals</h2>
                  <p className="xb-item--content">
                    Multi-timeframe analysis across your pairs. The AI writes a full
                    trade plan &mdash; entry, SL, TPs, sizing.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 mt-30">
            <div
              className="xb-feature-item wow fadeInUp"
              data-wow-delay="800ms"
              data-wow-duration="600ms"
            >
              <div className="xb-item--inner xb-border">
                <span className="xb-item--icon">
                  <img src={featureIcon2} alt="icon" />
                </span>
                <div className="xb-item--holder">
                  <h2 className="xb-item--title">Free Telegram alerts</h2>
                  <p className="xb-item--content">
                    Save any trigger. The monitor watches prices 24/7 at zero AI
                    cost and pings you when your setup fires.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 mt-30">
            <div
              className="xb-feature-item wow fadeInUp"
              data-wow-delay="900ms"
              data-wow-duration="600ms"
            >
              <div className="xb-item--inner xb-border">
                <span className="xb-item--icon">
                  <img src={featureIcon3} alt="icon" />
                </span>
                <div className="xb-item--holder">
                  <h2 className="xb-item--title">Risk-first by design</h2>
                  <p className="xb-item--content">
                    Every signal respects your per-trade cap and prop-firm rules.
                    No hero plays, no account-blowing setups.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
