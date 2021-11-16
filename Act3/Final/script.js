let PlanPickerItemComponent = {
    template: "#plan-template",
    props: {
      name: {
        type: String, 
        default: "No hay plan", 
        required: true, 
      },
      selectedPlan: {
        type: String,
      }
    },
    computed:{
      isSelected(){
        return this.name === this.selectedPlan;
      }
    },
    methods: {
      select() {
        this.$emit("select", this.name);
      }
    }
  };


let PlanPickerComponent= {
    template: "#plan-picker-item-template",
    components: {
        PlanPickerItem : PlanPickerItemComponent
    },
    data(){
        return{
            plans:["El curioso","El adictivo","El trabajo duro","El único"],
            selectedPlan : null
        }
    },
    methods:{
        selectPlan(plan){
            this.selectedPlan=plan;
        }
    }
};


new Vue({
    el: "#app",
    components:{
        'plan-picker':PlanPickerComponent
    }

  });

    
