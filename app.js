//  1️ ძებნა მასივში
// let phones = ["iPhone", "Samsung", "Xiaomi", "Nokia"];
// •	შეამოწმე Array.isArray(phones)
// •	მომხმარებლისგან მიიღე მოდელი prompt-ით
// •	გამოიყენე includes() და indexOf()
// •	დაბეჭდე არსებობს თუ არა და მისი ინდექსი

//  1. ძებნა მასივში
let phones = ["iPhone", "Samsung", "Xiaomi", "Nokia"];

console.log("phones არის მასივი?", Array.isArray(phones));

//  prompt-ის ნაცვლად SweetAlert-ი გამოვიყენე
Swal.fire({
  title: "Search Phone",
  text: "Enter phone model:",
  input: "text",
  showCancelButton: true,
}).then((result) => {
  if (result.isConfirmed) {
    let userModel = result.value;

    if (phones.includes(userModel)) {
      let index = phones.indexOf(userModel);
      Swal.fire(
        "Found!",
        `Model "${userModel}" exists at index ${index}.`,
        "success",
      );
    } else {
      Swal.fire("Not Found", `Model "${userModel}" does not exist.`, "error");
    }
  }
});

// -----------------------------------------------------------------------

// 2 გაერთიანება
// let categories = [
//   ["Milk", "Cheese"],
//   ["Apple", "Banana"],
//   ["Water"]
// ];
// •	შექმენი ასლი structuredClone() -ით
// •	ორიგინალი მასივი გააერთიანე  - გამოიყენე flat()
// •	დაალაგე sort()
// •	შემდეგ reverse()
// •	დაბეჭდე ორიგინალი და ასლი

//  2. გაერთიანება
let categories = [["Milk", "Cheese"], ["Apple", "Banana"], ["Water"]];

// ვქმნით ასლს structuredClone()-ით
let categoriesCopy = structuredClone(categories);

// ორიგინალი მასივი ვაერთიანებთ flat()-ით
let merged = categories.flat();

// ვალაგებთ sort()-ით
merged.sort();

// შემდეგ reverse()
merged.reverse();

// დაბეჭდვა
console.log("ორიგინალი categories:", categories);
console.log("ასლი categoriesCopy:", categoriesCopy);
console.log("გაერთიანებული და დალაგებული merged:", merged);
