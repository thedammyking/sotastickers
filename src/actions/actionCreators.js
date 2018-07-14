function addItem(item) {
    return {
        type: 'ADD_ITEM',
        item
    }
}
function removeItem(index) {
    return {
        type: 'REMOVE_ITEM',
        index
    }
}

function selectSize(size, index) {
    return {
        type: 'SELECT_SIZE',
        index,
        size
    }
}

function enterItemQuantity (index, qty) {
    return {
        type: 'ENTER_ITEM_QUANTITY',
        index,
        qty
    }
}

function duplicateItem(index) {
    return {
        type: 'DUPILCATE_ITEM',
        index
    }
}

export {addItem, removeItem, selectSize, enterItemQuantity, duplicateItem};