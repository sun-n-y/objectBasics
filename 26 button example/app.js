const counter = {
  count: 0,
  increment() {
    console.log(this);
    this.count++;
    console.log(this.count);
  },
};

const btn = document.querySelector('.increment');

// btn.addEventListener('click', counter.increment.bind(counter));

const increment = counter.increment.bind(counter);
btn.addEventListener('click', increment);

btn.removeEventListener('click', increment);
btn.addEventListener('click', increment);

btn.addEventListener('click', function () {
  console.log('hello');
});
