import React, { Component } from 'react'

class Image extends Component {

    render(){
        return (
            <div> 
                <img className='picture' src={this.props.img} alt= 'Doggy' />
            </div>
        )
    }
}

export default Image

