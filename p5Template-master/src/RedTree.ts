// -------------------
//  Parameters and UI
// -------------------

const gui = new dat.GUI()
const params = {
    taille: 10,
    noise_Seed: 0,
    random_Seed:0,
    deformation:8,
    number:175,
    Download_Image: () => save(),
}
gui.add(params, "taille", 0, 40, 1)
gui.add(params, "noise_Seed", 0, 100, 1)
gui.add(params, "random_Seed", 0, 100, 1)
gui.add(params, "Download_Image")
gui.add(params,'number', 50,500,1)
gui.add(params,'deformation', 1,10,1)


// -------------------
//       Drawing
// -------------------


//reinterprétation
function draw()
{
    noiseSeed(params.noise_Seed)
    randomSeed(params.random_Seed)
    rectMode(CORNER)
    ellipseMode(CENTER)
    noStroke()
    background(215,210, 210)
    //first reinterpretation : new colors
/*
    background(0,0,0)
    let colorArray =['#eeeee4' //beige
                        ,'pink',
                        'cyan',
                        'yellow', //red
                        'blue']; //yellow
    for(let i=0; i<params.number; i++)
    {
        let colour=random(colorArray);
        fill(color(colour));    
        let h = params.taille*random(1,params.deformation);
        let l=params.taille*random(1,params.deformation);   
        push()
            translate(random(width),random(height))
            rect(0,0,l,h)
        pop()
    } */
    //second reinterpretation : circles
    let colorArray =['#eeeee4' //beige
                    ,'black',
                    '#3459ba', //blue
                    '#db3425', //red
                    '#ffdd47']; //yellow
                    
    for(let i=0; i<params.number; i++)
    {
        let colour=random(colorArray);
        fill(color(colour));    
        let h = params.taille*random(1,params.deformation);
        let l=params.taille*random(1,params.deformation);   
        push()
            translate(random(width),random(height))
            ellipse(0,0,l,h)
        pop()
    }
    
}

/*

function draw() 
{
    noiseSeed(params.noise_Seed)
    randomSeed(10)
    rectMode(CORNER)
    noStroke()
    background(215,210, 210)

    let colorArray =['#eeeee4' //beige
                        ,'black',
                        '#3459ba', //blue
                        '#db3425', //red
                        '#ffdd47']; //yellow
    //avec perlin noise
    let color;
    let x=0;
    let y=0;
    
    for(let i=0; i<5;i++)//indice couleur
    {
        for(let x=0; x<width; x+=params.taille)
        {   
            for (let y = 0; y < height; y+=params.taille) 
            {
                var c = noise(0.01 * x+i*10, 0.01 * y);
                
                if((i==0 && c==1.) //beige
                || (i==1 && c>=0.6) //black
                || (i==2 && c>0.5 && c<0.7)//blue
                || (i==3 && c>0.4 && c<=0.5)//red
                || (i==4 && c>0.5)//yellow
                ){
                    
                    fill(colorArray[i]);
                    rect(x, y, params.taille,params.taille);
                }                
            }
        }    
    }
}
*/

    //sans perlin noise

/*
    for(let i=0; i<params.number; i++)
    {
        let colour=colorArray[noise(5)];
        fill(color(colour));    
        let h = params.taille*random(1,params.deformation);
        let l=params.taille*random(1,params.deformation);   
        push()
            translate(random(width),random(height))
            rect(0,0,l,h)
        pop()
    }   
}
*/

 // -------------------
 //    Initialization
 // -------------------
 
 function setup() {
     p6_CreateCanvas()
 }
 
 function windowResized() {
     p6_ResizeCanvas()
 }