function markerFactory(type, symbolText, color)
{
    const marker = document.createElement(type);
    marker.textContent = symbolText;
    marker.style.color = color;
    return marker;
}

const playerOneMarker = markerFactory("div", "X", "#FF6962");
const playerTwoMarker = markerFactory("div", "O", "#AFDCED");
const playerOneScore_label = document.querySelector(".player_one_score");
const playerTwoScore_label = document.querySelector(".player_two_score");
let currentPlayer = 1;
let playerOneScore = 0, playerTwoScore = 0;

const areas = document.querySelectorAll(".board div");
const reset_all = document.querySelector("button.reset-all");
const reset_game = document.querySelector("button.reset-game");

function checkForWin()
{
    if(areas[0].textContent === "O" && areas[0].textContent === areas[1].textContent && areas[1].textContent === areas[2].textContent)
    {
        playerTwoScore++;
        playerTwoScore_label.textContent = playerTwoScore;
        console.log("Printing it out now.");
    }
    if(areas[3].textContent === "O" && areas[3].textContent === areas[4].textContent && areas[4].textContent === areas[5].textContent)
    {
        playerTwoScore++;
        playerTwoScore_label.textContent = playerTwoScore;
        console.log("Printing it out now.");
    }
}

function isOccupied(index)
{
    return areas[index].textContent != "";
}

for(let i = 0; i < areas.length; i++)
{
    areas[i].addEventListener("click", () =>
    {
        if(!isOccupied(i))
        {
            if(currentPlayer === 1)
            {
                areas[i].style.backgroundColor = playerOneMarker.style.color;
                areas[i].textContent = playerOneMarker.textContent;
                currentPlayer = 2;
            }
            else
            {
                areas[i].style.backgroundColor = playerTwoMarker.style.color;
                areas[i].textContent = playerTwoMarker.textContent;
                currentPlayer = 1;
            }
            checkForWin();    
        }
    });
}

// Only difference with reset all button is that the scores for both players will be reset to 0.
reset_game.addEventListener("click", () =>
{
    for(let i = 0; i < areas.length; i++)
    {
        areas[i].textContent = "";
        areas[i].style.backgroundColor = "tan";
    }
    currentPlayer = 1;
});

reset_all.addEventListener("click", () =>
{

    for(let i = 0; i < areas.length; i++)
    {
        areas[i].textContent = "";
        areas[i].style.backgroundColor = "tan";
    }
    currentPlayer = 1;
    playerOneScore = 0;
    playerTwoScore = 0;
    playerOneScore_label.textContent = playerOneScore;
    playerTwoScore_label.textContent = playerTwoScore;
});