let timeNow = new Date()
let dateNow = timeNow.getDate()
let yearNow = timeNow.getFullYear()
let monthNow = timeNow.getMonth() + 1
$("#date").text(monthNow.toString() + "/" + dateNow.toString() + "/" + yearNow.toString())
$("#week-no").text((getCurrentWeekNumber() - getGivenWeekNumber(new Date(2022, 7, 1))) + 1)

function getCurrentWeekNumber() {
    let currentDate = new Date()
    startDate = new Date(currentDate.getFullYear(), 0, 1)
    let days = Math.floor((currentDate - startDate) /
        (24 * 60 * 60 * 1000))

    // let weekNumber = Math.ceil(days / 7);
    return Math.ceil(days / 7)
}

function getGivenWeekNumber(neededDate) {
    let startDate = new Date(neededDate.getFullYear(), 0, 1)
    let days = Math.floor((neededDate - startDate) /
        (24 * 60 * 60 * 1000))

    // let weekNumber = Math.ceil(days / 7);
    return Math.ceil(days / 7)
}
