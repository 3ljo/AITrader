/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect } from "react";
import Marquee from "react-fast-marquee";
const aboutBg = "/aivora/bg/about-bg.png";

// Animated GIFs
const gif1 = "/aivora/icon/original-66948a0d81d.gif";
const gif2 = "/aivora/icon/0deec720000b2066289b.gif";
const gif3 = "/aivora/icon/b10c3e43e836d32554bf.gif";

// About images (3–4 images)
const img01 = "/aivora/about/img01.jpg";
const img02 = "/aivora/about/img02.jpg";
const img03 = "/aivora/about/img03.jpg";
import Link from "next/link";


const AboutSection: React.FC = () => {
  useEffect(() => {
    const bgEl = document.querySelector<HTMLElement>(".xb-about-img-wrap");
    if (bgEl) bgEl.style.backgroundImage = `url(${aboutBg})`;
  }, []);

  const aboutImages = [img01, img02, img03];

  return (
    <section className="about pt-140">
      <div className="container">
        <div className="sec-title about-sec-title mb-75">
          <span className="sub-title">Who We are?</span>
          <h2 className="title">
            We helping
            <span>
              <img src={gif1} alt="animation" />
            </span>{" "}
            grow businesses and
            <span>
              <img src={gif2} alt="animation" />
            </span>
            scale with smart, data-driven AI agency{" "}
            <span>
              <img src={gif3} alt="animation" />
            </span>
          </h2>
        </div>
      </div>

      {/* ✅ One single marquee with all 3 images */}
      <div className="xb-about-img-wrap bg_img wow">
        <Marquee speed={40} gradient={false} pauseOnHover={false}>
          {aboutImages.map((img, idx) => (
            <div key={idx} className="xb-about-img-item img-hove-effect">
              <div className="xb-img">
                <Link href="/service-details">
                  <img src={img} alt={`about-${idx + 1}`} />
                </Link>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default AboutSection;
