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
  // MILESTONE 2:
  methods: {
    removeTodo(todo) {
      const index = this.todos.indexOf(todo);
      if (index !== -1) {
        this.todos.splice(index, 1);
      }
      console.log("To-Do rimosso:", todo);
      console.log("Lista aggiornata:", this.todos);
    }
  },
  mounted() {
    console.log("Lista iniziale:", this.todos);
  }
});

// Monto l'applicazione Vue
app.mount('#app');