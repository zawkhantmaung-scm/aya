const findOnce = (arrayList) => {
    const val = {};
    arrayList.map((i) => {
        console.log(i, val[i], (val[i]||0) + 1)
        return val[i] = (val[i]||0) + 1;
    });

    console.log(val)
    for (const key in val) {
        if (val[key] == 1) return key
    }
};

const arrayList = [ 1, 2, 2, 3, 1, 4, 4, 4, 4, 4, 5, 5, 6, 6, 7, 7,7 ]

console.log(findOnce(arrayList));
