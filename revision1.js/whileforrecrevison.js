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

    iterateAndLog(n - 1)
}
-------------
3//////
function weirdDivisionWithFor(n) {
    for(var i =1;i<=n;i++){
        if (n%3===0){
            console.log("julia")
        }
        else if (n%5===0){
            console.log("james")
        }else {
            console.log(n)
        }
    }
}
-----------
function weirdDivisionWithFor(n) {
    var i =1
    while(i<=n){
        if (n%3===0){
            console.log("julia")
        }
        else if (n%5===0){
            console.log("james")
        }else {
            console.log(n)
        }
        i++
    }
}
