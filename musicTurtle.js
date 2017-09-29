

//let my_canvas=document.getElementById("canvas")
//let context = my_canvas.getContext("2d")

function record()  {
let canvas = document.getElementById('canvas');
if (canvas.getContext)
{
let ctx = canvas.getContext('2d');
let X = canvas.width / 2;
let Y = canvas.height / 2;
let R = canvas.height *.4;

ctx.beginPath();
ctx.arc(X, Y, R, 0, 2 * Math.PI, false);

ctx.lineWidth = 3;
ctx.strokeStyle = "#000000";
ctx.stroke();
ctx.fill();

recordLabel();
recordHole();
recordLines();
}
}


    //Record label for spinning record image in top banner
    function recordLabel()
      {
    let canvas = document.getElementById('canvas');
    if (canvas.getContext)
    {
    let ctx = canvas.getContext('2d');
    let X = canvas.width / 2;
    let Y = canvas.height / 2;
    let R = 15;
    ctx.beginPath();
    ctx.arc(X, Y, R, 0, 2 * Math.PI, false);
    ctx.lineWidth = 3;
    ctx.fillStyle = "#008080";
    ctx.strokeStyle = "#267933";
    ctx.stroke();
    ctx.fill();
    }
    }

    //Center record hole for spinning record image in top banner
    function recordHole()
      {
    let canvas = document.getElementById('canvas');
    if (canvas.getContext)
    {
    let ctx = canvas.getContext('2d');
    let X = canvas.width / 2;
    let Y = canvas.height / 2;
    let R = 3;
    ctx.beginPath();
    ctx.arc(X, Y, R, 0, 2 * Math.PI, false);
    ctx.lineWidth = 3;
    ctx.fillStyle = "#000000";
    ctx.strokeStyle = "black";
    ctx.stroke();
    ctx.fill();
    }
    }

    //lines for spinning record image in top banner
    function recordLines(){
    for (let R=15; R<40;R++){
    let canvas = document.getElementById('canvas');
        if (canvas.getContext)
        {
        let ctx = canvas.getContext('2d');
        let X = canvas.width / 2;
        let Y = canvas.height / 2;
        ctx.beginPath();
        ctx.arc(X, Y, R, 0, 2 * Math.PI, false);
        ctx.fps = .5;
        ctx.lineWidth = 1;
        ctx.strokeStyle = "#808080";
        ctx.stroke()
    }}}


//Master function to create boombox in top of right banner
let boombox= function boombox()  {
let canvas = document.getElementById('canvas2');
if (canvas.getContext)
{
let ctx = canvas.getContext('2d');
let my_gradient=ctx.createLinearGradient(0,0,0,130);
my_gradient.addColorStop(0,"black");
my_gradient.addColorStop(1,"white");
ctx.fillStyle=my_gradient;
ctx.fillRect(20,20,150,canvas.height*.65);
ctx.beginPath();
ctx.lineWidth = 3;
ctx.strokeStyle = "#000000";
ctx.stroke();
ctx.fill();
speakerHolesLeft();
speakerHolesRight();
handle();
boomboxBorder();
recordLines();
}
}


  //Left speaker holes for boombox
  let speakerHolesLeft = function speakerHolesLeft(){
    let canvas = document.getElementById('canvas2');
    if (canvas.getContext)
    {
    let ctx = canvas.getContext('2d');
    let X = canvas.width / 2.5;
    let Y = canvas.height /2.5;
    let R = 10;
    ctx.beginPath();
    ctx.arc(X, Y, R, 0, 2 * Math.PI, false);
    ctx.lineWidth = 3;
    ctx.fillStyle = "#000000";
    ctx.strokeStyle = "black";
    ctx.stroke();
    ctx.fill();
    }
    }

//Right Speaker hole circles for boombox on top banner
    let speakerHolesRight = function speakerHolesRight(){
      let canvas = document.getElementById('canvas2');
      if (canvas.getContext)
      {
      let ctx = canvas.getContext('2d');
      let X = canvas.width / 1.25;
      let Y = canvas.height /2.5;
      let R = 10;
      ctx.beginPath();
      ctx.arc(X, Y, R, 0, 2 * Math.PI, false);
      ctx.lineWidth = 3;
      ctx.fillStyle = "#000000";
      ctx.strokeStyle = "black";
      ctx.stroke();
      ctx.fill();
      }
      }

  //Handle for boombox on top right banner
    let handle = function handle(){
      let canvas = document.getElementById('canvas2');
      if (canvas.getContext)
      {
      let ctx = canvas.getContext('2d');
      let X = canvas.width / 1.75;
      let Y = canvas.height /3;
      let R = 20;
      let startAngle = 1.1 * Math.PI;
      let endAngle = 1.9 * Math.PI;
      let counterClockwise = false;
      ctx.beginPath();
      ctx.arc(X, Y, R, startAngle, endAngle, counterClockwise);
      ctx.lineWidth = 15;
      ctx.fillStyle = "#000000";
      ctx.strokeStyle = "black";
      ctx.stroke();
      ctx.fill();
      }
      }




