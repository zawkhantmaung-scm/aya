const findOnce = (arrayList, count) => {
    let c = ''
    arrayList.map((i) => {
        const b = arrayList.filter((j) => j == i)
        if (b.length == count) {
            [c] = b
        }
    })
    return c
};

const arrayList = [ 1, 2, 2, 1, 4, 3, 4, 4, 4, 4, 5, 5, 6, 6, 7, 7,7 ]

console.log(findOnce(arrayList, 1))
