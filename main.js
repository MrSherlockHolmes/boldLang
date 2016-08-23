function runBold(query) {
  if (typeof query !== "string") {
    return; /* so implicit we don't even EXPLICITLY tell you what is wrong */
  }
  array = query.split(" ");
  for (i = 0; i < array.length; i++) {
    if (array[i].toUpperCase() === array[i]) {
      if (array[i] === "PRINT") {
        var a = "";
        while(array[i + 1].toUpperCase() !== array[i + 1]) {
          i++;
          console.log(array[i] + " !!");
          a += array[i];
        }
        console.log(a);
      }
    } else {
      return;
    }
  }
}
