export const fetchTables = async (setTables) => {
    try {
        let responce = await fetch('/tables');
        let json = await responce.json();
        if (responce.ok) {
            setTables(json);
        }
    } catch (error) {
        console.log(error.message);
    }
}

export const fetchItems = async (setItems) => {
    try {
        let responce = await fetch('/items');
        let json = await responce.json();
        if (responce.ok) {
            setItems(json);
        }
    } catch (error) {
        console.log(error.message);
    }
}