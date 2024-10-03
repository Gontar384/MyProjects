function displayUsername() {
    let username = document.getElementById("input").value;
    if (username) {
        document.getElementById("h1").textContent = "Welcome " + username + "!";
    } else {
        document.getElementById("h1").textContent = "Hello";
    }
}

function calculateCircumferance() {
    const PI = 3.14;
    let circumferance;
    let radius;
    radius = document.getElementById("input2").value;
    radius = Number(radius);
    circumferance = 2 * PI * radius;
    document.getElementById("result").textContent = circumferance;
}

let count = 0;

function decB() {
    count--;
    document.getElementById("countL").textContent = count;
}

function reset() {
    count = 0;
    document.getElementById("countL").textContent = count;
}

function incB() {
    count++;
    document.getElementById("countL").textContent = count;
}

const randomNumber = Math.round(Math.random() * 100) + 1;
let attempts = 0;

function guessNumb() {
    const guess = document.getElementById("guessInput");
    const message = document.getElementById("guessMessage");
    const guessNumber = document.getElementById("guessNumber");
    switch (true) {
        case guess.value > 100:
            attempts++;
            message.textContent = 'Enter valid number!';
            break;
        case guess.value < 1:
            attempts++;
            message.textContent = 'Enter valid number!';
            break;
        case randomNumber > guess.value:
            attempts++;
            message.textContent = 'Number is higher!';
            break;
        case randomNumber < guess.value:
            attempts++;
            message.textContent = 'Number is lower!';
            break;
        case randomNumber == guess.value:
            attempts++;
            message.textContent = `You guessed! It took ${attempts} tries.`;
            guessNumber.style.display = "none";
            break;
    }
}

function combineString(...foods) {
    return foods.join(" ");
}

let foods = combineString("pizza", "sushi", "fries", "burger");

//console.log(foods);

function roll() {

    const numbOfRolls = document.getElementById("numbOfRolls").value;
    const diceDisplay = document.getElementById("diceDisplay");
    const rollsDisplay = document.getElementById("rollsDisplay");
    const diceImages = [];
    const rollsValue = [];

    for (let i = 0; i < numbOfRolls; i++) {
        const rolledNumber = Math.floor(Math.random() * 6) + 1;
        rollsValue.push(rolledNumber);
        diceImages.push('<img src="resources/' + rolledNumber + 'dice.png"  alt="dice ' + rolledNumber + '">');
    }
    rollsDisplay.textContent = "dice: " + rollsValue.join(', ');
    diceDisplay.innerHTML = diceImages.join(" ");
}


function passwordGenerator() {

    const length = document.getElementById("passwordLength").value;
    const quantity = document.getElementById("passwordQuantity").value;
    const includeLowercase = document.getElementById("lowercaseChars").checked;
    const includeUppercase = document.getElementById("uppercaseChars").checked;
    const includeNumbers = document.getElementById("numbers").checked;
    const includeSymbols = document.getElementById("symbols").checked;
    const passwordDisplay = document.getElementById("passwordDisplay");

    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const symbols = "!@#$%&*?=+-"

    let allowedChars = "";
    let allPasswords = [];

    allowedChars += includeLowercase ? lowercaseChars : "";
    allowedChars += includeUppercase ? uppercaseChars : "";
    allowedChars += includeNumbers ? numbers : "";
    allowedChars += includeSymbols ? symbols : "";

    if (length < 5) {
        passwordDisplay.textContent = "Password length must be at least 5";
    } else if (allowedChars == 0) {
        passwordDisplay.textContent = "You must select at least 1 set of characters";
    } else if (quantity >= 1) {
        for (let i = 0; i < quantity; i++) {
            let password = "";
            for (let j = 0; j < length; j++) {
                const index = Math.floor(Math.random() * allowedChars.length);
                password += allowedChars[index];
            }
            allPasswords.push(password);
        }
        passwordDisplay.innerHTML = allPasswords.join('<br>');
    }
}

function clearDisplay() {
    document.getElementById("passwordDisplay").textContent = "";
}

