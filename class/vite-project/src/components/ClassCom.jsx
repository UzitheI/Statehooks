
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
    }
        render(){
            return(
                <section>
                    <h3>{this.props.name}</h3>
                    <form action="">
                        <label htmlFor="task-entry">Enter a task:</label>
                        <input type="text" name="task-entry" />
                        <button type="submit">Submit</button>
                    </form>
                    <h4>All the tasks</h4>
                    <ul></ul>

                </section>
            );
        }

}

export default ClassCom;