import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import EditorInsights from '../../News/EditorsInsights/EditorInsights';

const LeftNab = () => {
    const [catagories, setCatagories] = useState([]);
    useEffect(() => {
        fetch('https://the-news-dragon-server-manik1010.vercel.app/catagories')
            .then(res => res.json())
            // .then(data => console.log(data))
            .then(data => setCatagories(data))
            .catch(error => console.error(error))
    }, [])
    return (
        <div>
            {/* <h2>Left NabBare</h2> */}
            <h4>All Category</h4>
            <div className='ps-4'>
                {
                    catagories.map(catagoriy => <p
                        key={catagoriy.id}
                    >
                        <Link to={`/catagoriy/${catagoriy.id}`} className='text-black text-decoration-none'>{catagoriy.name}</Link>
                    </p>)
                }
            </div>
            <EditorInsights></EditorInsights>

        </div>
    );
};

export default LeftNab;