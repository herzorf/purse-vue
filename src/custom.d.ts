type RecordItem = {
    tags: string[];
    notes: string;
    type: string;
    amount: number;
    createAt? : Date;
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
}
