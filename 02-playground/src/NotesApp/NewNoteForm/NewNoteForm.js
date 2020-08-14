import React from 'react';

class NewNoteForm extends React.Component{

    state ={
        title : '',
        body : '',
        errorMessage : '',
        hasError : false
    }

    onAddNote = event => {
        event.preventDefault();
        if(this.state.title === '' || this.state.body === ''){
            this.setState({errorMessage : "Both fields are mandatory", hasError : true})
        }else{
            const {title, body} = this.state;
        this.props.onAddNewNote(title, body);
        }
        
    }

    onTitleChange = (event) => {
        this.setState({
            title : event.target.value
        })
    }
    render() {
        const style = {
            margin : "10px",
            padding : "8px"
        }
        let errorMsg = null;
        if(this.state.hasError){
            errorMsg = <p className="alert alert-danger">*{this.state.errorMessage}</p>
        }
        return (
            <div className="col-8 offset-2">
                <div className="card">
                <form style={style}>
                    {errorMsg}
                    <div className="row">
                        <div className="col-4">
                            <label>Title : </label>
                        </div>
                        <div className="8">
                            <input type="text" 
                                className="form-control" 
                                name="title" 
                                onChange = {this.onTitleChange}
                                value = {this.state.title}/>
                        </div>
                    </div>
                    <br/>
                    <div className="row">
                        <div className="col-4">
                            <label>Body : </label>
                        </div>
                        <div className="8">
                            <input type="text" 
                                className="form-control" 
                                name="body" 
                                onChange = {event => this.setState({body : event.target.value})}
                                value ={this.state.body}/>
                        </div>
                    </div>
                    <br/>
                    <div className="row">
                        <div className="col-8 offset-2">
                            <button className="btn btn-dark btn-block" onClick={this.onAddNote}>
                                Add Note
                            </button>
                         </div>
                    </div>
                </form>
                </div>
            </div>
        )
    }
}

export default NewNoteForm;