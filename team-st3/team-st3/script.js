const c=document.getElementById('bg'),x=c.getContext('2d');
function r(){c.width=innerWidth;c.height=innerHeight;}
r();
let p=[];
for(let i=0;i<80;i++)p.push({x:Math.random()*innerWidth,y:Math.random()*innerHeight,vx:(Math.random()-0.5)*0.3,vy:(Math.random()-0.5)*0.3});
function draw(){
x.clearRect(0,0,c.width,c.height);
x.fillStyle='rgba(0,255,180,0.7)';
p.forEach(a=>{
a.x+=a.vx; a.y+=a.vy;
if(a.x<0||a.x>c.width)a.vx*=-1;
if(a.y<0||a.y>c.height)a.vy*=-1;
x.fillRect(a.x,a.y,3,3);
});
requestAnimationFrame(draw);
}
draw();
