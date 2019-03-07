export function compareAscend(a, b, key){

    if (typeof a[key] === 'object') {
      let bugA = a[key].map((bug) => ( bug.title)).join(", ");
      let bugB = b[key].map((bug) => ( bug.title)).join(", ");
      let x = bugA.toLowerCase();
      let y = bugB.toLowerCase();
      return x < y ?  -1 : 1
    }else {
      let x = a[key].toLowerCase();
      let y = b[key].toLowerCase();
      return x < y ?  -1 : 1
    }
}

export function compareDescend(a, b, key){

  if (typeof a[key] === 'object') {
    let bugA = a[key].map((bug) => ( bug.title)).join(", ");
    let bugB = b[key].map((bug) => ( bug.title)).join(", ");
    let x = bugA.toLowerCase();
    let y = bugB.toLowerCase();
    return x > y ?  -1 : 1
  }else {
    let x = a[key].toLowerCase();
    let y = b[key].toLowerCase();
    return x > y ?  -1 : 1
  }

}
