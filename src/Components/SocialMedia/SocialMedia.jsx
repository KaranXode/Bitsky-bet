import React from "react";
import telegram from "../../assets/Icons/telegram.svg";
import discord from "../../assets/Icons/discord.svg";
import twitter from "../../assets/Icons/twitter.svg";
import instgram from "../../assets/Icons/instagram.svg";
import youtube from "../../assets/Icons/youtube.svg";
import { Link } from "react-router-dom";

export default function SocialMedia() {
  return (
    <>
      {" "}
      <ul className="flex justify-center gap-3 mt-4 sm:justify-start">
        <li>
          <Link
            to="/"
            rel="noopener noreferrer"
            target="_blank"
            className="text-teal-500 transition hover:text-teal-500/75 "
          >
            <img src={telegram} alt="telegram" className="zoom-effect" />
          </Link>
        </li>

        <li>
          <Link
            to="/"
            rel="noopener noreferrer"
            target="_blank"
            className="text-teal-500 transition hover:text-teal-500/75 "
          >
            <img src={discord} alt="discord" className="zoom-effect" />
          </Link>
        </li>

        <li>
          <Link
            to="/"
            rel="noopener noreferrer"
            target="_blank"
            className="text-teal-500 transition hover:text-teal-500/75 "
          >
            <img src={twitter} alt="twitter" className="zoom-effect" />
          </Link>
        </li>

        <li>
          <Link
            to="/"
            rel="noopener noreferrer"
            target="_blank"
            className="text-teal-500 transition hover:text-teal-500/75 "
          >
            <img src={instgram} alt="instgram" className="zoom-effect" />
          </Link>
        </li>

        <li>
          <Link
            to="/"
            rel="noopener noreferrer"
            target="_blank"
            className="text-teal-500 transition hover:text-teal-500/75"
          >
            <img src={youtube} alt="youtube" className="zoom-effect" />
          </Link>
        </li>
      </ul>
    </>
  );
}
