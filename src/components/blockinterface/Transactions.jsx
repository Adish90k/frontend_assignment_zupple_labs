// import { PiArrowFatLeft } from "react-icons/pi";

import styles from "./Transactions.module.css";

import Transactionheading from "./Transactionheading";
import RecentTransaction from "./RecentTransaction";
import Transactioncard from "./Transactioncard";

function Transactions() {
  
  const totalTransactions = "2,075";

  const data = [
    {
      transactionId: "18f754dec699vj90t3g8jg5309jg830fj9j03rg8h",
      timestamp: "2021-01-23 8:47",
      vout: "88d2b8a86b5cb48a7aa0ef1278ec459935902aecc7ad194b3a23f1b443d1dce7",
      voutvalue: "0.000078228 BTC",
      fee_span: "623.1 sat/vB-68,232 sat($21,77)",
      allVouts: [
        {
          id: "bc3PAFPBmzE5CuHZEPeZPKooimNWQmifG",
          value: "0.00009996 BTC",
          color:"green"
        },
      ],
      totalBTC: "0.00009996 BTC",
    },
    {
      transactionId: "c9918f754dec699vj90t3g8jg5309jg830fj9j03rg8h",
      timestamp: "2021-01-23 8:47",
      vout: "bc1qd2b8a86b5cb48a7aa0ef1278ec459935902aecc7ad194b3a23f1b443d1dce7",
      voutvalue: "0.02355332 BTC",
      fee_span: "623.1 sat/vB-68,232 sat($21,77)",
      allVouts: [
        {
          id: "14qbc3PAFPBmzE5CuHZEPeZPKooimNWQmifG",
          value: "0.01080726 BTC",
          color:"green"
        },
        {
          id: "bc1q3PAFPBmzE5CuHZEPeZPKooimNWQmifG",
          value: "0.01184606 BTC",
          color:"red"
        },
      ],
      totalBTC: "0.02265332 BTC",
    },
    {
      transactionId: "c9918fom754dec699vj90t3g8jg5309jg830fj9j03rg8h",
      timestamp: "2021-01-23 8:47",
      vout: "bc1qd2b8a86b5cb48a7aa0ef1278ec459935902aecc7ad194b3a23f1b443d1dce7",
      voutvalue: "0.02355332 BTC",
      fee_span: "623.1 sat/vB-68,232 sat($21,77)",
      allVouts: [
        {
          id: "14qbc3PAFPBmzE5CuHZEPeZPKooimNWQmifG",
          value: "0.01080726 BTC",
        },
        {
          id: "bc1q3PAFPBmzE5CuHZEPeZPKooimNWQmifG",
          value: "0.01184606 BTC",
        },
      ],
      totalBTC: "0.02265332 BTC",
    },
    {
      transactionId: "c9918fom754dec699vj90t3g8jg5309jg830fj9j03rg8h",
      timestamp: "2021-01-23 8:47",
      vout: "bc1qd2b8a86b5cb48a7aa0ef1278ec459935902aecc7ad194b3a23f1b443d1dce7",
      voutvalue: "0.02355332 BTC",
      fee_span: "623.1 sat/vB-68,232 sat($21,77)",
      allVouts: [
        {
          id: "14qbc3PAFPBmzE5CuHZEPeZPKooimNWQmifG",
          value: "0.01080726 BTC",
        },
        {
          id: "bc1q3PAFPBmzE5CuHZEPeZPKooimNWQmifG",
          value: "0.01184606 BTC",
        },
      ],
      totalBTC: "0.02265332 BTC",
    },
  ];

  return (
    <div className={styles.maincontainer}>
     <Transactionheading totalTransactions={totalTransactions}/>
     <RecentTransaction transactionsdata = {data}/>
     {data.map((transaction)=>{
      return(
        <>
        <Transactioncard transactiondata={transaction} key={transaction.id}/>
        </>
      )
     })}
    </div>
  );
}

export default Transactions;
