function submitForm() {
    let teamNumber = document.getElementById('inputGroupSelect01').value
    let teamSize = document.getElementById('inputGroupSelect02').value

    let availUsers = []
    let teamMembers = []
    for (let i = 1; i <= (teamSize * teamNumber); i++) {
        availUsers.push(`user${i}`)
    }
    for (let j = 1; j <= teamNumber; j++) {
        let form = document.getElementById('form')
        let divRow = document.createElement('div')
        let teamContent = document.createElement('h4')
        teamContent.setAttribute('class', 'text-white')
        divRow.setAttribute('class', 'row')
        form.appendChild(divRow)
        let divCol = document.createElement('div')
        divCol.setAttribute('class', 'col')
        divRow.appendChild(divCol)
        let teamName = document.createElement('h4')
        teamName.innerHTML = `Team${j}<br>`
        divCol.appendChild(teamName)
        teamMembers.length = 0
        for (let k = 1; k <= teamSize; k++) {
            teamMembers.push(availUsers.pop())
            teamContent.innerHTML = teamMembers
            divCol.appendChild(teamContent)
        }
    }
}