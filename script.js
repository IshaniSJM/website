const main = document.getElementById("main");
    const dtText = document.getElementById("dtText");
    const navbar = document.getElementById("navbar");
        const abtMe = document.getElementById("abtMe");
        const projects = document.getElementById("projects");
        const contacts = document.getElementById("contacts");

    const content = document.getElementById("content");
        //const scrollDisplay = document.getElementById("scroll");

    const footer = document.getElementById("footer");


let fps = 0;
let lastTime = 0;
let frames = 0;
function updateTime(time)
{
    const deltaTime = time - lastTime;
    frames++;

    if(deltaTime >= 1000)
    {
        fps = frames;
        frames = 0;
        lastTime = time;
    }

    dtText.innerHTML = " | Current Date & Time: " + new Date() + " | FPS: " + fps + " | ";

    requestAnimationFrame(updateTime);
}
requestAnimationFrame(updateTime);


window.addEventListener("scroll", updateScrollPercentage);
function updateScrollPercentage()
{
    const scrollPercent = (window.scrollY / main.clientHeight) * 100;
    /*
    scrollDisplay.textContent = `Scrolled: ${scrollPercent.toFixed(2)}%`;
    scrollDisplay.style.opacity = scrollPercent > 1 ? "1" : "0";
    */
}