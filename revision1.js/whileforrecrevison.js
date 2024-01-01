1///
function iterateAndLogWithFor(n) {
    for(var i=0;i<=n;i++){
        if (n%2===0){
            console.log(n+"is even ")
        }else{
            console.log(n+"is odd")
        }
    }
}
----------
function iterateAndLogWithWhile(n) {
    var i = 0
    while (i <= n) {
        if (i % 2 === 0) {
            console.log(i + " is even ");
        } else {
            console.log(i + " is odd");
        }
        i++
    }
}
2////
function iterateAndLog(n) {
    for (var i = n; i >= 0; i--) {
        if (i === 0) {
            console.log(i + " is even")
        } else if (i % 2 === 0) {
            console.log(i + " is even")
        } else {
            console.log(i + " is odd")
        }
    }
}
--------------------
function iterateAndLog(n) {
    var i = n
    while (i >= 0) {
        if (i === 0) {
            console.log(i + " is even")
        } else if (i % 2 === 0) {
            console.log(i + " is even")
        } else {
            console.log(i + " is odd")
        }
        i--
    }
}
-----------------
unction iterateAndLog(n) {
    if (n === 0) {
        console.log(n + " is even")
    }

    if (n % 2 === 0) {
        console.log(n + " is even")
    } else {
        console.log(n + " is odd")
    }

    iterateAndLogRecursively(n - 1)
}
-------------
3//////
