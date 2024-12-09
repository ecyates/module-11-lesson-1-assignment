import { Component } from 'react';
import '../PortfolioStyles.css';

class About extends Component {
    render(){
        return (
            <article class="main-content">
                <h2>Welcome to My Personal Portfolio!</h2>
                <hr/>
                <p>When I started my coding journey two months ago, I knew the time would come to showcase my work and life 
                    in some form of a personal portfolio. Now that I'm finally getting into the nitty gritty details of HTML, I'm 
                    learning just how user-friendly and intuitive it is, and I'm excited that I get to share what I've learned so 
                    far with all of you. </p>
                <p>So come, navigate my navigation bar, learn about me on my about me page, review my past projects and work 
                    history on my projects page, learn about my professional and personal skills on my skills page, and feel free 
                    to contact me on my contact me page. 
                </p>
    </article>
        );
    };
}

export default About;