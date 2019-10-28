import React from 'react'
import { connect } from 'react-redux';

const Counter = (props) =>{
    return(            
        <div>counter: <b> {props.counter}</b></div>
    )
}

const mapStateToProps = (state) => {
    return {
        counter: state.counter
    };
};

export default connect(mapStateToProps)(Counter);
