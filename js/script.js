// Inizializzazione Vue
const app = Vue.createApp({
  data() {
    return {
      // Dal momento che ho inserito la possibilità di scrivere le cose da fare, ho svuotato l'array. 
      // Per fare il BONUS 2, inserisco nuovamente nell'array delle cose da fare:
      todos: [
        { text: 'Studiare bene Bootstrap', done: true },
        { text: 'Studiare bene Vue JS', done: false },
        { text: 'Finire questo esercizio', done: true },
        { text: 'Iniziare a studiare Python', done: true },
        { text: 'Diventare sempre più autonomo nella scrittura dei code', done:false },
      ],
      newTodoText: ''
    }
  },
  methods: {
    // MILESTONE 3:
    addTodo() {
      if (this.newTodoText.trim() !== '') {
        this.todos.push({ text: this.newTodoText, done: false });
        this.newTodoText = '';
        console.log("Nuovo To-Do aggiunto");
        console.log("Lista aggiornata:", this.todos);
      }
    },
    // MILESTONE 2:
    removeTodo(todo) {
      const index = this.todos.indexOf(todo);
      if (index !== -1) {
        this.todos.splice(index, 1);
      }
      console.log("To-Do rimosso:", todo);
      console.log("Lista aggiornata:", this.todos);
    },
    // BONUS 2:
    toggleTodoDone(todo) {
      todo.done = !todo.done;
      console.log("To-Do modificato:", todo);
      console.log("Lista aggiornata:", this.todos);
    },
  },
  mounted() {
    console.log("Lista iniziale:", this.todos);
  }
});


// Monto l'applicazione Vue
app.mount('#app');