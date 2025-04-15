/* demonstrates the callback function of button. If the callback has params we need to wrap it inside another callback function */


import './Button.css';

function Button(){

    let count = 0 ;

    const handleClick=(e)=>{
        count = count ^ 1 ;
        if(count==1){
            e.target.innerText = "Clicked!";
            e.target.style.backgroundColor = "green";
        }else{
            e.target.innerText = "Click Me!";
            e.target.style.backgroundColor = "red";
        }
    }
    /*the onClick function captures an event, the event object has many parameters utilising which we can perform many functions 
    similarly we have onDoubleClick event handler */ 

    return (
        <button className="button" onClick={(e)=>handleClick(e)}>
            
            Click Me!
        </button>
    );
}

export default Button;