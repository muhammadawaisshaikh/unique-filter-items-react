filterItems(data){
    const result = [];
    const map = new Map();
    for (const item of data) {
      if(!map.has(item.title)){
        map.set(item.title, true);    // set any value to Map
        result.push({
          title: item.title,
          release_date: item.release_date
        });
      }
    }
    console.log(result)
  }
