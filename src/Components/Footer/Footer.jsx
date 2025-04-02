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
      <footer class="footer">
        <div class="wrapper px-2 pt-16 pb-6 mx-auto sm:px-6 lg:px-8 lg:pt-24">
          <div class="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div>
              <div class="flex justify-center text-teal-300 sm:justify-start">
                <img src={FIcon} alt="Icon" />
              </div>

              <p class=" max-w-md mx-auto mt-6 leading-relaxed text-center footer-text  sm:mx-0 sm:text-left">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </p>
            </div>

            <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 md:grid-cols-3">
              <div class="text-center sm:text-left">
                <p class="text-lg font-medium text-white">Platform</p>

                <nav class="mt-3">
                  <ul class="space-y-4 text-sm footer-text">
                    <li>
                      <a class=" transition hover:text-white/75" href="/">
                        Casino
                      </a>
                    </li>

                    <li>
                      <a class=" transition hover:text-white/75" href="/">
                        Sportsbook
                      </a>
                    </li>

                    <li>
                      <a class=" transition hover:text-white/75" href="/">
                        FAQ
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>

              <div class="text-center sm:text-left">
                <p class="text-lg font-medium text-white"> About us</p>

                <nav class="mt-3">
                  <ul class="space-y-4 text-sm footer-text">
                    <li>
                      <a class=" transition hover:text-white/75" href="/">
                        About us
                      </a>
                    </li>

                    <li>
                      <a class=" transition hover:text-white/75" href="/">
                        Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a class=" transition hover:text-white/75" href="/">
                        Terms and Conditions
                      </a>
                    </li>
                    <li>
                      <a class=" transition hover:text-white/75" href="/">
                        How To Play
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>

              <div class="text-center sm:text-left">
                <p class="text-lg font-medium text-white">Contact </p>

                <ul class="mt-3 space-y-4 text-sm footer-text">
                  <li>
                    <a
                      class="flex items-center justify-center sm:justify-start gap-1 group"
                      href="/"
                    >
                      Support:
                      <span class="text-white transition font-light group-hover:text-white/75">
                        support@bitsky.com{" "}
                      </span>
                    </a>
                  </li>

                  <li>
                    <a
                      class="flex items-center justify-center sm:justify-start gap-1 group"
                      href="/"
                    >
                      Partners:
                      <span class="text-white transition font-light group-hover:text-white/75">
                        partners@bitsky.com{" "}
                      </span>
                    </a>
                  </li>

                  <li class="flex items-start justify-center gap-1.5 sm:justify-start">
                    <a
                      class="flex items-center justify-center sm:justify-start gap-1 group"
                      href="/"
                    >
                      Legal:
                      <span class="text-white transition font-light group-hover:text-white/75">
                        legal@bitsky.com{" "}
                      </span>
                    </a>
                  </li>
                </ul>
                <ul class="flex justify-center gap-3 mt-4  sm:justify-start">
                  <li>
                    <a
                      href="/"
                      rel="noopener noreferrer"
                      target="_blank"
                      class="text-teal-500 transition hover:text-teal-500/75"
                    >
                      <img src={telegram} alt="telegram" />
                    </a>
                  </li>

                  <li>
                    <a
                      href="/"
                      rel="noopener noreferrer"
                      target="_blank"
                      class="text-teal-500 transition hover:text-teal-500/75"
                    >
                      <img src={discord} alt="discord" />
                    </a>
                  </li>

                  <li>
                    <a
                      href="/"
                      rel="noopener noreferrer"
                      target="_blank"
                      class="text-teal-500 transition hover:text-teal-500/75"
                    >
                      <img src={twitter} alt="twitter" />
                    </a>
                  </li>

                  <li>
                    <a
                      href="/"
                      rel="noopener noreferrer"
                      target="_blank"
                      class="text-teal-500 transition hover:text-teal-500/75"
                    >
                      <img src={instgram} alt="instgram" />
                    </a>
                  </li>

                  <li>
                    <a
                      href="/"
                      rel="noopener noreferrer"
                      target="_blank"
                      class="text-teal-500 transition hover:text-teal-500/75"
                    >
                      <img src={youtube} alt="youtube" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="pt-6 mt-12 border-t border-[#AA77A8]">
            <div class="text-center sm:flex justify-center sm:text-left footer-text ">
              2024 Bitsky.bet, All Rights Reserved
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
