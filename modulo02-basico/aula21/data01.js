/*
const tresHoras = 60 * 60 * 3 * 1000;
const umDia = 60 * 60 * 24 * 1000;

const data0 = new Date(0 + tresHoras - umDia);
console.log(data0.toString());
*/

const data1 = new Date();
console.log(data1.toString());
console.log('Dia :', data1.getDate());
console.log('Mês :', data1.getMonth());
console.log('Ano :', data1.getFullYear());
console.log('Horas :', data1.getHours());
console.log('Minutos:', data1.getMinutes());
console.log('Segundos:', data1.getSeconds());
console.log('Milisegundos:', data1.getMilliseconds());
console.log('Dia semana : ', data1.getDay());

const data2 = new Date(0);
console.log(data2.toString());

const data3 = new Date(2019, 9, 27, 15, 23, 45);
console.log(data3.toString());

const data4 = new Date('2019-06-21 20:20:20');
console.log(data4.toString());