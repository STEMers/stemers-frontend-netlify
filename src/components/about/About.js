import "./styles.css";
import checklist from "../../json-data/about/checklist.webp";
import badge1 from "../../images/badge1.png";
import badge2 from "../../images/badge2.png";
import badge3 from "../../images/badge3.png";
import { BsCheck2Circle } from "react-icons/bs";
import { Developer } from "./developers/Developer";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <section className="about">
      <div className="about-wrapper">
        <h2 className="about-title"> About STEMers</h2>
        <div className="about-content">
          <p>
            You've likely heard the term STEM, but what does it stand for? STEM
            is an acronym for science, technology, engineering, and math. These
            four fields share an emphasis on innovation, problem-solving, and
            critical thinking. And together they make up a popular and
            fast-growing industry. Most STEM workers use computers and other
            technology in their day-to-day jobs. Many also use the scientific
            method to test hypotheses and theories.
          </p>
          <p>
            What Are STEM Fields? STEM comprises the following major areas of
            study: Natural, physical, and life sciences (sometimes including
            medicine, sometimes not) Computer, electronics, and other
            technology-related disciplines All types of engineering Mathematics,
            or any field involving a heavy application of mathematical
            principles
          </p>
          <p> The idea of STEMers is born to create a platform that gives STEM women the exposure and attention they deserve and to recognize STEM professionals who go
        above and beyond. Lift up the women who inspire and educate your
        communities with STEMers platform .</p>
        <p><Link to="/register">Join</Link> the platform now, <Link to="/invite">invite</Link> your stars, <Link to="/nominate">nominate </Link>those achieve in STEM fields. </p>
        </div>
        <div className="about-developers">
          <h2 className="about-title"> Our Passionate Developers</h2>
          <div className="developers">
            <Developer />
          </div>
        </div>
        <div className="about-requirements">
          <h2 className="about-title"> Who can join?</h2>
          <div className="requirements-list">
            <ul className="about-content">
              <li>
                <BsCheck2Circle /> Everyone can join
              </li>
              <li>
                <BsCheck2Circle />
                profile of only female STEM professionals will be listed for nomination
              </li>
              <li>
                <BsCheck2Circle /> Female professionals from Natural, physical, and life sciences
              </li>              
              <li>
                {" "}
                <BsCheck2Circle /> Computer, electronics, and other technology-related disciplines
                sed,
              </li>
              <li>
                {" "}
                <BsCheck2Circle /> Mathematics, or any field involving a heavy application of mathematical principles

              </li>
              <li>
                All types of engineering
              </li>
            </ul>
            <img src={checklist} alt="checklist" />
          </div>
        </div>
        <div className="about-badges">
          <h2 className="about-title"> Nominations and Badges</h2>
          <div className="badges-wrapper">
            <div className="badges">
              <img src={badge1} alt="badge1" />
              <span>Badge 1</span>
              <img src={badge2} alt="badge2" />
              <span>Badge 2</span>
              <img src={badge3} alt="badge3" />
              <span>Badge 3</span>
            </div>
            <div className="descriptions">
              <ul className="badges-description">
                <li>
                  <BsCheck2Circle /> Badge 1 is awarded for stars who get more than 20 nominations
                </li>
                <li></li>
                <li>
                  <BsCheck2Circle /> Badge 2 is awarded for stars who get more than 15 nominations
                </li>
                <li></li>
                <li>
                  <BsCheck2Circle /> Badge 3 is awarded for stars who get more than 10 nominations
                </li>                
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
