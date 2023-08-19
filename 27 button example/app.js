const counter = {
  count: 0,
  increment() {
    console.log(this);
    this.count++;
    console.log(this.count);
  },
};

const btn = document.querySelector('.increment');

// //fail
// btn.addEventListener('click', counter.increment);

//correct w/ edge case- no reference, so cant remove event listener
// btn.addEventListener('click', counter.increment.bind(counter));

//fix
const increment = counter.increment.bind(counter);
btn.addEventListener('click', increment);
btn.removeEventListener('click', increment);
