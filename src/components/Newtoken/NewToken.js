import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import DoneIcon from '@mui/icons-material/Done';
import ImageAvatars from '../Icons/ImageAvatars'
import './NewToken.css';

const NewToken = () => {

  const items= Array(7).fill(null);
  return (
    
    <div className='NewToken'>
      <SearchBar />
      <div className='main1-content'>
        <h2 className='token'>Create New Token</h2>
        <div className='step-text'>Step 1 of 2</div>
        <MdOutlineKeyboardBackspace style={{ border: '2px', width: '35px' }} className='NewToken-icon' />
      </div>
      <div className='second-part'>
        <div className='content'>Chain</div>
        <div className='third-part'>
          <div className='option'>
            <div className='options-parent'>

            <label htmlFor='evm'>EVM <DoneIcon className='done-icon' /></label>
            <input type='radio' id='evm' name='chain' value='evm' defaultChecked />
            </div>
            <div className='includes-parent'> 
            <div className='includes'>Includes</div>
            <div className='includes-dots'> 
              {items.map((_, index) => (
                <div key={index} /> 
              ))}
              </div>
            </div>
          </div>
          <div className='option'>
            <div className='options-parent'>
              
            <label htmlFor='solana'>Solana</label>
            <input type='radio' id='solana' name='chain' value='solana' />
            </div>
            <div className='includes-parent'>

            <div className='includes'>Includes
            </div>
            <div className='includes-dots'> 
              {items.map((_, index) => (
                <div key={index} /> 
              ))}
            </div>
              </div>
          </div>
        </div>
      </div>
      <div className='button'>
        <button className='next-btn' >
          Next
        </button>
      </div>
    </div>
  );
};

export default NewToken;
