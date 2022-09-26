const stateMenu = {
    menu: [

        { ma: 'cachua', hinhAnh: './menu/cachua.jpeg', name: 'cà chua', gia: 10, soLuong: 0 },
        { ma: 'xucxich', hinhAnh: './menu/xucxich.jpeg', name: 'xúc xích', gia: 20, soLuong: 0 },
        { ma: 'phomai', hinhAnh: './menu/phomai.jpeg', name: 'phô mai', gia: 20, soLuong: 0 },
        { ma: 'thitbo', hinhAnh: './menu/beef.jpeg', name: 'thịt bò', gia: 30, soLuong: 0 },
        { ma: 'rau', hinhAnh: './menu/rau.png', name: 'rau', gia: 5, soLuong: 0 },
    ],
    banhmi: './menu/banhmi.jpeg',
    tongTien: 0
}

const customer = (state = stateMenu, action) => {
    switch (action.type) {
        case 'CHOOSE_MENU':
            let menuUpdate = [...state.menu]
            let index = menuUpdate.findIndex(customerChoose =>
                customerChoose.ma === action.customerChoose.ma)
            if (index !== -1) {
                state.tongTien += state.menu[index].gia
                menuUpdate[index].soLuong += 1

            }
            return { ...state, menu: menuUpdate }
        case 'THANH_TOAN':
            let reset = state.menu.map((customerChoose, index) => {
                return { ...customerChoose, soLuong: 0 }
            })
            return { ...state, menu: reset, tongTien: 0 }
        default:
            return { ...state };
    }
}
export default customer;