import { PropTypes } from "prop-types";
import styles from "./TitleInput.module.css";

function TitleInput({ value, setInputs }) {
  const handleTitle = (event) => {
    setInputs((prev) => ({
      ...prev,
      title: event.target.value,
    }));
  };

  return (
    <div className={styles.inputcontainer}>
      <label>Title</label>
      <input
        type="text"
        onChange={handleTitle}
        value={value}
        placeholder="Enter title"
      />
    </div>
  );
}

TitleInput.propTypes = {
  value: PropTypes.string.isRequired,
  setInputs: PropTypes.func.isRequired,
};

export default TitleInput;
