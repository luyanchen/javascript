process.stdin.resume();
process.stdin.setEncoding('ascii');

var input = "";
var input_array = "";

process.stdin.on('data', function (data) {
    input += data;
});

process.stdin.on('end', function () {
    input_array = input.split("\n");
    var nLine = 0;

    while(nLine < input_array.length){
        var line = input_array[nLine++].trim();
        if(line === ''){
            continue;
        }
        var input_arrays = line.split(' ');
        console.log(input_arrays);
        for(var t=0;t<input_arrays.length;t++){
            var s = +input_arrays[i];
            var count=0;
            for(var i=1;i<=s;i++){
                for(var j=1;j<=s;j++){
                    if(i*i+j*j == s){
                        count ++;
                    }
                }
            }
            console.log(2*count);
        }
        
        
    }
});