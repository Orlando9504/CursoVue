Vue.component('todo-item',{
    template: '#todo-item-template',
    data(){
        return{
            completed:false
        }
    }
});

new Vue({
  el: '#app',
});

// 1. Se crea el componente
let notificationMessageComponent = {
    // 1.1 Se crea la plantilla
    template: "#notification-message-template",
    // 1.2 Se crean las propiedades de entrada
    props: {
      type: {
        type: String,
        default: "info",
        required: true
      },
      header: {
        type: String,
        default: "Notification Header"
      }
    }
  }