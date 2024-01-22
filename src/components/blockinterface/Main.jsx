// import React from 'react'
import Blocks from './Blocks'
import styles from "./Main.module.css"
import BlockData from './BlockData'
import Transactions from './Transactions'


function Main() {
  return (
    <div className={styles.blockinterfaceContainer}>
    <Blocks/>
    <BlockData/>
    <Transactions/>
    </div>
  )
}

export default Main