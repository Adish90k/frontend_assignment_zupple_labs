import  { useState } from "react";
import PropTypes from "prop-types";
import styles from "./FileInputs.module.css";

function FileInputs({ setThunmbnail,setSourcefile }) {
  const [thumbnailFileName, setThumbnailFileName] = useState("No file uploaded");
  const [sourceFileName, setSourceFileName] = useState("No file uploaded");

  const handleThumbnail = (event) => {
    const file = event.target.files[0];
    setThunmbnail(file);
    setThumbnailFileName(file ? file.name : "No file uploaded");
  };

  const handleSourceFile = (event) => {
    const file = event.target.files[0];
    setSourcefile(file)
    setSourceFileName(file ? file.name : "No file uploaded");
  };

  return (
    <div className={styles.inputstylecontainer}>
      <div className={styles.inputcontainer}>
        <label>Thumbnail image</label>
        <input type="file" onChange={handleThumbnail} accept=".jpg, .jpeg, .png" />
        <span>{thumbnailFileName}</span>
      </div>
      <div className={styles.inputcontainer}>
        <label>Source File</label>
        <input type="file" onChange={handleSourceFile} />
        <span>{sourceFileName}</span>
      </div>
    </div>
  );
}

FileInputs.propTypes = {
  setThunmbnail: PropTypes.func.isRequired,
  setSourcefile: PropTypes.func.isRequired,
};

export default FileInputs;
