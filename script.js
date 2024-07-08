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

function clearBoard()
{
    for(let i = 0; i < areas.length; i++)
    {
        areas[i].textContent = "";
        areas[i].style.backgroundColor = "tan";
    }
}

function checkForWin()
{
    if(areas[0].textContent === areas[1].textContent && areas[1].textContent === areas[2].textContent)
    {
        if(areas[0].textContent === "X")
        {
            playerOneScore++;
            playerOneScore_label.textContent = playerOneScore;
        }
        else if(areas[0].textContent === "O")
        {
            playerTwoScore++;
            playerTwoScore_label.textContent = playerTwoScore;
        }
    }
    if(areas[3].textContent === areas[4].textContent && areas[4].textContent === areas[5].textContent)
    {
        if(areas[3].textContent === "X")
        {
            playerOneScore++;
            playerOneScore_label.textContent = playerOneScore;
        }
        else if(areas[3].textContent === "O")
        {
            playerTwoScore++;
            playerTwoScore_label.textContent = playerTwoScore;
        }
    }
    if(areas[6].textContent === areas[7].textContent && areas[7].textContent === areas[8].textContent)
    {
        if(areas[6].textContent === "X")
        {
            playerOneScore++;
            playerOneScore_label.textContent = playerOneScore;
        }
        else if(areas[6].textContent === "O")
        {
            playerTwoScore++;
            playerTwoScore_label.textContent = playerTwoScore;
        }
    }
    if(areas[2].textContent === areas[4].textContent && areas[4].textContent === areas[6].textContent)
    {
        if(areas[2].textContent === "X")
        {
            playerOneScore++;
            playerOneScore_label.textContent = playerOneScore;
        }
        else if(areas[2].textContent === "O")
        {
            playerTwoScore++;
            playerTwoScore_label.textContent = playerTwoScore;
        }
    }
    if(areas[0].textContent === areas[3].textContent && areas[3].textContent === areas[6].textContent)
    {
        if(areas[0].textContent === "X")
        {
            playerOneScore++;
            playerOneScore_label.textContent = playerOneScore;
        }
        else if(areas[0].textContent === "O")
        {
            playerTwoScore++;
            playerTwoScore_label.textContent = playerTwoScore;
        }
    }
    if(areas[1].textContent === areas[4].textContent && areas[4].textContent === areas[7].textContent)
    {
        if(areas[1].textContent === "X")
        {
            playerOneScore++;
            playerOneScore_label.textContent = playerOneScore;
        }
        else if(areas[1].textContent === "O")
        {
            playerTwoScore++;
            playerTwoScore_label.textContent = playerTwoScore;
        }
    }
    if(areas[2].textContent === areas[5].textContent && areas[5].textContent === areas[8].textContent)
    {
        if(areas[2].textContent === "X")
        {
            playerOneScore++;
            playerOneScore_label.textContent = playerOneScore;
        }
        else if(areas[2].textContent === "O")
        {
            playerTwoScore++;
            playerTwoScore_label.textContent = playerTwoScore;
        }
    }
    if(areas[0].textContent === areas[4].textContent && areas[4].textContent === areas[8].textContent)
    {
        if(areas[0].textContent === "X")
        {
            playerOneScore++;
            playerOneScore_label.textContent = playerOneScore;
        }
        else if(areas[0].textContent === "O")
        {
            playerTwoScore++;
            playerTwoScore_label.textContent = playerTwoScore;
        }
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
    clearBoard();
    playerOneScore_label.textContent = playerOneScore;
    playerTwoScore_label.textContent = playerTwoScore;
    playerOneScore_label.style.color = "black";
    playerTwoScore_label.style.color = "black";
    currentPlayer = 1;
});

reset_all.addEventListener("click", () =>
{
    clearBoard();
    currentPlayer = 1;
    playerOneScore = 0;
    playerTwoScore = 0;
    playerOneScore_label.textContent = playerOneScore;
    playerTwoScore_label.textContent = playerTwoScore;
    playerOneScore_label.style.color = "black";
    playerTwoScore_label.style.color = "black";
});