const variables = /\${(.*?)}/gm

let finds = document.body.innerHTML.match(variables)

finds.forEach(function(i){
    let variableName = i.replace('$','').replace('{','').replace('}','')
    document.body.innerHTML = document.body.innerHTML.replace(i, eval(variableName))
});
