import { PropTypes } from "prop-types";
import styles from "./Description.module.css";

function Description({ value, setInputs }) {
  const handleDescription = (event) => {
    setInputs((prev) => ({
      ...prev,
      description: event.target.value,
    }));
  };

  return (
    <div className={styles.inputcontainer}>
      <label>Description</label>
      <textarea
        type="text"
        onChange={handleDescription}
        value={value}
        placeholder="description"
      />
    </div>
  );
}

Description.propTypes = {
  value: PropTypes.string.isRequired,
  setInputs: PropTypes.func.isRequired,
};

export default Description;
