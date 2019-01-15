import React, { Component } from 'react'

class Image extends Component {

    render(){
        return (
            <div> 
                <img className= 'picture'src= 'https://imgix.ranker.com/user_node_img/50041/1000806839/original/5d5f6984-e61a-4acc-ad6a-7ba5b77176ae-photo-u2?w=650&q=50&fm=jpg&fit=crop&crop=faces' alt= 'Doggy' />
            </div>
        )
    }
}

export default Image

