type RecordItem = {
    tags: string[];
    notes: string;
    type: string;
    amount: number;
    createAt? : string;
}
type label = {
    id: string;
    name: string;
}
type ModelTagList = {
    data: label[];
    read: () => label[];
    write: () => void;
    create: (name: string) => void;
    update: (id: string,name: string) => void;
    remove: (id: string) => void;
}
type tab = {
    text: string;
    value: string;
}