const variables = /\$[(.*?)]/gm

let finds = document.body.innerHTML.match(variables)

finds.forEach(function(i){
    
    let variableName = i.replace('$','').replace('{','').replace('}','')
    variableName = eval(variableName) 
    
    // placeholders
    if(variableName == '\n'){
        variableName = '<br>'
    }else if(variableName == '\t'){
        variableName = '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
    }

    // php
    if(variableName == /PHP: [a-zA-Z0-9 ]*/gm){
        variableName = `<?php echo ${variableName}; ?>`
    }else if(variableName == /PHP: '[a-zA-Z0-9 ]*'/gm){
        variableName = `<?php echo ${variableName}; ?>`
    }
    
    document.body.innerHTML = document.body.innerHTML.replace(i, variableName)
});
