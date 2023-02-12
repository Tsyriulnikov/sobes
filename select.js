//
const select1 = document.querySelector(".select-1");
select1.onchange = function () {
  //   let item = select1.value;
  //   console.log(item);
  console.log(this.value);
};
//вариант
select1.addEventListener('change', function () {
    console.log(this.value);
})
