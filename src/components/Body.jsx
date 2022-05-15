import React, { useEffect } from 'react';


const Body = ({tick}) => {
    
    useEffect(() => {
        const timerID = setInterval(() => tick(), 1000);
        return () => clearInterval(timerID);
    });


    return (
        <section>

        </section>
    );
};

export default Body;