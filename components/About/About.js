import React from 'react';
import styles from './About.module.scss';
import Button from "../Button/Button";
import Image from 'next/image';

const About = () => {
  return (
    <div className={styles.aboutContainer}>
      {/* Left Side: Heading, Profile Image, and Button */}
      <div className={styles.leftSection}>
        <div className={styles.heading}>
          <p className="uppercase tracking-widest text-gray-light-1">
            About
          </p>
          <h1 className="text-6xl mt-2 font-medium text-gradient">
            More About Me 
          </h1> 
        </div>
        <div className={styles.profile}>
          <Image
            className={styles.profileImage}
            src="/anurag.jpeg"
            alt="Profile"
            width={500} // Specify the width
            height={500} // Specify the height
          />
          <h2 className={styles.name}>ANURAG ARYAN</h2>
          <p className={styles.jobTitle}>Electrical Engineer</p>
          <Button href="mailto:anuragaryanofficial@gmail.com" classes="link" type="primary" style={{ marginTop: '20px' }}>
            Hire Me
          </Button>
        </div>
      </div>

      {/* Right Side: Paragraph Content */}
      <div className={styles.rightSection}>
        <div className={styles.aboutText}>
          <p>
          I am an Electrical Engineering student at the National Institute of Technology, Patna, with a deep passion for innovation and problem-solving in the domains of <span className={styles.interest}>full-stack development</span>, <span className={styles.interest}>Robotics</span>,  <span className={styles.interest}>IoT</span>, and  <span className={styles.interest}>Drones</span>. Throughout my academic journey, I have honed my skills in electrical systems, web development, and technology integration, bridging the gap between theoretical knowledge and real-world applications.
          </p>
          <>I have a strong passion for painting, content writing, sketching, and traveling, which allow me to express creativity and connect with others. These hobbies inspire new perspectives and enrich my personal growth, complementing my technical skills and fostering a balanced approach to innovation and problem-solving.</>
        </div>
        <div className={styles.currentWork}>
          <p className={styles.now}>
            This is what I am doing right <span className={styles.highlight}>now</span>:
          </p>
          <p>
            I am always looking to learn and explor new areas in the tech and non-tech field. I am currently working on a few projects related to <span className={styles.highlight}>Web3</span>, <span className={styles.highlight}>Automation</span> and <span className={styles.highlight}>Machine Learning</span>. At the same time, I am actively on the lookout for remote internships, projects and collabrations which I can pursue in the field of Web Development and Automation.
          </p>
        </div>
        <div className={styles.openSource}>
          <p>
          With a solid foundation in both technical and soft skills, I am eager to leverage my abilities in the fields of robotics, IoT, web development, and drones. I am a strong advocate for open source and I am always interested in working on new projects with new people. Feel free to reach out if you have anything to talk about. You can reach me through <a href="mailto:anuragaryanofficial@gmail.com" className={styles.mailLink}>Mail</a> or <a href="https://www.linkedin.com/in/anurag-aryan-563233261" className={styles.whatsappLink}>Linkedin</a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
