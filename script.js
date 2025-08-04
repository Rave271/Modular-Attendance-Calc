document.getElementById("form").addEventListener("submit", getInfo);

function getInfo(event){
  event.preventDefault();
  document.getElementById("form").style.display = "none";
      document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0; 
 let classes = parseFloat(document.getElementById("Attended").value);
let total = parseFloat(document.getElementById("total").value);
let value = parseFloat(document.getElementById("value").value);

  let week=parseFloat(document.getElementById("week").value);
  let oldc=classes;
  let oldt=total;
  while(classes/total<0.85){
    classes+=value;
    total+=value;
  }
  
let newclasses = document.createElement("p");
  newclasses.textContent = `New Classes Attended: ${classes}`;
  document.getElementById("box").appendChild(newclasses);

  let newtotal = document.createElement("p");
  newtotal.textContent = `New Total Classes: ${total}`;
  document.getElementById("box").appendChild(newtotal);

  let percentage = document.createElement("p");
  percentage.textContent = `Old Percentage: ${Math.floor((oldc / oldt) * 100)}%`;
  document.getElementById("box").appendChild(percentage);

 let need=(classes-oldc)/value;
 let weeks=need/week
  
  let needed = document.createElement("p");
  needed.textContent = `Classes Needed: ${need}`;
  document.getElementById("box").appendChild(needed);
  
  let noweeks = document.createElement("p");
  noweeks.textContent = `No of Weeks: ${weeks}`;
  document.getElementById("box").appendChild(noweeks);
  

  
  
 
}
