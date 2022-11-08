import React from "react";
import styles from './Error.module.css';

const Error = () => {
  return (
    <div className={styles.errorContainer}>
      <h1>Oops.</h1>
      <img src="../error404.png" alt="Error 404" width={400} height={300}/>
      <h1>Not found</h1>
    </div>
  );
};

export default Error;
