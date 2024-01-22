import PropTypes from "prop-types";
import styles from "./Blockcard.module.css";

function Blockcard({ block }) {
  return (
  <>
   <div className={styles.headingcontainer}>
   <h3 >{block.blocknumber}</h3>
   </div>
     <div className={styles.maincontainer}>
      <div key={block.time} className={`${styles.blockcontainer} ${block.blocknumber == null ? styles.futureblock : styles.currentblock}`}>
        <span className={styles.medianfee}>{block.median_fee}</span>
        <span className={styles.feespan}>{block.fee_span}</span>
        <span className={styles.blocksize}><b>{block.size}</b></span>
        <span className={styles.transactions}>{block.transactions}</span>
        <span className={styles.time}>{block.time}</span>
      </div>
    </div> 
  
  </>

  );
}

Blockcard.propTypes = {
  block: PropTypes.shape({
    blocknumber: PropTypes.number,
    median_fee: PropTypes.string.isRequired,
    fee_span: PropTypes.string.isRequired,
    size: PropTypes.string.isRequired,
    transactions: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
  }).isRequired,
};

export default Blockcard;
