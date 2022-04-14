import React, { useContext, useEffect, useRef, useState } from "react";
import Note from "./Note";
import noteContext from "../context/notes/noteContext";
import { useHistory } from "react-router-dom";

const Notes = (props) => {
  const context = useContext(noteContext);
  const { notes, getNotes, editNote, searchFun, countNo, deleteNote } = context;
  let history = useHistory();
  const { showAlert } = props;

  useEffect(() => {
    if (localStorage.getItem("token")) {
      getNotes();
    } else {
      history.push("/login");
    }

    // eslint-disable-next-line
  }, []);
  const refclose = useRef(null);
  const [note, setNote] = useState({
    id: "",
    etitle: "",
    etag: "",
    emessage: "",
    search: "",
  });

  const updateNone = () => {
    document.getElementById("update-box").style.display = "none";
  };

  const updateNote = (currentNote) => {
    setNote({
      id: currentNote._id,
      etitle: currentNote.title,
      etag: currentNote.tag,
      emessage: currentNote.message,
    });
  };

  const handalUpdateNotes = (e) => {
    e.preventDefault(); //this is for.. not reload when you submit
    console.log("updating a note", note);
    editNote(note.id, note.etitle, note.etag, note.emessage);
    refclose.current.click();
    props.showAlert("Updated your notes!", "success");
  };
  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  const handalCancel = (e) => {
    e.preventDefault(); //this is for.. not reload when you submit
    refclose.current.click();
  
  };
  const clearSearch = () => {
    setNote({ search: "" });
    getNotes();
  };

  return (
    <>
      <div className="update-box flex" id="update-box">
        <div className="update-box-left flex">
          <div className="update-text-box">
            <h1>Update Your Note</h1>
            <i className="fa fa-times" ref={refclose} onClick={updateNone}></i>
          </div>
          <form className="update-form">
            <div className="home-input">
              <input
                type="text"
                name="etitle"
                id="etitle"
                onChange={onChange}
                value={note.etitle}
                placeholder="Title"
              />
              <input
                type="text"
                id="etag"
                name="etag"
                onChange={onChange}
                value={note.etag }
                placeholder="Tag"
              />
            </div>
            <div className="home-input">
              <textarea
                rows="8"
                name="emessage"
                id="emessage"
                onChange={onChange}
                value={note.emessage}
                placeholder="Messaeg"
              ></textarea>
            </div>
            <div className="home-input">
              <button onClick={handalCancel}>Cancel</button>
              <button onClick={handalUpdateNotes}>Update Note</button>
            </div>
          </form>
        </div>
      </div>
      <div className="notes-section flex">
        <div className="notes-searchBox flex ">
          <div
            style={{ display: notes.length === 0 ? "none" : "" }}
            className="total-notes search flex"
          >
            Total Results :{" "}
            {countNo.totalNote === 0 ? "Not Found" : countNo.totalNote}
          </div>
          <div
            style={{ display: notes.length === 0 ? "none" : "" }}
            className="search flex"
          >
            <label htmlFor="noteSearch">
              <i className="fa-solid fa-magnifying-glass"></i>
            </label>
            <input
              type="text"
              id="noteSearch"
              name="search"
              onKeyUp={searchFun}
              value={note.search}
              onChange={onChange}
              placeholder="Search by using title"
            />
            <div
              style={{ display: note.search === "" ? "none" : "" }}
              onClick={clearSearch}
              className="search-clear flex"
            >
              <i className="fa fa-times" aria-hidden="true"></i>
            </div>
          </div>
        </div>
        <div className="notes-container flex" id="notesContainer">
          <div
            style={{ display: notes.length === 0 ? "" : "none" }}
            className="no_notes flex"
          >
            <h1>No notes to display</h1>
            <i className="fa fa-exclamation-triangle"></i>
          </div>
          {notes.map((note) => {
            return (
              <Note
                key={note._id}
                updateNote={updateNote}
                note={note}
                showAlert={showAlert}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Notes;
