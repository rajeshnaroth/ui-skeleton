// import React from 'react'
import { connect } from 'react-redux'

import { setPanelTo } from '../../actions/homeMenu'
import Header from './Header'

const mapStateToProps = function(state, ownProps) {
    return {showHeader: state.homeMenu.showHeader}
}

const mapDispatchToProps = function(dispatch, ownProps) {
    return {
        setPanelTo: function(panelId) {
            dispatch(setPanelTo(panelId))
        }
    }
}

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header)
export default HeaderContainer