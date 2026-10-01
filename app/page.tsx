"use client";

import { useEffect, useMemo, useState } from "react";
import NoteItem, { type FlowerNote } from "@/components/NoteItem";

const storageKey = "petal-stem-notes-v1";
const starterNotes: FlowerNote[] = [
  {
    id: "starter-order",
    title: "Friday wedding order",
    description: "12 ivory roses, garden roses, and trailing jasmine for the ceremony arch. Pickup at 9:30 am. Ask Mia to bring the ribbon samples.",
    category: "Orders",
    updatedAt: "2026-09-28T10:00:00.000Z",
  },
  {
    id: "starter-market",
    title: "Market morning list",
    description: "Pick up dahlias, eucalyptus, and a few bunches of feverfew. Check the cooler before the van leaves.",
    category: "To-do",
    updatedAt: "2026-09-27T15:30:00.000Z",
  },
  {
    id: "starter-ideas",
    title: "Autumn window display",
    description: "Try rust-colored cosmos with branches from the garden. Keep the front table open for wrapped bunches.",
    category: "Ideas",
    updatedAt: "2026-09-25T09:15:00.000Z",
  },
];

const categories = ["Orders", "To-do", "Ideas", "Customers", "Other"];

export default function Home() {
  const [notes, setNotes] = useState<FlowerNote[]>([]);
  const [ready, setReady] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("Orders");
  const [query, setQuery] = useState("");
  const [duplicate, setDuplicate] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(storageKey);
      setNotes(stored ? JSON.parse(stored) as FlowerNote[] : starterNotes);
    } catch {
      setNotes(starterNotes);
    }
    setReady(true);
  }, []);

  useEffect(() => {
    if (ready) localStorage.setItem(storageKey, JSON.stringify(notes));
  }, [notes, ready]);

  useEffect(() => {
    const normalizedTitle = title.trim().toLocaleLowerCase();
    const normalizedDescription = description.trim().toLocaleLowerCase();
    setDuplicate(Boolean(normalizedTitle) && notes.some(note =>
      note.id !== selectedId &&
      note.title.trim().toLocaleLowerCase() === normalizedTitle &&
      note.description.trim().toLocaleLowerCase() === normalizedDescription
    ));
  }, [title, description, notes, selectedId]);

  const selectedNote = notes.find(note => note.id === selectedId);
  const filteredNotes = useMemo(() => {
    const search = query.trim().toLocaleLowerCase();
    return [...notes]
      .filter(note => `${note.title} ${note.description} ${note.category}`.toLocaleLowerCase().includes(search))
      .sort((a, b) => b.updatedAt.localeCompare(a.updatedAt));
  }, [notes, query]);

  function startNewNote() {
    setSelectedId(null);
    setTitle("");
    setDescription("");
    setCategory("Orders");
    setSaved(false);
  }

  function selectNote(note: FlowerNote) {
    setSelectedId(note.id);
    setTitle(note.title);
    setDescription(note.description);
    setCategory(note.category);
    setSaved(false);
  }

  function saveNote(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const cleanTitle = title.trim();
    if (!cleanTitle || duplicate) return;
    const updatedAt = new Date().toISOString();
    if (selectedId) {
      setNotes(current => current.map(note => note.id === selectedId
        ? { ...note, title: cleanTitle, description: description.trim(), category, updatedAt }
        : note));
    } else {
      const note = { id: crypto.randomUUID(), title: cleanTitle, description: description.trim(), category, updatedAt };
      setNotes(current => [note, ...current]);
      setSelectedId(note.id);
    }
    setTitle(cleanTitle);
    setSaved(true);
  }

  function deleteNote(id: string) {
    setNotes(current => current.filter(note => note.id !== id));
    if (selectedId === id) startNewNote();
  }

  return (
    <main className="app-shell">
      <aside className="sidebar">
        <a className="brand" href="#home" aria-label="Petal and Stem home">
          <span className="brand-mark" aria-hidden="true">p.</span>
          <span><strong>Petal &amp; Stem</strong><small>FLOWER STUDIO</small></span>
        </a>
        <div className="sidebar-rule" />
        <p className="sidebar-label">YOUR WORKSPACE</p>
        <button className="side-link active" type="button"><span className="side-icon">▤</span> Studio notes <span className="side-count">{notes.length}</span></button>
        <div className="sidebar-bottom">
          <div className="sidebar-flower" aria-hidden="true">✿</div>
          <p>Keep the little details<br />somewhere lovely.</p>
          <span>EST. WITH CARE</span>
        </div>
      </aside>

      <section className="main-area" id="home">
        <header className="topbar">
          <span className="breadcrumb">Workspace <span>/</span> Studio notes</span>
          <span className="shop-status"><span /> Your little shop, in bloom</span>
        </header>

        <div className="content-wrap">
          <section className="page-heading">
            <div>
              <p className="overline">A CLEAR SPACE FOR THE DETAILS</p>
              <h1>Your studio notes<span>.</span></h1>
              <p className="page-subtitle">Orders, ideas, and all the little things worth remembering.</p>
            </div>
            <button className="new-note-button" onClick={startNewNote}><span aria-hidden="true">+</span> New note</button>
          </section>

          <section className="workspace" aria-label="Notes workspace">
            <div className="notes-column">
              <div className="list-heading">
                <div><h2>All notes <span>{notes.length}</span></h2><p>Your thoughts, gathered in one place.</p></div>
                <label className="search-box">
                  <span aria-hidden="true">⌕</span>
                  <input value={query} onChange={event => setQuery(event.target.value)} placeholder="Find a note" aria-label="Search notes" />
                </label>
              </div>
              <div className="note-list">
                {!ready ? <p className="empty-list">Gathering your notes...</p> : filteredNotes.length ? filteredNotes.map(note => (
                  <NoteItem key={note.id} note={note} selected={note.id === selectedId} onSelect={selectNote} onDelete={deleteNote} />
                )) : <div className="empty-list"><span>✿</span><p>{query ? "No notes match that search." : "Your notebook is ready for a first note."}</p></div>}
              </div>
            </div>

            <section className="editor" aria-labelledby="editor-title">
              <div className="editor-heading">
                <div><p className="overline">{selectedNote ? "EDITING NOTE" : "A FRESH PAGE"}</p><h2 id="editor-title">{selectedNote ? "Make a little change." : "What's on your mind?"}</h2></div>
                {saved && <span className="saved-label">Saved</span>}
              </div>
              <form onSubmit={saveNote}>
                <label className="field-label" htmlFor="note-title">Note title</label>
                <input id="note-title" className="title-input" value={title} onChange={event => { setTitle(event.target.value); setSaved(false); }} placeholder="Give this note a name" maxLength={90} required />
                <div className="field-row">
                  <label className="field-label" htmlFor="note-category">Filed under</label>
                  <select id="note-category" value={category} onChange={event => setCategory(event.target.value)}>
                    {categories.map(item => <option key={item}>{item}</option>)}
                  </select>
                </div>
                <label className="field-label description-label" htmlFor="note-description">The details</label>
                <textarea id="note-description" value={description} onChange={event => { setDescription(event.target.value); setSaved(false); }} placeholder="Write down the details you'll want to remember..." rows={8} maxLength={1500} />
                <div className="form-meta"><span>{description.length} / 1500</span>{duplicate && <span className="duplicate-message" role="alert">This note already exists in your notebook.</span>}</div>
                <div className="form-actions">
                  {selectedNote && <button className="cancel-button" type="button" onClick={startNewNote}>New note instead</button>}
                  <button className="save-button" type="submit" disabled={!title.trim() || duplicate}>{selectedNote ? "Save changes" : "Save note"}<span aria-hidden="true">&rarr;</span></button>
                </div>
              </form>
              <p className="editor-footnote"><span aria-hidden="true">✿</span> Notes stay right here in this browser.</p>
            </section>
          </section>
          <footer className="page-footer"><span>MADE FOR THE LOVELY LITTLE DETAILS</span><span>{notes.length} {notes.length === 1 ? "note" : "notes"} in your notebook</span></footer>
        </div>
      </section>
    </main>
  );
}
