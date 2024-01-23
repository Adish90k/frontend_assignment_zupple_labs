import PropTypes from "prop-types";
import styles from "./TagsInput.module.css";
function TagsInput({ setInputs, value, tags,setTaginput }) {
  const handleInputKeyPress = (event) => {
    if (event.key === "Enter" || event.key === ",") {
      event.preventDefault();
      addTag();
    }
  };

  const handleRemoveTag = (indexToRemove, event) => {
    event.preventDefault();
    setInputs((prev) => ({
      ...prev,
      tags: prev.tags.filter((_, index) => index !== indexToRemove),
    }));
  };

  const addTag = () => {
    const newTags = value
      .split(",")
      .map((tag) => tag.trim())
      .filter((tag) => tag !== "");

    if (newTags.length > 0) {
      setInputs((prev) => ({
        ...prev,
        tags: [...prev.tags, ...newTags],
      }));
      setTaginput("");
    }
  };

  const handleInputChange = (event) => {
    setTaginput(event.target.value);
  };
  
  const handleInputBlur = () => {
    addTag();
  };

  return (
    <>
      <div className={styles.inputcontainer}>
        <label>Tags {"("}comma separated{")"}</label>
        <div className={styles.pseudoinputdiv}>
          <div>
            {tags.map((tag, index) => (
              <span key={index} className={styles.tag}>
                {tag}
                <button onClick={(event) => handleRemoveTag(index, event)}>
                  &times;
                </button>
              </span>
            ))}
          </div>
          <input
            type="text"
            value={value}
            onChange={handleInputChange}
            onKeyDown={handleInputKeyPress}
            placeholder="Tags (comma-separated)"
            onBlur={handleInputBlur}
          />
        </div>
      </div>
    </>
  );
}

TagsInput.propTypes = {
  value: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
  setInputs: PropTypes.func.isRequired,
  setTaginput:PropTypes.func.isRequired,
};

export default TagsInput;
