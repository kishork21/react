import React from 'react';
import '../../src/Content/component.css';

export default function ContentComponent(props) {
    let data = props.data;
    if (data.length !== 0) {
        return (
            <div className='content'>
                <div className='allBox'>
                    {data.map(function (d, index) {
                        return (
                            <div className='box' key={index}>
                                <div className='top'>
                                    <h1 className='emoji'>{d.emoji}</h1>
                                </div>
                                <div className='bottom' align="center">
                                    <p className='emojiName'>{d.emojiName}</p>
                                    <p className='description'>{d.description}</p>
                                </div>
                                <div className='editBtn'>
                                    {/* <button onClick={}>Edit</button> */}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}