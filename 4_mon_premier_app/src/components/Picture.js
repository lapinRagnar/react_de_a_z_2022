import React, { Component } from 'react';

export default class Picture extends Component {

    constructor(props) {
        super(props)
        this.state = {timer: null}
    }

    componentDidMount () {
        this.setState({
            timer: setInterval(() => {
                console.log("le timer est appelé!");
            }, 2000)
        })
    }
  
    componentWillUnmount(){
        console.log("le composant Picture a été supprimé");
        clearInterval(this.state.timer)      
    }

    render() {

        return <div>
            <img className="mon-profile" src="mon-profile.jpg" alt="" />
        </div>;
    }
}
