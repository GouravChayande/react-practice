import { useState } from "react";
import styles from "../Notes/Notes.module.css";

const AddNotes = ({ handleAddNotes }) => {
	const [noteText, setNoteText] = useState("");
	const limit = 200;

	const handleChange = (event) => {
		if (limit - event.target.value.length >= 0) {
			setNoteText(event.target.value);
		}
	};

	const handleSaveClick = () => {
		if (noteText.trim().length > 0) {
			handleAddNotes(noteText);
			setNoteText("");
		}
	};

	return (
		<div className={`${styles.notes} ${styles.new}`}>
			<textarea
				cols="10"
				rows="8"
				placeholder="Type to add note"
				value={noteText}
				onChange={handleChange}
			></textarea>
			<div className={styles["notes-footer"]}>
				<small>{limit - noteText.length} remaining</small>
				<button className={styles.save} onClick={handleSaveClick}>
					Save
				</button>
			</div>
		</div>
	);
};

export default AddNotes;
