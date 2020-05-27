//mutations是用来触发事件，相当于方法，用户需要通过触发这个方法，借此来保存数据；第二个参数使用户传来的值，然后在方法中赋值给state中的变量
export const mutationsMsg = (state,payload)=>{
    state.msg = payload.msg;
}