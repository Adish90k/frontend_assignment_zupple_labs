import {PropTypes} from "prop-types"
import styles from "./SelectInputs.module.css"

function SelectInputs({value,setInputs}) {


    const handleSelectChange = (event) => {
        const { value } = event.target;
        setInputs((prevState) => ({
          ...prevState,
          selectedOption: value,
        }));
      };
    


  return (
     <div className={styles.inputcontainer}>
     <label>Software</label>
      <select
        value={value}
        onChange={handleSelectChange}
      >
        <option value="Sketch">Sketch</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
     </div>
  )
}


SelectInputs.propTypes = {
  value: PropTypes.string.isRequired,
  setInputs: PropTypes.func.isRequired,
};

export default SelectInputs