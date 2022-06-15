import "./styles.css";
import checklist from "../../images/checklist.webp";
import badge1 from "../../json-data/about/badge1.png";
import badge2 from "../../json-data/about/badge2.png";
import badge3 from "../../json-data/about/badge3.png";
import { BsCheck2Circle } from "react-icons/bs"
import { Developer } from "./developers/Developer";

export default function About() {
  return (
    <section className="about">
      <div className="about-wrapper">
        <h2 className="about-title"> About STEMers</h2>
        <div className="about-content">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut varius
            sapien eu turpis commodo fringilla. Etiam laoreet elementum ante.
            Aenean sit amet lacus in nulla gravida semper. Suspendisse eu mauris
            ut libero eleifend volutpat sed eget libero. Vestibulum tristique
            ultricies imperdiet. Etiam ut fringilla diam, hendrerit interdum
            purus.
          </p>
          <p>
            Pellentesque at enim nec enim interdum aliquam a ac ligula. Fusce
            tempor risus massa, vel blandit nibh euismod eu. Sed nec mattis
            metus. Nullam dictum pretium arcu, id fringilla ligula consequat
            non. Sed vitae placerat sapien, lobortis cursus lorem. Cras est
            ipsum, pharetra vitae faucibus non, auctor at risus. Aliquam vitae
            congue erat.
          </p>
        </div>
        <div className="about-developers">
          <h2 className="about-title"> Our Passionate Developers</h2>
          <div className="about-content">
            <Developer />
          </div>
        </div>
        <div className="about-requirements">
          <h2 className="about-title"> Who can join?</h2>
          <div className="requirements-list">
            <ul className="about-content">
              <li>
                <BsCheck2Circle /> Phasellus libero justo, varius eu eleifend
                sed,
              </li>
              <li>
                <BsCheck2Circle /> Curabitur at massa nec leo consectetur
                fringilla.
              </li>
              <li>
                <BsCheck2Circle />
                Mauris tempus lorem nisi, egestas faucibus tortor dapibus vel.
              </li>
              <li>
                {" "}
                <BsCheck2Circle /> Phasellus libero justo, varius eu eleifend
                sed,
              </li>
              <li>
                {" "}
                <BsCheck2Circle /> Curabitur at massa nec leo consectetur
                fringilla.
              </li>
              <li>
                {" "}
                <BsCheck2Circle />
                Mauris tempus lorem nisi, egestas faucibus tortor dapibus vel.
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
                <BsCheck2Circle /> Phasellus libero justo, varius eu eleifend
                sed,
              </li>
              <li>
                <BsCheck2Circle /> Curabitur at massa nec leo consectetur
                fringilla.
              </li>
              <li>
                <BsCheck2Circle />
                Mauris tempus lorem nisi, egestas faucibus tortor dapibus vel.
              </li>
              <li>
                <BsCheck2Circle /> Phasellus libero justo, varius eu eleifend
                sed,
              </li>
              <li>
                <BsCheck2Circle /> Curabitur at massa nec leo consectetur
                fringilla.
              </li>
              <li>
                <BsCheck2Circle />
                Mauris tempus lorem nisi, egestas faucibus tortor dapibus vel.
              </li>
            </ul>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}
