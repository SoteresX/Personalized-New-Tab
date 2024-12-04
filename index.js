// Time Related Lines
function startTime(){
    const weekday = ["Sunday", "Monday" ,"Tuesday" ,"Wednesday" ,"Thursday" ,"Friday" ,"Saturday"];
    const months = ["January", "February" ,"March" ,"April" ,"May" ,"June" ,"July", "Augoust", "September", "October", "November", "December"];
    const date = new Date();
    const dayOfWeek = date.getDay();
    const seconds = date.getSeconds();
    const minutes = date.getMinutes();
    var hours = date.getHours();
    const dayNum = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    if(hourSys == "12"){
        hours = hourSystemChange(hours);
    }
    else{
        hours = date.getHours();
    }
    
    numsToString(seconds, minutes, hours);
    document.getElementById("dateAndDay").innerHTML = weekday[dayOfWeek];
    document.getElementById("monthAndDay").innerHTML = months[month-1] + " " + dayNum;
    document.getElementById("dayNums").innerHTML = dayNum + "/" + month + "/" + year;
    setTimeout(startTime, 500);
}

function numsToString(seconds, minutes, hours){
    // Second Converter To String
    const numsInSecondsVar = seconds.toString();

    if( numsInSecondsVar.length > 1){
        secNum1= numsInSecondsVar[0]
        secNum2 = numsInSecondsVar[1];
    }
    else{
        secNum1 = 0;
        secNum2 = seconds;
    }

    // Minute Converter To String
    const numsInMinutesVar = minutes.toString();
    if( numsInMinutesVar.length > 1){
        minNum1= numsInMinutesVar[0]
        minNum2 = numsInMinutesVar[1];
    }
    else{
        minNum1 = 0;
        minNum2 = minutes;
    }
    // Hours To String Converter
    const numsInHoursVar = hours.toString();
    if( numsInHoursVar.length > 1){
        hourNum1= numsInHoursVar[0]
        hourNum2 = numsInHoursVar[1];
    }
    else{
        hourNum1 = 0;
        hourNum2 = hours;
    }

    document.getElementById("clock").innerHTML = hourNum1 + hourNum2 + ":" + minNum1 + minNum2 + ":" + secNum1 + secNum2;
    
}

function hourSystemChange(hours){
    switch(hours){
        case 13:
            hours = 1;
            break;
        case 14:
            hours = 2;
            break;
        case 15:
            hours = 3;
            break;
        case 16:
            hours = 4;
            break;
        case 17:
            hours = 5;
            break;
        case 18:
            hours = 6;
            break;
        case 19:
            hours = 7;
            break;
        case 20:
            hours = 8;
            break;
        case 21:
            hours = 9;
            break;
        case 22:
            hours = 10;
            break;
        case 23:
            hours = 11;
            break;
        case 24:
            hours = 12;
            break;
    }
    return hours;
}

startTime();

var hourSys = "12";
var optionsClicked = false;

$("#twentyFourHour").on("click", function(){ hourSys = "24"; console.log(hourSys);});
$("#twelveHour").on("click", function(){ hourSys = "12"; console.log(hourSys);});

// Wallpaper Customization Related

$("#pencilIcon").on("click", function(){
   
    if(optionsClicked == false){
        optionsClicked = true;
        // Show Options Menu
        $("#optionsMenu").css("display", "flex");
        // optionsMenu animation
        $("#optionsMenu").animate({top: '720px'} , 400);
        // topRow animation
        $("#topRow").animate({height: '720px'}, 400);
        document.getElementById("topRow").style.height = '710px';
        // Change pencilIcon to cancelIcon
        var image = document.getElementById("pencilIcon");
        image.src = "./images/icons/cancelWhite.png"  
    }
    else{

        optionsClicked = false;
        // optionsMenu Animation
        $("#optionsMenu").animate({top: '900px'}, 400);
        // topRow Animation
        $("#topRow").animate({height: '900px'}, 400);
        // Wait for a bit to disappear
        setTimeout(function(){$("#optionsMenu").css("display", "none")}, 400);
        // Change pencilIcon back to pencilWhite
        var image = document.getElementById("pencilIcon");
        image.src = "./images/icons/pencilWhite.png"
    }


});

// On Mouse Enter And Leave Run Function for the Animations

$("#autumnWallpaper, #officeWallpaper, #bridgeWallpaper, #townWallpaper, #minecraftTownWallpaper").on("mouseenter mouseleave", handleWallpaperEvent);

function handleWallpaperEvent(event){

    // Check which event (mouse enter or mouse leave)
    var eventType = event.type;
    const innerBox = event.currentTarget.children[0].className;
    const wallpaper = event.currentTarget.id;

    if(eventType === "mouseenter") {
        wallpaperAnimation(wallpaper, innerBox);
    }
    else if(eventType === "mouseleave"){
        wallpaperExitAnimation(wallpaper, innerBox);
    }
}

function wallpaperAnimation(wallpaper, innerBox){

    console.log(wallpaper, innerBox);
    console.log();
    $("#" + wallpaper + " ." + innerBox).animate({opacity: '1'}, 100);
    $("#" + wallpaper + " p").css("display", "inline-block");
    $("#" + wallpaper + " p").animate({opacity: '1'}, 200);
    $("#" + wallpaper + " button").animate({opacity: '1'}, 200);
    $("#" + wallpaper + " ." + innerBox).animate({gap: '0px'}, 200);
    $("#" + wallpaper + " button").css("display", "inline-block");
}

function wallpaperExitAnimation(wallpaper, innerBox){

    $("#" + wallpaper).animate({opacity: '1'}, 100);
    $("#" + wallpaper + " ." + innerBox).animate({opacity: '0'}, 100);
    $("#" + wallpaper + " ." + innerBox).animate({gap: '30px'}, 200);
    $("#" + wallpaper + " p").animate({opacity: '0'}, 200);
    $("#" + wallpaper + " button").animate({opacity: '0'}, 200);
}

$("#buttonAutumn").on("click", function(event){
    $("body").css("background-image", "url('./images/wallpapers/autumnWallpaper.jpg')");
})

$("#buttonOffice").on("click", function(event){
    $("body").css("background-image", "url('./images/wallpapers/officeWallpaper.jpg')");
})

$("#buttonBridge").on("click", function(event){
    $("body").css("background-image", "url('./images/wallpapers/bridgeWallpaper.jpg')");
})

$("#buttonTown").on("click", function(event){
    $("body").css("background-image", "url('./images/wallpapers/townWallpaper.jpg')");
})

$("#buttonMinecraftTown").on("click", function(event){
    $("body").css("background-image", "url('./images/wallpapers/minecraftTownWallpaper.jpg')");
})

$("#searchForm").on("submit", function(event) {
    // Prevent default form submission (page refresh)
    event.preventDefault();
    
    // Get the value from the input field
    var inputValue = $("#searchInput").val();
    
    // Log the input value to the console
    console.log("Input Value:", inputValue);
    setTimeout(function(){$("#searchInput").val('')}, 50);
});

// Trigger form submission when the label is clicked
$("label[for='searchButton']").on("click", function() {
    // Directly trigger the form submission
    $("#searchForm").submit();
});

