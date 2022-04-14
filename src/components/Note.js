import React, { useContext } from "react";
import noteContext from "../context/notes/noteContext";

const Note = (props) => {
  const context = useContext(noteContext);
  const { deleteNote } = context;

  const { note, updateNote } = props;
  const updateBox = () => {
    updateNote(note);
    document.getElementById("update-box").style.display = "flex";
  };
  const month = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const showDeleteWarning = () => {
    props.showAlert("( Dubble Click )If You Want To Delete!! ", "primary");
  };
  const HandalDelete = () => {
    deleteNote(note._id);
    props.showAlert("Deleted!!", "warning");
  };
  return (
    <>
      <div className="note-box">
        <div className="note">
          <h3 className="flex">
            Tag: <p>{note.tag}</p>{" "}
          </h3>
          <h3 className="flex">
            Title: <p>{note.title}</p>{" "}
          </h3>
          <h3>Message:</h3>
          <p className="note-message">{note.message}</p>
          <div className="note-date flex">
            <h3>
              DATE: {month[new Date(note.date).getMonth()]}{" "}
              {new Date(note.date).getDate()}{" "}
              {new Date(note.date).getFullYear()}
            </h3>
            <h3>
              TIME: {new Date(note.date).getHours()}:
              {new Date(note.date).getMinutes()}
            </h3>
            <div className="note-button">
              <button onClick={updateBox}>
                <i className="fa fa-pencil-square-o"></i>
              </button>
              <button
                id="deleteButton"
                onDoubleClick={HandalDelete}
                onClick={showDeleteWarning}
              >
                <i className="fa fa-trash-o"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Note;
