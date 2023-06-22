import React, {useContext, useEffect} from 'react'
import {AppContext} from '../context/AppContext'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const Currency = () => {
    const {currency, dispatch} = useContext(AppContext);
    const changeCurrency = (val) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: val,
        })
    }
    useEffect(() => {
        const dropdownToggle = document.querySelector('.dropdown-toggle');
        const dropdownMenu = document.querySelector('.dropdown-menu');
        dropdownToggle.addEventListener('click', function () {
          dropdownMenu.classList.toggle('show');
        });
      }, []);
    return (
        <div className='alert alert-secondary'>
            <div class="btn-group">
                <button type="button" class="btn btn-info dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    Currency ({currency})
                </button>
                <ul class="dropdown-menu">
                    <li>
                        <button className="dropdown-item btn btn-info"onClick={() => changeCurrency('£')}>
                            £ Pound
                        </button>
                    </li>
                    <li>
                        <button className="dropdown-item btn btn-info"onClick={() => changeCurrency('$')}>
                            $ Dollar
                        </button>
                    </li>
                    <li>
                        <button className="dropdown-item btn btn-info"onClick={() => changeCurrency('₹')}>
                            ₹ Ruppee
                        </button>
                    </li>
                    <li>
                        <button className="dropdown-item btn btn-info"onClick={() => changeCurrency('€')}>
                            € Euro
                        </button>
                    </li>
                    <li>
                        <button className="dropdown-item btn btn-info"onClick={() => changeCurrency('CAD')}>
                            CAD
                        </button>
                    </li>
                    <li>
                        <button className="dropdown-item btn btn-info"onClick={() => changeCurrency('Rp')}>
                            Rupiah
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Currency;
