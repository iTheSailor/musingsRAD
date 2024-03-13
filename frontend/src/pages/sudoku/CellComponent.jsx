import React from 'react';
import PropTypes from 'prop-types';
import './Sudoku.css';
import { useState, useEffect } from 'react';

const SudokuCell = ({ cell, rowIndex, colIndex, onInputChange, isError }) => {
    const [showError, setShowError] = useState(false);
    useEffect(() => {
        if (isError) {
            // Set showError to true to ensure it's applied if coming from a non-error state
            setShowError(true);
    
            // If an error is present, first turn off the error state briefly before turning it back on
            const timer = setTimeout(() => {
                setShowError(false); // Temporarily clear the error
                setTimeout(() => {
                    setShowError(isError); // Reapply the error state if still valid
                }, 10); // Short delay to ensure DOM update visibility
            }, 2000); // Duration to show the error before attempting to reset
    
            return () => clearTimeout(timer);
        } else {
            // If there is no error, you can remove the error state without introducing a delay
            setShowError(false);
        }
    }, [isError]
    );

    const handleChange = (event) => {
        const newValue = event.target.value.replace(/[^1-9]/g, '');
        if (newValue.length <= 1) {
            onInputChange(newValue, rowIndex, colIndex);
            setShowError(false);
        }
    };
    


    return (
        <div className={`sudoku-cell ${colIndex === 2 || colIndex === 5 ? 'bold-border-right' : ''} ${rowIndex === 2 || rowIndex === 5 ? 'bold-border-bottom' : ''}`}>
            <input
                type="text"
                value={cell.value || ''}
                onChange={handleChange}
                className={`sudoku-input ${cell.clue ? 'concrete' : ''} ${showError ? 'error-cell' : ''}`}
                disabled={cell.clue}
                
                
            />
        </div>
    );
};

SudokuCell.propTypes = {
    cell: PropTypes.object.isRequired,
    rowIndex: PropTypes.number.isRequired,
    colIndex: PropTypes.number.isRequired,
    onInputChange: PropTypes.func.isRequired,
    isError: PropTypes.bool,
};

export default SudokuCell;