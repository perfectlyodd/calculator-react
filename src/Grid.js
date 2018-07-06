import React from 'react';
import _ from 'lodash';
import './App.css';

const Grid = (props) => {
    
    /* Width adjustment seems to work here */
    const overallStyle = () => ({
        display : 'block',
        height : props.height + '%',
        width : props.width + '%',
        border : '1px solid black'
    })

    /* Width adjustment is semifunctional here */
    const rowStyle = () => ({
        display : 'block',
        height : (100 / props.numRows) + '%',
        width : '100%'
    })

    /* Width adjustment is broken here */
    const cellStyle = () => ({
        height : props.height / props.numRows,
        width : props.width / props.numColumns,
        //textAlign : 'center',
        //verticalAlign : 'middle',
        //lineHeight : props.relativeTextSize * props.height / props.numRows,
        backgroundColor : props.cellColor,
        color : props.textColor,
        borderColor : '#000000',
        display: 'inline'
    })

    /* Width / height adjustment is broken here */
    const mockCellStyle = () => ({
        height : '100%',
        //width : (100 / props.numCols) + '%',
        width : '33%',
        backgroundColor : props.cellColor,
        color : props.textColor,
        borderColor : '#66ffff',
        border : '1px solid red',
        display : 'inline',
        //position : 'relative'
    })

    return (
        <div style={overallStyle()}>
            {
                _.range(props.numRows).map(row => (
                    <div style={rowStyle()}>
                        {
                            _.range(props.numColumns).map(col => (
                                <div    style={mockCellStyle()}>
                                    {props.entries[row * props.numColumns + col]}
                                </div>
                                // <div>
                                //     A grid entry
                                // </div>
                            ))
                        }
                    </div>
                ))
            }
        </div>
    );
}


export default Grid;