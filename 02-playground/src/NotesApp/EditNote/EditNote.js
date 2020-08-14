import React from 'react';

class EditNote extends React.Component{

    state = {
        txtValue : this.props.note.body
    }
    onChangeHandler = event => {
        this.setState({
            txtValue : event.target.value
        })
    }

    render(){
        return (
            <div className="col-sm-10 offset-sm-1 col-md-8 offset-md-2">
                <div className="card">
                    <div className="card card-header">
                        <p className="text-center">{this.props.note.title.toUpperCase()}</p>
                    </div>
                    
                    <div className="card card-body">
                        <div className="row">
                            <div className="col-sm-8 offset-sm-2 col-md-8 offset-md-2">
                                <input type="text" 
                                    className="form-control" 
                                    onChange = {this.onChangeHandler}
                                    value={this.state.txtValue}/>
                                    {/* [(ngModel)] - [] / ()  */}
                                    {/* {this.state.txtValue} */}
                            </div>
                        </div>
                        <br/><br/>
                        <div className="row">
                            <div className="col-6">
                                <button className="btn btn-outline-dark btn-block">Edit</button>
                            </div>
                            <div className="col-6">
                            <button className="btn btn-outline-danger btn-block"
                                onClick = { this.props.onDelete}>Delete</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default EditNote;