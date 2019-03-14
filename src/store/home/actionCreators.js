import * as type from './type'
import http from '../../utils/http'

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
    ,
    getList(){
      return dispatch => {
        http(
         {  
            method:"get",
            url:"/data/page1.json"
        }
        )
         .then( )
         .then( result => {
           let action = {
             type: type.LIST_PAGE1_DATA, 
             payload: result
           }
           dispatch( action )
         })
         .catch( error => console.log( error))
      }
    },
    getList2(){
      return dispatch => {
        http(
         {  
            method:"get",
            url:"/data/page2.json"
        }
        )
         .then( )
         .then( result => {
           let action = {
             type: type.LIST_PAGE2_DATA, 
             payload: result
           }
           dispatch( action )
         })
         .catch( error => console.log( error))
      }
    },
    getList3(){
      return dispatch => {
        http(
         {  
            method:"get",
            url:"/data/page3.json"
        }
        )
         .then( )
         .then( result => {
           let action = {
             type: type.LIST_PAGE3_DATA, 
             payload: result
           }
           dispatch( action )
         })
         .catch( error => console.log( error))
      }
    }
}

export default actionCreators