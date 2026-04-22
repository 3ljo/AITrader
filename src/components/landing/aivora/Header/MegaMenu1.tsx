/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import Link from "next/link";

const icon1 = "/aivora/icon/m_01.svg";
const icon2 = "/aivora/icon/m_02.svg";
const icon3 = "/aivora/icon/m_03.svg";
const icon4 = "/aivora/icon/m_04.svg";
const client1 = "/aivora/logo/client-logo.svg";
const client2 = "/aivora/logo/client-logo2.svg";
const robot = "/aivora/blog/mega-robot.jpg";
const avatar = "/aivora/avatar/mega-avatar.jpg";

const MegaMenu1: React.FC = () => {
  return (
    <ul className="submenu">
      <li>
        <div className="mega_menu_wrapper">
          <div className="container-fluid p-0">
            <div className="mega_menu_wrapper_inner">
              <div className="row mt-none-30">
                {/* ---------- LEFT SIDE ---------- */}
                <div className="col-xl-8 col-lg-12 mt-30">
                  <div className="megamenu_pages_wrapper">
                    <div className="row g-10">
                      <div className="col-xl-4 col-lg-4">
                        <Link className="iconbox_block_2" href="/chat">
                          <span className="icon_title_wrap">
                            <small className="iconbox_icon">
                              <img src={icon1} alt="Chat Icon" />
                            </small>
                            <small className="iconbox_title">AI Chat</small>
                          </span>
                          <span className="description mb-0">
                            Ask any pair, get a full trade plan.
                          </span>
                        </Link>
                      </div>

                      <div className="col-xl-4 col-lg-4">
                        <Link className="iconbox_block_2" href="/chat">
                          <span className="icon_title_wrap">
                            <small className="iconbox_icon">
                              <img src={icon1} alt="Chart Analysis Icon" />
                            </small>
                            <small className="iconbox_title">
                              Chart Analysis
                            </small>
                          </span>
                          <span className="description mb-0">
                            Drop a screenshot, get a real read.
                          </span>
                        </Link>
                      </div>

                      <div className="col-xl-4 col-lg-4">
                        <Link className="iconbox_block_2" href="/scanner">
                          <span className="icon_title_wrap">
                            <span className="iconbox_icon">
                              <img src={icon3} alt="Scanner Icon" />
                            </span>
                            <small className="iconbox_title">Scanner</small>
                            <span className="badge">Hot</span>
                          </span>
                          <span className="description mb-0">
                            Scan your watchlist in one click.
                          </span>
                        </Link>
                      </div>

                      <div className="col-xl-4 col-lg-4">
                        <Link className="iconbox_block_2" href="/alerts">
                          <span className="icon_title_wrap">
                            <span className="iconbox_icon">
                              <img src={icon2} alt="Alerts Icon" />
                            </span>
                            <small className="iconbox_title">
                              Alerts
                            </small>
                          </span>
                          <span className="description mb-0">
                            Telegram pings when setups fire.
                          </span>
                        </Link>
                      </div>

                      <div className="col-xl-4 col-lg-4">
                        <Link className="iconbox_block_2" href="/calendar">
                          <span className="icon_title_wrap">
                            <span className="iconbox_icon">
                              <img src={icon3} alt="Calendar Icon" />
                            </span>
                            <small className="iconbox_title">Calendar</small>
                          </span>
                          <span className="description mb-0">
                            Red-folder news that moves markets.
                          </span>
                        </Link>
                      </div>

                      <div className="col-xl-4 col-lg-4">
                        <Link className="iconbox_block_2" href="/settings">
                          <span className="icon_title_wrap">
                            <span className="iconbox_icon">
                              <img src={icon3} alt="Settings Icon" />
                            </span>
                            <small className="iconbox_title">
                              Settings
                            </small>
                          </span>
                          <span className="description mb-0">
                            Profile, risk, strategy, Telegram.
                          </span>
                        </Link>
                      </div>

                      <div className="col-xl-4 col-lg-4">
                        <Link className="iconbox_block_2" href="/settings">
                          <span className="icon_title_wrap">
                            <span className="iconbox_icon">
                              <img src={icon4} alt="Strategies Icon" />
                            </span>
                            <small className="iconbox_title">Strategies</small>
                          </span>
                          <span className="description mb-0">
                            SMC, RSI, Supply &amp; Demand, more.
                          </span>
                        </Link>
                      </div>
                    </div>

                    {/* ---------- BUTTONS & REVIEWS ---------- */}
                    <ul className="btns_group mt-80 p-0 ul_li_between">
                      <li>
                        <Link className="thm-btn agency-btn megamenu-btn" href="/contact">
                          <span className="text">Start analyzing free</span>
                          <span className="arrow">
                            <span className="arrow-icon">
                              <svg
                                width="25"
                                height="25"
                                viewBox="0 0 25 25"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <rect
                                  x="5.22852"
                                  y="17.3296"
                                  width="17.888"
                                  height="2.27149"
                                  transform="rotate(-40.2798 5.22852 17.3296)"
                                  fill="white"
                                />
                                <rect
                                  x="7.75781"
                                  y="6.25635"
                                  width="2.27149"
                                  height="2.27149"
                                  transform="rotate(-40.2798 7.75781 6.25635)"
                                  fill="white"
                                />
                                <rect
                                  x="10.959"
                                  y="6.52002"
                                  width="2.27149"
                                  height="2.27149"
                                  transform="rotate(-40.2798 10.959 6.52002)"
                                  fill="white"
                                />
                                <rect
                                  x="14.1562"
                                  y="6.78516"
                                  width="2.27149"
                                  height="2.27149"
                                  transform="rotate(-40.2798 14.1562 6.78516)"
                                  fill="white"
                                />
                                <rect
                                  x="17.0957"
                                  y="10.25"
                                  width="2.27149"
                                  height="2.27149"
                                  transform="rotate(-40.2798 17.0957 10.25)"
                                  fill="white"
                                />
                                <rect
                                  x="16.832"
                                  y="13.4517"
                                  width="2.27149"
                                  height="2.27149"
                                  transform="rotate(-40.2798 16.832 13.4517)"
                                  fill="white"
                                />
                                <rect
                                  x="16.5684"
                                  y="16.6538"
                                  width="2.27149"
                                  height="2.27149"
                                  transform="rotate(-40.2798 16.5684 16.6538)"
                                  fill="white"
                                />
                              </svg>

                              <svg
                                width="25"
                                height="25"
                                viewBox="0 0 25 25"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <rect
                                  x="5.22852"
                                  y="17.3296"
                                  width="17.888"
                                  height="2.27149"
                                  transform="rotate(-40.2798 5.22852 17.3296)"
                                  fill="white"
                                />
                                <rect
                                  x="7.75781"
                                  y="6.25635"
                                  width="2.27149"
                                  height="2.27149"
                                  transform="rotate(-40.2798 7.75781 6.25635)"
                                  fill="white"
                                />
                                <rect
                                  x="10.959"
                                  y="6.52002"
                                  width="2.27149"
                                  height="2.27149"
                                  transform="rotate(-40.2798 10.959 6.52002)"
                                  fill="white"
                                />
                                <rect
                                  x="14.1562"
                                  y="6.78516"
                                  width="2.27149"
                                  height="2.27149"
                                  transform="rotate(-40.2798 14.1562 6.78516)"
                                  fill="white"
                                />
                                <rect
                                  x="17.0957"
                                  y="10.25"
                                  width="2.27149"
                                  height="2.27149"
                                  transform="rotate(-40.2798 17.0957 10.25)"
                                  fill="white"
                                />
                                <rect
                                  x="16.832"
                                  y="13.4517"
                                  width="2.27149"
                                  height="2.27149"
                                  transform="rotate(-40.2798 16.832 13.4517)"
                                  fill="white"
                                />
                                <rect
                                  x="16.5684"
                                  y="16.6538"
                                  width="2.27149"
                                  height="2.27149"
                                  transform="rotate(-40.2798 16.5684 16.6538)"
                                  fill="white"
                                />
                              </svg>
                            </span>
                          </span>
                        </Link>
                      </li>

                      <li>
                        <div className="review_short_info_2">
                          <div className="review_admin_logo">
                            <img src={client1} alt="Client 1" />
                          </div>
                          <div className="review_info_content">
                            <ul className="rating_block unordered_list">
                              {Array(5)
                                .fill(null)
                                .map((_, i) => (
                                  <li key={i}>
                                    <i className="fas fa-star"></i>
                                  </li>
                                ))}
                            </ul>
                            <div className="review_counter">
                              From <b>200+</b> reviews
                            </div>
                          </div>
                        </div>
                      </li>

                      <li>
                        <div className="review_short_info_2">
                          <div className="review_admin_logo">
                            <img src={client2} alt="Client 2" />
                          </div>
                          <div className="review_info_content">
                            <ul className="rating_block unordered_list">
                              {Array(5)
                                .fill(null)
                                .map((_, i) => (
                                  <li key={i}>
                                    <i className="fas fa-star"></i>
                                  </li>
                                ))}
                            </ul>
                            <div className="review_counter">
                              From <b>150+</b> reviews
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* ---------- RIGHT SIDE ---------- */}
                <div className="col-xl-4 col-lg-12 mt-30">
                  <div className="mega_menu_left">
                    <div className="author_box">
                      <div className="author_image">
                        <img src={robot} alt="AI Robot" />
                      </div>
                      <div className="author_box_content">
                        <h3 className="mb-60 text-white">
                          Tired of staring at charts all day? Let the AI watch them for you.
                        </h3>
                        <Link className="thm-btn agency-btn megamenu-btn" href="/contact">
                          <span className="text">Launch the app</span>
                          <span className="arrow">
                            <span className="arrow-icon">
                              <svg
                                width="25"
                                height="25"
                                viewBox="0 0 25 25"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <rect
                                  x="5.22852"
                                  y="17.3296"
                                  width="17.888"
                                  height="2.27149"
                                  transform="rotate(-40.2798 5.22852 17.3296)"
                                  fill="white"
                                />
                                <rect
                                  x="7.75781"
                                  y="6.25635"
                                  width="2.27149"
                                  height="2.27149"
                                  transform="rotate(-40.2798 7.75781 6.25635)"
                                  fill="white"
                                />
                                <rect
                                  x="10.959"
                                  y="6.52002"
                                  width="2.27149"
                                  height="2.27149"
                                  transform="rotate(-40.2798 10.959 6.52002)"
                                  fill="white"
                                />
                                <rect
                                  x="14.1562"
                                  y="6.78516"
                                  width="2.27149"
                                  height="2.27149"
                                  transform="rotate(-40.2798 14.1562 6.78516)"
                                  fill="white"
                                />
                                <rect
                                  x="17.0957"
                                  y="10.25"
                                  width="2.27149"
                                  height="2.27149"
                                  transform="rotate(-40.2798 17.0957 10.25)"
                                  fill="white"
                                />
                                <rect
                                  x="16.832"
                                  y="13.4517"
                                  width="2.27149"
                                  height="2.27149"
                                  transform="rotate(-40.2798 16.832 13.4517)"
                                  fill="white"
                                />
                                <rect
                                  x="16.5684"
                                  y="16.6538"
                                  width="2.27149"
                                  height="2.27149"
                                  transform="rotate(-40.2798 16.5684 16.6538)"
                                  fill="white"
                                />
                              </svg>

                              <svg
                                width="25"
                                height="25"
                                viewBox="0 0 25 25"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <rect
                                  x="5.22852"
                                  y="17.3296"
                                  width="17.888"
                                  height="2.27149"
                                  transform="rotate(-40.2798 5.22852 17.3296)"
                                  fill="white"
                                />
                                <rect
                                  x="7.75781"
                                  y="6.25635"
                                  width="2.27149"
                                  height="2.27149"
                                  transform="rotate(-40.2798 7.75781 6.25635)"
                                  fill="white"
                                />
                                <rect
                                  x="10.959"
                                  y="6.52002"
                                  width="2.27149"
                                  height="2.27149"
                                  transform="rotate(-40.2798 10.959 6.52002)"
                                  fill="white"
                                />
                                <rect
                                  x="14.1562"
                                  y="6.78516"
                                  width="2.27149"
                                  height="2.27149"
                                  transform="rotate(-40.2798 14.1562 6.78516)"
                                  fill="white"
                                />
                                <rect
                                  x="17.0957"
                                  y="10.25"
                                  width="2.27149"
                                  height="2.27149"
                                  transform="rotate(-40.2798 17.0957 10.25)"
                                  fill="white"
                                />
                                <rect
                                  x="16.832"
                                  y="13.4517"
                                  width="2.27149"
                                  height="2.27149"
                                  transform="rotate(-40.2798 16.832 13.4517)"
                                  fill="white"
                                />
                                <rect
                                  x="16.5684"
                                  y="16.6538"
                                  width="2.27149"
                                  height="2.27149"
                                  transform="rotate(-40.2798 16.5684 16.6538)"
                                  fill="white"
                                />
                              </svg>
                            </span>
                          </span>
                        </Link>
                      </div>
                    </div>

                    <div className="author_box">
                      <div className="author_image">
                        <img src={avatar} alt="CEO Avatar" />
                      </div>
                      <div className="author_box_content">
                        <p className="mb-45 text-white">
                          &ldquo;One AI call writes the trade plan. A free
                          monitor waits for the market to actually do it. You
                          show up only when there&apos;s a real setup.&rdquo;
                        </p>
                        <div className="author_holder">
                          <h4 className="author_name text-white">
                            The SignalForge Loop
                          </h4>
                          <span className="author_designation text-white">
                            How we think about trading at,{" "}
                            <Link href="/">SignalForge</Link>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* ---------- END RIGHT SIDE ---------- */}
              </div>
            </div>
          </div>
        </div>
      </li>
    </ul>
  );
};

export default MegaMenu1;
