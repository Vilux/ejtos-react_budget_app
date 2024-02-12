import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Currencies = () => {
    const { currency, dispatch } = useContext(AppContext);
    const [isOpen, setIsOpen] = useState(false);

    const handleCurrencyChange = (option) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: option
        });
        setIsOpen(false);
    };

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const options = [
        { value: "$", name: "Dollar" },
        { value: "£", name: "Pound" },
        { value: "€", name: "Euro" },
        { value: "₹", name: "Rupee" }
    ];

    console.log(currency);

    return (
      <>
        <div className='alert' style={{ backgroundColor: '#33FF9F', width: "75%", marginBottom: '10px' }}>
            <label htmlFor="currencySelect" style={{ color: 'white' }}> Currency ({currency.value} {currency.name})</label>
            <span onClick={toggleDropdown} className={`arrow ${isOpen ? 'open' : ''}`}>&#9660;</span>
        </div>
        <div style={{ backgroundColor: '#33FF9F', width: "65%" }}>    
            {isOpen && (
                <ul style={{ listStyleType: 'none', padding: 0, margin: 0, border: '1px solid #ccc', borderRadius: '8px' }}>
                    {options.map((option, index) => (
                        <li key={index} onClick={() => handleCurrencyChange(option)}
                            style={{ padding: '10px' }}
                            onMouseEnter={(e) => { e.target.style.backgroundColor = '#f8f9fa'; }} 
                            onMouseLeave={(e) => { e.target.style.backgroundColor = 'inherit'; }}
                        >
                            {option.value} {option.name}
                        </li>
                    ))}
                </ul>
            )}
        </div>
      </>
    );
};

export default Currencies;