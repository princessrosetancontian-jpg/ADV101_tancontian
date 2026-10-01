export type FlowerNote = {
  id: string;
  title: string;
  description: string;
  category: string;
  updatedAt: string;
};

type NoteItemProps = {
  note: FlowerNote;
  selected: boolean;
  onSelect: (note: FlowerNote) => void;
  onDelete: (id: string) => void;
};

export default function NoteItem({ note, selected, onSelect, onDelete }: NoteItemProps) {
  return (
    <article className={`note-item${selected ? " selected" : ""}`}>
      <button className="note-select" onClick={() => onSelect(note)} aria-label={`Edit ${note.title}`}>
        <span className="note-item-top">
          <span className="category-label">{note.category}</span>
          <span className="note-date">
            {new Intl.DateTimeFormat("en", { month: "short", day: "numeric" }).format(new Date(note.updatedAt))}
          </span>
        </span>
        <span className="note-item-title">{note.title}</span>
        <span className="note-preview">{note.description || "No description yet."}</span>
      </button>
      <button className="delete-note" onClick={() => onDelete(note.id)} aria-label={`Delete ${note.title}`} title="Delete note">
        Delete
      </button>
    </article>
  );
}
