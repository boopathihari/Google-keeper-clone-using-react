import { useState } from "react";
import "./App.css";
import CreateArea from "./components/CreateArea";
import Header from "./components/Header";
import Note from "./components/Note";
import Footer from './components/footer'
function App() {
  const [notes, setNotes] = useState([]);

  function addNotes(newNote) {
    setNotes((prevNote) => {
      return [...prevNote, newNote];
    });
  }

  function DeleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((_, index) => {
        return index != id;
      });
    });
  }

  console.log(notes);

  return (
    <div className="App">
      <Header />
      <CreateArea onAdd={addNotes} />
       
      {notes.map((noteItem, index) => {
        return <Note title={noteItem.title} content={noteItem.content} id={index} onDelete={DeleteNote}></Note>;
      })}

    <Footer/>
    </div>
    
  );
  
}

export default App;
