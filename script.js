// nav
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems, options);
});

// slider functionality

let options = {
  duration: 200
}
document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.slider');
  var instances = M.Slider.init(elems, options);
});

// cards functionality


function initialize() {


  for (let i = 0; i < bagDetails.length; i++) {
    let bagsEL = document.querySelector('.card-container');
    bagsEL.innerHTML += ` <div class="card hoverable">
      <div class="card-image ">
        <img src="images/${bagDetails[i].img}">
       
      </div>
      <div class="card-content">
        <p>
        ${bagDetails[i].discription}
      </p>
          <h4>${bagDetails[i].price}</h4>
      </div>
      <div class="card-action">
           
      <a class="waves-effect waves-light btn brown">BUY NOW</a>
    </div>
    </div>
    `

  }
}



