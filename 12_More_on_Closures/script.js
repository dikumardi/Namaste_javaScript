/**function outest() {
    let c = 21 ;
    function outer(b) {
     function inner() {
        console.log(a,b,c);
        
    }
        let a  = 43 ;
return inner;
}
return outer 
}
 outer()();
var ans = outest()("hello");
ans();                                                                                                                  
 */
function outer() {
    var a = 10 ;
    function inner() {
          console.log(a);
        
    }
    return inner;

}
outer()();
