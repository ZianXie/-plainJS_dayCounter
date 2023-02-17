//a function to sort array
export function sortArr(arr){
    arr.sort(
        (a, b) => new Date(b.date) - new Date(a.date)
    )
}

//save to local storage
export function saveArr(currentDateArr) {
    let str = JSON.stringify(currentDateArr)
    localStorage.setItem("data", str)
}
