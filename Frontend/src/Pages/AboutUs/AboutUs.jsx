import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="content1-container">
      {/* Left Content Section */}
      <div className="content1-text">
        <h2 className="content1-title">About Us</h2>
        <p className="content1-description">
          At <b>SkillSwap</b>, we believe in the power of collaboration and shared learning.
          As students, we’ve experienced how hard it can be to upskill without spending huge amounts
          on certifications and courses. That’s why we built SkillSwap — a platform where you can
          <b> exchange knowledge, grow your expertise, and network</b> with like-minded people.
        </p>

        <p className="content1-description">
          Whether you’re a <b>mentor</b> eager to guide others or a <b>learner</b> ready to
          explore new skills, SkillSwap provides a supportive and vibrant community where everyone
          can <b>grow together</b>. Our mission is to make upskilling simple, accessible, and fun.
        </p>
      </div>

      {/* Right Image Section */}
      <div className="content1-image">
        <img src="/assets/images/about us.png" alt="About SkillSwap" />
      </div>
    </div>
  );
};

export default AboutUs;