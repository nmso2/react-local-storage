const addToDb = id => {
    const exists = localStorage.getItem(id);
    if (!exists) {
        localStorage.setItem(id, 1);
    }
    else {
        localStorage.setItem(id, parseInt(exists)+1);
    }
}
export {addToDb}