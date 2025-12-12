/**
 * @param {string} date
 * @return {string}
 */
var reformatDate = function (date) {
    const arr = date.split(' ')

    month = {
        "Jan": '01',
        "Feb": '02',
        "Mar": '03',
        "Apr": '04',
        "May": '05',
        "Jun": '06',
        "Jul": '07',
        "Aug": '08',
        "Sep": '09',
        "Oct": '10',
        "Nov": '11',
        "Dec": '12'
    }

  let day = arr[0].slice(0, -2).padStart(2,'0')
  let year = arr[2]
  let mon = month[arr[1]]

   return `${year}-${mon}-${day}`

};