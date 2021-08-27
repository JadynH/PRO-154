AFRAME.registerComponent("find-treasure", {
    init: function () {
      for (var i = 1; i <= 20; i++) {
        //id
        var id = `treasure${i}`;
  
        //position variables   
        var posX =(Math.random() * 3000 + (-1000));      
        var posY = (Math.random() * 2 + (-1));
        var posZ = (Math.random() * 3000 + -1000);
  
        var position = { x: posX, y: posY, z: posZ };
  
        //call the function
        this.createTreasure(id, position);
      }
    } ,
  
    createTreasure: function(id, position) { 
      
      var terrainEl = document.querySelector("#terrain");
  
      var treasureEl = document.createElement("a-entity");
  
      treasureEl.setAttribute("id",id);
      treasureEl.setAttribute("position",position);
      
      treasureEl.setAttribute("material","color","brown");
        
      terrainEl.appendChild(treasureEl);
    }
  });
  