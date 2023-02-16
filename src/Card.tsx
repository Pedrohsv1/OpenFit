import React, { Component } from 'react';
import { connect } from 'react-redux';
import './kanban.css'

const Card = (props:any) => {
    return (
      <>
        <div className='Card'>
          {props.children}
        </div>
      </>
    );
}

export default Card;