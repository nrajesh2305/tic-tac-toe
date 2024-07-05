function markerFactory(type, symbolText, color)
{
    const marker = document.createElement(type);
    marker.innerText = symbolText;
    marker.style.color = color;
    document.body.append(marker);
    return marker;
}

function checkForWin()
{
    if(areas[0].style.backgroundColor === areas[1].style.backgroundColor && areas[1].style.backgroundColor === areas[2].style.backgroundColor)
    {
        // Increment either player one or player two score here.
    }
}

const playerOneMarker = markerFactory("div", "X", "red");
const playerTwoMarker = markerFactory("div", "O", "blue");
let currentPlayer = 1;

const areas = document.querySelectorAll(".board div");

for(let i = 0; i < areas.length; i++)
{
    areas[i].addEventListener("click", () =>
    {
        if(currentPlayer === 1)
        {
            areas[i].style.backgroundColor = "#FF6962";
            currentPlayer = 2;
        }
        else
        {
            areas[i].style.backgroundColor = "#AFDCED";
            currentPlayer = 1;
        }
    });
    checkForWin();
}