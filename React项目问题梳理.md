# React项目问题梳理

### 	1.列表渲染

​		使用this.state.menudatas.map ()  

​			map 接受一个函数

​					只能渲染一层  需要嵌套渲染

​					绑定事件  和条件渲染 可以使用三目   && 等

### 	2.组件的通信

​			子组件通过事件改变父组件的状态  （state）

​				1.在父组件初始化状态				

```
	constructor(props){
        super(props)
        this.state={
            dispalykey:true,
            menudatas:null
        }
    }
```

​				2.在渲染中将父组件的状态绑定到子组件的属性

​					在子组件中通过属性 props 获取  

​				3.修改父组件的状态只能在父组件身上修改  通过 setState

​				

​				4.通过传递的状态或者属性修改样式=>  通过  ${props=>this.props?......}实现  （  针对styled）

### 	3.react-router

​			https://www.jianshu.com/p/548674270455

###### 			react-router是浏览器和原生应用的通用部分。

###### 			react-router-dom是用于浏览器的。

###### 			react-router-native是用于原生应用的。



##### 			安装 npm install react-router-dom --save



​			{BrowserRouter }  包裹需要路由的大组件  一般就在最外层

​			<Route/>  跳转到的路由  component={  组件 }



### 4.react-redux

​	1）.数据传输原理

​		1.store文件夹是 一个 大型的数据仓库

​			index.js  用于存储  store 数据  并且是一个数据出口

```
import { createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducer'
**const store = createStore(reducer,applyMiddleware(thunk))<数据导出的关键>
export default store

 
```

 		2.actionCreators .js   一段逻辑过程  主要用于异步的数据请求  并不返回数据  而是 return一个dipatch函数  函数内的异步将通过执行 dispatch( action ) 将处理的数据发送到reducer 进行处理

```
import * as type from './type'
const actionCreators = {
    getHot(){
      /* 
        异步请求
      */
     return dispatch => {
       fetch('/data/menudata.json')
        .then( res => res.json())
        .then( result => {
          let action = {
            type: type.HOME_LRFT_DATA, 
            payload: result
          }
          dispatch( action )
        })
        .catch( error => console.log( error))
     }
    }
}
export default actionCreators
```

 3. reducer.js 纯函数  必须要有一个返回值  是新的state    函数接收(previousState=state,action ) 两个参数

    action 为actionCreators =》dispatch( action )  返回的结果 previousState=state 用于存储新的state

    <必须初始化state  ——previousState=state这一步—>

    let new_state={...previousState} 

    return new_state *****  重点

```
import state from './state'
import * as type from './type'
const reducer = (previousState=state,action)=>{
    let new_state={...previousState}
    switch(action.type){
        case type.HOME_LRFT_DATA:
            new_state.left=action.payload
        break;
        default:
        break;
    }
    return new_state
}
  export default reducer
```



5.state .js 设置数据的初始化，，，  在reducer.js 中会使用到  就是用reducer修改初始化过来的数据

```
const state={
    left:null
}

export default state
```



6.type.js  定义事件类型  actionCreators .js 通过dispatch( action ) 到reducer.js的类型 判断是什么类型来修改state.js中相应的数据

```
export const HOME_LRFT_DATA='HOME_LRFT_DATA'
```





7.调用方法

​      需要用到以下几个工具

​	import { connect } from 'react-redux'
	import { bindActionCreators} from 'redux'

和一个调用actionCreators.js的方法

​	import actionCreators from '../store/home/actionCreators'
		connect的作用就是配合 <Provider >  实习数据全局共享的作用  里面需要两个东西

（state => state,
    dispatch => {
      return bindActionCreators(actionCreators,dispatch)
    }）

```
import actionCreators from '../store/home/actionCreators'
import { connect } from 'react-redux'
import { bindActionCreators} from 'redux'
const getHome = (UIComponent) => {
  return connect(
    state => state,
    dispatch => {
      return bindActionCreators(actionCreators,dispatch)
    }
  )(UIComponent)
}
export default getHome
```

8.在全局的index.js中 导入全局共享组件

import { Provider } from 'react-redux';

 和store的库（这个库在）‘store/index.js’中已经通过

const store = createStore(reducer,applyMiddleware(thunk))导出到全局  只需配合connect  和react-redux 的’<Provider >‘使用

import store from './store'

###  5.路由传递参数



```
1.params
<Route path='/path/:name' component={Path}/>
<link to="/path/2">xxx</Link>
this.props.history.push({pathname:"/path/" + name});
读取参数用:this.props.match.params.name

作者：_花
链接：https://www.jianshu.com/p/ad8cc02b9e6c
来源：简书
简书著作权归作者所有，任何形式的转载都请联系作者获得授权并注明出处。
```

```
2.query
<Route path='/query' component={Query}/>
<Link to={{ path : ' /query' , query : { name : 'sunny' }}}>
this.props.history.push({pathname:"/query",query: { name : 'sunny' }});
读取参数用: this.props.location.query.name

作者：_花
链接：https://www.jianshu.com/p/ad8cc02b9e6c
来源：简书
简书著作权归作者所有，任何形式的转载都请联系作者获得授权并注明出处。
```

```
3.state
<Route path='/sort ' component={Sort}/>
<Link to={{ path : ' /sort ' , state : { name : 'sunny' }}}> 
this.props.history.push({pathname:"/sort ",state : { name : 'sunny' }});
读取参数用: this.props.location.query.state

作者：_花
链接：https://www.jianshu.com/p/ad8cc02b9e6c
来源：简书
简书著作权归作者所有，任何形式的转载都请联系作者获得授权并注明出处。
```

```
4.search
<Route path='/web/departManange ' component={DepartManange}/>
<link to="web/departManange?tenantId=12121212">xxx</Link>
this.props.history.push({pathname:"/web/departManange?tenantId" + row.tenantId});
读取参数用: this.props.location.search

作者：_花
链接：https://www.jianshu.com/p/ad8cc02b9e6c
来源：简书
简书著作权归作者所有，任何形式的转载都请联系作者获得授权并注明出处。
```





### 6.在非路由组件获取路由信息

​	1.withRouter **作用：**把不是通过路由切换过来的组件中，将react-router 的 history、location、match 三个对象传入props对象上

>  https://www.cnblogs.com/luowenshuai/p/9526341.html