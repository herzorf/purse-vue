const tagList = "tagList";
type ModelTagList = {
    data: string[];
    read: () => string[];
    write: () => void;
    create: (name: string) => void;
}

const modelTagList: ModelTagList = {
    data: [],
    read() {
        this.data = JSON.parse(window.localStorage.getItem(tagList) || "[\"衣\",\"食\",\"住\",\"行\"]") as string[];
        return this.data;
    },
    create(name) {
        if(this.data.indexOf(name) >= 0){alert("标签名已存在");return}
        this.data.push(name);
        this.write();
    },
    write() {
        window.localStorage.setItem("tagList", JSON.stringify(this.data));
    },

};
export {modelTagList};