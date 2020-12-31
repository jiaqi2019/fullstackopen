const initState = ''

export default function(state=initState, action){
  switch(action.type){
    case 'NOTI':
      return new String(action.data)
    case 'DELNOTI':
      return ''
  }
  return state
}

let timer = null
export function setNoti(text, delay){
  return  dispatch => {
    dispatch({
      type: 'NOTI',
      data: text
    })
    clearTimeout(timer)
    timer = setTimeout(()=>{
      dispatch(delNoti())
    }, delay)
  }
}

export function delNoti(){
  return {
    type: 'DELNOTI',
  }
}

