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

// Wallpaper Customization Related

$("#pencilIcon").on("click", function(){
   
    if(optionsClicked == false){
        optionsClicked = true;
        // Show Options Menu
        $("#optionsMenu_container").css("display", "flex");
        // optionsMenu animation
        $("#optionsMenu_container").animate({top: '720px'} , 400);
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
        $("#optionsMenu_container").animate({top: '900px'}, 400);
        // topRow Animation
        $("#topRow").animate({height: '900px'}, 400);
        // Wait for a bit to disappear
        setTimeout(function(){$("#optionsMenu_container").css("display", "none")}, 400);
        // Change pencilIcon back to pencilWhite
        var image = document.getElementById("pencilIcon");
        image.src = "./images/icons/pencilWhite.png"
    }
});

// On Mouse Enter And Leave Run Function for the Animations

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

$("button, input").on("click", function(event){
    var buttonPressed = event.currentTarget.id;
    console.log(buttonPressed);
    switch(buttonPressed){
        case "buttonAutumn":
            $("body").css("background-image", "url('./images/wallpapers/autumnWallpaper.jpg')");
            break;
        case "buttonOffice":
            $("body").css("background-image", "url('./images/wallpapers/officeWallpaper.jpg')");
            break;
        case "buttonBridge":
            $("body").css("background-image", "url('./images/wallpapers/bridgeWallpaper.jpg')");
            break;
        case "buttonTown":
            $("body").css("background-image", "url('./images/wallpapers/townWallpaper.jpg')");
            break;
        case "buttonMinecraftTown":
            $("body").css("background-image", "url('./images/wallpapers/minecraftTownWallpaper.jpg')");
            break;
        case "clockButton":
            var setting = "clock";
            changeSettingsMenu(setting);
            break;  
        case "wallpapersButton":
            var setting = "wallpapers";
            changeSettingsMenu(setting);
            break;
        case "pomodoroCheckbox":
            var checked = $("#pomodoroCheckbox").prop("checked")
            if(checked == true){

                $("#pomodoro_container").css("display", "flex");
                $("#pomodoro_container").animate({height: "200px", opacity: '1'}, 200);
                $("#clock").animate({fontSize: '60px'}, 200);
            } else{
                $("#pomodoro_container").animate({height: "0px", opacity: '0'}, 200);
                setTimeout(function(){$("#pomodoro_container").css("display", "none")}, 160);
                $("#clock").animate({fontSize: '90px'}, 200);
            }
            break;
        case "hourSystemCheckbox":
            var checked = $("#hourSystemCheckbox").prop("checked")
            if(checked == true){
                hourSys = "24";
            } else {
                hourSys = "12"
            }
            break;
        
        case "startPomodoroTimerButton":
            var minutes = 0;
            var seconds = 30;
            pomodoroEnd = false;
            pomodoroPaused = false; 
            $("#startPomodoroTimerButton").css("display", "none");
            $("#pausePomodoroTimerButton, #endPomodoroTimerButton").css("display", 'inline-block');
            var pomodoroTimer = setInterval(function(){
                console.log(minutes, seconds);
                console.log(globalPomodoroMinutes);
                if(pomodoroEnd == false){
                    if(pomodoroPaused == false){
                        if(seconds == 0 && minutes == 0){

                            $("#pausePomodoroTimerButton, #resumePomodoroTimerButton, #endPomodoroTimerButton").css("display", "none");
                            $("#startPomodoroTimerButton").css("display", "inline-block");
                            $("#pomodoroTimer").html(globalPomodoroMinutes + ":" + "00");
                            clearInterval(pomodoroTimer);

                        } else if(seconds == 0){
                            minutes -= 1;
                            seconds = 59;
                            $("#pomodoroTimer").html(minutes + ":" + seconds);
                        } else{
                            seconds -=1; 
                            $("#pomodoroTimer").html(minutes + ":" + seconds);
                        }
                        
                    } 
                } else{
                    
                    $("#pausePomodoroTimerButton, #resumePomodoroTimerButton, #endPomodoroTimerButton").css("display", "none");
                    $("#startPomodoroTimerButton").css("display", "inline-block");
                    $("#pomodoroTimer").html(globalPomodoroMinutes + ":" + "00");
                    clearInterval(pomodoroTimer);
                }
            }, 1000);
                
            break;
        case "pausePomodoroTimerButton":
            pomodoroPaused = true;
            $("#pausePomodoroTimerButton").css("display", 'none');
            $("#resumePomodoroTimerButton").css("display", "inline-block");
            break;
        case "resumePomodoroTimerButton":
            pomodoroPaused = false;
            $("#resumePomodoroTimerButton").css("display", "none");
            $("#pausePomodoroTimerButton").css("display", "inline-block");
            break;
        case "endPomodoroTimerButton":
            $("#pausePomodoroTimerButton, #resumePomodoroTimerButton, #endPomodoroTimerButton").css("display", "none");
            $("#startPomodoroTimerButton").css("display", "inline-block");
            pomodoroEnd = true;
            minutes = globalPomodoroMinutes;
            seconds = 0;
            $("#pomodoroTimer").html(globalPomodoroMinutes + ":" + "00");
            break;
    }
})

function changeSettingsMenu(setting){
    if(setting == "clock"){
        $("#wallpaperOptions").css("display", "none");
        $("#clockOptions").css("display", "flex");
    } else if(setting == "wallpapers"){
        $("#wallpaperOptions").css("display", "flex");
        $("#clockOptions").css("display", "none");
    }
}


startTime();

var hourSys = "12";
var optionsClicked = false;
var pomodoroPaused = false;
var pomodoroEnd = false;
var globalPomodoroMinutes = 1;

$("#pomodoroTimer").html(globalPomodoroMinutes + ":" + "00");

$("#twentyFourHour").on("click", function(){ hourSys = "24"; console.log(hourSys);});
$("#twelveHour").on("click", function(){ hourSys = "12"; console.log(hourSys);});
$("#autumnWallpaper, #officeWallpaper, #bridgeWallpaper, #townWallpaper, #minecraftTownWallpaper").on("mouseenter mouseleave", handleWallpaperEvent);
