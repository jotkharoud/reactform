import React from 'react'

class App extends React.Component{
    
   state ={

    obj :{
    username: '',
       email: '',
       password: '',
       confirmpass: '',
       error : '',
   },
        list : []
}

   newError = () =>{
    this.setState({error : ''})
}


  onhandleSubmit = (event) =>{
       event.preventDefault()

         
       this.setState({
           ...this.state,
           list: [...this.state.list,this.state.obj]
       },
       ) 
       setTimeout(()=>console.log(this.state.list),0)



      if(!this.state.username){
           return this.setState({ error :"Enter Username"})
       }
       if(!this.state.email){
        return this.setState ({ error: "Enter Email"})
    }
       if(!this.state.password){
           return this.setState ({ error: "Enter Password"})
       }
       if(this.state.password !== this.state.confirmpass){
           return this.setState({error : "Your Password should be the same"})
       }
       return this.setState({error : ''})
  

    }

     onInputChange=(event)=>{
       this.setState({
           obj: {...this.state.obj,
           [event.target.name]: event.target.value}
       })
    }
   
    render(){
        return(
            <>
            <h1>React Form</h1>
            <div className = "ui segment">
                <form
                className = "ui form"
                >
                    {this.state.obj.error &&
                       <h2 data-test = "error" onClick = {this.newError}>
                           <button 
                           className = " ui red button"
                    onClick = {this.newError}>Missing </button>
                           {this.state.error}
                       </h2>
                    }
                    <label>Username</label>
                   <input 
                   name = "username"
                   placeholder = "Enter Username"
                   type= "text"
                   value= {this.state.username}
                   onChange = {this.onInputChange}
                
                   
                   />
                      <label>Email</label>
                    <input 
                     name = "email"
                   placeholder = "Enter Email"
                   type= "text"
                   value= {this.state.email}
                   onChange = {this.onInputChange}
                   
                   />
                      <label>Password</label>
                    <input 
                     name = "password"
                   placeholder = "Enter Password"
                   type= "text"
                   value= {this.state.password}
                   onChange = {this.onInputChange}
                   
                   />
                      <label>Confirm Password</label>
                     <input 
                      name = "confirmpass"
                   placeholder = "Confirm Password"
                   type= "text"
                   value= {this.state.confirmpass}
                   onChange = {this.onInputChange}
                   />

                </form>
                <button 
                onClick  = {this.onhandleSubmit}
                className = " ui primary button">Submit</button>
            </div>
    
            </>
        )
    }
}


export default App