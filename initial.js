const initials = [155,198,26,34,197,94,50,174,29,13,132,91,112,138,103,117,53,141];
const colors = ['赤','青','黄','緑','黒'];

console.log('けいじ');

for (let i = 0; i < 5; i++) {
  console.log(colors[i], get());
}

console.log('怪盗', get());

function get() {
  const target = Math.random() * initials.length;
  return initials.splice(target, 1);
}
