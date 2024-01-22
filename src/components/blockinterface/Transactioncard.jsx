import PropTypes from "prop-types";
import styles from "./Transactioncard.module.css";
import { PiArrowFatRightFill } from "react-icons/pi";

function Transactioncard({ transactiondata }) {
   const compressBitcoinAddress = (address)=> {
        const lengthToShow = 10;
        const prefix = address.slice(0, lengthToShow);
        const suffix = address.slice(-lengthToShow);
        return `${prefix}...${suffix}`;
      }

    const highlightcolorstyle = {
        color:"cyan",
        marginRight:"55px"
    }
    const flexstylespan = {
        display:"flex"
    }
  return (
    <div className={styles.maincontainer}>
      <div className={styles.transactionheading}>
        <span style={highlightcolorstyle}>{ transactiondata.transactionId}</span>
        <span>{transactiondata.timestamp}</span>
      </div>
      <div className={styles.subcontainer}>
        <div className={styles.voutcontainer}>
          <span style={highlightcolorstyle}>
            <PiArrowFatRightFill  color="red"/>
            {compressBitcoinAddress(transactiondata.vout)}
          </span>
          <span>{transactiondata.voutvalue}</span>
        </div>
         <span className={styles.feespan}>{transactiondata.fee_span}</span>
        <div className={styles.allvoutcontainer}>
          {transactiondata.allVouts.map((value) => {
            return (
              <div key={value.id}>
                <span style={highlightcolorstyle}>{value.id}</span>
                <span style={flexstylespan} >
                  {value.value} <PiArrowFatRightFill color={value.color} />
                </span>
                
              </div>
            );
          })}
          <span className={styles.totalamount}>{transactiondata.totalBTC}</span>
        </div>
        {/* <span className={styles.totalamount}>{transactiondata.totalBTC}</span> */}
      </div>
    </div>
  );
}

Transactioncard.propTypes = {
  transactiondata: PropTypes.shape({
    transactionId: PropTypes.string.isRequired,
    timestamp: PropTypes.string.isRequired,
    vout: PropTypes.string.isRequired,
    fee_span: PropTypes.string.isRequired,
    voutvalue: PropTypes.string.isRequired,
    totalBTC: PropTypes.string.isRequired,
    allVouts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired,
        color: PropTypes.string,
      })
    ).isRequired,
  }).isRequired,
};

export default Transactioncard;
