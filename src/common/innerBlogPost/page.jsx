
import React from 'react';
import styles from "@/common/innerBlogPost/innerblogpost.module.css"
import Image from 'next/image';
import logo from "@/images/logo.png"
import { useRouter } from "next/navigation";
const BlogPost = (props) => {
  const router = useRouter();
  return (
    <div>
      <div className={styles.BlogPost_outer}>
        <div className={styles.BlogPost_imageOuter}>
        <div className={styles.BlogPost_heading}>{props.blogPost_heading}</div> 
          <Image src={props.image} className={styles.BlogPost_image} alt='image_blog' />
        </div>
        <div className={styles.BlogPost_smallOuter}>
          <p className={styles.BlogPost_date}>{props.Date}</p>
          <p className={styles.BlogPost_name}>{props.blog_name}</p>
        </div>
     
        <div className={styles.BlogPost_text}>{props.blogPost_text}</div>

        <div className={styles.BlogPost_secHeading}>{props.blogPost_heading1}</div>
        <div className={styles.BlogPost_text_inner}>{props.blogPost_text1}</div>
        <div className={styles.BlogPost_text_inner_header}>{props.texture7} <span className={styles.BlogPost_text_inner}>{props.text7}</span></div>
        <div className={styles.BlogPost_text_inner}>{props.blogPost_text19}</div>
        <div className={styles.BlogPost_text_inner_header}>{props.texture32} <span className={styles.BlogPost_text_inner}>{props.text32}</span></div>
        <div className={styles.BlogPost_text_inner_header}>{props.texture33} <span className={styles.BlogPost_text_inner}>{props.text33}</span></div>
        <div className={styles.BlogPost_text_inner_header}>{props.texture34} <span className={styles.BlogPost_text_inner}>{props.text34}</span></div>
        <div className={styles.BlogPost_text_inner_header}>{props.texture35} <span className={styles.BlogPost_text_inner}>{props.text35}</span></div>
        <div className={styles.BlogPost_text_inner_header}>{props.texture36} <span className={styles.BlogPost_text_inner}>{props.text36}</span></div>
        <div className={styles.BlogPost_text_inner_header}>{props.texture37} <span className={styles.BlogPost_text_inner}>{props.text37}</span></div>
        {/* <div className={styles.BlogPost_text_inner_header}>{props.texture38} <span className={styles.BlogPost_text_inner}>{props.text34}</span></div> */}

        {/* <div className={styles.BlogPost_text_inner_header}>{props.texture19} <span className={styles.BlogPost_text_inner}>{props.text19}</span></div> */}
        

        <div className={styles.BlogPost_secHeading}>{props.blogPost_heading2}</div>
        <div className={styles.BlogPost_text_inner}>{props.blogPost_text2}</div>
        <div className={styles.BlogPost_text_inner_header}>{props.texture6} <span className={styles.BlogPost_text_inner}>{props.text6}</span></div>
        <div className={styles.BlogPost_text_inner}>{props.blogPost_text14}</div>
        <div className={styles.BlogPost_text_inner_header}>{props.texture14} <span className={styles.BlogPost_text_inner}>{props.text14}</span></div>
        <div className={styles.BlogPost_text_inner_header}>{props.texture19} <span className={styles.BlogPost_text_inner}>{props.text19}</span></div>
        <div className={styles.BlogPost_text_inner_header}>{props.texture20} <span className={styles.BlogPost_text_inner}>{props.text20}</span></div>
        <div className={styles.BlogPost_text_inner_header}>{props.texture21} <span className={styles.BlogPost_text_inner}>{props.text21}</span></div>

        <div className={styles.BlogPost_secHeading}>{props.blogPost_heading3}</div>
        <div className={styles.BlogPost_secHeading}>{props.blogPost_heading14}</div>
        <div className={styles.BlogPost_text_inner}>{props.blogPost_text3}</div>
        <div className={styles.BlogPost_text_inner_header}>{props.texture8} <span className={styles.BlogPost_text_inner}>{props.text8}</span></div>
        <div className={styles.BlogPost_text_inner_header}>{props.texture22} <span className={styles.BlogPost_text_inner}>{props.text22}</span></div>
        <div className={styles.BlogPost_text_inner_header}>{props.texture23} <span className={styles.BlogPost_text_inner}>{props.text23}</span></div>
        <div className={styles.BlogPost_text_inner_header}>{props.texture24} <span className={styles.BlogPost_text_inner}>{props.text24}</span></div>


        <div className={styles.BlogPost_secHeading}>{props.blogPost_heading4}</div>
        <div className={styles.BlogPost_text_inner}>{props.blogPost_text4}</div>
        <div className={styles.BlogPost_text_inner_header}>{props.texture9} <span className={styles.BlogPost_text_inner}>{props.text9}</span></div>
        <div className={styles.BlogPost_text_inner_header}>{props.texture25} <span className={styles.BlogPost_text_inner}>{props.text25}</span></div>
        <div className={styles.BlogPost_text_inner}>{props.blogPost_text15}</div>
        <div className={styles.BlogPost_text_inner_header}>{props.texture26} <span className={styles.BlogPost_text_inner}>{props.text26}</span></div>
        <div className={styles.BlogPost_text_inner_header}>{props.texture27} <span className={styles.BlogPost_text_inner}>{props.text27}</span></div>
        <div className={styles.BlogPost_text_inner}>{props.blogPost_text16}</div>
        <div className={styles.BlogPost_text_inner_header}>{props.texture28} <span className={styles.BlogPost_text_inner}>{props.text28}</span></div>
        <div className={styles.BlogPost_text_inner_header}>{props.texture29} <span className={styles.BlogPost_text_inner}>{props.text29}</span></div>

        <div className={styles.BlogPost_secHeading}>{props.blogPost_heading5}</div>
        <div className={styles.BlogPost_text_inner}>{props.blogPost_text5}</div>
        <div className={styles.BlogPost_text_inner}>{props.blogPost_text17}</div>
        <div className={styles.BlogPost_text_inner_header}>{props.texture10} <span className={styles.BlogPost_text_inner}>{props.text10}</span></div>
        <div className={styles.BlogPost_text_inner_header}>{props.texture15} <span className={styles.BlogPost_text_inner}>{props.text15}</span></div>
        <div className={styles.BlogPost_text_inner}>{props.blogPost_text18}</div>
        <div className={styles.BlogPost_text_inner_header}>{props.texture16} <span className={styles.BlogPost_text_inner}>{props.text16}</span></div>
        <div className={styles.BlogPost_text_inner_header}>{props.texture30} <span className={styles.BlogPost_text_inner}>{props.text30}</span></div>
        <div className={styles.BlogPost_text_inner_header}>{props.texture31} <span className={styles.BlogPost_text_inner}>{props.text31}</span></div>

        <div className={styles.BlogPost_secHeading}>{props.blogPost_heading6}</div>
        <div className={styles.BlogPost_text_inner}>{props.blogPost_text6}</div>
        <div className={styles.BlogPost_text_inner_header}>{props.texture17} <span className={styles.BlogPost_text_inner}>{props.text17}</span></div>
        <div className={styles.BlogPost_text_inner_header}>{props.texture18} <span className={styles.BlogPost_text_inner}>{props.text18}</span></div>


        <div className={styles.BlogPost_secHeading}>{props.blogPost_heading7}</div>
        <div className={styles.BlogPost_secHeading}>{props.blogPost_heading15}</div>
        <div className={styles.BlogPost_text_inner}>{props.blogPost_text7}</div>
        <div className={styles.BlogPost_text_inner_header}>{props.texture1}<span className={styles.BlogPost_text_inner}>{props.text1}</span></div>
        <div className={styles.BlogPost_text_inner_header}>{props.texture2} <span className={styles.BlogPost_text_inner}>{props.text2}</span></div>
        <div className={styles.BlogPost_text_inner_header}>{props.texture3}<span className={styles.BlogPost_text_inner}>{props.text3}</span></div>
        <div className={styles.BlogPost_text_inner_header}>{props.texture4}<span className={styles.BlogPost_text_inner}>{props.text4}</span></div>
        <div className={styles.BlogPost_text_inner_header}>{props.texture5} <span className={styles.BlogPost_text_inner}>{props.text5}</span></div>

        {/* conclusion */}
        <div className={styles.BlogPost_secHeading}>{props.blogPost_heading8}</div>
        <div className={styles.BlogPost_text_inner}>{props.blogPost_text8}</div>
        <div className={styles.BlogPost_text_inner}>{props.blogPost_text8a}</div>
          {/* conclusion ends */}
        <div className={styles.BlogPost_secHeading}>{props.blogPost_heading9}</div>
        <div className={styles.BlogPost_text_inner}>{props.blogPost_text9}</div>
        <div className={styles.BlogPost_text_inner_header}>{props.texture11} <span className={styles.BlogPost_text_inner}>{props.text11}</span></div>
        <div className={styles.BlogPost_text_inner_header}>{props.texture40} <span className={styles.BlogPost_text_inner}>{props.text40}</span></div>

        <div className={styles.BlogPost_secHeading}>{props.blogPost_heading10}</div>
        <div className={styles.BlogPost_text_inner}>{props.blogPost_text10}</div>
        <div className={styles.BlogPost_text_inner_header}>{props.texture12} <span className={styles.BlogPost_text_inner}>{props.text12}</span></div>
        <div className={styles.BlogPost_text_inner_header}>{props.texture41} <span className={styles.BlogPost_text_inner}>{props.text41}</span></div>


        <div className={styles.BlogPost_secHeading}>{props.blogPost_heading11}</div>
        <div className={styles.BlogPost_text_inner}>{props.blogPost_text11}</div>
        <div className={styles.BlogPost_text_inner_header}>{props.texture13} <span className={styles.BlogPost_text_inner}>{props.text13}</span></div>
        <div className={styles.BlogPost_text_inner_header}>{props.texture42} <span className={styles.BlogPost_text_inner}>{props.text42}</span></div>
      
        <div className={styles.BlogPost_secHeading}>{props.blogPost_heading11}</div>
        <div className={styles.BlogPost_text_inner}>{props.blogPost_text11}</div>

        <div className={styles.BlogPost_secHeading}>{props.blogPost_heading12}</div>
        <div className={styles.BlogPost_text_inner}>{props.blogPost_text12}</div>
        <div className={styles.BlogPost_text_inner_header}>{props.texture43} <span className={styles.BlogPost_text_inner}>{props.text43}</span></div>
        <div className={styles        .BlogPost_text_inner_header}>{props.texture44} <span className={styles.BlogPost_text_inner}>{props.text44}</span></div>
        <div className={styles.BlogPost_text_inner_header}>{props.texture45} <span className={styles.BlogPost_text_inner}>{props.text45}</span></div>
        <div className={styles.BlogPost_text_inner_header}>{props.texture46} <span className={styles.BlogPost_text_inner}>{props.text46}</span></div>
      

        <div className={styles.BlogPost_secHeading}>{props.blogPost_heading13}</div>
        <div className={styles.BlogPost_text_inner}>{props.blogPost_text13}</div>
        <div className={styles.BlogPost_text_inner_header}>{props.texture47} <span className={styles.BlogPost_text_inner}>{props.text47}</span></div>
        <div className={styles.BlogPost_text_inner_header}>{props.texture48} <span className={styles.BlogPost_text_inner}>{props.text48}</span></div>
        <div className={styles.BlogPost_text_inner_header}>{props.texture49} <span className={styles.BlogPost_text_inner}>{props.text49}</span></div>
        <div className={styles.BlogPost_text_inner_header}>{props.texture50} <span className={styles.BlogPost_text_inner}>{props.text50}</span></div>
      

        <div className={styles.BlogPost_secHeading}>{props.blogPost_heading16}</div>
        <div className={styles.BlogPost_text_inner}>{props.blogPost_text20}</div>
        <div className={styles.BlogPost_text_inner_header}>{props.texture51} <span className={styles.BlogPost_text_inner}>{props.text51}</span></div>
        <div className={styles.BlogPost_text_inner_header}>{props.texture52} <span className={styles.BlogPost_text_inner}>{props.text52}</span></div>
        
        <div className={styles.BlogPost_secHeading}>{props.blogPost_heading17}</div>
        <div className={styles.BlogPost_text_inner}>{props.blogPost_text22}</div>
        
        <button
           onClick={()=> router.push("/blogs")}               
            className={styles.button9}
            role="button"
          >
            <span className={styles.text3}>Explore Other Blogs</span>
            <span className={styles.text3}>Explore Other Blogs</span>
          </button>
          
      </div>
    </div>
  );
};

export default BlogPost;
