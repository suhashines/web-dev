import React, { useState } from 'react';

function ColorPicker(){
    const [color, setColor] = useState('#000000');

    const handleChange = (event) => {
        setColor(event.target.value);
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '50px' }}>
            <h1>Color Picker</h1>
            <p>Selected Color</p>
            <div style={{ marginBottom: '20px' ,width: '100px', height: '100px', backgroundColor: color }}></div>
            <input type="color" value={color} onChange={handleChange} />
            
        </div>
    );
}

export default ColorPicker;