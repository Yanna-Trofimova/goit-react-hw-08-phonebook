import React from 'react';
import {filterContact} from '../../redux/filter'
import { useDispatch, useSelector } from 'react-redux';
import { getFilterContacts } from 'redux/selectors';


const Filter = () => {
    const dispatch = useDispatch();
    const  filter  = useSelector(getFilterContacts)
  
    return (
        <label >
            Find contacts by name
            <input type="text" name="filter" value={filter}
            onChange={e => dispatch(filterContact(e.target.value))}/>
        </label>
    )
};



export default Filter