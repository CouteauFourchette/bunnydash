import GameView from './game_view';
import Game from './game';

document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('canvas');
  const height = 300;
  const width = 600;
  canvas.width = width;
  canvas.height = height;
  console.log(canvas);
  const ctx = canvas.getContext('2d');
  const game = new Game(width, height);
  new GameView(game, ctx).start();
});