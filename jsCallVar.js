const variables = /\${(.*?)}/gm

let finds = document.body.innerHTML.match(variables)

finds.forEach(function(i){
    
    let variableName = i.replace('${','').replace('}','')

    // if((/\$[A-Za-z]*/gm).test(variableName)){
    //     variableName = eval(`<?php echo ${variableName}; ?>`)
    // }else{
        variableName = eval(variableName) 
        // placeholders
        if(variableName == '\n'){
            variableName = '<br>'
        }else if(variableName == '\t'){
            variableName = '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
        }
    // }

    document.body.innerHTML = document.body.innerHTML.replace(i, variableName)
});
