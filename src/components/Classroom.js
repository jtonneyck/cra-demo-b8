import React from 'react';

const Classroom = (props) => {
    return (
        <div>
            <h1>Web dev bootcamp</h1>
            <div>
                <h1>Syllabus</h1>
                <ul>
                    <li>Module1</li>
                    <li>Module2</li>
                    <li>Module3</li>
                </ul>
            </div>
            <div>
                <h1>Students</h1>
                {props.children}
            </div>
        </div>
    );
}

export default Classroom;
