const editTree = (tree) => {
    const tab = '   '
    const treeObj = tree.map(({ key, state, value, value1, value2 }) => {
        if (state === 'added') {
            state = '+'
            return `${state} ${key}: ${value}`
        }
        if (state === 'deleted') {
            state = '-'
            return `${state} ${key}: ${value}`
        }
        if (state === 'notChanged') {
            state = ' '
            return `${state} ${key}: ${value}`
        }
        if (state === 'changed') {
            state = ['-', '+']
            return `${state[0]} ${key}: ${value1} \n${tab}${state[1]} ${key}: ${value2}`
        }
    })
    
    console.log('{')
    treeObj.map((value) => {
        console.log(`${tab}${value}`)
    }) 
    console.log('}')
}

export default editTree