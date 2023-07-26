import React from "react";

import { images } from "../../constants";

import { SubHeading } from "../../components";
import "./Chef.css";
const Chef = () => {
  return (
    <>
      <div className="app__bg app__wrapper section__padding">
        <div className="app__wrapper_img app__wrapper_img-reverse">
          <img src={images.chef} alt="chef" />
        </div>

        <div className="app__wrapper_info">
          <SubHeading title="Chef's World" />
          <h1 className="headtext__cormorant">What We Believe In</h1>

          <div className="app__chef-content">
            <div className="app__chef-content_quote">
              <img src={images.quote} alt="quote" />
              <p className="p__opensans">
                Molestiae eveniet modi amet consectetur adipisicing elit.
                Sapiente sint sunt iste dolores molestiae eveniet modi? Esse
                ipsa consequuntur unde. Lorem ipsum dolor sit amet consectetur
              </p>
            </div>
            <p className="p__opensans">
              Adipisicing elit. Dolore minus reiciendis accusamus explicabo
              dolores excepturi tempore repudiandae, dolorem, earum est, ipsa
              laborum enim perspiciatis aliquam sapiente itaque eum maxime
              debitis.
            </p>
          </div>
          <div className="app__chef-sign">
            <p>Kevin Luo</p>
            <p className="p__opensans">
              Chef & Founder
            </p>
            <img src={images.sign} alt="sign" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Chef;
