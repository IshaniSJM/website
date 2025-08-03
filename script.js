const body = document.getElementById("body");
    const dtText = document.getElementById("dtText");
    const myName = document.getElementById("myName");
    const navbar = document.getElementById("navbar");
        const abtMe = document.getElementById("abtMe");
        const projects = document.getElementById("projects");
        const contacts = document.getElementById("contacts");

    const content = document.getElementById("content");
        const main = document.getElementById("main");

    const footer = document.getElementById("footer");


let fps = 0;
let lastTime = 0;
let frames = 0;
function updateMarquee(time)
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

    requestAnimationFrame(updateMarquee);
}
requestAnimationFrame(updateMarquee);

async function fetchAndSetInnerHtml(path)
{
	try
	{
		await fetch(path)
            .then(response => response.text())
            .then(fetchedHtml => main.innerHTML = fetchedHtml);
	}
	catch(err)
	{
		console.log(err);
	}
}

fetchAndSetInnerHtml("aboutMe.html")

abtMe.addEventListener("click", () => fetchAndSetInnerHtml("aboutMe.html"));
projects.addEventListener("click", () => fetchAndSetInnerHtml("projects.html"));
contacts.addEventListener("click", () => fetchAndSetInnerHtml("contacts.html"));

const fonts = ["Arial", "Georgia", "Courier New", "Comic Sans MS", "Verdana", "Cabin"];
let index = 0;
setInterval(() => 
{
    myName.style.fontFamily = fonts[index];
    index = (index + 1) % fonts.length;
}, 100);