import { useState, useEffect } from "react";
import Authorization from "./AuthorizationInput";
import TagsInput from "./TagsInput";
import TitleInput from "./TitleInput";
import DateInput from "./DateInput";
import Description from "./Description";
import SelectInputs from "./SelectInputs";
import FileInputs from "./FileInputs";
import styles from "./Form.module.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Form() {
  const initialState = {
    authkey: "",
    selectedOption: "sketch",
    tags: [],
    title: "",
    date: "",
    description: "",
    thumbnailLink: null,
    sourceFileLink: null,
  };
  const [inputs, setInputs] = useState(initialState);
  const [tagInput, setTaginput] = useState("");
  const [formError, setFormError] = useState("");
  const [thumbnail, setThumbnail] = useState(null);
  const [sourceFile, setSourcefile] = useState(null);
  const [uploadstatus, setuploadstatus] = useState("");
  const navigate = useNavigate();

  async function generatePresignedUrl(fileName) {
    try {
      const encodedFileName = encodeURIComponent(fileName);
      const response = await axios.get(
        "https://9wut3382v8.execute-api.ap-south-1.amazonaws.com/dev/datasigned?fileName=" +
          encodedFileName
      );
      return response.data.signedUrl;
    } catch (error) {
      console.error("Error generating pre-signed URL:", error);
      throw error;
    }
  }

  async function uploadFile(file) {
    setuploadstatus("file is uploading");
    try {
      const presignedUrl = await generatePresignedUrl(file.name);
      await fetch(presignedUrl, {
        method: "PUT",
        headers: {
          "Content-Type": file.type,
        },
        body: file,
      });

    
      return presignedUrl;
    } catch (error) {
      
      setFormError("Error while uploading files");
      throw error;
    }
  }

  async function handleLinkgenerate() {
    try {
      const thumbnailPresignedUrl = thumbnail
        ? await uploadFile(thumbnail, "thumbnail")
        : null;
      const sourceFilePresignedUrl = sourceFile
        ? await uploadFile(sourceFile, "sourcefile")
        : null;

      await Promise.all([thumbnailPresignedUrl, sourceFilePresignedUrl]);

      setFormError("");

      if (thumbnailPresignedUrl) {
        setInputs((prevInputs) => ({
          ...prevInputs,
          thumbnailLink: `https://formfiles12.s3.ap-south-1.amazonaws.com/${encodeURIComponent(
            thumbnail.name
          )}`,
        }));
      }

      if (sourceFilePresignedUrl) {
        setInputs((prevInputs) => ({
          ...prevInputs,
          sourceFileLink: `https://formfiles12.s3.ap-south-1.amazonaws.com/${encodeURIComponent(
            sourceFile.name
          )}`,
        }));
      }

      return {
        thumbnailLink: thumbnailPresignedUrl
          ? `https://formfiles12.s3.ap-south-1.amazonaws.com/${encodeURIComponent(
              thumbnail.name
            )}`
          : null,
        sourceFileLink: sourceFilePresignedUrl
          ? `https://formfiles12.s3.ap-south-1.amazonaws.com/${encodeURIComponent(
              sourceFile.name
            )}`
          : null,
      };
    } catch (error) {
      console.error(error);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {

      if (!inputs.authkey || inputs.tags.length === 0 || !inputs.title || !inputs.date || !inputs.description || !thumbnail || !sourceFile) {
        setFormError("Please fill in all the required fields.");
        return;
      } else{
        setFormError("")
      }
     await handleLinkgenerate();

      setuploadstatus("file uploaded sucessfully");
    } catch (error) {
      console.error("Error while submitting form:", error);
      setFormError("Error while submitting form");
    }
  }
  useEffect(() => {
    const finalsubmit = async () => {
      if (inputs.thumbnailLink && inputs.sourceFileLink) {
 
        const response = await axios.post(
          "https://9wut3382v8.execute-api.ap-south-1.amazonaws.com/dev/createdata",
          inputs
        );

        setuploadstatus("");
        console.log(response);
        alert("Form has been submitted successfully");
        navigate("/home");
      }
    };

    finalsubmit();
  }, [inputs.thumbnailLink, inputs.sourceFileLink]);

  return (
    <>
      <form onSubmit={handleSubmit} className={styles.mainform}>
        <h1 className={styles.heading}> Upload Files</h1>
        <div className={styles.upperforminputs}>
          <div className={styles.adjacentinputcontainer}>
            <Authorization value={inputs.authkey} setInputs={setInputs} />
            <TagsInput
              value={tagInput}
              tags={inputs.tags}
              setInputs={setInputs}
              setTaginput={setTaginput}
            />
          </div>
          <div className={styles.adjacentinputcontainer}>
            <TitleInput value={inputs.title} setInputs={setInputs} />
            <DateInput value={inputs.date} setInputs={setInputs} />
          </div>
        </div>
        <div className={styles.belowforminputs}>
          <Description value={inputs.description} setInputs={setInputs} />
          <div className={styles.adjacentbelowinputcontainer}>
            <SelectInputs value={inputs.selectedOption} setInputs={setInputs} />
            <FileInputs
              setThunmbnail={setThumbnail}
              setSourcefile={setSourcefile}
            />
          </div>
        </div>
        {formError && <p className={styles.error}>{formError}</p>}
        {uploadstatus && <span className={styles.uploadstatus}>{uploadstatus}</span>}
        <button
          type="submit"
          onClick={handleSubmit}
          className={styles.submitformbtn}
        >
          Submit
        </button>
      </form>
    </>
  );
}

export default Form;
