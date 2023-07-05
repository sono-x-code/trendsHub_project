

let modal = document.querySelector("#myModal");
let avatar = document.querySelector("#myAvatar");
let cancel = document.getElementsByClassName("close")[0];

            
    avatar.onclick = function() {
        modal.style.display = "block";
      }
      
      cancel.onclick = function() {
        modal.style.display = "none";
      }
  
      window.onclick = function(event) {
      if ( event.target == modal ) {
        modal.style.display = "none";
      }

    }

