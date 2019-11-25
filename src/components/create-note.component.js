import React from 'react'

export default class CreateNote extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            title: '', 
            textbody: '',
            users: []
        }
    }

    onChangeTitle(e) {
        this.setState({
            username: e.target.value
        })
    }

    onChangeTextBody(e) {
        this.setState({
            title: e.target.value
        })
    }

    onChangeUsername(e) {
        this.setState({
            textbody: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault()
        const note = {
            username: this.state.username,
            title: this.state.title,
            textbody: this.state.textbody
        }

        console.log(note)
        window.location = '/'
    }

    render() {
        return(
            <div>
                Create Note
            </div>
        )
    }
}