import React from "react";
import data from "./data/data.json";
import styles from "./blog.module.css";
import image from "./photo/Profile.png";
import userImage from "./photo/viewer.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideo,faDesktop } from "@fortawesome/free-solid-svg-icons";

export default function BlogPage() {
  const { course, about_instructor, testimonial } = data;

  return (
    <>
      <div className={styles.name}>
        <p className={styles.about}>ABOUT</p>
        <p className={styles.instructor}>INSTRUCTOR</p>
        <p className={styles.review}>REVIEW</p>
      </div>
      <div className={styles.deatail}>
        {/* div for the fee structor */}
        <div className={styles.fee}>
          <div className={styles.payment}>
            <h3>Course Fees</h3>
            <p
              style={{
                fontSize: "2rem",
                marginTop: "-17px",
                fontWeight: "600",
              }}
            >
              ₹{course.fee.amount}
            </p>
            <p style={{ fontWeight: "700", fontSize: "larger" }}>
              Whats Included:
            </p>
            <p>
              <FontAwesomeIcon icon={faVideo} style={{ color: "#223659" }} />
                {course.inclusions.on_demand_videos} LiveStream Session
            </p>
            <p>
            <FontAwesomeIcon icon={faVideo} style={{ color: "#223659" }} />
             5 on Demand Vedio</p>
            <p>{course.inclusions.whatsapp_community}</p>
            <p>  <FontAwesomeIcon icon={faDesktop} style={{ color: "#223659" }} />Live Session with Nityanand Charan Das</p>
            <p className={styles.button}>Register Today</p>
          </div>
        </div>
        {/* setion for about the course */}
        <h2>About the Course</h2>
        <div dangerouslySetInnerHTML={{ __html: course.about.html_content }} />

        <h2>What to Expect</h2>
        <div
          dangerouslySetInnerHTML={{
            __html: course.what_to_expect.html_content,
          }}
        />

        <h2>Key Topics</h2>
        <div
          dangerouslySetInnerHTML={{ __html: course.key_topics.html_content }}
        />

        {/* section for about the Instructor */}
        <h2>About the Instructor</h2>
        <div className={styles.aboutInstructor}>
          <img className={styles.image} src={image} alt="image" />
          <div
            className={styles.para}
            dangerouslySetInnerHTML={{ __html: about_instructor.html_content }}
          ></div>
        </div>
      </div>
      {/*div for testonomial */}
      <div className={styles.testimonial}>
        <p className={styles.text}>{testimonial.text}</p>
        <div className={styles.viewer_details}>
          <img className={styles.V_image} src={userImage} alt="" />
          <p className={styles.R_name}>{testimonial.reviewer_name}</p>
          <p className={styles.designation}>
            {testimonial.reviewer_designation}
          </p>
        </div>
      </div>
    </>
  );
}
