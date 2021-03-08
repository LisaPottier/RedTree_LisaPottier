// -------------------
//  Parameters and UI
// -------------------

const gui = new dat.GUI()
const params = {
    taille: 10,
    Random_Seed: 0,
    deformation:4,
    Download_Image: () => save(),
}
gui.add(params, "taille", 0, 40, 1)
gui.add(params, "Random_Seed", 0, 100, 1)
gui.add(params, "Download_Image")
gui.add(params,'deformation', 1,10,1)


// -------------------
//       Drawing
// -------------------

function draw() 
{
    randomSeed(params.Random_Seed)
    rectMode(CORNER)
    noStroke()
    background(215,210, 210)

    let largeur=width;
    let hauteur=height;
    let colorArray =['black','#3459ba'/*blue*/,'#db3425'/*red*/,'#ffdd47'/*yellow*/];

    for(let i=0;i<largeur/params.taille; i++)
    {
        for(let j=0; j<hauteur/params.taille;j++)
        {
            let colour=random(colorArray);
            fill(color(colour));    
            let h = params.taille*random(1,params.deformation);
            let l=params.taille*random(1,params.deformation);   
            push()
                translate(i*l,j*h)
                rect(0,0,l,h)
            pop()
        }
    }
}
    

 // -------------------
 //    Initialization
 // -------------------
 
 function setup() {
     p6_CreateCanvas()
 }
 
 function windowResized() {
     p6_ResizeCanvas()
 }