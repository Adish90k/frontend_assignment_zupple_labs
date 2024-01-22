import { useState } from "react";
import Authorization from "./AuthorizationInput";
import TagsInput from "./TagsInput";
import TitleInput from "./TitleInput";
import DateInput from "./DateInput";
import Description from "./Description";
import SelectInputs from "./SelectInputs";
import FileInputs from "./FileInputs";
import styles from "./Form.module.css";
import { useNavigate } from "react-router-dom";
import AWS from "aws-sdk";
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
  const [thumbnail,setThumbnail] = useState(null);
  const [sourceFile,setSourcefile] = useState(null);
  const navigate = useNavigate(); 

  const uploadFile = async (file) => {
    const S3_BUCKET = "formfiles12";
    const REGION = "ap-south-1";

    AWS.config.update({
      accessKeyId: import.meta.env.VITE_AWS_ACCESS_KEY_ID,
      secretAccessKey: import.meta.env.VITE_AWS_SECRET_ACCESS_KEY,
    });

    const s3 = new AWS.S3({
      params: { Bucket: S3_BUCKET },
      region: REGION,
    });

    const params = {
      Bucket: S3_BUCKET,
      Key: file.name,
      Body: file,
    };

    try {
      const response = await s3.upload(params).promise();
      return response.Location;
    } catch (error) {
      console.error(error);
      setFormError("Error uploading file");
      return null;
    }
  };

  async function handleSubmit(e) {
    e.preventDefault();
    for (const key in inputs) {
      
      if (key === "thumbnail" || key === "sourceFile") {
        if (!inputs[key]) {
          setFormError(`Please fill all the fields to submit the form.`);
          return;
        }
      } else {
        if (inputs[key] === "") {
          setFormError(`Please fill all the fields to submit the form.`);
          return;
        }
      }
    }
    setFormError("");
    try {
      const newthumbnailLink = await uploadFile(thumbnail);
      const newsourceFileLink = await uploadFile(sourceFile);
      setInputs((prevInputs) => ({
        ...prevInputs,
        thumbnailLink: newthumbnailLink,
        sourceFileLink: newsourceFileLink,
      }));
      console.log(inputs);
      if (newthumbnailLink && newsourceFileLink) {
        const response = await axios.post(
          "https://5j2ngeptnb.execute-api.ap-south-1.amazonaws.com/dev/createdata",
          inputs
        );

        console.log(response);
        alert("form has been submitted succesfully");
        navigate("/home");
      } else {
        setFormError("Error uploading one or more files");
      }
    } catch (error) {
      console.log(error);
    }
  }

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
            <FileInputs setThunmbnail={setThumbnail} setSourcefile={setSourcefile} />
          </div>
        </div>
        {formError && <p className={styles.error}>{formError}</p>}
    
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
