let player = document.querySelector(".player");
let player_one_box = document.querySelector(".player_one_box");
let player_two_box = document.querySelector(".player_two_box");

let player_one_input = document.querySelector(".player_one_input");
let player_one_err = document.querySelector(".player_one_err");
let player_one_btn = document.querySelector(".player_one_btn");

let player_two_input = document.querySelector(".player_two_input");
let player_two_err = document.querySelector(".player_two_err");
let player_two_btn = document.querySelector(".player_two_btn");

let game_img = document.querySelector(".game_img");
let game_winner_img = document.querySelector(".game_winner_img");
let restart = document.querySelector(".restart")
let chance = document.querySelector(".chance")
let chance_main = document.querySelector(".chance_main")
let player_one_store_number;
let count_chance = 5;


player_one_btn.addEventListener("click", function(){
    if(Boolean(player_one_input.value)){
        if(Boolean(player_one_input.value - 20)){
            if(player_one_input.value>=0 && player_one_input.value<=10){
                player_one_err.innerHTML = "";
                player.innerHTML = "Second Player";
                player_one_box.style.display = "none"
                player_two_box.style.display = "block"
                player_one_store_number = player_one_input.value
            }else{
                player_one_err.innerHTML = "Number must be between or equal 0 to 10.";
            }
        }else{
            player_one_err.innerHTML = "Please enter a number, don't use text.";
        }
    }else{
        player_one_err.innerHTML = "Please enter a number and start the game.";
    }
});

player_two_btn.addEventListener("click", function(){
    if(Boolean(player_two_input.value)){
        if(Boolean(player_two_input.value - 20)){
            if(player_two_input.value>=0 && player_two_input.value<=10){
                player_two_err.innerHTML = ""
                if(count_chance !== 1){
                    count_chance--
                    player_two_err.innerHTML = "Wrong Number!! Please try again."
                    if(player_one_store_number == player_two_input.value){
                        player_two_err.style.color= "green"
                        player_two_err.innerHTML = ""
                        player.innerHTML = "Congratulations, you are winner"
                        player_two_input.style.display = "none"
                        player_two_btn.style.display = "none"
                        restart.style.display = "block"
                        game_img.style.display = "none"
                        game_winner_img.style.display = "block"
                        chance_main.style.display = "none"

                    }else{
                        chance.innerHTML = count_chance
                    }
                }else{
                    player_two_err.style.color= "green"
                    player_two_err.innerHTML = ""
                    player.innerHTML = "Opps!! First player is winner"
                    player_two_input.style.display = "none"
                    player_two_btn.style.display = "none"
                    chance_main.style.display = "none"
                    restart.style.display = "block"
                    game_img.style.display = "none"
                    game_winner_img.style.display = "block"
                }
            }
            else{
                player_two_err.innerHTML = "Number must be between or equal 0 to 10.";
            }
        }else{
            player_two_err.innerHTML = "Please enter a number, don't use text.";
        }
    }else{
        player_two_err.innerHTML = "Please input a number to start game."
    }
});


restart.addEventListener("click", function(){
    location.reload();
})