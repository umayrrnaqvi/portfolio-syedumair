"use client";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaLinkedin
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const social = [
  { href: "https://github.com/umayrrnaqvi", Icon: FaGithub, hover: "hover:text-blue-500" },
  { href: "https://www.linkedin.com/in/umyrr", Icon: FaLinkedin, hover: "hover:text-blue-500" },
  { href: "https://x.com/syedumyrr", Icon: FaXTwitter, hover: "hover:text-blue-500" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-900 py-6 dark:bg-gray-900 dark:text-white">

      <div className="w-full flex flex-col sm:flex-row justify-between items-center gap-4 px-4 text-center">

        {/* Copyright */}
        <p className="text-sm text-gray-400 ">
          © {new Date().getFullYear()} Umair&nbsp;— All Rights Reserved
        </p>

        {/* Social Icons */}
        <div className="flex gap-5">
          {social.map(({ href, Icon, hover }, i) => (
            <a
              key={i}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-lg transition-transform transform hover:-translate-y-1 ${hover}`}
            >
              <Icon />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
