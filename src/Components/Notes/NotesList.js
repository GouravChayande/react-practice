import Notes from "./Notes";
import AddNotes from "../AddNotes/AddNotes";
import styles from "./NotesList.module.css";

const NotesList = ({ notes, handleAddNote, handleDeleteNote }) => {
	return (
		<div className={styles["notes-list"]}>
			{notes.map((note) => (
				<Notes
					key={note.id}
					id={note.id}
					text={note.text}
					date={note.date}
					handleDeleteNote={handleDeleteNote}
				></Notes>
			))}
			<AddNotes handleAddNotes={handleAddNote}></AddNotes>
		</div>
	);
};

export default NotesList;
