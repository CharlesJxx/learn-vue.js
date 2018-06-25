new Vue({
    el:'#app',
    data:{
        message:'Hello Vue.js!'
    }
})     

var app2 = new Vue({
    el:'#app-2',
    data:{
        message:'页面加载于'+new Date().toLocaleString()
    }
})

var app3 = new Vue({
    el:'#app-3',
    data:{
        seen:true
    }
})

var app4 = new Vue({
    el:'#app-4',
    data:{
        todos:[
            {text:'学习JavaScript'},
            {text:'学习Vue'},
            {text:'整个牛项目'}
        ]
    }
})

var app5 = new Vue({
    el:'#app-5',
    data:{
        message:'Hello Vue.js!'
    },
    methods:{
        reverseMessage:function(){
            this.message = this.message.split('').reverse().join('')
        }
    }
})

var app6 = new Vue({
    el:'#app-6',
    data:{
        message:'Hello Vue!'
    }
})

Vue.component('todo-item',{
    props:['todo'],
    template:'<li>{{ todo.text }}</li>'
})

var app7 = new Vue({
    el:'#app-7',
    data:{
        groceryList:[
            {id:0,text:'蔬菜'},
            {id:1,text:'奶酪'},
            {id:2,text:'随便其他什么人吃的东西'}
        ]
    }
})

var app8 = new Vue({
    el:'#app-8',
    data:{
        title:"this is hello world",
        content:"this is content"
    }
    
})

new Vue({
    el:"#app-9",
    data:{
        firstName:'',
        lastName:'',
        count: 0
    },
    computed:{              //计算
        fullName:function(){
            return this.firstName+''+this.lastName
        }
    },
    watch:{                 //侦听器
        firstName:function(){
            this.count ++
        },
        lastName:function(){
            this.count ++
        }
    }
})

new Vue({
    el:'#app-10',
    data:{
        show:true,
        list:[1,2,3]
    },
    methods:{
        handleClick:function(){
            this.show = !this.show;
        }
    }
})
