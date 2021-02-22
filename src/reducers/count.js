import { COLOR_RED, COLOR_GREEN, COLOR_BLUE } from "../constants/constants"

const defaultState = {
	style: { backgroundColor: "white" },
}

// Reducer - это функция которая принимает State и Action
// В зависимости от Action будет меняться наш State (больше мы его изменить не где не можем)
// Только reducer меняет state исходя из переданного в него action
// бъект action - действие над хранилищем.
// Внутри проше писать через switch чем через if
// Если не 1 из кейсов не совпадет нужно вернуть дефолтное состояние State
// Дефолтное состояние проше задать через переменную и присвоить в аргумент
export const colorReducer = function (state = defaultState, action) {
	switch (action.type) {
		case COLOR_RED: {
			return {
				style: { backgroundColor: "red" },
			}
		}

		case COLOR_GREEN: {
			return {
				style: { backgroundColor: "green" },
			}
		}

		case COLOR_BLUE: {
			return {
				style: { backgroundColor: "blue" },
			}
		}

		default: {
			return state
		}
	}
}
