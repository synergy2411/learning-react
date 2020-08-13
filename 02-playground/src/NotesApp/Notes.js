import React from 'react';
import Note from './Note/Note';

class Notes extends React.Component{
    state = {
        notes : [
            {id : 1, title : "shopping", body : "buy the pulses"},
            {id : 2, title : "insurance", body : "renew the car insurance"},
            {id : 3, title : "plants", body : "pot the plants"},
            {id : 4, title : "reading", body : "read the books"},
        ]
    }
    render(){
        let notes= this.state.notes.map(note => {
            return <Note note={note} key={note.id}/>
        })
        return (
            <div className="row">
                {notes}
            </div>
        )
    }
}

export default Notes;