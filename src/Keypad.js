import React from 'react';
import _ from 'lodash';
import Grid from './Grid';

const Keypad = (props) => {
    
    const keypadStyle = () => ({
        height : props.height + '%',
        width : props.width + '%',
        display : 'block'
    })

    /* Debugged */
    const numericalEntries = () => {
        var ans = [];
        for (var i = -Keypad.numberRowLength; 
            i >= -Keypad.numbers.length - Keypad.numberRowLength; 
            i -= Keypad.numberRowLength) 
        {
            ans = ans.concat(
                Keypad.numbers.slice(i)
                    .slice(0, 3)
            );
        }
        return ans.slice(0, Keypad.numbers.length);
    }

    /* Debugged */
    const numericalAndFormatEntries = () => {
        return Keypad.operators[Keypad.keyTypes.inputFormat].slice(0, Keypad.numberRowLength)
            .concat(
                numericalEntries()
            ).concat(
                Keypad.operators[Keypad.keyTypes.inputFormat].slice(Keypad.numberRowLength)
            );
    }

    /* Debugged */
    const allGridEntries = () => {
        return [
            numericalAndFormatEntries(),
            Keypad.operators[Keypad.keyTypes.arithmetic],
            Keypad.operators[Keypad.keyTypes.getAnswer]
        ]
    }

    const numRowsInGrid = (numEntries) => {
        return (numEntries > Keypad.numberOfRows ? Keypad.numberOfRows : numEntries);
    }

    const numColumnsInGrid = (numEntries) => {
        return Math.ceil(
            numEntries / numRowsInGrid(numEntries)
        );
    }

    return (
        <div    style={keypadStyle()}>
            {
                _.range(Object.keys(Keypad.keyTypes).length).map(t => (
                    <div>
                        {/* <div>This is supposed to be a grid</div>
                        {allGridEntries()[t].toString()} */}
                        
                        <Grid   height='40'
                                width='40'
                                cellColor={'#' + Keypad.keyColors[t]}
                                textColor={'#' + Keypad.textColors[t]}
                                numRows={numRowsInGrid(allGridEntries()[t].length)}
                                numColumns={numColumnsInGrid(allGridEntries()[t].length)} 
                                entries={allGridEntries()[t]} 
                                borderColor={'000000'}/>      
                    </div>              
                ))
            }
        </div>
    );
}

Keypad.numbers = _.range(10);

Keypad.operators = [
    [
        'C', '+/-', '%', '.', 'del'
    ],
    [
        '+', '-', 'x', '/'
    ],
    [
        '=' 
    ]
];

Keypad.keyColors = [
    '000000',
    'ff0066',
    'ff9933'
];

Keypad.textColors = [
    'ffffff',
    '000000',
    '000000'
]

Keypad.keyTypes = {
    inputFormat : 0,
    arithmetic : 1,
    getAnswer : 2
}

Keypad.numberRowLength = 3;

Keypad.numberOfRows = 5;
Keypad.numberOfColumns = 4;

export default Keypad;