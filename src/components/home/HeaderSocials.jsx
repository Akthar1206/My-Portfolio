import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { SiLeetcode, SiCodechef, SiHackerrank } from "react-icons/si";

const HeaderSocials = () => {
  return (
    <div className="home__socials">
      <a
        href="https://github.com/Akthar1206"
        className="home__social-link"
        target="_blank"
        rel="noreferrer"
      >
        <FaGithub />
      </a>

      <a
        href="https://www.linkedin.com/in/noorul-akthar-a-471444249/"
        className="home__social-link"
        target="_blank"
        rel="noreferrer"
      >
        <FaLinkedinIn />
      </a>

      <a
        href="https://leetcode.com/u/akthar1206/"
        className="home__social-link"
        target="_blank"
        rel="noreferrer"
      >
        <SiLeetcode />
      </a>

      <a
        href="https://www.codechef.com/users/each_wombat_67"
        className="home__social-link"
        target="_blank"
        rel="noreferrer"
      >
        <SiCodechef />
      </a>

      <a
        href="https://www.hackerrank.com/profile/noorulakthar2005"
        className="home__social-link"
        target="_blank"
        rel="noreferrer"
      >
        <SiHackerrank />
      </a>
    </div>
  );
};

export default HeaderSocials;
