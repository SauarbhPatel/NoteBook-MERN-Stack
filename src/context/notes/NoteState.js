import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const host = "http://localhost:5000";
  const notesInitial = [];
  const [notes, setNotes] = useState(notesInitial);
  const [countNo, setCountNo] = useState({ totalNote: "0" });
  const [user, setUser] = useState([]);

  // Search Funtion
  const searchFun = async () => {
    var filter = document.getElementById("noteSearch");
    if (filter) {
      var filterValue = filter.value.toUpperCase();
      var NoteContainer = document.getElementById("notesContainer");
      var NoteBox = NoteContainer.getElementsByClassName("note-box");
      let count = 0;
      
    for (var i = 0; i < NoteBox.length; i++) {
      var Note = NoteBox[i].getElementsByClassName("note");
      var title = Note[0].getElementsByTagName("h3")[1];
      var value = title.getElementsByTagName("p")[0];
      if (value) {
        var textValue = value.textContent || value.innerHTML;
        if (textValue.toUpperCase().indexOf(filterValue) > -1) {
          NoteBox[i].style.display = "";
          count += 1;
        } else {
          NoteBox[i].style.display = "none";
        }
      } else {
        console.log("error");
      }
    }
    setCountNo({ totalNote: count });
    }
  };

  // Get all Notes
  const getNotes = async () => {
    // API Call
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": sessionStorage.getItem("token"),
      },
    });

    const json = await response.json();
    console.log(json);
    setNotes(json);
    searchFun();
  };

  //   Add a note
  const addNote = async (title, tag, message) => {
    // API Call
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": sessionStorage.getItem("token"),
      },
      body: JSON.stringify({ title, tag, message }),
    });

    const note = await response.json();
    setNotes(notes.concat(note));
  };

  // Delete a Note
  const deleteNote = async (id) => {
    // API Call
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token": sessionStorage.getItem("token"),
      },
    });

    const json = await response.json();
    console.log(json);
    console.log("Deleting the note with id" + id);
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
    searchFun();
  };

  //   Edit a note
  const editNote = async (id, title, tag, message) => {
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token": sessionStorage.getItem("token"),
      },
      body: JSON.stringify({ title, tag, message }),
    });

    const json = await response.json();
    console.log(json);

    let newNotes = JSON.parse(JSON.stringify(notes));
    // logic to edit in client
    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].tag = tag;
        newNotes[index].message = message;
        break;
      }
    }
    setNotes(newNotes);
  };

  const getUser = async () => {
    // API Call
    const response = await fetch(`${host}/api/auth/getuser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": sessionStorage.getItem("token"),
      },
    });

    const json = await response.json();
    console.log(json);
    setUser(json);
  };

  //   update user
  const userUpdate = async (
    id,
    name,
    work,
    gender,
    dob,
    phone,
    address,
    site,
    skil_1,
    skil_1_p,
    skil_2,
    skil_2_p,
    skil_3,
    skil_3_p,
    skil_4,
    skil_4_p,
    skil_5,
    skil_5_p,
    skil_6,
    skil_6_p,
    skil_7,
    skil_7_p,
    skil_8,
    skil_8_p,
    skil_9,
    skil_9_p
  ) => {
    const response = await fetch(`${host}/api/auth/updateUser`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token": sessionStorage.getItem("token"),
      },
      body: JSON.stringify({
        name,
        work,
        gender,
        dob,
        phone,
        address,
        site,
        skil_1,
        skil_1_p,
        skil_2,
        skil_2_p,
        skil_3,
        skil_3_p,
        skil_4,
        skil_4_p,
        skil_5,
        skil_5_p,
        skil_6,
        skil_6_p,
        skil_7,
        skil_7_p,
        skil_8,
        skil_8_p,
        skil_9,
        skil_9_p,
      }),
    });

    const json = await response.json();
    console.log(json);

    // let newUser = JSON.parse(JSON.stringify(user));

    // // logic to edit in client
    // for (let index = 0; index < newUser.length; index++) {
    //   const element = newUser[index];
    //   if (element._id === id) {
    //     newUser[index].name=name;
    //     newUser[index].work=work;
    //     newUser[index].gender=gender;
    //     newUser[index].dob=dob;
    //     newUser[index].phone=phone;
    //     newUser[index].address=address;
    //     newUser[index].site=site;
    //     newUser[index].skil_1=skil_1;
    //     newUser[index].skil_1_p=skil_1_p;
    //     newUser[index].skil_2=skil_2;
    //     newUser[index].skil_2_p=skil_2_p;
    //     newUser[index].skil_3=skil_3;
    //     newUser[index].skil_3_p=skil_3_p;
    //     newUser[index].skil_4=skil_4;
    //     newUser[index].skil_4_p=skil_4_p;
    //     newUser[index].skil_5=skil_5;
    //     newUser[index].skil_5_p=skil_5_p;
    //     newUser[index].skil_6=skil_6;
    //     newUser[index].skil_6_p=skil_6_p;
    //     newUser[index].skil_7=skil_7;
    //     newUser[index].skil_7_p=skil_7_p;
    //     newUser[index].skil_8=skil_8;
    //     newUser[index].skil_8_p=skil_8_p;
    //     newUser[index].skil_9=skil_9;
    //     newUser[index].skil_9_=skil_9_p;

    //     break;
    //   }
    // }
    setUser(json);
  };

  return (
    <NoteContext.Provider
      value={{
        notes,
        deleteNote,
        addNote,
        editNote,
        getNotes,
        getUser,
        user,
        userUpdate,
        setUser,
        searchFun,
        countNo,
        setCountNo,
      }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
