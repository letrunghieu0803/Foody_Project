const database = {}
const context = document.getElementById('root')
const getUser = async () => {
    const respone = await fetch('https://reqres.in/api/users?page=2')
    const db = await respone.json()

    database.data = db.data
    // console.log(database)

}
const renderUser = () => {
    console.log(database)
    for (let i = 0; i < database.data.length; i++) {
        let userHTML = `
        <div style = "width : 300px" id = "user_${i}">
        <img src="${database.data[i].avatar}" alt="">
        <p>Name: ${database.data[i].first_name} ${database.data[i].last_name}</p>
        <p></p>
        </div>
        <hr>
        `
        context.innerHTML += userHTML
    }


}

const renderUserEmail = () => {
    for (let i = 0; i < database.data.length; i++) {
        let userElement = document.getElementById(`user_${i}`)
        userElement.addEventListener('mouseover', () => {
            if (userElement.children[2].innerText == "") {
                userElement.children[2].innerText = database.data[i].email
            }
        })
        userElement.addEventListener('mouseout', () => {

            userElement.children[2].innerText = ""

        })
    }


}

const main = async () => {
    await getUser()
    renderUser()
    renderUserEmail()
}

main()