var funcs = [];
for(var i=0; i<10; i++){
    funcs.push(function (){
        console.log(i);
    });
}

funcs[2]();

var func = [];
for(let j=0; j<10; j++){
    func.push(function (){
        console.log(j);
    });
}

func[2]();