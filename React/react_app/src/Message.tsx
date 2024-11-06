//PascalCasing
function Message(){
    const name = '';
    //JSX: JavaScript XML
    if(name){ //if name is not empty string or null
        return<h1>Hello {name}</h1>;
    }else{
        return<h1>Hello Welcome</h1>;
    }
    
}

export default Message;