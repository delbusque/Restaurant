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