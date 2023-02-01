// есть два варианта email
//1. 'Vasay Pertrov <petrov@gmail.com>'
//2. 'petrov@gmail.com'
// задача вырезать email

//1 способ
const str1 = "Vasay Pertrov <petrov@gmail.com>";
const str2 = "petrov@gmail.com";

const trimEmail1 = (email) => {
  let index = email.indexOf("<");
  if (index !== -1) return email.substring(index + 1, email.length - 1);
  return email;
};

console.log(trimEmail1(str1));

//2 способ
const trimEmail2 = (email) => {
  const rexexp = /(?<=\<)(\S+)(?=\>)/g;
  const matches = email.match(rexexp);
  if (matches !== null) return matches[0];
  return email;
};
console.log(trimEmail2(str1));
