import React, { useState } from 'react';
import '../../src/Popup/popup.css';
import ContentComponent from '../Content/Content';

function Popup(props) {
    const [formData, setFormData] = useState({
        emoji: '',
        emojiName: '',
        description: ''
    });
    const [dataArray, setDataArray] = useState([]);
    function handleInputData(e) {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    }

    function isEMoji(val) {
        let emoji = /[\u{1F600}-\u{1F64F}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{1F700}-\u{1F77F}\u{1F780}-\u{1F7FF}\u{1F800}-\u{1F8FF}\u{1F900}-\u{1F9FF}\u{1FA00}-\u{1FA6F}\u{1FA70}-\u{1FAFF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{2300}-\u{23FF}\u{2B50}\u{203C}\u{2049}\u{3030}\u{203D}\u{25AA}\u{25AB}\u{25FE}\u{25FD}\u{25FB}\u{25FB}\u{25FE}\u{25B6}\u{1F004}\u{1F0CF}\u{1F170}-\u{1F251}\u{1F300}-\u{1F320}]/ug;
        return emoji.test(val);
    }

    function getPopupData() {
        if ((formData.emojiName && formData.emojiName !== '') && (formData.emoji && formData.emoji !== '') && (formData.description && formData.description !== '')) {

            if (dataArray.length !== 0) {
                let smeEmoji = dataArray.filter(x => x.emoji === formData.emoji);
                if (smeEmoji.length !== 0) {
                    alert(formData.emoji + ' is already added');
                    return;
                }
            }

            let emoji = isEMoji(formData.emoji);
            if (emoji) {
                setDataArray((prevArray) => [...prevArray, formData]);
                setFormData({
                    emoji: '',
                    emojiName: '',
                    description: ''
                });
            }
            else {
                alert('Please enter emoji');
                return;
            }
        }
        else {
            alert('Please fill the details');
        }
    }

    return (
        <div>
            <div style={{ display: props.display }}>
                <div className='popup'>
                    <div className='popupData'>
                        <input type="text" id="emoji" className='inputData' name='emoji' placeholder='eg: 🇮🇳, 🫠,💀' value={formData.emoji} onChange={handleInputData}
                        />
                    </div>
                    <div className='popupData'>
                        <input type="text" placeholder="emoji name" name='emojiName' className='inputData' id="emojiName" value={formData.emojiName} onChange={handleInputData}
                        />
                    </div>
                    <div className='popupData'>
                        <textarea placeholder="add description" className='inputData' name='description' id="description" cols="32" rows="3" value={formData.description} onChange={handleInputData}
                        ></textarea>
                    </div>
                    <div>
                        <button onClick={getPopupData}>Add</button>
                    </div>
                </div>
            </div>
            <ContentComponent data={dataArray} />
        </div>
    )
}

export default Popup;
