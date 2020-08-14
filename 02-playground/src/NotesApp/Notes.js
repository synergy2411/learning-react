import React from 'react';
import Note from './Note/Note';
import EditNote from './EditNote/EditNote';

class Notes extends React.Component{
    state = {
        notes : [
            {id : 1, title : "shopping", body : "buy the pulses"},
            {id : 2, title : "insurance", body : "renew the car insurance"},
            {id : 3, title : "plants", body : "pot the plants"},
            {id : 4, title : "reading", body : "read the books"},
        ],
        selectedNoteId : null,
        showEditNote : false
    }

    

    onSelectedNote = id =>{
        this.setState({
            selectedNoteId : id, 
            showEditNote : true
        })
    }

    onNoteDelete = noteId =>{
        console.log("ID #", noteId);
        const duplicateNotes = this.state.notes.filter(note => note.id !== noteId);
        this.setState({
            notes : duplicateNotes,
            selectedNoteId : null,
            showEditNote : false
        })
    }

    onNoteEdit = (body, id) => {
        const duplicateNotes = [...this.state.notes];
        const position = duplicateNotes.findIndex(n => n.id == id);
        duplicateNotes[position].body = body;
        this.setState({
            notes : duplicateNotes,
            showEditNote : false,
            selectedNoteId : null
        }) 
    }
    render(){
        let notes= this.state.notes.map(note => {
            return <Note note={note} 
                        key={note.id} 
                        onSelectNote={() => this.onSelectedNote(note.id)}/>
        })

        let editNote = null;
        if(this.state.showEditNote && this.state.selectedNoteId !== null){
            const position = this.state.notes.findIndex(n => n.id === this.state.selectedNoteId);
            const notes = [...this.state.notes];
            editNote = <EditNote note={notes[position]}
                                onDelete = {() => this.onNoteDelete(notes[position].id)} 
                                onEdit = { body => this.onNoteEdit(body, notes[position].id)}/>
        }

        return (
            <>
            <div className="row">
                {notes}
            </div>
            <hr />
            <div className="row">
                {editNote}
            </div>
            </>
        )
    }
}

export default Notes;