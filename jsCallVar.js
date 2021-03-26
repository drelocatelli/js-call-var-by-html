const variables = /\${(.*?)}/gm

let finds = document.body.innerHTML.match(variables)

finds.forEach(function(i){
    
    let variableName = i.replace('${','').replace('}','')

    if(variableName == /PHP: (.*?)*/gm){
        variableName = variableName.replace('PHP: ', '')
        variableName = `<?php echo ${variableName} ?>`
        
    }else{
        variableName = eval(variableName) 
        // placeholders
        if(variableName == '\n'){
            variableName = '<br>'
        }else if(variableName == '\t'){
            variableName = '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
        }
    }

    console.log(variableName)

    document.body.innerHTML = document.body.innerHTML.replace(i, variableName)
});
