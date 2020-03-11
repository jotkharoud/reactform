import React from 'react'

class App extends React.Component{
    
   state ={

    obj :{
    username: '',
       email: '',
       password: '',
       confirmpass: '',
      
   },
        list : []
}

   newError = () =>{
    this.setState({error : ''})
}


  onhandleSubmit = (event) =>{
       event.preventDefault()

         let res = Object.entries(this.state.obj);
         let arr=[];//which stores the properties which are left empty in form
          for(let [key,value] of res){
              if(value.length==0){
                arr.push(key)
              }
          }

//if there are no fields left empty then the arr length will be 0)
       if(arr.length==0){
              if(this.state.obj.password!==this.state.obj.confirmpass){
                try {
                     throw new Error(`Password doesn't match Confirm password`);
                    } catch (error) {
                                      alert(error.name+':'+ error.message)
                                   }
              }
              else{
                    this.setState({
                                     ...this.state,
                                     list: [...this.state.list,this.state.obj]
                                  }) ;

                    setTimeout(()=>console.log(this.state.list),0)
  
                  }

        }
      
      else{
              try {
                      throw new Error(arr)
                   } 
                   
              catch (e) {
                          alert(e.name + ':Please Enter ' + ':-' +e.message)
                        }     
         }

  

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
                   type= "email"
                   value= {this.state.email}
                   onChange = {this.onInputChange}
                   
                   />
                      <label>Password</label>
                    <input 
                     name = "password"
                   placeholder = "Enter Password"
                   type= "password"
                   value= {this.state.password}
                   onChange = {this.onInputChange}
                   
                   />
                      <label>Confirm Password</label>
                     <input 
                      name = "confirmpass"
                   placeholder = "Confirm Password"
                   type= "password"
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