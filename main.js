import init, { Universe } from "./pkg/game_of_life.js";

const main = async () => {
  await init({});

  const container = document.getElementById("game-of-life-canvas");
  const universe = Universe.new();

  let animationId = null;

  const renderLoop = () => {
    container.textContent = universe.render();

    for (let i = 0; i < 10; i++) {
      universe.tick();
    }

    animationId = requestAnimationFrame(renderLoop);
  };

  const playPauseButton = document.getElementById("play-pause");

  const play = () => {
    playPauseButton.textContent = "⏸";
    renderLoop();
  };

  const pause = () => {
    playPauseButton.textContent = "▶";
    cancelAnimationFrame(animationId);
    animationId = null;
  };

  playPauseButton.addEventListener("click", (event) => {
    if (animationId === null) {
      play();
    } else {
      pause();
    }
  });

  // play();
};

main();
