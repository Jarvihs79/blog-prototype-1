import React from "react";
import "./Post.css";
import mainImg from "./Images/main-img.avif";
import artImg1 from "./Images/art-img1.avif";
import artImg2 from "./Images/art-img2.avif";
const Post = (props) => {
  const { title, author, date, content } = props;

  return (
    // <div class="container">
    //   <div class="row justify-content-md-center">
    //     <div class="col-sm col-lg-2"></div>
    //     <div class="col-md-auto col-sm">
    //       <div className="post text-center mt-5 mx-6 my-5">
    //         <div className="title my-5">
    //           <h1>{title}</h1>
    //         </div>
    //         <div className="post-meta my-5">
    //           <span className="post-author my-5">-{author}</span>
    //           <span className="post-date my-5">{date}</span>
    //         </div>
    //         <div className="main-img">
    //           <img
    //             src={mainImg}
    //             class="img-fluid rounded "
    //             alt="Responsive image"
    //           />
    //         </div>

    //         <div class="row">
    //           <div class="col-8">
    //             <div className="post-content my-5 ">
    //               <p>{content.slice(0, 900)}</p>{" "}
    //             </div>
    //             <div className="art-img1 my-5">
    //               <img
    //                 src={artImg1}
    //                 class="img-fluid rounded "
    //                 alt="Responsive image"
    //               />
    //             </div>
    //             <div className="post-content my-5">
    //               <p>{content.slice(1000, 1447)}</p>
    //             </div>
    //             <div className="art-img1 my-5">
    //               <img
    //                 src={artImg2}
    //                 class="img-fluid rounded "
    //                 alt="Responsive image"
    //               />
    //             </div>
    //             <div className="post-content my-5">
    //               <p>{content.slice(1447)}</p>
    //             </div>
    //           </div>
    //           <div class="col-4">col-4</div>
    //         </div>
    //       </div>
    //     </div>
    //     <div class="col-sm col-lg-2"></div>
    //   </div>
    // </div>

    <div class="row my-6">
      <div class="col-sm-2">.col-sm-2</div>
      <div class="col-sm-8">
        
          <div className="title my-5 text-center">
            <h2>{title}</h2>
          </div>
          <div className="post-meta my-5">
            <span className="post-author ms-3">-{author}</span>
            <span className="post-date ms-3">{date}</span>
          </div>
          <div className="main-img my-5">
            <img
              src={mainImg}
              class="img-fluid rounded "
              alt="Responsive image"
            />
          </div>
          <div class="row">
            <div class="col-sm-8 border">
              <div className="post-content my-5 ">
              <h5>Dandadan chapter 100 will be published in Shueisha’s Weekly Shonen Jump issue #17.</h5>
                <p>{content.slice(0, 900)}</p>{" "}
              </div>
              <div className="art-img1 my-5">
                <img
                  src={artImg1}
                  class="img-fluid rounded "
                  alt="Responsive image"
                />
              </div>
              <div className="post-content my-5">
                <p>{content.slice(1000, 1447)}</p>
              </div>
              <div className="art-img1 my-5">
                <img
                  src={artImg2}
                  class="img-fluid rounded "
                  alt="Responsive image"
                />
              </div>
              <div className="post-content my-5">
                <p>{content.slice(1447)}</p>
              </div>
            </div>
            <div class="col-sm-4">.col-sm-4</div>
          </div>
        
      </div>

      <div class="col-sm-2">.col-sm-2</div>
    </div>
  );
};

export default Post;
