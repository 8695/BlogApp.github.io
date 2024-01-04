import styles from "./App.module.css";
import Img from "./photo/Img.png";
import BlogPage from "./blog";
import data from "./data/data.json";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

function App() {
  const { instructor, course} = data;

  return (
    <>
      <div className={styles.header}>
        <img className={styles.img} src={Img} alt="image" />
      </div>
      <div className={styles.title}>
        <h4>{instructor.name}</h4>
        <h1 className={styles.para}>{course.title}</h1>
      </div>
      <div>
        <BlogPage />
      </div>

      <div className={styles.footer}>
        <div className={styles.name}>
          <h2 className={styles.firstName}>Nityanand</h2>
          <h3 className={styles.lastname}>CHARAN DAS</h3>
        </div>
        <div className={styles.address}>
          <h1>Address</h1>
          <p style={{ marginTop: "-20px" }}>
            7, K. M. Munshi Marg, Girgaon, Chowpatty, Mumbai, Maharashtra 400007
          </p>
          <div className={styles.socialIcon}>
          <FontAwesomeIcon icon={faFacebook} style={{ color: "#0d70f2" }} />
          <FontAwesomeIcon icon={faTwitter} style={{ color: "#131416" }} />
          <FontAwesomeIcon icon={faInstagram} style={{ color: "#cb573a" }} />
          <FontAwesomeIcon icon={faYoutube} style={{ color: "#f4450b" }} />
          </div>
          
        </div>
        <div className={styles.info}>
          <h4>Say Hello</h4>
          <p style={{ marginTop: "-7px" }}>ncd.rns@gmail.com</p>
          <p style={{ marginTop: "-11px" }}>+91 91672 00421</p>
        </div>
        <hr style={{ width: "301%" }} />
      </div>
      <div className={styles.copyright}>
        <p style={{marginLeft:'35px'}}>©2022 nityanandcharandas. All Right Reserved</p>
        <p style={{marginRight:'35px'}}>Designed and Developed by Niranjan Mourya</p>
      </div>
    </>
  );
}

export default App;
