import { useState } from "react";
import "./FormSection.css";
const FormSection = ({ generateResponse }) => {
  const [newQuestion, setNewQuestion] = useState("");
  return (
    <div className="form-section">
      <textarea
        rows="4"
        className="form-control"
        placeholder="Ask me anything..."
        onChange={(e) => setNewQuestion(e.target.value)}
      ></textarea>
      <button
        className="btn"
        onClick={() => generateResponse(newQuestion, setNewQuestion)}
      >
        Generate Response 🤖
      </button>
    </div>
  );
};

export default FormSection;
