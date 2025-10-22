const count_title = document.querySelector(".count_title");




// let arrayOfChar = ;

let hero_title = document.createElement("h4");
hero_title.id = "hero_title";
let text = document.createTextNode("event details");
let arrayOfChar = text.textContent.split("");




counter = 0;
let text_timer = setInterval(()=>{
    

    if(counter == arrayOfChar.length - 1 )
    {
        clearInterval(text_timer);
    }



    hero_title.textContent += arrayOfChar[counter];
    document.querySelector(".hero_title").append(hero_title);




     
    counter++;
   
    


    
    
    

    
    

    
    
},200)


let span = document.createElement("span");
span.className = "first_word";
span.textContent="Event";
span.style.color = "#FFD400";
 let title = count_title.querySelector("h3").prepend(span);



let days = 12;
let hours = 1;
let minutes = 1;
let second = 10;
let days_value = document.getElementById("days_value");
let hours_value = document.getElementById("hours_value");
let minutes_value = document.getElementById("minutes_value");
let seconds_value = document.getElementById("seconds_value");

let count_down = setInterval(()=>{






   days_value.textContent = days < 10 ? "0"+days : days;
   hours_value.textContent = hours < 10 ? "0"+hours : hours;
   minutes_value.textContent  = minutes < 10 ? "0"+minutes : minutes;
   seconds_value.textContent = second < 10 ? "0"+second : second;


   second--;
   if(second ==0)
   {
    second = 60 ;
    minutes--;
   }


   if(minutes == 0){
    minutes = 60;
    hours--;
   }


   if(hours == 0)
   {
    hours = 24;
    days--;
   }




},1000)



// event image


// let image_event = document.querySelector(".image_event");



// image_event.addEventListener("click", ()=>{
//     let overlay = document.createElement("div");
//     overlay.id = "overlay_jazz_gallery";
//     document.body.append(overlay);
// })