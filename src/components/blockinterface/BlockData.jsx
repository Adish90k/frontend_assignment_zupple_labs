import BlockDatacard from './BlockDatacard'
import styles from "./BlockData.module.css"

function BlockData() {
    
    // This data can be replaced by the the specific data of block which we can get from an api
    const blockNumber = 6673306;
    const blockData = 
        {   
            hash:"000000000000000000003d7a15d8eab7c53d515e8c9f66ac9abdaa3370a4413e",
            totalFees:"0.43 BTC($13,710)",
            timeStamp:"2021-01-23 08:47 (1 hour ago)",
            subsidyFees:"6.68 BTC($213,136)",
            size:"1.39 MB",
            miner:"SpiderPool",
            weight:"3.99 MWU"
        }


  return (
    <div className={styles.maindatacontainer}>
      <BlockDatacard blockData={blockData} blockNumber={blockNumber}/>
    </div>
  )
}

export default BlockData