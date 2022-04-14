import React, { useState } from "react";
import Aboutskils from "./Aboutskils";
import back from "./image/bg.jpg";

const AboutBox = (props) => {
  const { user, updateU } = props;
  const displayUpdate = () => {
    updateU(user);
    document.getElementById("ap-update").style.display = "flex";
  };

  const capitalize = (word) => {
    return word.charAt().toUpperCase() + word.toLowerCase().slice(1);
  };
  return (
    <>
      <div className="about-section flex">
        <div className="about-img-section">
          <div
            style={{ backgroundImage: `url(${back})` }}
            className="about-img about-background-img flex"
          >
            {/* <div className="about-background-None" style={{display:backgroundImage==="null"?"block":"none"}} ></div> */}
            <div className="about-name flex">
              <h1>{capitalize(`${user.name}`)}</h1>
            </div>
            <div className="about-update">
              <a href="#" onClick={displayUpdate}>
                <i className="fa fa-pencil-square-o"></i>
              </a>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${back})` }}
            className="about-img about-profile-img flex"
          >
            <div className="about-update flex">
              <a href="#"onClick={displayUpdate}>Update</a>
            </div>
          </div>
        </div>
        <div className="about-info-section flex">
          <div className="about-info-container flex">
            <div className="about-personal-info flex">
              <div className="about-heading flex">
                <h1>Personal Information</h1>
              </div>
              <div className="about-information flex">
                <div className="about-information-section">
                  <ul>
                    <li>Name:</li>
                    <li>Gender:</li>
                    <li>Work:</li>
                    <li>DOB:</li>
                  </ul>
                </div>
                <div className="about-information-section">
                  <ul>
                    <li>{capitalize(`${user.name}`)}</li>
                    <li>{user.gender === "" ? "-" : user.gender}</li>
                    <li>{user.work === "" ? "-" : user.work}</li>
                    <li>{user.dob === "" ? "-" : user.dob}</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="about-contact-info flex">
              <div className="about-heading flex">
                <h1>Contact Information</h1>
              </div>
              <div className="about-information flex">
                <div className="about-information-section">
                  <ul>
                    <li>Phone:</li>
                    <li>Address:</li>
                    <li>E-mail:</li>
                    <li>Website:</li>
                  </ul>
                </div>
                <div className="about-information-section">
                  <ul>
                    <li className="text-color">
                      {" "}
                      <span>+91 {user.phone}</span>
                    </li>
                    <li>{user.address === "" ? "-" : user.address}</li>
                    <li className="text-color">
                      <span> {user.email}</span>
                    </li>
                    <li className="text-color">
                      <span>
                        <a
                          href={`http://${user.site}`}
                          target="_blank"
                          className="text-color"
                        >
                          {" "}
                          {user.site === "" ? "-" : user.site}{" "}
                        </a>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="about-skils-info flex">
              <div className="about-heading flex">
                <h1>Skils</h1>
              </div>
              <div className="about-skils-information flex">
                <Aboutskils
                  skilName={user.skil_1}
                  skilPercent={user.skil_1_p}
                />
                <Aboutskils
                  skilName={user.skil_2}
                  skilPercent={user.skil_2_p}
                />
                <Aboutskils
                  skilName={user.skil_3}
                  skilPercent={user.skil_3_p}
                />
                <Aboutskils
                  skilName={user.skil_4}
                  skilPercent={user.skil_4_p}
                />
                <Aboutskils
                  skilName={user.skil_5}
                  skilPercent={user.skil_5_p}
                />
                <Aboutskils
                  skilName={user.skil_6}
                  skilPercent={user.skil_6_p}
                />
                <Aboutskils
                  skilName={user.skil_7}
                  skilPercent={user.skil_7_p}
                />
                <Aboutskils
                  skilName={user.skil_8}
                  skilPercent={user.skil_8_p}
                />
                <Aboutskils
                  skilName={user.skil_9}
                  skilPercent={user.skil_9_p}
                />
              </div>
            </div>
          </div>

          <div className="about-icon" style={{"--bg":"rgb(204, 243, 250)"}}>
            <ul>
              <li style={{ "--clr": "#1877f2" }}>
                <a href="#">
                  <i className="fa-brands fa-facebook-f"></i>
                </a>
              </li>
            </ul>
            <ul>
              <li style={{ "--clr": "#ff0000" }}>
                <a href="#">
                  <i className="fa-brands fa-youtube"></i>
                </a>
              </li>
            </ul>
            <ul>
              <li style={{ "--clr": "#1da1f2" }}>
                <a href="#">
                  <i className="fa-brands fa-twitter"></i>
                </a>
              </li>
            </ul>
            <ul>
              <li style={{ "--clr": "#c32aa3" }}>
                <a href="#">
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </li>
            </ul>
            <ul>
              <li style={{ "--clr": "#25d366" }}>
                <a href="#">
                  <i className="fa-brands fa-whatsapp"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="about-footer flex">
          <p className="about-coppyright">
            Copyright &copy; 2022 <span> www.notebook.com </span>| All rights
            reserved | Made by Saurabh patel <i class="fa-regular fa-heart"></i>
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutBox;
