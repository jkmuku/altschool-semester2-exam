import React, { useState } from 'react';
import styles from "./ErrorBoundaryTest.module.css"
function ErrorBoundaryTest() {
    const [testInput, setTestInput] = useState('')
    function ErrorBoundarytest(event){
     event.preventDefault(
        setTestInput(event.target.value)
     )
    }
    function DoError(){
        throw new Error('Sorry something went wrong')
    }
  return (
    <div className={styles.testContainer}>
      <div>Type &quot;kaboom&quot; to test <span>Error Boundary</span></div>
      <input type='text' placeholder='Input a text' onChange={ErrorBoundarytest} value={testInput} autoFocus/>
      {testInput === 'kaboom' ? <DoError /> : ''}
    </div>
  )
}
export default ErrorBoundaryTest

  