//Master function for gold record first star (spinning gold record image used) on pop up modal
function goldRecord1()  {
let modalStarCanvas1 = document.getElementById('modalStar1');
if (modalStarCanvas1.getContext)
{
let ctx = modalStarCanvas1.getContext('2d');
let X = modalStarCanvas1.width / 2;
let Y = modalStarCanvas1.height / 2;
let R = modalStarCanvas1.height *.4;

ctx.beginPath();
ctx.arc(X, Y, R, 0, 2 * Math.PI, false);

ctx.lineWidth = 3;
ctx.strokeStyle = "#000000";
ctx.fillStyle = "#eee8aa"
ctx.stroke();
ctx.fill();
gRecordLabel1();
gRecordHole1();
gRecordLines1();
}
}


    //Record label for spinning record image on pop up modal
    function gRecordLabel1(){
    let modalStarCanvas1=document.getElementById("modalStar1")
    if (modalStarCanvas1.getContext)
    {
    let ctx = modalStarCanvas1.getContext('2d');
    let X = modalStarCanvas1.width / 2;
    let Y = modalStarCanvas1.height / 2;
    let R = 15;
    ctx.beginPath();
    ctx.arc(X, Y, R, 0, 2 * Math.PI, false);
    ctx.lineWidth = 3;
    ctx.fillStyle = "#008080";
    ctx.strokeStyle = "#267933";
    ctx.stroke();
    ctx.fill();
    }
    }

    //Center record hole for spinning record image on pop up modal
    function gRecordHole1(){
    let modalStarCanvas1=document.getElementById("modalStar1")
    if (modalStarCanvas1.getContext)
    {
    let ctx = modalStarCanvas1.getContext('2d');
    let X = modalStarCanvas1.width / 2;
    let Y = modalStarCanvas1.height / 2;
    let R = 3;
    ctx.beginPath();
    ctx.arc(X, Y, R, 0, 2 * Math.PI, false);
    ctx.lineWidth = 3;
    ctx.fillStyle = "#000000";
    ctx.strokeStyle = "black";
    ctx.stroke();
    ctx.fill();
    }
    }

    //lines for spinning record image on pop up modal
    // //R=3 is due to radius of inner record circle
    function gRecordLines1(){
    let modalStarCanvas1=document.getElementById("modalStar1")
    for (let R=15; R< modalStarCanvas1.height *.4;R++){
        if (modalStarCanvas1.getContext)
        {
        let ctx = modalStarCanvas1.getContext('2d');
        let X = modalStarCanvas1.width / 2;
        let Y = modalStarCanvas1.height / 2;
        ctx.beginPath();
        ctx.arc(X, Y, R, 0, 2 * Math.PI, false);
        ctx.fps = .5;
        ctx.lineWidth = 1;
        ctx.strokeStyle = "#808080";
        ctx.stroke();
    }}}

