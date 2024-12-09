import { Component } from 'react';
import '../PortfolioStyles.css';

class About extends Component {
    render(){
        return (
            <article class="main-content">
                <h2>Welcome to My Personal Portfolio!</h2>
                <hr/>
                <p>After more than a decade of incredible life experiences abroad, I'm taking a leap into a long-held dream by enrolling in 
                    Coding Temple's Software Engineering program. My journey here has been anything but straightforward, starting 15 years ago in college 
                    with a double major in Mathematics and Spanish Literature. Although I initially set my sights on teaching, an Intro to Computer Science 
                    course I took unexpectedly hooked me with its perfect blend of language and problem-solving, sparking a love for programming that 
                    I carried with me as I explored other paths.</p>
                <p>When graduation arrived, I chose to follow a different dream: travel. I moved to Chile to teach English, where, in my first two weeks, 
                    I met the love of my life. Together, we spent a year exploring 15 countries, culminating in a proposal at the Taj Mahal and ultimately 
                    building a life in coastal Chile, where we married (three times!) and welcomed our two children.</p>
                <p>In Chile, I found a rewarding role as a financial editor that harnessed my love for language, detail, and tech-savvy problem-solving. 
                    Over my six years at Evalueserve, I trained in VBA, created automations, and consolidated workflows across various platforms—all the 
                    while growing my technical skills and refining my professional focus.</p>
                <p>But with each passing year, my heart tugged me back toward home in the Pacific Northwest. After a decade in Chile, my family and 
                    I finally relocated to Portland, where I now get to share daily life with my parents and siblings. It's been a year of growth, adaptation, 
                    and fresh starts, including joining Coding Temple to pursue a software engineering career. I feel incredibly fortunate to be back at 
                    home, alongside my kids' first steps into school and daycare, and embracing my own exciting new chapter in tech.</p>
                <p>Wish me luck on this next adventure! 🚀</p>
            </article>
        );
    };
}

export default About;