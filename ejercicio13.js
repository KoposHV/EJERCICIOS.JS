const duplicates = [
    'sushi',
    'pizza',
    'burger',
    'potatoe',
    'pasta',
    'ice-cream',
    'pizza',
    'chicken',
    'onion rings',
    'pasta',
    'soda'
    ];
    function removeDuplicates(param) {
      const uniques = [];
      for (element of param ) {
        if (!uniques.includes(element)) {
          uniques.push(element);
        }
      }
      console.log(uniques);
    }
    removeDuplicates(duplicates);