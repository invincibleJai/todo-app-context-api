import React from 'react';
import { ACTIVE_FILTER, ALL_FILTER, COMPLETED_FILTER } from '../constants';

import './Footer.css';

const Footer: React.FC<{item:number, storage: string, filterTodoList: (type:string) => void}> = ({item = 0, storage, filterTodoList}) => {
    return (
        <div className="footer">
            <button type="button" style={{flex:1}} onClick={() => filterTodoList(ALL_FILTER)}>All Item</button>
            <button type="button" style={{flex:1}} onClick={() => filterTodoList(ACTIVE_FILTER)}>Active</button>
            <button type="button" style={{flex:1}} onClick={() => filterTodoList(COMPLETED_FILTER)}>Completed</button>
            <span style={{color: '#cecece', flex:4, textAlign: 'center'}}>{item} Items | Make use of {storage} to store data</span>
        </div>
    );
}

export default Footer;
