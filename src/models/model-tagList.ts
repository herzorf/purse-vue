import {createID} from "@/lib/createID";

const tagList = "tagList";
const defaultLabels: label[] = [
    {id: createID(),name:"衣"},
    {id: createID(),name:"食"},
    {id: createID(),name:"住"},
    {id: createID(),name:"行"}];
const modelTagList: ModelTagList = {
    data: [],
    write() {
        window.localStorage.setItem("tagList", JSON.stringify(this.data));
    },

    read() {
        this.data = JSON.parse(window.localStorage.getItem(tagList) || JSON.stringify(defaultLabels) ) as label[];
        this.write();
        return this.data;
    },
    create(name) {
        const names = this.data.map(item => item.name);
        if (names.indexOf(name) >= 0) {
            alert("标签名已存在");
            return;
        }
        this.data.push({id: createID(), name});
        this.write();
    },

};
export {modelTagList};