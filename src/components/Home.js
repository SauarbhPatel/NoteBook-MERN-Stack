import React, { useEffect, useState, useContext } from "react";
import home from "./image/home.png";
import noteContext from "../context/notes/noteContext";

const Home = (props) => {
  const context = useContext(noteContext);
  const { addNote, getNotes } = context;

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      getNotes();
    }

    // eslint-disable-next-line
  }, []);
  const handalClearText = (e) => {
    e.preventDefault(); //this is for.. not reload when you submit
    setNote({ title: "", tag: "", message: "" });
    props.showAlert("Clear Your Note Box", "warning");
  };

  const handalAddNotes = (e) => {
    e.preventDefault(); //this is for.. not reload when you submit
    addNote(note.title, note.tag, note.message);
    setNote({ title: "", tag: "", message: "" });
    props.showAlert("added your notes", "success");
  };

  const handalOnChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  const [note, setNote] = useState({ title: "", tag: "", message: "" });

  return (
    <>
      {sessionStorage.getItem("token") ? (
        <div className="home-section flex">
          <div className="home-box flex">
            <div className="home-box-left flex">
              <div className="home-text-box">
                <h1>Add a New Note</h1>
              </div>
              <form className="home-form">
                <div className="home-input">
                  <input
                    type="text"
                    name="title"
                    id="title"
                    placeholder="Title"
                    value={note.title}
                    onChange={handalOnChange}
                  />
                  <input
                    type="text"
                    name="tag"
                    id="tag"
                    placeholder="Tag"
                    value={note.tag}
                    onChange={handalOnChange}
                  />
                </div>
                <div className="home-input">
                  <textarea
                    name="message"
                    id="message"
                    rows="12"
                    placeholder="Message"
                    value={note.message}
                    onChange={handalOnChange}
                  ></textarea>
                </div>
                <div className="home-input">
                  <button
                    disabled={
                      note.title.length === 0 &&
                      note.tag.length === 0 &&
                      note.message.length === 0
                    }
                    onClick={handalClearText}
                  >
                    Clear Text
                  </button>
                  <button
                    disabled={note.title.length < 3 || note.message.length < 5}
                    onClick={handalAddNotes}
                  >
                    Add Note
                  </button>
                </div>
              </form>
            </div>
            <div className="home-box-right flex">
              <img src={home} alt="" />
            </div>
          </div>
        </div>
      ) : (
        <div className="home-section flex" style={{ fontSize: "4em" }}>
          <div className="first-login">
            <div className="text-container flex">
              <h3>
                Welcome To{" "}
                <span>
                  <span className="logo-animation">N</span>
                  <span className="logo-animation">O</span>
                  <span className="logo-animation">T</span>
                  <span className="logo-animation">E</span>
                  <span className="logo-animation">B</span>
                  <span className="logo-animation">O</span>
                  <span className="logo-animation">O</span>
                  <span className="logo-animation">K</span>
                </span>
                .com{" "}
              </h3>
              <p>here you can add your important note...</p>
              <p>
                like what you want to do later that time, tomorrow, growsari
                items list, password, ids, etc.
              </p>
              <p>
                here your all notes, password, ids , all things will be secured{" "}
              </p>
              <p>Nobody read your personal things..</p>
              <div className="login-button-home flex">
                FIRST <span> LOGIN</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
