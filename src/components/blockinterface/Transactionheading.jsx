import styles from "./Transactionheading.module.css";
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import PropTypes from "prop-types";

function Transactionheading({totalTransactions}) {
  return (
    <div className={styles.headingcontainer}>
    <h1>
      {totalTransactions} <span>transactions</span>
    </h1>
    <div className={styles.pagenationcontainer}>
      <div className={styles.leftarrowcontainer}>
        <div className={styles.doubleleftcontainer}>
          <MdOutlineKeyboardDoubleArrowLeft />
          <MdOutlineKeyboardDoubleArrowLeft />
        </div>
        <div className={styles.singleleftcontainer}>
          <MdOutlineKeyboardDoubleArrowLeft />
        </div>
      </div>
      <div className={styles.pagenumbercontainer}>
        <span>1</span>
        <span>2</span>
      </div>
      <div className={styles.rightarrowcontainer}>
        <div className={styles.singlerightcontainer}>
          <MdOutlineKeyboardDoubleArrowRight />
        </div>
        <div className={styles.doublerightcontainer}>
          <MdOutlineKeyboardDoubleArrowRight />
        </div>
      </div>
    </div>
  </div>
  )
}

Transactionheading.propTypes = {
    totalTransactions: PropTypes.string.isRequired,
  };

export default Transactionheading