const variables = /\${(.*?)}/gm

let finds = document.body.innerHTML.match(variables)

finds.forEach(function(i){
    
    let variableName = i.replace('$','').replace('{','').replace('}','')
    variableName = eval(variableName)    
    
    if(variableName == '\n'){
        variableName = '<br>'
    }else if(variableName == '\t'){
        variableName = '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
    }
    
    document.body.innerHTML = document.body.innerHTML.replace(i, variableName)
});
