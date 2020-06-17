import React, { Component } from 'react'
import Nav from "./nav"
import Post from './post'

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            newUsername: "",
            newMessage: "",
            posts: [
                {
                    username: 'Quinn',
                    message: 'I like to Chirp'
                }, {
                    username: 'Chris',
                    message: 'I like Pizza'
                }, {
                    username: 'Michael',
                    message: 'I like to code'
                }
            ]
        }
        this.handleNameChange = this.handleNameChange.bind(this)
        this.handleMessageChange = this.handleMessageChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleNameChange(e) {
        this.setState({ newUsername: e.target.value })
        console.log(this.state.newUsername)
    }
    handleMessageChange(e) {
        this.setState({ newMessage: e.target.value })
        console.log(this.state.newMessage)
    }
    handleSubmit() {
        let newPost = {
            username: this.state.newUsername,
            message: this.state.newMessage
        }
        this.setState({ posts: [...this.state.posts, newPost] })
        console.log(this.state.posts)


    }

    render() {
        return (
            <React.Fragment>
                <Nav />
                <Post handleNameChange={this.handleNameChange} handleMessageChange={this.handleMessageChange} handleSubmit={this.handleSubmit} />
                {
                    this.state.posts.map(post => {
                        return (
                            <React.Fragment>
                                <h1> {post.username}</h1>
                                <h3>{post.message}</h3>
                            </React.Fragment>)
                    })
                } </React.Fragment>
        )
    }
}
