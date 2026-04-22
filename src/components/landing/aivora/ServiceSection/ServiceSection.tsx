/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect, useState } from "react";
const aboutBg = "/aivora/bg/service-bg.png";
import Link from "next/link";
const gif = "/aivora/icon/b10c3e43e836d32554bf.gif";
const arrowIcon = "/aivora/icon/rotate-arrow-black.svg";

// Service images
const img01 = "/aivora/service/img01.jpg";
const img02 = "/aivora/service/img02.jpg";
const img03 = "/aivora/service/img03.jpg";
const img04 = "/aivora/service/img04.jpg";
const img05 = "/aivora/service/img05.jpg";
const img06 = "/aivora/service/img06.jpg";

interface ServiceItem {
  id: number;
  title: string;
  desc: string;
  img: string;
  link: string;
}

const services: ServiceItem[] = [
  {
    id: 1,
    title: "AI Signal Engine",
    desc: "Type any pair. gpt-4.1 pulls live candles, runs multi-timeframe analysis, and returns a structured trade plan — entry, SL, TPs, position sizing, full reasoning.",
    img: img01,
    link: "/chat",
  },
  {
    id: 2,
    title: "Chart Screenshot Analysis",
    desc: "Drop any TradingView screenshot. The AI reads your trendlines, marked zones, and candles — then overlays live data to confirm or reject your thesis.",
    img: img02,
    link: "/chat",
  },
  {
    id: 3,
    title: "Watchlist Scanner",
    desc: "One click runs the AI across your whole watchlist — crypto, forex, metals, indices. Ranks findings by confidence. Only spends tokens when you click.",
    img: img03,
    link: "/scanner",
  },
  {
    id: 4,
    title: "Telegram Alerts",
    desc: "Save any trigger and the monitor watches live prices every 60 seconds. Zero AI tokens. Phone pings the instant your conditions hit — even when the app is closed.",
    img: img04,
    link: "/alerts",
  },
  {
    id: 5,
    title: "Economic Calendar",
    desc: "Red-folder news countdowns auto-filtered to your traded currencies. Know what's about to move the market before you take a position.",
    img: img05,
    link: "/calendar",
  },
  {
    id: 6,
    title: "Strategy-Aware Analysis",
    desc: "SMC, Supply & Demand, RSI, MA Trend, Fibonacci, and more. Pick your methodology — the AI analyzes through your lens with the right vocabulary.",
    img: img06,
    link: "/settings",
  },
];

const ServiceSection: React.FC = () => {
  const [activeId, setActiveId] = useState<number>(1);

  useEffect(() => {
    const bgEl = document.querySelector<HTMLElement>(".xb-service-wrap");
    if (bgEl) bgEl.style.backgroundImage = `url(${aboutBg})`;
  }, []);

  return (
    <section className="service pt-135">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-11">
            <div className="sec-title custom-sec-title xb-sec-padding text-center">
              <span className="sub-title">What SignalForge Does</span>
              <h2 className="title">
                <span className="round-img">
                  <img src={gif} alt="gif" />
                </span>{" "}
                Helping you trade smarter with AI
              </h2>
              <div className="xb-heading-btn d-inline">
                <Link className="thm-btn agency-btn" href="/chat">
                  <span className="text">Open the app</span>
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
        </div>
      </div>

      {/* ✅ Service Boxes */}
      <div className="xb-service-wrap bg_img">
        {services.map((service) => (
          <div
            key={service.id}
            className={`xb-service-item xb-border xb-mouseenter ${activeId === service.id ? "active" : ""
              }`}
            onMouseEnter={() => setActiveId(service.id)}
          >
            <div className="xb-item--inner">
              <div className="xb-item--item">
                <div className="xb-item--head-item">
                  <h3 className="xb-item--title border-effect">
                    <Link href={service.link}>{service.title}</Link>
                  </h3>
                  <Link className="xb-item--icon" href={service.link}>
                    <img src={arrowIcon} alt="arrow" />
                  </Link>
                </div>
                <p className="xb-item--content">{service.desc}</p>
                <div className="img-hove-effect">
                  <div className="xb-item--img xb-img">
                    {[...Array(4)].map((_, i) => (
                      <Link href={service.link} key={i}>
                        <img src={service.img} alt={service.title} />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <div className="service-vertical-text">
                <h3 className="xb-item--title">
                  <Link href={service.link}>{service.title}</Link>
                </h3>
                <Link className="xb-icon" href="/service-details">
                  <svg
                    width="31"
                    height="31"
                    viewBox="0 0 31 31"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="6.28979"
                      y="21.4111"
                      width="22.36"
                      height="2.83936"
                      transform="rotate(-40.2798 6.28979 21.4111)"
                      fill="white"
                    />
                    <rect
                      x="9.44751"
                      y="7.57031"
                      width="2.83936"
                      height="2.83936"
                      transform="rotate(-40.2798 9.44751 7.57031)"
                      fill="white"
                    />
                    <rect
                      x="13.449"
                      y="7.90015"
                      width="2.83936"
                      height="2.83936"
                      transform="rotate(-40.2798 13.449 7.90015)"
                      fill="white"
                    />
                    <rect
                      x="17.4507"
                      y="8.23047"
                      width="2.83936"
                      height="2.83936"
                      transform="rotate(-40.2798 17.4507 8.23047)"
                      fill="white"
                    />
                    <rect
                      x="21.1223"
                      y="12.5627"
                      width="2.83936"
                      height="2.83936"
                      transform="rotate(-40.2798 21.1223 12.5627)"
                      fill="white"
                    />
                    <rect
                      x="20.7925"
                      y="16.5649"
                      width="2.83936"
                      height="2.83936"
                      transform="rotate(-40.2798 20.7925 16.5649)"
                      fill="white"
                    />
                    <rect
                      x="20.4617"
                      y="20.5667"
                      width="2.83936"
                      height="2.83936"
                      transform="rotate(-40.2798 20.4617 20.5667)"
                      fill="white"
                    />
                  </svg>
                </Link>

              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceSection;
