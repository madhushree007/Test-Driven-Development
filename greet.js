function greet(name) {
    if (!name) {
        return `Hello, my friend.`
    }
    else if (name === name.toUpperCase()) {
        return `HELLO, ${name}!`
    }
    else if (Array.isArray(name)) {
        let newArrCaps = [];
        let newArr = [];
        name.forEach(e => {
            if (e === e.isUpperCase()) newArrCaps.push(e)
            else newArr.push
        })

        let str = 'Hello, ';
        name.forEach(e => {
            if (e == name[name.length - 1]) str += "and " + e + ".";
            else str += e + ", ";
        }
        )
        return str;
    }

    return `Hello, ${name}.`;
}

console.log(greet(["Madhu", "Uttara", "Nitu"]));

