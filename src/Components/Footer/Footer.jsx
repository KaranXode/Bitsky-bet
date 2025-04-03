import React from "react";
import FIcon from "../../assets/Icons/footer-icon.svg";
import telegram from "../../assets/Icons/telegram.svg";
import discord from "../../assets/Icons/discord.svg";
import twitter from "../../assets/Icons/twitter.svg";
import instgram from "../../assets/Icons/instagram.svg";
import youtube from "../../assets/Icons/youtube.svg";

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="px-2 pt-16 pb-6 mx-auto wrapper sm:px-6 lg:px-8 lg:pt-24">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div>
              <div className="flex justify-center text-teal-300 sm:justify-start">
                <img src={FIcon} alt="Icon" />
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
                      <a className="transition hover:text-white/75" href="/">
                        Casino
                      </a>
                    </li>

                    <li>
                      <a className="transition hover:text-white/75" href="/">
                        Sportsbook
                      </a>
                    </li>

                    <li>
                      <a className="transition hover:text-white/75" href="/">
                        FAQ
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>

              <div className="text-center sm:text-left">
                <p className="text-lg font-medium text-white"> About us</p>

                <nav className="mt-3">
                  <ul className="space-y-4 text-sm footer-text">
                    <li>
                      <a className="transition hover:text-white/75" href="/">
                        About us
                      </a>
                    </li>

                    <li>
                      <a className="transition hover:text-white/75" href="/">
                        Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a className="transition hover:text-white/75" href="/">
                        Terms and Conditions
                      </a>
                    </li>
                    <li>
                      <a className="transition hover:text-white/75" href="/">
                        How To Play
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>

              <div className="text-center sm:text-left">
                <p className="text-lg font-medium text-white">Contact </p>

                <ul className="mt-3 space-y-4 text-sm footer-text">
                  <li>
                    <a
                      className="flex items-center justify-center gap-1 sm:justify-start group"
                      href="/"
                    >
                      Support:
                      <span className="font-light text-white transition group-hover:text-white/75">
                        support@bitsky.com{" "}
                      </span>
                    </a>
                  </li>

                  <li>
                    <a
                      className="flex items-center justify-center gap-1 sm:justify-start group"
                      href="/"
                    >
                      Partners:
                      <span className="font-light text-white transition group-hover:text-white/75">
                        partners@bitsky.com{" "}
                      </span>
                    </a>
                  </li>

                  <li className="flex items-start justify-center gap-1.5 sm:justify-start">
                    <a
                      className="flex items-center justify-center gap-1 sm:justify-start group"
                      href="/"
                    >
                      Legal:
                      <span className="font-light text-white transition group-hover:text-white/75">
                        legal@bitsky.com{" "}
                      </span>
                    </a>
                  </li>
                </ul>
                <ul className="flex justify-center gap-3 mt-4 sm:justify-start">
                  <li>
                    <a
                      href="/"
                      rel="noopener noreferrer"
                      target="_blank"
                      className="text-teal-500 transition hover:text-teal-500/75 "
                    >
                      <img src={telegram} alt="telegram" className="zoom-effect" />
                    </a>
                  </li>

                  <li>
                    <a
                      href="/"
                      rel="noopener noreferrer"
                      target="_blank"
                      className="text-teal-500 transition hover:text-teal-500/75 "
                    >
                      <img src={discord} alt="discord" className="zoom-effect"/>
                    </a>
                  </li>

                  <li>
                    <a
                      href="/"
                      rel="noopener noreferrer"
                      target="_blank"
                      className="text-teal-500 transition hover:text-teal-500/75 "
                    >
                      <img src={twitter} alt="twitter" className="zoom-effect"/>
                    </a>
                  </li>

                  <li>
                    <a
                      href="/"
                      rel="noopener noreferrer"
                      target="_blank"
                      className="text-teal-500 transition hover:text-teal-500/75 "
                    >
                      <img src={instgram} alt="instgram" className="zoom-effect"/>
                    </a>
                  </li>

                  <li>
                    <a
                      href="/"
                      rel="noopener noreferrer"
                      target="_blank"
                      className="text-teal-500 transition hover:text-teal-500/75"
                    >
                      <img src={youtube} alt="youtube" className="zoom-effect" />
                    </a>
                  </li>
                </ul>
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
