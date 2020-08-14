import React from 'react';
import Note from './Note/Note';
import EditNote from './EditNote/EditNote';
import NewNoteForm from './NewNoteForm/NewNoteForm';
import * as axios from 'axios';

class Notes extends React.Component{
    state = {
        notes : [],
        selectedNoteId : null,
        showEditNote : false,
        showNewNoteForm : false
    }

    componentDidMount = () => {
        axios.default.get("https://learning-mate.firebaseio.com/notes.json")
            .then(response => {
                console.log("RESPONSE : ", response);
                this.setState({
                    notes : response.data
                })
            })
            .catch(err => console.log(err));
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

    addNote = (title, body) => {
        // write code for add item in state notes  
        const note = {
            id : this.state.notes.length + 1,
            title, body
        }
        
        const duplicateNotes = [...this.state.notes, note];

        this.setState({
            notes : duplicateNotes,
            showNewNoteForm : false
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
        let newNoteForm = null;
        if(this.state.showNewNoteForm){
            newNoteForm = <NewNoteForm  onAddNewNote = {(title, body) => {this.addNote(title, body)}}/>
        }
        return (
            <>
            <p className="display-4 text-center">My Awesome Notes <br/>
            <span>
                <button className="btn btn-dark" 
                        onClick={() => {this.setState({showNewNoteForm : true})}} >Add New Note</button>
            </span>
            </p>
            
            <div className="row">
                {notes}
            </div>
            <hr />
            <div className="row">
                {editNote}
            </div>
            <div className="row">
                {newNoteForm}
            </div>
            </>
        )
    }
}

export default Notes;