let id: number = parseInt(window.localStorage.getItem("id") || "0");
const createID = () => {
    id++;
    window.localStorage.setItem("id", id.toString());
    return id.toString();
};
export {createID};