function checkPassword() {

    const numbers = "0123456789";
    const symbols = "!@#$%&*?=+-"
    const password = document.getElementById("checkPassword").value;
    const checked = document.getElementById("check");

    let isLongEnough = true;
    let includeLowercase = false;
    let includeUppercase = false;
    let includeNumbers = false;
    let includeSymbols = false;

    checkedComm.innerHTML = "";

    if (password.length < 5) {
        isLongEnough = false;
    } else {
        if (password.toUpperCase() !== password) {
            includeLowercase = true;
        }
        if (password.toLowerCase() !== password) {
            includeUppercase = true;
        }
        for (let i = 0; i < password.length; i++) {
            for (let j = 0; j < numbers.length; j++) {
                if (password.charAt(i) == numbers.charAt(j)) {
                    includeNumbers = true;
                }
            }
        }
        for (let k = 0; k < password.length; k++) {
            for (let l = 0; l < symbols.length; l++) {
                if (password.charAt(k) == symbols.charAt(l)) {
                    includeSymbols = true;
                }
            }
        }
    }
    if (!isLongEnough) {
        checkedComm.innerHTML += "Password must be at least 5 chars";
        return null;
    }
    if (!includeLowercase) {
        checkedComm.innerHTML += "<p>Your password must include at least 1 lowercase char</p>";
    }
    if (!includeUppercase) {
        checkedComm.innerHTML += "<p>Your password must include at least 1 uppercase char</p>";
    }
    if (!includeNumbers) {
        checkedComm.innerHTML += "<p>Your password must include at least 1 number</p>";
    }
    if (!includeSymbols) {
        checkedComm.innerHTML += "<p>Your password must inlude at least 1 symbol</p>";
    }
    if (checkedComm.innerHTML == "") {
        checkedComm.innerHTML = "Password saved!"
    }
}

function clearCheck() {
    document.getElementById("checkedComm").innerHTML = "";
}

const shoppingCart = [10, 15, 20, 35, 60, 85];

function sum(accumulator, element) {
    return accumulator + element;
}

const cartCheckout = shoppingCart.reduce(sum);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//callback
function square(element) {
    return Math.pow(element, 2);
}

const squaresTest1 = numbers.map(square);

//function expression
const squaresTest2 = numbers.map(function (element) {
    return Math.pow(element, 2);
})

//arrow functions
const squaresTest3 = numbers.map((element) => {
    return Math.pow(element, 2)
});

// console.log(squaresTest1);
// console.log(squaresTest2);
// console.log(squaresTest3);


const squares = numbers.map((element) => {
    return Math.pow(element, 2)
});
const even = numbers.filter((element) => {
    return element % 2 === 0
})
const sumOfAllNumbs = numbers.reduce((accumulator, element) => {
    return accumulator + element
});


// console.log(squares);
// console.log(even);
// console.log(sumOfAllNumbs);

const user = {
    username: "gontar",
    email: "gontar@gmail.com",
    password: "pablo",
    login: function () {
        console.log("hello" + this.username)
    },
}

class Car {

    constructor(make, model, year, color) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.color = color;
    }

    drive() {
        console.log("You drive " + this.model);
    }
}

const car1 = new Car("VW", "golf", 2017, "blue");

cars = [];

cars.push(car1.make);
cars.push(car1.model);
cars.push(car1.year);
cars.push(car1.color);

// console.log(cars.join(" "));
// car1.drive();

class UserT {
    constructor(login, email, password) {
        this.login = login;
        this.password = password;
        this.email = email;
    }

    set login(newLogin) {
        if (newLogin.length > 5) {
            this._login = newLogin;
        } else {
            console.error("Login must be at least 5 chars long");
        }
    }

    set password(newPassword) {
        if (newPassword.length > 0) {
            this._password = newPassword;
        } else {
            console.error("Password must be at least 5 chars long");
        }
    }

    get login() {
        return this._login;
    }

    get password() {
        return this._password;
    }
}

const userT1 = new UserT("gontar", "gontar@gmail.com", "pablo");

// console.log(userT1.login);
// console.log(userT1.email);
// console.log(userT1.password);

const date = new Date();

const year = date.getFullYear();
const month = date.getMonth() + 1;
const day = date.getDate();
const hour = date.getHours();
const minute = date.getMinutes();
// console.log("year: " + year);
// console.log("month: " + month);
// console.log("day: " + day);
// console.log("hour: " + hour + ":" + minute);


