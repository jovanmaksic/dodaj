import React from 'react'
import { connect } from 'react-redux';
import { dodaj } from '../actions';
import { oduzmi } from '../actions';


const Buttons =(props) =>{
    return(
        <div>
            <div>
                <button onClick={props.dodaj} className="ui button primary">
                    Dodaj
                </button>
            </div>
            <div>
                <button onClick={props.oduzmi} className="ui button primary">
                    Oduzmi
                </button>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        counter: state.counter
    };
};

export default connect(mapStateToProps, {
    dodaj: dodaj,
    oduzmi: oduzmi
})(Buttons);