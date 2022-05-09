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

let initDetails = () => {
    // To see the shirts object, run:
    // console.log(shirts);

    // Your Code Here
};