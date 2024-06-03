import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import DoneIcon from '@mui/icons-material/Done';
import './NewToken.css'


const NewToken = () => {
  return (
    <div className= 'NewToken'>
      <SearchBar />
    <div className='main1-content'>

      <h2 className='token'>Create New Token</h2>
      <div className='step-text'>Step 1 of 2</div>
    <MdOutlineKeyboardBackspace  style={{
      border: '2px',
      width :'35px'
    }}
    className=' NewToken-icon'/>
    </div>
    
    <div className='second-part'>
      <div className= 'content'> Chain </div>
      <div className='third-part'>
        EVM <DoneIcon className ='done-icon' />
        <div className ='includes'>Includes</div>
      </div>
    </div>
    </div>
    
  );
};

export default NewToken;
