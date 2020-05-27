// 暴露给用户使用，借此触发mutations中的方法，保存数据（可执行异步操作）
export const changeMsg = ({commit}) =>{
    commit({
        type:'mutationsMsg',
        msg:"我是修改以后的数据~~~"
    })
}