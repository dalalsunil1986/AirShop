import React from 'react';
import {connect} from 'react-redux';
import Logo from '../components/Logo';
import MainContent from './MainContent';
import Bucket from './Bucket';
import Widget from '../components/Widget';

interface PropsObject {
    isBucketOpen: boolean;
}

const App = (props: PropsObject) => (
    <div>
        <Logo />
        <div className="container" >
            {
                props.isBucketOpen ? 
                    <div className="row">
                        <Bucket/>
                    </div>
                    : <div className="row">
                        <Widget/>
                        <MainContent/>
                    </div>
            }
        </div>
        <button 
            className="float-right m-5 btn btn-outline-dark"
            onClick={() => { 
                localStorage.clear();
                location.reload()}}
        >
           Press to Reset
        </button>
    </div>
);

interface StateObject{ isBucketOpen: boolean }

const mapStateToProps = (state: StateObject) => ({
    isBucketOpen: state.isBucketOpen
});

export default connect(
    mapStateToProps,
    null
)(App);



