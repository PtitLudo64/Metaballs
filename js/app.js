// import Ball from './Ball.js';
import MetaballsEffect from './Metaball.js';

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.fillStyle = '#f00';

const effect = new MetaballsEffect(canvas.width, canvas.height);
effect.init(20);


function animate() {
    ctx.clearRect(0,0,canvas.width, canvas.height);
    effect.update();
    effect.draw(ctx);
    requestAnimationFrame(animate)
}

animate();
window.addEventListener('resize', ()=> {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    ctx.fillStyle = '#f00';
    effect.reset(canvas.width, canvas.height);
});