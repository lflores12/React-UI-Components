import React from 'react';
import './Header.css';
import moment from 'moment';

const currentDate = moment().format("DD MMM");

const HeaderTitle = () => {
    return (
        <div className = 'header-title'>
            <h1>Lambda School<span> @lambda School {(currentDate)} </span></h1>
            <p>Lets learn React by building simple interfaces with components. Dont try to overthink it, just keep it simple and have fun. Once you feel comfortable using components you are well on your way to mastering React!</p>
        </div>
    );
}

export default HeaderTitle;