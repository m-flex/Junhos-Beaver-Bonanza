// A simple class to manage Beaver-like objects
class Beaver {
    constructor(element) {
      this.clickCount = 0;
      this.element = element;
      // Attach click handler
      this.element.addEventListener('click', () => this.handleClick());
    }
  
    handleClick() {
      this.clickCount++;
      if (this.clickCount === 5) {
        this.layEgg();
        this.clickCount = 0; // reset click count
      }
    }
  
    layEgg() {
      // Create an egg element
      const egg = document.createElement('img');
      egg.src = 'egg.png';
      egg.className = 'egg';
      document.getElementById('game-area').appendChild(egg);
  
      // After X seconds, hatch the egg into a new beaver
      setTimeout(() => {
        egg.remove();
        const newBeaverImg = document.createElement('img');
        newBeaverImg.src = 'beaver.png';
        newBeaverImg.className = 'beaver';
        document.getElementById('game-area').appendChild(newBeaverImg);
  
        // Attach Beaver logic to the newly created beaver
        new Beaver(newBeaverImg);
      }, 3000); // X = 3000 ms = 3 seconds
    }
  }
  
  // Initialize the first Beaver
  const firstBeaverImg = document.querySelector('.beaver');
  new Beaver(firstBeaverImg);
  