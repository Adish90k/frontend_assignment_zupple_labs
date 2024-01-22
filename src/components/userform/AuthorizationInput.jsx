import { useState } from "react";
import { PropTypes } from "prop-types";
import styles from "./AuthorizationInput.module.css";

function AuthorizationInput({ value, setInputs }) {
  const [error, setError] = useState("");

  const handleKey = (event) => {
    const enteredPassword = event.target.value;
    const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/;
    
    setInputs((prevState) => ({
      ...prevState,
      authkey: enteredPassword,
    }));
    
    if (strongPasswordRegex.test(enteredPassword)) {
      setError(""); 
    } else {
      setError(
        "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one digit, and one special character."
      );
    }
  };

  return (
    <div className={styles.inputcontainer}>
      <label>Authorization key</label>
      <input
        type="password"
        value={value}
        onChange={handleKey}
        placeholder="Enter password"
      />
      {error && <span className={styles.error}>{error}</span>}
    </div>
  );
}

AuthorizationInput.propTypes = {
  value: PropTypes.string.isRequired,
  setInputs: PropTypes.func.isRequired,
};

export default AuthorizationInput;
