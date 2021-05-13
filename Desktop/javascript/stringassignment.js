var lower="Kaveri DADDIMANI from JamKhaNdi";
console.log(lower.toLowerCase());
console.log(lower.toUpperCase());


console.log(lower.charAt(2));

var index=lower.indexOf("m",0);
console.log(index);

var str=[2,"qwe","xcv","nm"];
var concat=str.concat("hii");
console.log(concat);

var con1=str.concat(3,8);
console.log(con1);

var st1=[2,4];
var st2=["cvb",6];
var con=str.concat(st1,st2);
console.log(con);

var inc=str.includes("nm",0);
console.log(inc);

var string="kaveri , ram, kavita";
var substr=string.substr(10,2);
console.log(substr);

var rep=string.replace("ram","laxmi");
console.log(rep);

var trim=string.trim();
console.log(trim);

var cn="hii".concat("hello");
console.log(cn);
