const vm = Vue.createApp({
    data() {
        return {
            firstName: 'Ahri',
            lastName: 'Jinx'
        }
    },
    methods: {
        fullName() {
            return `${this.firstName} ${ this.lastName.toUpperCase()}`
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