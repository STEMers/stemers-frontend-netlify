import { FaLinkedinIn } from "react-icons/fa";

import "./styles.css";

export default function ContinueWithLinkedIn() {
  return (
    <div className="continue-section">
      <div className="continue-with-linkedin">
        <button className="linkedin-continue-button continue-button btn">
          <FaLinkedinIn className="continue-linkedin" /> Continue with LinkedIn
        </button>
      </div>
    </div>
  );
}
