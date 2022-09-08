let btn_start = document.getElementById("start");
let btn_reset = document.getElementById("reset");
let btn_check = document.getElementById("check");

let main_div = document.getElementById("main-div");

let guess_box = document.getElementById("guess-box");
let all_guesses = document.getElementById("all-guesses");
let high_or_low = document.getElementById("high-or-low");

let random_num = Math.floor(Math.random()*100) +1;

let count_guess = 1;
let guessed_nums = [];

function start() {
    main_div.style.visibility = "visible"; 
}

function checkGuess() {
    let your_guess = Number(guess_box.value);
    let user_guess = Number(guess_box.value);

    if(count_guess < 10) {
        if (user_guess < 1 || your_guess > 100){
            alert("please enter a number between 1 and 100.");
        }
        else{
            guessed_nums.push(user_guess);
            // count_guess += 1;

            if (your_guess < random_num) {
                all_guesses.textContent += your_guess + " ";
                high_or_low.textContent = "Your guess is Low";
                high_or_low.classList.add("wrong");
                count_guess++;
                guess_box.value = "";
            }
            else if (your_guess > random_num) {
                all_guesses.textContent += your_guess + " ";
                high_or_low.textContent = "Your guess is High";
                high_or_low.classList.add("wrong");
                count_guess++;
                guess_box.value = "";
            }
           
            else{
                all_guesses.textContent += your_guess + " ";
                high_or_low.textContent = "Congratulations! Your guess is correct.";
                high_or_low.classList.add("success");
                guess_box.value = "";
                gameOver(); 
            }

        }

    }
    else{
        all_guesses.textContent += your_guess + " ";
        high_or_low.textContent = "Game Over! Sorry, your chances are over.";
        high_or_low.classList.add("wrong");
        guess_box.value = "";
        gameOver(); 

    }
}

function gameOver() {
    btn_check.disabled = true;
    guess_box.disabled = true;
    
}