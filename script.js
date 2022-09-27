var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');



for (let i = 0; i < lines.length; i++) {
    if (lines[i] === '*') break;

    console.log(`Caso ${i+1}: ${(minLexRotation(lines[i]))} ${(maxLexRotation(lines[i]))}`);
}

function minLexRotation(line) {
    let n = line.length;
   
    let arr = new Array(n);
 
    let concat = line + line;
 
    for(let i = 0; i < n; i++)
    {
        arr[i] = concat.substring(i, i + n);
    }
     
    arr.sort();
 
    return (arr[0]).toLowerCase();
}



function maxLexRotation(line) {
    let n = line.length;
   
    let arr = new Array(n);
 
    let concat = line + line;
 
    for(let i = 0; i < n; i++)
    {
        arr[i] = concat.substring(i, i + n);
    }
     
    arr.sort();
 
    return (arr[n-1]).toLowerCase();
}