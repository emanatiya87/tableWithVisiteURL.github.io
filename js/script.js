

// // var x = 5
// // var userName = "John Doe";

// // console.log(x);

// //

// // var x = 5 // number

// // var userName = "John Doe"; // string ``
// // var age = 30; // number

// // var isStudent = true; // boolean

// // var y ; // undefined

// // var z = null; // null

// // var user = {
// //     name: "omar",
// //     age: 30,
// //     isStudent: false ,
// //     wife: {
// //         name: "sarah",
// //         age: 25,
// //         isStudent: false
// //     }
// // }



// // console.log(user.wife.name);






// // // console.log("hello world!");
// // // alert("Hello World!");

// // document.getElementById("demo").innerHTML = "Hello, World!";

// // var x = 5;
// // var y = "5";

// // if( x == y  ) {
// //     console.log(true);
// // }else {
// //     console.log(false);

// // }



// // for(var i = 0; i < 10; i++) {
// //     console.log("hello");
// // }


// // var cartoona = "";
// // for(var i = 0; i < 10; i++) {
// //     cartoona += "<li>Hello, World!</li>";
// // }
// // document.getElementById("myUl").innerHTML = cartoona;



// // var cartoona = ""
// // for(var i = 1960; i < 2006; i++) {
// //     cartoona += `<option > ${i} </option>`;
// // }
// // document.getElementById("selectDate").innerHTML = cartoona;

// // var x = ` Hello, World!`;


// // console.log( 50 + 50 + "50" );



// //  function getSum(){
// //     console.log("hello");
// //  }
// //  getSum();

// // getSum(10 , 10) 

// // function getSum(a, b){
// //     var sum = a + b
// //     console.log(sum);
// // }


// //  function hello(){
// //     alert("Hello, World!");
// //  }


// // Array

// var numbers = [100, 20, 30, 55, 50];

// // for(var i = 0; i < numbers.length; i++) {
// //     console.log(numbers[i]);
// // }

// // numbers.push(6);
// // numbers.shift();
// // sort

// // numbers.sort(function(a, b){return a - b});

// // console.log(numbers);

// // slpice

//  numbers.splice(0);
//  console.log(numbers)


var productName = document.getElementById("productName");
var productPrice = document.getElementById("productPrice");
// var productCategory = document.getElementById("productCategory");
// var productDesc = document.getElementById("productDesc");
// var productCount = document.getElementById("productCount");
// var productImg = document.getElementById("productImg");
var productContainer = []
if (localStorage.getItem("products") == null) {
    productContainer = [];
}
else {
    productContainer = JSON.parse(localStorage.getItem("products"))
    displayProducts()
}


function addProduct() {
    var product = {
        name: productName.value,
        price: productPrice.value,
        // category: productCategory.value,
        // description: productDesc.value,
        // count : productCount.value ,
        // img: `img/${productImg.files[0].name}`,
    }
    // console.log(product.img);
    productContainer.push(product);
    // if (product.count > 0) {
    //     for (var j = 0; j < product.count; j++) {
    //         productContainer.push(product);
    //     }
    // }
    // else {
    //     productContainer.push(product);
    // }
    localStorage.setItem("products", JSON.stringify(productContainer))
    // console.log(productContainer);
    displayProducts()
    clearForm()
}


function displayProducts() {
    var cartoona = "";
    for (var i = 0; i < productContainer.length; i++) {
        cartoona += `<tr>
                        <td>${i + 1}</td>  
                        <td>${productContainer[i].name}</td>
                         <td>       
                            <a href=${productContainer[i].price}  class="btn btn-danger">visite</a> 
                           </td>
                        <td><button class="btn btn-danger">Delete</button></td>
                        </tr>`;
    }
    document.getElementById("tableData").innerHTML = cartoona;
}


//empty form
function clearForm() {
    productName.value = "";
    productPrice.value = "";

}

//delete button
//deleteAll
function deleteAllProducts() {
    productContainer.splice(0);
    displayProducts()
}


//  localStorage.setItem("name" , "mohamed")


//  var x = localStorage.getItem("name");
//  console.log(x);