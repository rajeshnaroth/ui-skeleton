// import React from 'react'
import { connect } from 'react-redux'
import { setHeaderVisibility } from '../../actions/homeMenu'
import LongPage from './LongPage'

const mapStateToProps = function(state, ownProps) {
    return {currentPanel: state.homeMenu.currentPanel}
}

const mapDispatchToProps = function(dispatch, ownProps) {
    return {
        setHeaderVisibility: function(show) {
            dispatch(setHeaderVisibility(show));
        }
    }
}

const LongPageContainer = connect(mapStateToProps, mapDispatchToProps)(LongPage)
export default LongPageContainer