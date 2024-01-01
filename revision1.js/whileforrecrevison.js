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
---------------
4////
function laughWithFor(n) {
    var h="ha"
    for(var i=0 ; i<n-1 ; i++){
         h+="ha"
    }
    return h
}
------------
function laughWithFor(n) {
    var h="ha"
    var i=0 
    while(i<n-1) {
         h+="ha"
        i++
    }
    return h
}
------------
5////
function sumWithWhile(n) {
    var s=0
    for (var i=n;i>0;i--){
        s+=i
    }
    return s
}
----------
function sumWithWhile(n) {
    var i=n
    var s=0
    while (i>0){
        s+=i
        i--
    }
    return s
}
-----------
5////
function fac(n){
    if(n===0){
        return 1
    }
    return n*fac(n-1)
    
}
------------
6////
function rangeFor(x,y ) {
    var res=[]
    for(var i=x;i<y;i++){
        res.push(i)
    }
    return res
}
----------
function rangeFor(x,y ) {
    var i=x
    var res=[]
    while (i<y){
        res.push(i)
        i++
    }
    return res
}
-----------
7/////
function rev(str){
    var r=""
        for (var i=str.length-1;i>=0;i--){
        r+=str[i]
        }
        return r
    }
    -----------------
    function rev(str){
        var i=str.length-1
        var r=""
            while (i>=0){
            r+=str[i]
            i--
            }
            return r
        }
-------------
8/////
9/////
10////
11////
function remove(arr,el){
    var t=[]
    for (var i=0;i<arr.length;i++){
        if(arr[i]!==el){
           t.push(arr[i])
        }
    }
    return t
        
}
12///
function average(arr){
    var res=0
    var sum=0
    for(var i=0;i<arr.length;i++){
        sum+=arr[i]
    }
    return res=sum/arr.length
}
13///
function findMax(arr) {
    var big=[0]
  for (var i=0;i<arr.length;i++){
     if( arr[i]>big){
         big=arr[i]
     }
      
  }
      return big
    
}
----------
14////

