Vue.component('todo-item',{
    props:['content','index'],
    template:'<li @click="handleClick">{{content}}</li>',
    methods:{
        handleClick:function(){
            this.$emit('delete',this.index)
        }
    }
}) //全局组件

//var TodoItem = {
  //  template:'<li>item</li>'
//}//局部组件,需要在实例中使用components调用



new Vue({
    el:'#app-11',
    data:{
        inputValue:'',
        list:[]
    },
    methods:{
        handleSubmit:function(){
            this.list.push(this.inputValue)
            this.inputValue = ''
        },
        handleDelete:function(index){
            this.list.splice(index,1)
        }
    }
})
