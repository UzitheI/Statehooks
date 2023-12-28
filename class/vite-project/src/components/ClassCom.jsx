
import { React, Component } from 'react';

class ClassCom extends Component{
    constructor(props){
        super(props)
        //generally you are not required to write props if you dont have a prop value 


        //using the super function allows the props object to be used as this ie this.props

        //how to use state inside a class
        this.state ={
            todos:[],
            inputVal:"",
        }
        this.handleInput=this.handleInput.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleDelete=this.handleDelete.bind(this);
        this.handleCount=this.handleCount.bind(this);

    }
    handleCount(){
        if(this.handleInput){
            count+=1
        }
        if(this.handleDelete){
            count-=1
        }
    }
    handleDelete(todo){
        this.setState((state)=>({
            ...state,
            todos:state.todos.filter((_,i)=>i!==todo)
        }))
    } 
    handleInput(e){
        this.setState((state)=>({
            ...state,
            inputVal:e.target.value,
        }));
    }
    handleSubmit(e){
        e.preventDefault();
        this.setState((state)=>({
            todos:state.todos.concat(state.inputVal),
            inputVal:"",
        }))
    }
        render(){
            return(
                <section>
                    <h3>{this.props.name}</h3>
                    <form action="" onSubmit={this.handleSubmit}>
                        <label htmlFor="task-entry">Enter a task:</label>
                        <input type="text" name="task-entry" 
                        value={this.state.inputVal}
                        onChange={this.handleInput}/>
                        <button type="submit">Submit</button>
                    </form>
                    <h4>All the tasks</h4>
                    <ul>
                        {this.state.todos.map((todo)=>(
                            <li key={todo}>{todo}</li>
                        ))}
                        <button style={{marginLeft:'10px'}} onClick={()=>this.handleDelete(todo)}>Delete</button>
                    </ul>

                </section>
            );
        }

}

export default ClassCom;