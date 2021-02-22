import React from "react"
import { connect } from "react-redux"
import { actionRed, actionBlue, actionGreen } from "../actions/colorButton"

export const Counter = function ({ actionRed, actionBlue, actionGreen, color }) {
	console.log(color)
	return (
		<div>
			<button type="text" style={color} onClick={actionRed}>
				RED
			</button>
			<button type="text" style={color} onClick={actionGreen}>
				GREEN
			</button>
			<button type="text" style={color} onClick={actionBlue}>
				BLUE
			</button>
		</div>
	)
}

const mapStateToProps = function (state) {
	return { color: state.style }
}

const mapDispatchToProps = {
	actionRed: actionRed,
	actionBlue: actionBlue,
	actionGreen: actionGreen,
}

export const CountContainer = connect(mapStateToProps, mapDispatchToProps)(Counter)
