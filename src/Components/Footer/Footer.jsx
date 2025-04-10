import React from "react";
import FIcon from "../../assets/Icons/footer-icon.svg";
import { Link } from "react-router-dom";
import SocialMedia from "../SocialMedia/SocialMedia";

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="px-2 pt-16 pb-6 mx-auto wrapper sm:px-6 lg:px-8 lg:pt-24">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div>
              <div className="flex justify-center text-teal-300 sm:justify-start">
                <Link to="/">
                  <img src={FIcon} alt="Icon" />
                </Link>
              </div>

              <p className="max-w-md mx-auto mt-6 leading-relaxed text-center footer-text sm:mx-0 sm:text-left">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 md:grid-cols-3">
              <div className="text-center sm:text-left">
                <p className="text-lg font-medium text-white">Platform</p>

                <nav className="mt-3">
                  <ul className="space-y-4 text-sm footer-text">
                    <li>
                      <Link className="transition hover:text-white/75" to="/">
                        Casino
                      </Link>
                    </li>

                    <li>
                      <Link to="/" className="transition hover:text-white/75">
                        Sportsbook
                      </Link>
                    </li>

                    <li>
                      <Link to="/" className="transition hover:text-white/75">
                        FAQ
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>

              <div className="text-center sm:text-left">
                <p className="text-lg font-medium text-white"> About us</p>

                <nav className="mt-3">
                  <ul className="space-y-4 text-sm footer-text">
                    <li>
                      <Link to="/" className="transition hover:text-white/75">
                        About us
                      </Link>
                    </li>

                    <li>
                      <Link to="/" className="transition hover:text-white/75">
                        Privacy Policy
                      </Link>
                    </li>
                    <li>
                      <Link to="/" className="transition hover:text-white/75">
                        Terms and Conditions
                      </Link>
                    </li>
                    <li>
                      <Link to="/" className="transition hover:text-white/75">
                        How To Play
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>

              <div className="text-center sm:text-left">
                <p className="text-lg font-medium text-white">Contact </p>

                <ul className="mt-3 space-y-4 text-sm footer-text">
                  <li>
                    <Link className="flex items-center justify-center gap-1 sm:justify-start group">
                      Support:
                      <span className="font-light text-white transition group-hover:text-white/75">
                        support@bitsky.com{" "}
                      </span>
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/"
                      className="flex items-center justify-center gap-1 sm:justify-start group"
                    >
                      Partners:
                      <span className="font-light text-white transition group-hover:text-white/75">
                        partners@bitsky.com{" "}
                      </span>
                    </Link>
                  </li>

                  <li className="flex items-start justify-center gap-1.5 sm:justify-start">
                    <Link
                      to="/"
                      className="flex items-center justify-center gap-1 sm:justify-start group"
                    >
                      Legal:
                      <span className="font-light text-white transition group-hover:text-white/75">
                        legal@bitsky.com{" "}
                      </span>
                    </Link>
                  </li>
                </ul>
                <SocialMedia />
              </div>
            </div>
          </div>

          <div className="pt-6 mt-12 border-t border-[#AA77A8]">
            <div className="justify-center text-center sm:flex sm:text-left footer-text ">
              2024 Bitsky.bet, All Rights Reserved
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