function stopwatch() {

    const display = document.getElementById("timerDisplayTime");
    let startTime = 0;
    let elapsedTime = 0;
    let isRunning = false;
    let timer = null;

    function start() {
        if (!isRunning) {
            startTime = Date.now() - elapsedTime;
            timer = setInterval(update, 10);
            isRunning = true;
        }
    }

    function stop() {
        if (isRunning) {
            clearInterval(timer);
            elapsedTime = Date.now() - startTime;
            isRunning = false;
        }
    }

    function reset() {
        clearInterval(timer);
        display.textContent = "00:00:00:00";
        isRunning = false;
        elapsedTime = 0;
    }

    function update() {
        elapsedTime = Date.now() - startTime;
        let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
        let minutes = Math.floor(elapsedTime / (1000 * 60) % 60);
        let seconds = Math.floor(elapsedTime / 1000 % 60);
        let milliseconds = Math.floor(elapsedTime % 1000 / 10);

        hours = String(hours).padStart(2, "0");
        minutes = String(minutes).padStart(2, "0");
        seconds = String(seconds).padStart(2, "0");
        milliseconds = String(milliseconds).padStart(2, "0");

        display.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`;
    }

    return {start, stop, reset, update};
}

const stopwatchApp = stopwatch();


function calculator() {

    const display = document.getElementById("calcDisplay");

    function calcAddToDisplay(input) {
        display.value += input;
    }

    function calcCalculate() {
        try {
            display.value = eval(display.value);
        } catch (error) {
            display.value = "Error";
        }
    }

    function calcClearDisplay() {
        display.value = "";
    }

    return {calcAddToDisplay, calcCalculate, calcClearDisplay}
}

const calcApp = calculator();

function flyingSimulator() {
    const plane = document.getElementById("gameContainer");
    const moveAmmount = 15;
    let x = 0;
    let y = 0;
    const z = 90;
    let rotate = 0;

    document.addEventListener("keydown", event => {
        event.preventDefault();
        switch (event.key) {
            case "w":
                y -= moveAmmount;
                break;
            case "s":
                y += moveAmmount;
                break;
            case "a":
                x -= moveAmmount;
                break;
            case "d":
                x += moveAmmount;
                break;
            case "r":
                plane.style.transform = `rotateZ(${rotate += z}deg)`;
                break;
        }
        plane.style.top = `${y}px`;
        plane.style.left = `${x}px`;
    });

    const planeIcon = document.getElementById("planeIcon");
    const bombIcon = document.getElementById("bombIcon");
    planeIcon.addEventListener("click", event => {
        if (bombIcon.textContent === "") {
            bombIcon.textContent = "💣";
            event.target.style.textShadow = "5px 5px 5px black";
        } else {
            bombIcon.textContent = "";
            event.target.style.textShadow = "none";
        }
    });
}

document.addEventListener("keydown", event => {
    if (event.key === "Enter") {
        document.getElementById("gameHeading").style.display = "none";
        document.getElementById("settings").style.display = "none";
        document.getElementById("settings1").style.display = "none";
        document.getElementById("pageLinks1").style.display = "none";
        flyingSimulator();
    }
});

function rockPaperScissors() {

    const choices = ["rock", "paper", "scissors"];
    const pcResult = document.getElementById("pcResult");
    const userResult = document.getElementById("userResult");
    const gameResult = document.getElementById("gameResult");
    const scoreDisplay = document.getElementById("scoreDisplay");
    let a = 0;
    let b = 0;

    function play(userChoice) {
        const pcChoice = choices[Math.floor(Math.random() * 3)];
        let result = "";
        if (pcChoice === userChoice) {
            result = "It's a tie!"
        } else {
            switch (userChoice) {
                case "rock":
                    result = (pcChoice === "scissors") ? "You win!" : "You lose!";
                    break;
                case "paper":
                    result = (pcChoice === "rock") ? "You win!" : "You lose!";
                    break;
                case "scissors":
                    result = (pcChoice === "paper") ? "You win!" : "You lose!";
                    break;
            }
        }

        let pcDisplay = "";
        switch (pcChoice) {
            case "rock":
                pcDisplay = "👊";
                break;
            case "paper":
                pcDisplay = "🤚";
                break;
            case "scissors":
                pcDisplay = "️️✌️";
        }

        let userDisplay = "";
        switch (userChoice) {
            case "rock":
                userDisplay = "👊";
                break;
            case "paper":
                userDisplay = "🤚";
                break;
            case "scissors":
                userDisplay = "️️✌️";
        }

        userResult.textContent = `You: ${userDisplay}`;
        pcResult.textContent = `PC: ${pcDisplay}`;

        if (result === "You win!") {
            a++;
            gameResult.style.color = "green";
        } else if (result === "You lose!") {
            b++;
            gameResult.style.color = "red";
        } else if (result = "It's a tie!") {
            gameResult.style.color = "black";
        }
        gameResult.textContent = result;
        scoreDisplay.textContent = `User: ${a} | PC: ${b}`;
    }

    return {play};
}

const coolGame = rockPaperScissors();

document.addEventListener("keydown", event => {
    const rockButton = document.getElementById("rockButton");
    const paperButton = document.getElementById("paperButton");
    const scissorsButton = document.getElementById("scissorsButton");
    if (event.key === "1") {
        rockButton.style.backgroundColor = "rgba(255, 0, 255, 1)";
        paperButton.style.backgroundColor = "rgba(255, 0, 255, 0.7)";
        scissorsButton.style.backgroundColor = "rgba(255, 0, 255, 0.7)";
        coolGame.play('rock');
    } else if (event.key === "2") {
        rockButton.style.backgroundColor = "rgba(255, 0, 255, 0.7)";
        paperButton.style.backgroundColor = "rgba(255, 0, 255, 1)";
        scissorsButton.style.backgroundColor = "rgba(255, 0, 255, 0.7)";
        coolGame.play('paper');
    } else if (event.key === "3") {
        rockButton.style.backgroundColor = "rgba(255, 0, 255, 0.7)";
        paperButton.style.backgroundColor = "rgba(255, 0, 255, 0.7)";
        scissorsButton.style.backgroundColor = "rgba(255, 0, 255, 1)";
        coolGame.play('scissors');
    }
});

async function fetchPokemon() {
    try {
        const pokemonDisplay = document.getElementById("pokemonDisplay");
        const pokemonError = document.getElementById("pokemonError");
        const pokemonName = document.getElementById("pokemonInput").value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

        pokemonDisplay.style.display = "none";
        pokemonError.textContent = "";

        if (!response.ok) {
            pokemonError.textContent = "Pokemon not found!";
            throw new Error("Pokemon not found!");
        }

        const pokemonInfo = await response.json();
        const pokemonImage = pokemonInfo.sprites.front_default;
        pokemonDisplay.src = pokemonImage;
        pokemonDisplay.style.display = "block";

    } catch (error) {
        console.error(error);
    }
}




document.querySelector(".weatherForm").addEventListener("submit", async event => {

    const city = document.querySelector(".weatherInput").value;
    const api = "2c17efa2bf73ad3a96c87f94bbf7fcf5";
    const card = document.querySelector(".weatherCard");

    event.preventDefault();
    card.style.display = "flex";

    try {
        const weatherData = await getWeatherData(city);
        displayWeatherInfo(weatherData);
    } catch (error) {
        console.error(error);
        card.textContent = "";
        displayError(error);
    }

    async function getWeatherData(city) {
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}`;

        const response = await fetch(apiUrl);

        if (!response.ok) {
            throw new Error("Could not find any data");
        }
        return await response.json();
    }

    function displayWeatherInfo(data) {

        const {name: city,
            main: {temp, humidity},
            weather: [{description, id}]} = data;

        card.textContent = "";


        const cityDisplay = document.createElement("p");
        const temperatureDisplay = document.createElement("p");
        const humidityDisplay = document.createElement("p");
        const descriptionDisplay = document.createElement("p");
        const emojiDisplay = document.createElement("p");

        cityDisplay.textContent = city;
        temperatureDisplay.textContent = (temp - 272.15).toFixed(1) + "℃";
        humidityDisplay.textContent = `Humidity: ${humidity}%`
        descriptionDisplay.textContent = description;
        emojiDisplay.textContent = getWeatherEmoji(id);

        cityDisplay.classList.add("weatherCity");
        temperatureDisplay.classList.add("weatherTemperature");
        humidityDisplay.classList.add("weatherHumidity");
        descriptionDisplay.classList.add("weatherDescription");
        emojiDisplay.classList.add("weatherEmoji");

        card.appendChild(cityDisplay);
        card.appendChild(temperatureDisplay);
        card.appendChild(humidityDisplay);
        card.appendChild(descriptionDisplay);
        card.appendChild(emojiDisplay);
    }

    function getWeatherEmoji(weatherId) {
        switch(true){
            case weatherId >= 200 && weatherId < 300:
                return "⛈️";
                break;
            case weatherId >= 300 && weatherId < 500:
                return "🌦️";
                break;
            case weatherId >= 500 && weatherId < 600:
                return "🌧️";
                break;
            case weatherId >= 600 && weatherId < 700:
                return "❄️";
                break;
            case weatherId == 800:
                return "☀️";
                break;
            case weatherId > 800:
                return "☁️";
                break;
        }
    }

    function displayError(message) {
        const errorDisplay = document.createElement("p");
        errorDisplay.classList.add("weatherError");
        errorDisplay.textContent = message;
        card.appendChild(errorDisplay);
    }
})
