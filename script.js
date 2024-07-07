function markerFactory(type, symbolText, color)
{
    const marker = document.createElement(type);
    marker.textContent = symbolText;
    marker.style.color = color;
    return marker;
}

function checkForWin()
{
    // if()
    // {
    //     // Increment either player one or player two score here.
    // }
}

const playerOneMarker = markerFactory("div", "X", "#FF6962");
const playerTwoMarker = markerFactory("div", "O", "#AFDCED");
console.log(playerOneMarker.textContent)

let currentPlayer = 1;

const areas = document.querySelectorAll(".board div");
const reset_all = document.querySelector("button.reset-all");
const reset_game = document.querySelector("button.reset-game");

for(let i = 0; i < areas.length; i++)
{
    areas[i].addEventListener("click", () =>
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
    });
    checkForWin();
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