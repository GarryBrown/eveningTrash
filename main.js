import Character from "./character.js";
import Weapon from "./weapon.js";
import InfoPicture from "./info-picture.js";
import Timer from "./Timer.js";

const main = () => {
  const canvas = document.getElementById("canvas");
  canvas.height = document.documentElement.clientHeight;
  canvas.width = document.documentElement.clientWidth;

  const context = canvas.getContext("2d");
  context.font = "14px Arial";

  const informator = new InfoPicture(context);
  const character = new Character(context);
  character.informator = informator;
  character.weapon = new Weapon(context);

  window.addEventListener("keydown", event => {
      console.log(event)
    if ([37, 38, 39, 40].indexOf(event.keyCode) !== 0) {
      character.move(event.key);
    }
    if (event.code === "Space") {
      character.shot();
    }
  });

  const timer = new Timer(1 / 60);
  timer.update = function update(deltaTime) {
    // character.move("ArrowRight");
    character.weapon.update();
  };

  timer.start();
};

main();
