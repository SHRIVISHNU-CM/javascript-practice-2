function uniquechar(items){
    const set = new Set();
    for (let char of items){
        if(set.has(char)){
            return console.log("Contains duplicate");
        }
        set.add(char);
    }
    return console.log("Unique")
}
uniquechar("mithun");
uniquechar("anurag");