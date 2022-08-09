module.exports.queryString = (objeto) => {

    console.log(Object.entries(objeto))

    const entries = Object.entries(objeto).map(item => {
        console.log(item)
        return `${item[0]}=${item[1]}`;
    })
    
    console.log(entries)
    return entries.join('&');
}   