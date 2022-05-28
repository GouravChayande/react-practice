import styles from "./Notes.module.css";
import { MdDelete } from "react-icons/md";

const Notes = ({ id, text, date, handleDeleteNote }) => {
	const handleDeleteClick = () => {
		handleDeleteNote(id);
	};

	return (
		<div className={styles.notes}>
			<span>{text}</span>
			<div className={styles["notes-footer"]}>
				<small>{date}</small>
				<MdDelete
					size="1.3em"
					className={styles["delete-icon"]}
					onClick={handleDeleteClick}
				></MdDelete>
			</div>
		</div>
	);
};

export default Notes;
