import React from "react";
import styles from "./Home.module.css"


const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.textContainer}>
        <h1>Hi. My name is <span>John Muku</span></h1>
        <h2>This is my <a href="https://www.altschoolafrica.com/">Altschool</a> Exam Project for second semester</h2>
        </div>
    </div>
  );
};

export default Home;
