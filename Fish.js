AFRAME.registerComponent("swimming-fish", {
    init: function () {
      for (var i = 1; i <= 20; i++) {
        //id
        var id = `school${i}`;
  
        var posX = Math.floor(Math.random() * 3000 + -1000);
        var posY = Math.floor(Math.random() * 2 + -1);
        var posZ = Math.floor(Math.random() * 3000 + -1000);
  
        var position = { x: posX, y: posY, z: posZ };
  
        this.swimmingFish(id, position);
      }
    },
    swimmingFish: (id, position) => {
      var terrainEl = document.querySelector("#terrain");
  
      var fishEl = document.createElement("a-entity");
  
      fishEl.setAttribute("id", id);
  
      fishEl.setAttribute("position", position);
      fishEl.setAttribute("scale", { x: 500, y: 500, z: 500 });
  
      fishEl.setAttribute("gltf-model", "./assets/models/shiny_fish/scene.gltf");
  
      fishEl.setAttribute("animation-mixer", {});
  
      terrainEl.appendChild(fishEl);
    }
  });
  
  