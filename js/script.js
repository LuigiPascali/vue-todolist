// Inizializzazione Vue
const app = Vue.createApp({
  data() {
    return {
      todos: [
        { text: 'Imparare ad usare Vue Js', done: false },
        { text: 'Imparare ad usare al meglio Bootstrap', done: true },
        { text: 'Iniziare ad imparare Python', done: true },
        { text: 'Essere sempre più indipendente nella scrittura dei codici', done:false },
      ]
    }
  },
  mounted() {
    console.log(this.todos);
  }
});

// Monto l'applicazione Vue
app.mount('#app');