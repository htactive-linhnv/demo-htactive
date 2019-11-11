import React from 'react';
import '../Home3rd/Home3rd.css'
const Home3rd = (props) => {
    return (
        <div>
            <div id="why">
                <div class="about__text">
                    <h1>WHY CHOOSE HT ACTIVE</h1>
                    <div class="separator"></div>
                    <p>HT Active offers a great service in the design, development and programming of your
                        website/application. We strive to offer the best solution for your business and impartial advice at
                        an honest price. We are constantly investigating new technologies and recommend them when they make
                        sense.
                </p>
                </div>
                <div id="board">
                    <div class="board__left">
                        <ul>
                            <li class="board__li" id="toggleWhy1" onclick="toggleWhy(1)">THE RIGHT TEAM</li>
                            <li class="board__li" id="toggleWhy2" onclick="toggleWhy(2)">WE LISTEN</li>
                            <li class="board__li" id="toggleWhy3" onclick="toggleWhy(3)">CREATIVE AND TECHNICAL</li>
                            <li class="board__li" id="toggleWhy4" onclick="toggleWhy(4)">UNDER ONE ROOF</li>
                        </ul>
                    </div>
                    <div id="board__right">
                        <h1 id="board__h1" class="fade-in">WE LISTEN</h1>
                        <p id="board__p" class="fade-in">We listen, we discuss, we advise. We then select the best solution
                            to fit. We don’t shoehorn projects and if we feel we’re not a good fit we’ll be honest and tell
                            you from the outset.
                            We're experienced programmers, we love discussing and planning new projects and have years of
                        knowledge and ex</p>
                        <div id="board__img" class="fade-in">
                            <img src="1.png" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home3rd;