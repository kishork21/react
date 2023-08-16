import React, { useState } from 'react';
import '../../src/Navbar/navbar.css';
import Popup from '../../src/Popup/Popup'

export default function NavbarComponent() {
    let [display, setDisplay] = useState('none');
    return (
        <div>
            <div className='navbar'>
                <div className='icons'>
                    <i className="bi bi-box-seam-fill"></i>
                    <h2>emojiPedia</h2>
                </div>
                <div className='btn'>
                    <button id='addEmojiBtn' onClick={() => setDisplay('block')}>Add Emoji</button>
                    <button style={{ display: display }} onClick={() => setDisplay('none')}>Close</button>
                </div>
            </div>
            <Popup display={display} />
        </div>
    );
}
