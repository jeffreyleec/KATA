let input = prompt("What do you want to do?");
const storage = [];

while (input !== "quit") {

  if (input == "new") {
    let newItem = prompt("Enter new Todo");
    storage.push(newItem)
    console.log(`${newItem} added to the list`)

    //input = prompt("What do you want to do?");
  } else if (input == "list") {
    console.log("************")
    for (let i = 0; i < storage.length; i++) {
      console.log(`${i}: ${storage[i]}`)
    }
    console.log("************")



  } else if (input == "delete") {
    let itemDelete = prompt("Delete what?")
    console.log(`${storage[itemDelete]} removed from list`)
    storage.splice(itemDelete, 1)

  }

  input = prompt("What do you want to do?");

}
console.log("OK, YOU QUIT THE APP");
