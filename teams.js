function submitForm() {
    let teamNumer = document.getElementById('exampleInputEmail1').value
    let userNames = document.getElementById('exampleInputPassword1').value
    let teamSize = document.getElementById('exampleInputSize').value

    let arrayOfUsernames = userNames.split(',')
    let teamArray = []
    if (typeof teamNumber === 'number' && arrayOfUsernames.length >= 1) {
        for (let j = 0; j < teamNumber; j++) {
            for (let i = 0; i < teamSize; i++) {
                teamArray[i].push(arrayOfUsernames.pop())
            }
        }
    }
}