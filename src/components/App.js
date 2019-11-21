import React, {Component} from 'react';
import Projects from './Projects';
import SocialProfile from './SocialProfiles';
import profile from '../assets/alfonso.jpeg';
import Title from './Title';


class App extends Component {

    state = {
        displayBio:false
    }

    toogleDisplayBio = () => {
        this.setState({displayBio:!this.state.displayBio})
    }

    render(){
        return(
            <div>
                <img src={profile} alt='profile' className='profile' />
                <h1>Hello!</h1>
                <p>My name is Alfonso</p>
                <Title />
                <p>I'm always looking forward to working on meaningful projects.</p>
                {this.state.displayBio ? (
                    <div>
                        <p>I live in Ciudad de México, and code every day.</p>
                        <p>My favorite language is Python, and I think React.js is awesome.</p>
                        <p>Besides coding, I also love music!</p>
                        <button onClick = {this.toogleDisplayBio}>Show less</button>
                    </div>
                ) : (
                    <div>
                        <button onClick = {this.toogleDisplayBio}>Read more</button>
                    </div>
                )}
            <hr />
            <Projects />
            <hr />
            <SocialProfile />
            </div>
        )
    }
}

export default App;