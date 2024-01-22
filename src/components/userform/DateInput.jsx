import { PropTypes } from "prop-types";
import styles from "./DateInput.module.css";
import  { useState } from "react";

function DateInput({ value, setInputs }) {
  const [error, setError] = useState("");

  const handleDate = (event) => {
    const enteredDate = event.target.value;
    const dateFormatRegex = /^(\d{2})\/(\d{2})\/(\d{4})$/;
    setInputs((prev) => ({
      ...prev,
      date: enteredDate,
    }));
    if (dateFormatRegex.test(enteredDate) || enteredDate === "") {
      const [,day,month,] = enteredDate.match(dateFormatRegex);
      const isValidMonth = parseInt(month, 10) >= 1 && parseInt(month, 10) <= 12;
      const isValidDay = parseInt(day, 10) >= 1 && parseInt(day, 10) <= 31;
      if (isValidMonth && isValidDay) {
        setError(""); 
      } else {
        setError("Invalid month or day. Please check your input.");
      }
    } else {
      setError("Invalid date format. Please use DD/MM/YYYY.");
    }
  };

  return (
    <div className={styles.inputcontainer}>
      <label htmlFor="Date">Date</label>
      <input
        type="text"
        onChange={handleDate}
        value={value}
        placeholder="DD/MM/YYYY"
      />
      {error && <span className={styles.error}>{error}</span>}
    </div>
  );
}

DateInput.propTypes = {
  value: PropTypes.string.isRequired,
  setInputs: PropTypes.func.isRequired,
};

export default DateInput;
