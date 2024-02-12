import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';
import { MdAdd, MdRemove } from 'react-icons/md'; // Import the MdAdd icon

const ExpenseItem = (props) => {
    const { dispatch, currency } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    }

    const reduceAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'RED_EXPENSE',
            payload: expense
        });

    }

    return (
        <tr>
        <td>{props.name}</td>
        <td>{currency.value}{props.cost}</td>
        <td><button onClick={event=> increaseAllocation(props.name)}
            style={{
                borderRadius: '50%',
                backgroundColor: '#33FF9F',
                color: 'white',
                width: '2rem',
                height: '2rem',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        ><MdAdd size={24} /></button></td>
        <td><button onClick={event=> reduceAllocation(props.name)}
            style={{
                borderRadius: '50%',
                backgroundColor: '#FF3633',
                color: 'white',
                width: '2rem',
                height: '2rem',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        ><MdRemove size={24} /></button></td>
        <td><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};

export default ExpenseItem;
