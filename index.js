

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) 

    return payable
}

function createEmployeeRecord(arr){
    return {
        firstName: arr[0],
        familyName: arr[1],
        title: arr[2],
        payPerHour: arr[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}

function createEmployeeRecords(arr){
     return arr.map(employee => createEmployeeRecord(employee))
}

function createTimeInEvent(dateStamp){
    this.timeInEvents.push(createTimeEvent(dateStamp,"TimeIn"))
    return this
}

function createTimeOutEvent(dateStamp){
    this.timeOutEvents.push(createTimeEvent(dateStamp,"TimeOut"))
    return this
}

function hoursWorkedOnDate (date) {
    let start = this.timeInEvents.find(record => record.date === date).hour
    let end = this.timeOutEvents.find(record => record.date === date).hour
    return (end - start) / 100
}

function wagesEarnedOnDate(date){
    return hoursWorkedOnDate.call(this, date) * this.payPerHour
}

function findEmployeeByFirstName(srcArray, firstName){
    return srcArray.find(record => record.firstName === firstName)
}

function calculatePayroll(arr){
    return arr.reduce((acc, em) => {
        return acc + allWagesFor.call(em)
    },0)
}

function createTimeEvent(timeStamp, type){
    return {
        type,
        hour: parseInt(timeStamp.split(" ")[1]),
        date: timeStamp.split(" ")[0]
    }
}