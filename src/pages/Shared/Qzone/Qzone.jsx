import React from 'react';
import qz1 from '../../../assets/qZone1.png';
import qz2 from '../../../assets/qZone2.png';
import qz3 from '../../../assets/qZone3.png'

const Qzone = () => {
    return (
        <div>
            <h4>Q-Zone</h4>
            <div>
                <img src={qz1} alt="" />
                <img src={qz2} alt="" />
                <img src={qz3} alt="" />
            </div>
        </div>
    );
};

export default Qzone;