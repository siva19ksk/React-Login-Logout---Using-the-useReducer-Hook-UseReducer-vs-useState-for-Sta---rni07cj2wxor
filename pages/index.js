import React, { useReducer } from "react";
export default function Home() {
  const initialValue={logged:false,name:" ",password:" "};

const reducer = (state, action) => {
  console.log(state.logged);
  switch(action.type){
    case 'n':
    return {...state,name:" ",password:" ",logged:false,err:false};
    case 'name':
    return {...state,name:action.pay};
    case 'password':
    return {...state,password:action.pay};
    case 'log':
    return {...state,logged:true};
    case 'err':
    return {...state,err:true};
    case 'noerr':
    return {...state,err:false}
  }
};
const [state,dispatch]=useReducer(reducer,initialValue);
const handleEvent=(e)=>{
e.preventDefault(); 
console.log(state.name+" "+state.password);
if(state.name !== " " && state.password !== " "){
  dispatch({type:'log'});
  dispatch({type:'noerr'});
}else{
  dispatch({type:'err'});
}
}
const logout=()=>{
  dispatch({type:'n'});
}
  return (
    <div id="main">
     
{state.logged ? 
 <section className="logout-section">
 <h2>Logged in successfully!</h2>
 <p>{state.name}!</p>
 <button className="logout-btn" onClick={logout}>Logout</button>
</section> : 
<form className="login-form" onSubmit={handleEvent}>
        {state.err &&
          <p className='invalid-error'>Invalid username or password!</p>}
        <section className="username-input">
          <label>Username: </label>
          <input type="text" placeholder="Username" 
          onChange={(e)=>dispatch({type:'name',pay:e.target.value})}
          className="username" />
        </section>
        <section className="password-input">
          <label>Password: </label>
          <input type="password" placeholder="Password" 
          onChange={(e)=>dispatch({type:'password',pay:e.target.value})}
           className="password" />
        </section>
        <button className="login-btn">Login</button>
      </form>
      
      }
    </div>
  );
}
