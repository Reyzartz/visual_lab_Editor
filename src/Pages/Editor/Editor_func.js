const InitilJsVal=[
    {
        id:Math.random(),
        displayName:'index',
        value:
`<html >
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Canvas Resize</title>
</head>
	<body>
    	<canvas></canvas>
	</body>
</html>`,
        language:'xml',
        fileType:'html'
    },
    {
        id:Math.random(),
        displayName:'style',
        value:
`*{
    margin:0px;
    padding:0px;
}`,
        language:'css',
        fileType:'css'
    },
    
    {
        id:Math.random(),
        displayName:'script',
        value:
    `let canvas =document.querySelector('canvas');

    //Defining Width and Height
    canvas.width=innerWidth;
    canvas.height=innerHeight;
    canvas.style.backgroundColor="transparent";
    const ctx = canvas.getContext('2d');
    
    let radius,x,y,xSpeed,ySpeed,maxRadius=100,NoOfParticle=(innerWidth+innerHeight)/6;
    let mouse={
        x:undefined,
        y:undefined
    }
    let colorArray = [
        'rgba(209,17,65,0.7)',
        'rgba(0,177,89,0.7)',
        'rgba(0,174,219,0.7)',
        'rgba(243,119,53,0.7)',
        'rgba(255,196,37,0.7)'
    ],color;
    window.addEventListener('mousemove',
        function(event){
            mouse.x=event.offsetX;
            mouse.y=event.offsetY;
        });
    window.addEventListener('resize',function(){
        canvas.width=innerWidth;
        canvas.height=innerHeight;
        init();
    })
    
    //Creating Circle Object to create a circles
    function Circle(x,y,radius,xSpeed,ySpeed,color){
        this.x=x;
        this.y=y;
        this.radius=radius;
        this.xSpeed=xSpeed;
        this.ySpeed=ySpeed;
        this.color=color
        this.draw = function() {
            ctx.beginPath();
            ctx.arc(this.x,this.y,radius,0,Math.PI * 2, false);
            ctx.fillStyle=this.color;
            ctx.fill();
            
        }
        
        this.update=function(){
            if(this.x+this.radius>innerWidth || this.x-this.radius<0)
                
                this.xSpeed=-this.xSpeed;
            
            if(this.y+this.radius>innerHeight || this.y-this.radius<0)
                
                this.ySpeed=-this.ySpeed;
            
            this.x+=this.xSpeed;
            this.y+=this.ySpeed;
            
            if(this.x-mouse.x<maxRadius && this.x-mouse.x>-maxRadius
                && this.y-mouse.y<maxRadius && this.y-mouse.y>-maxRadius){
                this.radius++
            }
            else
                color="rgba(255,255,255,0.5)"
               
                
            this.draw();
        }
    }
    
    //Creating using Circle Object and storing them in an Array with Random value
    let circleArray=[];
    function init(){
        circleArray =[];
    for(let i=0;i<NoOfParticle;i++){
            radius=Math.floor(Math.random()*6)+3;
            x=Math.random()*(innerWidth-radius*2)+radius,
            y=Math.random()*(innerHeight-radius*2)+radius,
            xSpeed= (Math.random()-0.5)*1.5,
            ySpeed=(Math.random()-0.5)*1.5;
            color=colorArray[Math.floor(Math.random()*5)]
            circleArray.push(new Circle(x,y,radius,xSpeed,ySpeed,color))
        }
    aniamte();
    }
    //Calling function to Update the position of the Circles 
    function aniamte(){
        requestAnimationFrame(aniamte)
        ctx.clearRect(0,0,innerWidth,innerHeight,true);
        for(let i=0;i<circleArray.length;i++)
            circleArray[i].update();
    }
    init();`,
        language:'javascript',
        fileType:'js'
    }
    ];



export {InitilJsVal}