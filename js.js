let obj = {
    name : "Sizning ismingiz",
    age : "Yoshingiz"
    }
    
for(let i = 1; i <= 5; i++){
    let a= obj.name=prompt('Ismingizni kiriting',"Name");
    let b = obj.age=+prompt("Yoshingizni kiriting","25");
    console.log("Foydalanuvchi  " + i);
    if(a===" "){
        console.log("Siznong ismiz"+ "Name");
    }else{  console.log("Sizning ismingiz  "+a);}
    console.log("Sizning yoshingiz  " +b);    
}
    




  
