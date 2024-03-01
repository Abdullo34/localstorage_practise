//  Local stroge 


// setItem

const userData = ['hello ',
    3030, 'dildora'
]

localStorage.setItem('userData', JSON.stringify(userData))
localStorage.setItem('user', '30')

// getItem bu orqali local stroge dan malumot olishimiz mumkin

const getUserData = JSON.parse(localStorage.getItem('userData'))
console.log(getUserData)

// clear  orqali  localstroge dagi malumotni tozalab yuborishimiz mumkin

// localStorage.clear('userData')