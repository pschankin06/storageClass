'use strict';
class Storage {
    constructor(name, storageType = 'local', defaultValue = null) {
        this.name = name;
        this.storageType = (storageType === 'local') ? localStorage : sessionStorage;
        this.set(defaultValue);
    }

    get() {
        try {
            return JSON.parse(this.storageType.getItem(this.name));
        } catch (error) {
            alert(error.name);
            alert(error.message);
        }
    }

    set(value) {
        try {
            this.storageType.setItem(this.name, JSON.stringify(value));
        } catch (error) {
            alert(error.name);
            alert(error.message);
        }
    }

    clear() {
        this.storageType.removeItem(this.name);
    }

    isEmpty() {
        const value = !this.get();
        return (value);
    }
}

const names = new Storage('names', 'local', 24);
const names1 = new Storage('names1', 'session', 24);

names.set({ room: 415 });
// names.set();
console.log(names.get());
console.log(names.isEmpty());
// names.clear();
console.log(names.isEmpty());
console.log(names);

// names1.set(34543);   
console.log(names1.get());
console.log(names1.isEmpty());
// names1.clear();
console.log(names1.isEmpty());
console.log(names1);