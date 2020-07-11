import {createID} from "@/lib/createID";

const tagList = "tagList";
const xxx = () =>{
    if(!window.localStorage.getItem(tagList)){
        const defaultLabels: label[] = [
            {id: createID(),name:"衣"},
            {id: createID(),name:"食"},
            {id: createID(),name:"住"},
            {id: createID(),name:"行"}];
        window.localStorage.setItem(tagList,JSON.stringify(defaultLabels))
    }
};
xxx()
const modelTagList: ModelTagList = {
    data: [],
    write() {
        window.localStorage.setItem("tagList", JSON.stringify(this.data));
    },

    read() {
        this.data = JSON.parse(window.localStorage.getItem(tagList) || "[]") as label[];
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
    update(id: string,name: string){
        const label = this.data.filter((item)=> item.id === id)[0];
        label.name = name;
        this.write()
    },

    remove(id: string){
        this.data = this.data.filter((item) => item.id !== id);
        this.write()
        window.history.back()
    }
};
export {modelTagList};