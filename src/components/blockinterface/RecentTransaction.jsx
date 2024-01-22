// import React from 'react'
import styles from "./RecenTransaction.module.css";
import { PiArrowFatRightFill } from "react-icons/pi";

function RecentTransaction() {
  const idstyles = {
    color:"cyan"
  }
  return (
    <div className={styles.maincontainer}>
      <div className={styles.transactionheading}>
        <span style={idstyles}>
          2d1b567c9bdb9a2b4867d8272bdb320d89f8243e0b9
        </span>
        <span>2021-01-23 08:47</span>
      </div>
      <div className={styles.submaincontainer}>
        <div className={styles.newgeneratedcontainer}>
          <div>
            <PiArrowFatRightFill />
            <h4>
              Coinbase {"("}Newly Generated Coins{")"}
            </h4>
          </div>
          <span>{"bjSpiderPoolu/mmBmR 4 c DeCA=,?-% ~ *yy ul o%o"}</span>
        </div>
        <div className={styles.returncontainer}>
          <span style={idstyles}>37jKPSmbEGwgfacCr2nayn1wTaqMAbA94Z</span>
            <span>OP_RETURN RE%#%^#Tggeggg $%#g#%</span>
            <span>OP_RETURN RE%#%^#Tggeggg $%#g#%</span>
            <span>OP_RETURN RE%#%^#Tggeggg $%#g#%</span>
        </div>
        <div className={styles.totalvalues}>
          <span>6.67966301 BTC <PiArrowFatRightFill color={"green"} enableBackground={"red"}/></span>
            <span>0.00000000 BTC <PiArrowFatRightFill/></span>
            <span>0.00000000 BTC <PiArrowFatRightFill/></span>
            <span>0.00000000 BTC <PiArrowFatRightFill/></span>
            <span>6.67966301 BTC</span>
        </div>
      </div>
    </div>
  );
}

export default RecentTransaction;
