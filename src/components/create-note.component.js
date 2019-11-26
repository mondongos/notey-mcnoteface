import React from 'react'
import axios from 'axios'

export default class CreateNote extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: 'halsey',
            title: '', 
            textbody: '',
            users: []
        }
    }
    
    handleChange = (e) => {
        const {name, value} = e.target
        this.setState({
            [name]: value
        })
    }

    onSubmit = (e) => {
        e.preventDefault()
        const note = {
            username: this.state.username,
            title: this.state.title,
            textbody: this.state.textbody
        }
        axios.post('http://localhost:5000/notes/add', note)
        .then(res => console.log(res.json()))
        .catch(err => console.log(err))
        console.log(note)
        window.location = '/'
    }

    render() {
        return(
            <div>
                <h3>Create new note</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group"> 
                        <input  
                            type="text"
                            required
                            name='title'
                            className="form-control"
                            placeholder="Note title"
                            value={this.state.title}
                            onChange={this.handleChange}
                            />
                    </div>
                    <div className="form-group"> 
                        <input  
                            type="text"
                            required
                            name='textbody'
                            className="form-control"
                            placeholder="Type your note here"
                            value={this.state.textbody}
                            onChange={this.handleChange}
                            />
                    </div>
                    <div className="form-group">
                        <input 
                            type="submit" 
                            value="Create Note" 
                            className="btn btn-primary"
                            />
                    </div>
                </form>
            </div>
        )
    }
}