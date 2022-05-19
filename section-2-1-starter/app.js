const vm = Vue.createApp({
    data() {
        return {
            firstName: 'Ahri',
            lastName: 'Jinx',
            url: 'https://google.com',
            raw_url:'<a href="https://google.com" target="_blank">Google</a>',
            age: 20
        }
    },
    methods: {
        fullName() {
            return `${this.firstName} ${ this.lastName.toUpperCase()}`
        },
        increment() {
            this.age++
        },
        updateLastName(msg, event){
            event.preventDefault()
            console.log(msg)
            this.lastName = event.target.value
        }
    }
}).mount('#app')

// setTimeout(() => {
//     vm.firstName = 'Akali'
// }, 2000)

// Vue.createApp({
//     data() {
//         return {
//             firstName: 'Jhin',
//             lastName: 'Ashe'
//         }
//     }
// }).mount('#app2')