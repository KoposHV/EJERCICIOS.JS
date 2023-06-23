const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];
function averageWord(param) {
    let total = 0;
    for (const element of param) {
    
      if (typeof element === "string") {
        total += element.length;
      }
      else {
        total += element;
      }
    }
      const quantity = param.length;
      console.log(total / quantity );
}
averageWord(mixedElements);