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
rallype_logo.style.width = `1.5rem`;
header.appendChild(rallype_logo);

const rallype_text = document.createElement(`h3`);
rallype_text.style.fontFamily = "'Zen Dots', sans-serif";
rallype_text.style.fontWeight = 900;
rallype_text.style.fontSize = `1.8rem`;
rallype_text.style.color = `white`;
rallype_text.textContent = `rallype`;
header.appendChild(rallype_text);

const table = document.createElement(`div`);
table.style.width = `60vw`;
table.style.height = `50vh`;
table.style.padding = `30px`;
table.style.display = `flex`;
table.style.justifyContent = `center`;
table.style.alignItems = `center`;
table.style.flexDirection = `column`
table.style.backgroundColor = 'rgb(53, 11, 73)';
table.style.fontFamily = 'Roboto Slab, serif';
table.style.fontSize = '24px'
table.style.borderRadius = `50px`;
main.appendChild(table);


const mobile = document.createElement(`img`);
mobile.src = "./IMG/SELECT/mobile.svg";
mobile.style.width = `12vh`;
mobile.style.padding = `10px`;
mobile.style.color = 'rgb(223, 184, 255)';
table.appendChild(mobile);

const paragraph_one = document.createElement(`p`);
paragraph_one.textContent = `Desktop`;
paragraph_one.style.fontSize = `0.75rem`;
table.appendChild(paragraph_one);

const desktop = document.createElement(`img`);
desktop.src = "./IMG/SELECT/desktop.svg";
desktop.style.width = `12vh`;
desktop.style.padding = `10px`;
desktop.style.color = 'rgb(223, 184, 255)';
table.appendChild(desktop);

const paragraph_two = document.createElement(`p`);
paragraph_two.textContent = `mobile`;
paragraph_two.style.fontSize = `0.75rem`;
table.appendChild(paragraph_two);

const Ps = document.querySelectorAll('p');
Ps.forEach(p => {
  p.style.color = 'rgb(223, 184, 255)';
  p.style.fontWeight = '800';
  p.style.margin = '0px';
});