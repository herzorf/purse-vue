const tagList = "tagList";

const modelTagList: ModelTagList = {
    data: [],
    write() {
        window.localStorage.setItem("tagList", JSON.stringify(this.data));
    },

    read() {
        this.data = JSON.parse(window.localStorage.getItem(tagList) ||
            "[{\"id\":\"衣\",\"name\":\"衣\"}," +
            "{\"id\":\"食\",\"name\":\"食\"}," +
            "{\"id\":\"住\",\"name\":\"住\"}," +
            "{\"id\":\"行\",\"name\":\"行\"}]") as label[];
        this.write();
        return this.data;
    },
    create(name) {
        const names = this.data.map(item => item.name);
        if (names.indexOf(name) >= 0) {
            alert("标签名已存在");
            return;
        }
        this.data.push({id: name, name});
        this.write();
    },

};
export {modelTagList};