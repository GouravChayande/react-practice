import { useState, useEffect } from "react";
import { nanoid } from "nanoid";

import NotesList from "./Components/Notes/NotesList";
import Search from "./Components/Search/Search";
import Header from "./Components/Header/Header";
import styles from "./App.module.css";

const App = () => {
	const [notes, setNotes] = useState([
		{
			id: nanoid(),
			text: "Make new notes",
			date: "26/5/2022",
		},
		{
			id: nanoid(),
			text: "Delete old notes",
			date: "28/5/2022",
		},
		{
			id: nanoid(),
			text: "Save some notes",
			date: "23/5/2022",
		},
	]);

	const [searchText, setSearchText] = useState("");

  useEffect(()=>{
    const savedNotes = JSON.parse(localStorage.getItem("react-prac-notes"));
    if(savedNotes){
      setNotes(savedNotes)
    }
  },[])

	useEffect(() => {
    localStorage.setItem("react-prac-notes",JSON.stringify(notes));
  },[notes]);

	const addNote = (text) => {
		const date = new Date();
		const newNote = {
			id: nanoid(),
			text: text,
			date: date.toLocaleDateString(),
		};
		const newNotes = [...notes, newNote];
		setNotes(newNotes);
	};

	const deletNote = (id) => {
		const newNotes = notes.filter((note) => note.id !== id);
		setNotes(newNotes);
	};

	return (
		<div>
			<div className={styles.container}>
				<Header></Header>
				<Search handleSearch={setSearchText}></Search>
				<NotesList
					notes={notes.filter((note) =>
						note.text.toLowerCase().includes(searchText)
					)}
					handleAddNote={addNote}
					handleDeleteNote={deletNote}
				></NotesList>
			</div>
		</div>
	);
};

export default App;
