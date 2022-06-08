interface IPersonData {
    name: string;
    secondName: string;
    age: number;
}

interface IStudentData extends IPersonData {
    phone: string;
}

export class Person {
    readonly _name: string;
    readonly _secondName: string;
    readonly _age: number;
    constructor(obj: IPersonData) {
        this._name = obj.name;
        this._secondName = obj.secondName;
        this._age = obj.age;
    }
    getData(): IPersonData {
        return {
            name: this._name,
            secondName: this._secondName,
            age: this._age,
        };
    }
}

export class Student extends Person {
    readonly _phone: string;
    constructor(obj: IStudentData) {
        super(obj);
        this._phone = obj.phone;
    }
    getData(): IStudentData {
        return {
            name: this._name,
            secondName: this._secondName,
            age: this._age,
            phone: this._phone,
        };
    }
}
