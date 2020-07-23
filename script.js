$(function(){
   //cuda
    $("#i").hover(function(){
       $("#i").animate({width:'180px'} , 800);
       $("#i").animate({width:'117px'} , 800);
   });
   
    
    
   //images for section2
    $(".img1").click(function(){
        $(".img1").animate({width:'140px'} , 1000);
        $(".img1").animate({width:'120px'} , 1000);
    });
    
     $(".img2").click(function(){
        $(".img2").animate({width:'110px'} , 1000);
        $(".img2").animate({width:'95px'} , 1000);
    });
    
     $(".img3").click(function(){
        $(".img3").animate({width:'180px'} , 1000);
        $(".img3").animate({width:'160px'} , 1000);
    });
    
     $(".img4").click(function(){
        $(".img4").animate({width:'110px'} , 1000);
        $(".img4").animate({width:'95px'} , 1000);
    });
    
   //click nav bar go to sections    
    $("#about").attr("href" , "#section1");
    
    $("#work").attr("href" , "#section2");
    
    $("#blog").attr("href" , "#section3");
    
    $("#contact").attr("href" , "#section4");
    
   //slide up or down nav bar in our portofolio  
    $("#item").click(function(){
       $("#submenu").fadeToggle(700);
    });
    
   //Images Slider Show or Hide 
    $(".h1").click(function(){
        $("#dDd").slideToggle(1000);
    });
    
    //button load addEventListner
    $(".button2").on("click" , function(){
        alert("You must Login first");
        $(".button2").off("click");
    });
        
    
    
    
});

//click the button "work with us"
function showAlert(){
    var age = prompt("Enter your Age !");
    if(age >= 14){
        alert("Welcome to website");
    }else{
        alert("Sorry your age is less than required");
    }
}

//Images Slider
var images = ["project3.jpg" , "project4.png" , "project5.jpg" , "project6.png" , "project7.png" , "project8.png"];
var num = 0;
function next(){
    var slider = document.getElementById("slider");
    num++;
    if(num >= images.length){
        num = 0;
    }
    slider.src = images[num];
}
function prev(){
    var slider = document.getElementById("slider");
    num--;
    if(num < 0){
        num = images.length - 1;
    }
    slider.src = images[num];
}

//Form Validation
function validate(){
    var input1 = document.getElementById("form1");
    var input2 = document.getElementById("form2");
    if(input1.value !== "" && input2.value !== ""){
        alert("This Validation is correct");
        return true;
    }else{
        alert("This Validation is incorrect");
        return false;
    }

}

