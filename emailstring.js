// есть два варианта email
//1. 'Vasay Pertrov <petrov@gmail.com>'
//2. 'petrov@gmail.com'
// задача вырезать email

//1 способ
const str1 = "Vasay Pertrov <petrov@gmail.com>";
const str2 = "petrov@gmail.com";

const trimEmail = (email) => {
  let index = email.indexOf("<");
  if (index !== -1) return email.substring(index + 1, email.length - 1);
  return email;
};

console.log(trimEmail(str1));
