const countDuplicates = (i) => {
    const j = {};
    i.split('').map((i) => (j[i] = (j[i] || 0) + 1));
    return j;
};

const sameLetter = (i) => {
    const w = {};

    i.map((i) => {
        const d = countDuplicates(i);
        const k = Object.keys(d).sort().join('');
        if (!Object.keys(w).includes(k)) {
            w[k] = [];
        }
        w[k].push(i);
    });

    Object.values(w).map((i) => console.log(i.join('-')));
};

const input = ['AMOR', 'XISELA', 'JAMON', 'ROMA', 'OMAR', 'MORA', 'ESPONJA', 'RAMO', 'JAPONES', 'ARMO', 'MOJAN', 'MARO', 'ORAM', 'MONJA', 'ALEXIS'];

sameLetter(input);
