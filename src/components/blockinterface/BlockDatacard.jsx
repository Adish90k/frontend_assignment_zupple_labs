import PropTypes from "prop-types";
import styles from "./BlockDatacard.module.css";

function BlockDatacard({ blockData, blockNumber }) {
  const compressString = (text, maxLength) => {
    if (text.length <= maxLength) {
      return text;
    }

    const visibleLength = Math.floor(maxLength / 2);
    const visiblePart = text.slice(0, visibleLength);
    const hiddenPart = text.slice(-visibleLength);

    return `${visiblePart}...${hiddenPart}`;
  };
  return (
    <div className={styles.blockContainer}>
      <hr />
      <div className={styles.blockDataHeading}>
        <h1>
          Block <span>{blockNumber}</span>
        </h1>
        <span>&times;</span>
      </div>
      <div className={styles.mainBlockDataContainer}>
        <div className={styles.blockDataItem}>
          <span>Hash</span>
          <span style={{ whiteSpace: "nowrap", overflow: "hidden" ,color:"cyan"}}>
            {compressString(blockData.hash, 20)}
          </span>
        </div>
        <div className={styles.blockDataItem}>
          <span>Total fees</span>
          <span>{blockData.totalFees}</span>
        </div>
        <div className={styles.blockDataItem}>
          <span>Timestamp</span>
          <span>{blockData.timeStamp}</span>
        </div>
        <div className={styles.blockDataItem}>
          <span>Subsidy + fees</span>
          <span>{blockData.subsidyFees}</span>
        </div>
        <div className={styles.blockDataItem}>
          <span>Size</span>
          <span>{blockData.size}</span>
        </div>
        <div className={styles.blockDataItem}>
          <span>Miner</span>
          <span>{blockData.miner}</span>
        </div>
        <div className={styles.blockDataItem}>
          <span>Weight</span>
          <span>{blockData.weight}</span>
        </div>
      </div>
    </div>
  );
}

BlockDatacard.propTypes = {
  blockData: PropTypes.shape({
    hash: PropTypes.string.isRequired,
    totalFees: PropTypes.string.isRequired,
    timeStamp: PropTypes.string.isRequired,
    subsidyFees: PropTypes.string.isRequired,
    size: PropTypes.string.isRequired,
    miner: PropTypes.string.isRequired,
    weight: PropTypes.string.isRequired,
  }).isRequired,
  blockNumber: PropTypes.number.isRequired,
};

export default BlockDatacard;
