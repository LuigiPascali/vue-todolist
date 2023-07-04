// Inizializzazione Vue
const app = Vue.createApp({
  data() {
    return {
      // Dal momento che ho inserito la possibilità di scrivere le cose da fare, ho svuotato l'array. 
      todos: [],
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
    }
  },
  mounted() {
    console.log("Lista iniziale:", this.todos);
  }
});


// Monto l'applicazione Vue
app.mount('#app');