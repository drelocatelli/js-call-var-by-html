const variables = /\${(.*?)}/gm

let finds = document.body.innerHTML.match(variables)

finds.forEach(function(i){
    
    let variableName = i.replace('$','').replace('{','').replace('}','')

    // php
    if(variableName.startsWith('PHP: ')){
        if(variableName == /PHP: [a-zA-Z0-9 ]*/gm){
            variableName = variableName.replace('PHP: ', '')
            variableName = '$'+variableName
            variableName = `<?php echo ${variableName}; ?>`
            
        }else if(variableName == /PHP: '[a-zA-Z0-9 ]*'/gm){
            variableName = variableName.replace('PHP: ', '')
            variableName = `<?php echo ${variableName}; ?>`
        }
    }else{
        variableName = eval(variableName) 
    }

    
    // placeholders
    if(variableName == '\n'){
        variableName = '<br>'
    }else if(variableName == '\t'){
        variableName = '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
    }


    console.log(variableName)
    
    document.body.innerHTML = document.body.innerHTML.replace(i, variableName)
});
