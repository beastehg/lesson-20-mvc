import { COLOR_RED, COLOR_GREEN, COLOR_BLUE } from "../constants/constants"

export function actionRed() {
	return { type: COLOR_RED }
}

export function actionBlue() {
	return { type: COLOR_BLUE }
}

export function actionGreen() {
	return { type: COLOR_GREEN }
}
