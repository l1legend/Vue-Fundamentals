let vm = Vue.createApp({
  data() {
    return {
      people: [
        {
          name: 'Ahri',
          message: 'Assassin mage midlaner'
        },
        {
          name: 'Jinx',
          message: 'ADC hyper carry dragonlaner'
        },
        {
          name: 'Caitlyn',
          message: 'ADC Sniper dragonlaner'
        }
      ]
    }
  },
  methods: {
    move() {
      const first = this.people.shift()
      this.people.push(first)
    }
  }
}).mount('#app')
