"use client";
import { useRouter } from "next/navigation";
import React, { useState, useEffect, useRef } from "react";
import styles from "@/common/blogPosts/blog_post.module.css";
import Image from "next/image";
import Data from "@/common/blogPosts/data";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const BlogPost = ({ readMoreRoute }) => {
  const router = useRouter();

  const handleReadMoreClick = (route) => {
    if (route) {
      router.push(route);
    }
  };

  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const [displayedData, setDisplayedData] = useState([]);
  const projectsRef = useRef(null);

  useEffect(() => {
    // document.title = Data.map((item) => item.title);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    setDisplayedData(Data.slice(startIndex, endIndex));
  }, [currentPage]);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div ref={projectsRef}>
      {displayedData.map((item, index) => (
        <div key={index} className={styles.BlogPost_outer}>
          <div className={styles.BlogPost_imageOuter}>
            <Image
              src={item.image}
              className={styles.BlogPost_image}
              alt="image_blog"
            />
          </div>
          <div className={styles.BlogPost_smallOuter}>
            <p className={styles.BlogPost_date}>{item.date}</p>
            <p className={styles.BlogPost_name}>{item.blog_name}</p>
          </div>
          <div className={styles.BlogPost_heading}>{item.blogPost_heading}</div>
          <div className={styles.BlogPost_text}>{item.blogPost_text}</div>
          <button
            onClick={() => handleReadMoreClick(item.readMoreRoute)}
            className={styles.button9}
            role="button"
          >
            <span className={styles.text3}>Read More</span>
            <span className={styles.text3}>Read More</span>
          </button>
        </div>
      ))}

      <div className={styles.projects_pagination}>
        <Stack spacing={2} justifyContent="center">
          <Pagination
            count={Math.ceil(Data.length / itemsPerPage)}
            color="primary"
            shape="rounded"
            page={currentPage}
            size="small"
            variant="outlined"
            onChange={handlePageChange}
            hidePrevButton
            hideNextButton
            // showFirstButton
            sx={{
              "& .MuiPaginationItem-root": {
                backgroundColor: "transparent",
                border: "1px solid #C3A464",
                color: "#C3A464",
                margin: "0 10px",
                padding: "18px 13px",
                fontSize: "20px",
                borderRadius: "0px",
                transition: "background-color 0.3s, color 0.3s",

                "@media (max-width: 768px)": {
                  margin: "0 9px",
                  padding: "12px 8px",
                  fontSize: "15px",
                },

                "@media (max-width: 425px)": {
                  margin: "0 8px",
                  padding: "12px 8px",
                  fontSize: "12px",
                },

                "&.Mui-selected": {
                  backgroundColor: "#D9D9D9",
                  margin: "0 10px",
                  padding: "18px 13px",
                  fontSize: "20px",
                  color: "black",
                  border: "none",

                  "@media (max-width: 768px)": {
                    margin: "0 9px",
                    padding: "12px 10px",
                    fontSize: "15px",
                  },

                  "@media (max-width: 425px)": {
                    margin: "0 8px",
                    padding: "12px 10px",
                    fontSize: "12px",
                  },
                },

                "&.Mui-selected:hover": {
                  backgroundColor: "#c1c0c0",
                  color: "black",
                  border: "none",
                },
              },
            }}
          />
        </Stack>
      </div>

      <div style={{ background: "white", height: 100+"px" }}></div>
    </div>
  );
};

export default BlogPost;
