import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Currencies = () => {
    const { currency } = useContext(AppContext);
    const [newCurrency, setCurrency] = useState(currency)
    const handleCurrencyChange = (currency) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: newCurrency
        });

    }
    return (
        <div style={{ color: 'lightgreen' }}>
            <label htmlFor="currencySelect"> Currency ({currency.symbol} {currency.name})</label>
                <select className="custom-select" id="currencySelect" onChange={(event) => setCurrency(event.target.value)}>
                            <option defaultValue>Choose...</option>
                            <option value="Marketing" name="marketing"> Marketing</option>
                            <option value="Sales" name="sales">Sales</option>
                            <option value="Finance" name="finance">Finance</option>
                            <option value="HR" name="hr">HR</option>
                            <option value="IT" name="it">IT</option>
                            <option value="Admin" name="admin">Admin</option>
                </select>
        </div>
    );
};
export default Currencies;
