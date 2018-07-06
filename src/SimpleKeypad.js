import React from 'react';


const SimpleKeypad = (props) => {

    const buttonStyle = () => ({
        height : '25px',
        width : '35px'
    });

    return (
        <div>
            <div id='firstRow'>
                <button type='button' style={buttonStyle()}>
                    C
                </button>
                <button type='button' style={buttonStyle()}>
                    +/-
                </button>
                <button type='button' style={buttonStyle()}>
                    %
                </button>
                <button type='button' style={buttonStyle()}>
                    +
                </button>
            </div>
            <div id='secondRow'>
                <button type='button' style={buttonStyle()}>
                    7
                </button>
                <button type='button' style={buttonStyle()}>
                    8
                </button>
                <button type='button' style={buttonStyle()}>
                    9
                </button>
            </div>
            <div id='thirdRow'>
                <button type='button' style={buttonStyle()}>
                    4
                </button>
                <button type='button' style={buttonStyle()}>
                    5
                </button>
                <button type='button' style={buttonStyle()}>
                    6
                </button>
            </div>
            <div id='fourthRow'>
                <button type='button' style={buttonStyle()}>
                    1
                </button>
                <button type='button' style={buttonStyle()}>
                    2
                </button>
                <button type='button' style={buttonStyle()}>
                    3
                </button>
            </div>
        </div>
    );
}

export default SimpleKeypad;