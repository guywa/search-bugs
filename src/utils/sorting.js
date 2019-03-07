export function compareAscend(a, b, key){
    var x = a[key].toLowerCase();
    var y = b[key].toLowerCase();
    return x < y ?  -1 : 1
}

export function compareDescend(a, b, key){
    var x = a[key].toLowerCase();
    var y = b[key].toLowerCase();
    return x > y ?  -1 : 1

}
