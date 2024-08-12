import init, { Universe } from "./pkg/game_of_life.js";

const main = async () => {
  await init();

  const pre = document.getElementById("game-of-life-canvas");
  const universe = Universe.new();

  const renderLoop = () => {
    pre.textContent = universe.render();
    universe.tick();
    requestAnimationFrame(renderLoop);
  };

  requestAnimationFrame(renderLoop);
};
main();
