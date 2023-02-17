const ulEl = document.getElementById("ul-el")
const delWhat = document.getElementById("del-picker")

export function render(datesArr) {
    
    // a variable to store the html code inside ul.
    let ulHTMLCodes = "" 
    let delWhatHTMLCodes = ""

    // a for loop to loop out the objects
    for (let i = 0; i < datesArr.length; i++) {   
        // check if the target date is in the past or in the future
        const today = new Date()
        const targetDate = new Date(datesArr[i].date)
        const slicedTgtDate = `${targetDate}`.slice(4,15)
        const dayDiff = Math.ceil( (targetDate - today) / (1000 * 3600 * 24) )
        if (dayDiff > 0) {
            ulHTMLCodes += `<li>${datesArr[i].label} is ${dayDiff} days away, on ${slicedTgtDate} </li>`
        } else if (dayDiff === 0) {
            ulHTMLCodes += `<li>${datesArr[i].label} is today! Today is ${slicedTgtDate} </li>`
        } else {
            ulHTMLCodes += `<li>${-dayDiff} days since ${datesArr[i].label}, on ${slicedTgtDate} </li>`
        }

        //render the delete picker options
        delWhatHTMLCodes += `<option value="${i}">${datesArr[i].label}</option>`
    }
    ulEl.innerHTML = ulHTMLCodes
    delWhat.innerHTML = delWhatHTMLCodes
    delWhat.value = ''
}