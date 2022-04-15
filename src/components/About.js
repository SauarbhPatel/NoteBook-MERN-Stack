import React, { useContext, useEffect, useState, useRef } from "react";
import back from "./image/bg.jpg";
import AboutBox from "./AboutBox";
import noteContext from "../context/notes/noteContext";
import { useHistory } from "react-router-dom";

const About = (props) => {
  const context = useContext(noteContext);
  const { user, getUser, userUpdate } = context;
  const refclose = useRef(null);
  const [updateuser, setUpdateuser] = useState(
    []
    // {
    //   id: "",
    //   uname:"",
    //   uphone:"",
    //   uwork:"",
    //   ugender:"",
    //   udob:"",
    //   usite:"",
    //   uaddress:"",
    //   uskil_1:"",
    //   uskil_1_p:"",
    //   uskil_2:"",
    //   uskil_2_p:"",
    //   uskil_3:"",
    //   uskil_3_p:"",
    //   uskil_4:"",
    //   uskil_4_p:"",
    //   uskil_5:"",
    //   uskil_5_p:"",
    //   uskil_6:"",
    //   uskil_6_p:"",
    //   uskil_7:"",
    //   uskil_7_p:"",
    //   uskil_8:"",
    //   uskil_8_p:"",
    //   uskil_9:"",
    //   uskil_9_p:""
    // }
  );
  let history = useHistory();

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      getUser();
    } else {
      history.push("/login");
    }
    // eslint-disable-next-line
  }, []);

  const UpdatedisplayNone = () => {
    document.getElementById("ap-update").style.display = "none";
  };

  const updateU = (currentUser) => {
    setUpdateuser({
      id: currentUser._id,
      uname: currentUser.name,
      uwork: currentUser.work,
      ugender: currentUser.gender,
      udob: currentUser.dob,
      uphone: currentUser.phone,
      uaddress: currentUser.address,
      usite: currentUser.site,
      uskil_1: currentUser.skil_1,
      uskil_1_p: currentUser.skil_1_p,
      uskil_2: currentUser.skil_2,
      uskil_2_p: currentUser.skil_2_p,
      uskil_3: currentUser.skil_3,
      uskil_3_p: currentUser.skil_3_p,
      uskil_4: currentUser.skil_4,
      uskil_4_p: currentUser.skil_4_p,
      uskil_5: currentUser.skil_5,
      uskil_5_p: currentUser.skil_5_p,
      uskil_6: currentUser.skil_6,
      uskil_6_p: currentUser.skil_6_p,
      uskil_7: currentUser.skil_7,
      uskil_7_p: currentUser.skil_7_p,
      uskil_8: currentUser.skil_8,
      uskil_8_p: currentUser.skil_8_p,
      uskil_9: currentUser.skil_9,
      uskil_9_p: currentUser.skil_9_p,
    });
  };

  const handalUpdateUser = (e) => {
    e.preventDefault(); //this is for.. not reload when you submit
    console.log("updating a user", updateuser);
    userUpdate(
      updateuser.id,
      updateuser.uname,
      updateuser.uwork,
      updateuser.ugender,
      updateuser.udob,
      updateuser.uphone,
      updateuser.uaddress,
      updateuser.usite,
      updateuser.uskil_1,
      updateuser.uskil_1_p,
      updateuser.uskil_2,
      updateuser.uskil_2_p,
      updateuser.uskil_3,
      updateuser.uskil_3_p,
      updateuser.uskil_4,
      updateuser.uskil_4_p,
      updateuser.uskil_5,
      updateuser.uskil_5_p,
      updateuser.uskil_6,
      updateuser.uskil_6_p,
      updateuser.uskil_7,
      updateuser.uskil_7_p,
      updateuser.uskil_8,
      updateuser.uskil_8_p,
      updateuser.uskil_9,
      updateuser.uskil_9_p
    );
    getUser();
    refclose.current.click();
    props.showAlert("Updated Your profile ", "success");
  };

  const onChange = (e) => {
    setUpdateuser({ ...updateuser, [e.target.name]: e.target.value });
  };
  const capitalize = (word) => {
    return word.charAt().toUpperCase() + word.toLowerCase().slice(1);
  };

  return (
    <>
      <AboutBox key={user._id} user={user} updateU={updateU} />

      <div className="about-profile-update flex" id="ap-update">
        <div className="a-p-u-text flex">
          <h1>Updete Your Profile</h1>
          <button ref={refclose} onClick={UpdatedisplayNone}>
            <i className="fa fa-times"></i>
          </button>
        </div>
        <div className="about-profile-update-section flex">
          <div className="about-profile-update-form flex">
            <div className="a-p-u-profile flex">
              <div
                className="a-p-u-circle"
                style={{ backgroundImage: `url(${back})` }}
              ></div>
              <div className="a-p-u-name ">
                <h1 className="flex">{capitalize(`${user.name}`)}</h1>
                <h4 className="flex">{user.email}</h4>
              </div>
            </div>
            <form className="a-p-u-form flex">
              <h3 className="flex">PERSONAL DETAILS</h3>
              <div className="a-p-u-input">
                <input
                  type="text"
                  value={updateuser.uname}
                  onChange={onChange}
                  name="uname"
                  placeholder="Update your name"
                />
              </div>
              <div className="a-p-u-input">
                <input
                  type="text"
                  value={updateuser.uwork}
                  onChange={onChange}
                  name="uwork"
                  placeholder="Work"
                />
              </div>
              <div className="a-p-u-input">
                <input
                  type="text"
                  value={updateuser.ugender}
                  onChange={onChange}
                  name="ugender"
                  placeholder="Gender"
                />
              </div>
              <div className="a-p-u-radio">
                D.O.B -{" "}
                <input
                  type="date"
                  value={updateuser.udob}
                  onChange={onChange}
                  name="udob"
                />
              </div>
              <h3 className="flex C-D-M ">CONTACT DETAILS</h3>
              <div className="a-p-u-input">
                <input
                  type="text"
                  value={updateuser.uphone}
                  onChange={onChange}
                  name="uphone"
                  placeholder="Phone no."
                />
              </div>
              <div className="a-p-u-input">
                <input
                  type="text"
                  value={updateuser.uaddress}
                  onChange={onChange}
                  name="uaddress"
                  placeholder="Address"
                />
              </div>
              <div className="a-p-u-input">
                <input
                  type="text"
                  value={updateuser.usite}
                  onChange={onChange}
                  name="usite"
                  placeholder="site"
                />
              </div>
              <div className="a-p-u-input flex">
                <button className="Update-button" onClick={handalUpdateUser}>
                  Save Profile
                </button>
              </div>
            </form>
            <form className="a-p-u-skils flex" id="fields">
              <h3 className="flex">ADD YOUR SKILS </h3>

              <div className="a-p-u-skils-box flex">
                <input
                  type="text"
                  name="uskil_1"
                  onChange={onChange}
                  value={updateuser.uskil_1}
                  placeholder="Your skils1"
                />
                <input
                  className="parsent"
                  value={updateuser.uskil_1_p}
                  onChange={onChange}
                  name="uskil_1_p"
                  type="number"
                />
                <span>%</span>
              </div>
              <div
                style={{
                  display:
                    updateuser.uskil_1 === ""
                      ? "none"
                      : "flex" && updateuser.uskil_1_p === null
                      ? "none"
                      : "flex",
                }}
                className="a-p-u-skils-box flex"
              >
                <input
                  type="text"
                  name="uskil_2"
                  onChange={onChange}
                  value={updateuser.uskil_2}
                  placeholder="Your skils"
                />
                <input
                  className="parsent"
                  value={updateuser.uskil_2_p}
                  onChange={onChange}
                  name="uskil_2_p"
                  type="number"
                />
                <span>%</span>
              </div>
              <div
                style={{
                  display:
                    updateuser.uskil_2 === ""
                      ? "none"
                      : "flex" && updateuser.uskil_2_p === null
                      ? "none"
                      : "flex",
                }}
                className="a-p-u-skils-box flex"
              >
                <input
                  type="text"
                  name="uskil_3"
                  onChange={onChange}
                  value={updateuser.uskil_3}
                  placeholder="Your skils"
                />
                <input
                  className="parsent"
                  value={updateuser.uskil_3_p}
                  onChange={onChange}
                  name="uskil_3_p"
                  type="number"
                />
                <span>%</span>
              </div>
              <div
                style={{
                  display:
                    updateuser.uskil_3 === ""
                      ? "none"
                      : "flex" && updateuser.uskil_3_p === null
                      ? "none"
                      : "flex",
                }}
                className="a-p-u-skils-box flex"
              >
                <input
                  type="text"
                  name="uskil_4"
                  onChange={onChange}
                  value={updateuser.uskil_4}
                  placeholder="Your skils"
                />
                <input
                  className="parsent"
                  value={updateuser.uskil_4_p}
                  onChange={onChange}
                  name="uskil_4_p"
                  type="number"
                />
                <span>%</span>
              </div>
              <div
                style={{
                  display:
                    updateuser.uskil_4 === ""
                      ? "none"
                      : "flex" && updateuser.uskil_4_p === null
                      ? "none"
                      : "flex",
                }}
                className="a-p-u-skils-box flex"
              >
                <input
                  type="text"
                  name="uskil_5"
                  onChange={onChange}
                  value={updateuser.uskil_5}
                  placeholder="Your skils"
                />
                <input
                  className="parsent"
                  value={updateuser.uskil_5_p}
                  onChange={onChange}
                  name="uskil_5_p"
                  type="number"
                />
                <span>%</span>
              </div>
              <div
                style={{
                  display:
                    updateuser.uskil_5 === ""
                      ? "none"
                      : "flex" && updateuser.uskil_5_p === null
                      ? "none"
                      : "flex",
                }}
                className="a-p-u-skils-box flex"
              >
                <input
                  type="text"
                  name="uskil_6"
                  onChange={onChange}
                  value={updateuser.uskil_6}
                  placeholder="Your skils"
                />
                <input
                  className="parsent"
                  value={updateuser.uskil_6_p}
                  onChange={onChange}
                  name="uskil_6_p"
                  type="number"
                />
                <span>%</span>
              </div>
              <div
                style={{
                  display:
                    updateuser.uskil_6 === ""
                      ? "none"
                      : "flex" && updateuser.uskil_6_p === null
                      ? "none"
                      : "flex",
                }}
                className="a-p-u-skils-box flex"
              >
                <input
                  type="text"
                  name="uskil_7"
                  onChange={onChange}
                  value={updateuser.uskil_7}
                  placeholder="Your skils"
                />
                <input
                  className="parsent"
                  value={updateuser.uskil_7_p}
                  onChange={onChange}
                  name="uskil_7_p"
                  type="number"
                />
                <span>%</span>
              </div>
              <div
                style={{
                  display:
                    updateuser.uskil_7 === ""
                      ? "none"
                      : "flex" && updateuser.uskil_7_p === null
                      ? "none"
                      : "flex",
                }}
                className="a-p-u-skils-box flex"
              >
                <input
                  type="text"
                  name="uskil_8"
                  onChange={onChange}
                  value={updateuser.uskil_8}
                  placeholder="Your skils"
                />
                <input
                  className="parsent"
                  value={updateuser.uskil_8_p}
                  onChange={onChange}
                  name="uskil_8_p"
                  type="number"
                />
                <span>%</span>
              </div>
              <div
                style={{
                  display:
                    updateuser.uskil_8 === ""
                      ? "none"
                      : "flex" && updateuser.uskil_8_p === null
                      ? "none"
                      : "flex",
                }}
                className="a-p-u-skils-box flex"
              >
                <input
                  type="text"
                  name="uskil_9"
                  onChange={onChange}
                  value={updateuser.uskil_9}
                  placeholder="Your skils"
                />
                <input
                  className="parsent"
                  value={updateuser.uskil_9_p}
                  onChange={onChange}
                  name="uskil_9_p"
                  type="number"
                />
                <span>%</span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
