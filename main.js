// NOTE: The variable "shirts" is defined in the shirts.js file as the full list of shirt offerings
//       You can access this variable here, and should use this variable here to build your webpages

let initProducts = () => {
    // To see the shirts object, run:
    // console.log(shirts);
document.getElementById('img1').src = shirts[0].colors.white.front;
  document.getElementById('name1').innerHTML = shirts[0].name;

  document.getElementById('img2').src = shirts[1].colors.white.front;
  document.getElementById('name2').innerHTML = shirts[1].name;

  document.getElementById('img3').src = shirts[2].colors.white.front;
  document.getElementById('name3').innerHTML = shirts[2].name;

  document.getElementById('img4').src = shirts[3].colors.white.front;
  document.getElementById('name4').innerHTML = shirts[3].name;
    // Your Code Here
};

const name1 = document.createElement('h2');
name1.className = "name";
name1.innerHTML = shirts[0].name;
const image1 = document.createElement('img')
const cost = document.createElement('h2')
cost.className = 'cost'
cost.innerHTML = shirts[0].price;
image1.src = shirts[0].colors.white.front;
document.querySelector('.details').appendChild(image1);
document.querySelector('.details').appendChild(cost);
document.querySelector('.details').appendChild(name1);
n=0;
Change(n);

function Change(n){
    if(n==1){
        image1.src = shirts[0].colors.white.front;
    }
    if(n==2){
        image1.src = shirts[0].colors.blue.front;
    }
    if(n==3){
        image1.src = shirts[0].colors.red.front;
    }
    if(n==4){
        image1.src = shirts[0].colors.pink.front;
    }
    if(n==5){
      image1.src = shirts[0].colors.white.back;
    }
    if(n==6){
      image1.src = shirts[1].colors.white.front;
    }
    if(n==7){
      image1.src = shirts[1].colors.blue.front;
    }
    if(n==8){
      image1.src = shirts[1].colors.red.front;
    }
    if(n==9){
      image1.src = shirts[1].colors.green.front;
    }
    if(n==10){
      image1.src = shirts[1].colors.yellow.front;
    }
    if(n==11){
      image1.src = shirts[1].colors.white.back;
    }
    if(n==12){
      image1.src = shirts[2].colors.white.front;
    }
    if(n==13){
      image1.src = shirts[2].colors.pink.front;
    }
    if(n==14){
      image1.src = shirts[2].colors.white.back;
    }
    if(n==15){
      image1.src = shirts[3].colors.white.front;
    }
    if(n==16){
      image1.src = shirts[3].colors.white.back;
    }
}

let initDetails2 = () => {
  Change(6);
  name1.innerHTML = shirts[1].name;
  cost.innerHTML = shirts[1].price;
}

let initDetails3 = () => {
  Change(12);
  name1.innerHTML = shirts[2].name;
  cost.innerHTML = shirts[2].price;
}
let initDetails4 = () => {
  Change(15);
  name1.innerHTML = shirts[3].name;
  cost.innerHTML = shirts[3].price;
}