//Master function for gold record second star (spinning gold record image used) on pop up modal
function goldRecord2()  {
let modalStarCanvas2 = document.getElementById("modalStar2");
if (modalStarCanvas2.getContext)
{
let ctx = modalStarCanvas2.getContext('2d');
let X = modalStarCanvas2.width / 2;
let Y = modalStarCanvas2.height / 2;
let R = modalStarCanvas2.height *.4;
ctx.beginPath();
ctx.arc(X, Y, R, 0, 2 * Math.PI, false);
ctx.lineWidth = 3;
ctx.strokeStyle = "#000000";
ctx.fillStyle = "#eee8aa";
ctx.stroke();
ctx.fill();
gRecordLabel2();
gRecordHole2();
gRecordLines2();
}
}

      //Record label for second spinning record image on pop up modal
      function gRecordLabel2(){
      let modalStarCanvas2=document.getElementById("modalStar2")
      if (modalStarCanvas2.getContext)
      {
      let ctx = modalStarCanvas2.getContext('2d');
      let X = modalStarCanvas2.width / 2;
      let Y = modalStarCanvas2.height / 2;
      let R = 15;
      ctx.beginPath();
      ctx.arc(X, Y, R, 0, 2 * Math.PI, false);
      ctx.lineWidth = 3;
      ctx.fillStyle = "#008080";
      ctx.strokeStyle = "#267933";
      ctx.stroke();
      ctx.fill();
      }
      }

      //Center record hole for second spinning record image on pop up modal
      function gRecordHole2(){
      let modalStarCanvas2=document.getElementById("modalStar2")
      if (modalStarCanvas2.getContext)
      {
      let ctx = modalStarCanvas2.getContext('2d');
      let X = modalStarCanvas2.width / 2;
      let Y = modalStarCanvas2.height / 2;
      let R = 3;
      ctx.beginPath();
      ctx.arc(X, Y, R, 0, 2 * Math.PI, false);
      ctx.lineWidth = 3;
      ctx.fillStyle = "#000000";
      ctx.strokeStyle = "black";
      ctx.stroke();
      ctx.fill();
      }
      }

      //lines for spinning record image on pop up modal
      // //R=3 is due to radius of inner record circle
      function gRecordLines2(){
      let modalStarCanvas2=document.getElementById("modalStar2")
      for (let R=15; R< modalStarCanvas2.height *.4;R++){
          if (modalStarCanvas2.getContext)
          {
          let ctx = modalStarCanvas2.getContext('2d');
          let X = modalStarCanvas2.width / 2;
          let Y = modalStarCanvas2.height / 2;
          ctx.beginPath();
          ctx.arc(X, Y, R, 0, 2 * Math.PI, false);
          ctx.fps = .5;
          ctx.lineWidth = 1;
          ctx.strokeStyle = "#808080";
          ctx.stroke();
      }}}

//Master function for gold record second star (spinning gold record image used) on pop up modal
function goldRecord3()  {
let modalStarCanvas3 = document.getElementById("modalStar3");
if (modalStarCanvas3.getContext)
{
let ctx = modalStarCanvas3.getContext('2d');
let X = modalStarCanvas3.width / 2;
let Y = modalStarCanvas3.height / 2;
let R = modalStarCanvas3.height *.4;

ctx.beginPath();
ctx.arc(X, Y, R, 0, 2 * Math.PI, false);

ctx.lineWidth = 3;
ctx.strokeStyle = "#000000";
ctx.fillStyle = "#eee8aa";
ctx.stroke();
ctx.fill();
gRecordLabel3();
gRecordHole3();
gRecordLines3();
}
}


      //Record label for second spinning record image on pop up modal
      function gRecordLabel3(){
      let modalStarCanvas3=document.getElementById("modalStar3")
      if (modalStarCanvas3.getContext)
      {
      let ctx = modalStarCanvas3.getContext('2d');
      let X = modalStarCanvas3.width / 2;
      let Y = modalStarCanvas3.height / 2;
      let R = 15;
      ctx.beginPath();
      ctx.arc(X, Y, R, 0, 2 * Math.PI, false);
      ctx.lineWidth = 3;
      ctx.fillStyle = "#008080";
      ctx.strokeStyle = "#267933";
      ctx.stroke();
      ctx.fill();
      }
      }

      //Center record hole for second spinning record image on pop up modal
      function gRecordHole3(){
      let modalStarCanvas3=document.getElementById("modalStar3")
      if (modalStarCanvas3.getContext)
      {
      let ctx = modalStarCanvas3.getContext('2d');
      let X = modalStarCanvas3.width / 2;
      let Y = modalStarCanvas3.height / 2;
      let R = 3;
      ctx.beginPath();
      ctx.arc(X, Y, R, 0, 2 * Math.PI, false);
      ctx.lineWidth = 3;
      ctx.fillStyle = "#000000";
      ctx.strokeStyle = "black";
      ctx.stroke();
      ctx.fill();
      }
      }

      //lines for spinning record image on pop up modal
      function gRecordLines3(){
      let modalStarCanvas2=document.getElementById("modalStar3")
      for (let R=15; R< modalStarCanvas3.height *.4;R++){
      if (modalStarCanvas3.getContext)
      {
      let ctx = modalStarCanvas3.getContext('2d');
      let X = modalStarCanvas3.width / 2;
      let Y = modalStarCanvas3.height / 2;
      ctx.beginPath();
      ctx.arc(X, Y, R, 0, 2 * Math.PI, false);
      ctx.fps = .5;
      ctx.lineWidth = 1;
      ctx.strokeStyle = "#808080";
      ctx.stroke();
      }}}
