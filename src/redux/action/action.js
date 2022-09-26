import * as action from "../content/content"

export const chooseMenu = (customerChoose) => {
    return {
        type: action.CHOOSE_MENU,
        customerChoose
    }
}

export const thanhToan = () => {
    return {
        type: action.THANH_TOAN,
    }
}
