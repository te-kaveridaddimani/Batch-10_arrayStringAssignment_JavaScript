var arr=["kaveri","laxmi","pinki",null,200,true,"dinga",false,"technoelevate"];
console.log(arr);

var include=arr.includes("laxmi",3);//true  includes(element,from index)
console.log(include);

arr.push("nandu");
arr.pop();//delete pushed record
arr.push("asd")
console.log(arr);

arr.shift();//delete first record
console.log(arr);

arr.unshift("first","second");//add item in first
console.log(arr);

arr.splice(0,2);//delete record
console.log(arr);

var sli=arr.slice(0,4);//display all record btw these index
console.log(sli);

var join=arr.join();
//var join=arr.join('');
//var join=arr.join(".");
console.log(join);

var index=arr.indexOf("k",2);
console.log(index);

var index1=arr.indexOf("dinga",1);
console.log(index1);

var arr1=[40,8,9,0,"adh","zxc",1];
var map=arr1.map(x=> x*2);
console.log(map);




var arr2=["array","springboot","html","css","javascript","reactjs"];
var fil=arr2.filter(arr2 =>arr2.length>4);
console.log(fil);