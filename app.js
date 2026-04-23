const zenDots = new FontFace('Zen Dots', 'url(./FONT/ZENDOTS/zen-dots.ttf)');
const roboto  = new FontFace('Roboto Slab', 'url(./FONT/ROBOTOSLAB/robotoslab.ttf)');

zenDots.load().then((loadedFont) => {
  document.fonts.add(loadedFont);
  console.log('Font loaded and added successfully!');
}).catch((error) => {
  console.error('Font failed to load:', error);
});

roboto.load().then((loadedFont) => {
  document.fonts.add(loadedFont);
  console.log('Font loaded and added successfully!');
}).catch((error) => {
  console.error('Font failed to load:', error);
});

const body = document.querySelector(`body`);
body.style.height = `100vh`;
body.style.overflow = `hidden`
body.style.backgroundColor = `white`;
body.style.display = `flex`;
body.style.flexDirection = `column`;
body.style.justifyContent = `center`;
body.style.alignItems = `center`;
body.style.margin = `0`;

const header = document.createElement(`div`);
header.style.width = `100vw`;
header.style.height = `10vh`;
header.style.display = `flex`;
header.style.justifyContent = `center`;
header.style.alignItems = `center`;
header.style.background = 'linear-gradient(33deg, rgba(52, 0, 107, 1) 0%, rgb(123, 0, 206) 50%, rgba(52, 0, 107, 1) 100%)';
body.appendChild(header);

const main = document.createElement(`div`);
main.style.width = `100vw`;
main.style.height = `80vh`;
main.style.display = `flex`;
main.style.justifyContent = `center`;
main.style.alignItems = `center`;
main.style.background = 'linear-gradient(33deg, rgb(0, 0, 0) 0%, rgb(18, 5, 27) 50%, rgb(0, 0, 0) 100%)';
body.appendChild(main);

const footer = document.createElement(`div`);
footer.style.width = `100vw`;
footer.style.height = `10vh`;
footer.style.display = `flex`;
footer.style.justifyContent = `center`;
footer.style.alignItems = `center`;
footer.style.background = 'linear-gradient(33deg, rgba(52, 0, 107, 1) 0%, rgb(123, 0, 206) 50%, rgba(52, 0, 107, 1) 100%)';
body.appendChild(footer);

const message = document.createElement(`h3`);
message.textContent = `made with 💗 by phc-s`;
message.style.fontFamily = 'Roboto Slab, serif';
message.style.fontWeight = 900;
message.style.fontSize = `0.9rem`;
message.style.color = `white`;
footer.appendChild(message);

const rallype_logo = document.createElement(`img`);
rallype_logo.src = "./IMG/logo.svg";
rallype_logo.style.padding = "3px";
rallype_logo.style.width = `2rem`;
header.appendChild(rallype_logo);

const rallype_text = document.createElement(`h3`);
rallype_text.style.fontFamily = "'Zen Dots', sans-serif";
rallype_text.style.fontWeight = 900;
rallype_text.style.fontSize = `2rem`;
rallype_text.style.color = `white`;
rallype_text.textContent = `rallype`;
header.appendChild(rallype_text);

const table = document.createElement(`div`);
table.style.width = `80vw`;
table.style.height = `50vh`;
table.style.padding = `30px`;
table.style.display = `flex`;
table.style.justifyContent = `center`;
table.style.alignItems = `center`;
table.style.flexDirection = `column`
table.style.color = 'rgb(234, 208, 255)';
table.style.fontFamily = 'Roboto Slab, serif';
table.style.fontSize = '24px'
table.style.borderRadius = `50px`;
main.appendChild(table);

const carsample = document.createElement(`img`);
carsample.src = "./IMG/CAR/AMYST.png";
table.appendChild(carsample);

const mainText = document.createElement(`h3`);
mainText.textContent = `Hands on the hype of rally racing!`;
rallype_text.style.fontFamily = "'Zen Dots', sans-serif";
mainText.style.fontSize = `1.5rem`;
mainText.style.padding = `8px`;
table.appendChild(mainText);

const paragraph_one = document.createElement(`p`);
paragraph_one.textContent = `🚙 Simulate rally races against the clock with a complex engine that takes into account deep aspects of the racing world!`;
paragraph_one.style.fontSize = `0.75rem`;
table.appendChild(paragraph_one);

const paragraph_5 = document.createElement(`p`);
paragraph_5.textContent = `👨‍💻 Gradually developing, it will evolve from a simple time trial simulation to a full-fledged rich and customizable career game.`;
paragraph_5.style.fontSize = `0.75rem`;
table.appendChild(paragraph_5);

const paragraph_2 = document.createElement(`p`);
paragraph_2.textContent = `⛽ With a wide selection of vehicles, perform maintenance, refueling, cleaning, repairs, and tire changes with care!`;
paragraph_2.style.fontSize = `0.75rem`;
table.appendChild(paragraph_2);

const paragraph_3 = document.createElement(`p`);
paragraph_3.textContent = `🏆 Customize your pilot and co-pilot, evolve their attributes in an LifeRPG system to become a legendary champion!`;
paragraph_3.style.fontSize = `0.75rem`;
table.appendChild(paragraph_3);

const paragraph_4 = document.createElement(`p`);
paragraph_4.textContent = `🌎 Seek new sponsors, climb the rankings, from local to global stages, facing new potential rivals.`;
paragraph_4.style.fontSize = `0.75rem`;
table.appendChild(paragraph_4);

const paragraph_6 = document.createElement(`p`);
paragraph_6.textContent = `🏁 Excite the dream, prepare for a longtime career, there's an exciting world waiting for you!`;
paragraph_6.style.fontSize = `0.75rem`;
table.appendChild(paragraph_6);

const Ps = document.querySelectorAll('p');
Ps.forEach(p => {
  p.style.color = 'rgb(223, 184, 255)';
  p.style.fontWeight = '800';
  p.style.margin = '3px';
});