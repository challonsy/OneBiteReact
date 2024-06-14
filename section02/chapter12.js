function add(a, b, callback) {
  setTimeout(() => {
    const sum = a + b;
    callback(sum);
  }, 3000);
}

add(1, 2, (value) => {
  console.log(value);
});

function orderFood(callback) {
  setTimeout(() => {
    const food = "떡볶이";
    callback(food);
  }, 3000);
}

function coolDownFood(food, callback) {
  setTimeout(() => {
    const coolDownedFood = `식은 ${food}`;
    callback(coolDownedFood);
  }, 3000);
}

function freezeFood(food, callback) {
  setTimeout(() => {
    const freezedFood = `냉동된 ${food}`;
    callback(freezedFood);
  }, 2000);
  console.log("이거먼저 출력?");
}

orderFood((food) => {
  console.log(food);
  coolDownFood(food, (coolDownedFood) => {
    console.log(coolDownedFood);
    freezeFood(coolDownedFood, (freezedFood) => {
      console.log(freezedFood);
    });
  });
});
