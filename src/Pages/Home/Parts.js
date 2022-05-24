import React, { useEffect, useState } from 'react';
import Part from './Part';

const Parts = () => {
    const [parts, setParts] = useState([]);

    useEffect(() => {
        fetch('parts.json')
            .then(res => res.json())
            .then(data => setParts(data))
    }, [])
    return (
        <div>
            <h2 className='text-center text-primary font-bold text-4xl mt-40'>Our Products</h2>
            <p className='text-center mb-20 italic'><small>Hello dear clients, welcome to our company. <br /> This is very trustable modern car parts provider company from 1890 to still...</small></p>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-auto'>
                {
                    parts.map(part => <Part
                        key={part.id}
                        part={part}
                    ></Part>)
                }
            </div>
        </div>
    );
};

export default Parts;