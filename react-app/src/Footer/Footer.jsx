import React from 'react';
import '../../src/Footer/footer.css';

const date = new Date();
const year = date.getFullYear();

export default function FooterComponent() {
    return (
        <div className='footer'>
            <div className='footerIcons'>
                <p>Copyright &nbsp;</p>
                <i className="bi bi-c-circle"></i>
                <p>&nbsp;{year}</p>
            </div>
        </div>
    )
}