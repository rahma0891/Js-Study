//belajar membuat variabel dengan LET 1.
/*let nama = "rahmawati";
console.log(nama);
nama = "rahma wati";
console.log(nama);

//membuat variabel dengan VAR 2.
var namaDepan = "rahma";
console.log(namaDepan);
namaDepan = "ama";
console.log(namaDepan);

//kelakuan let = mengambil data masing2 skop
let namaBelakang = "wati";
{
  let namaBelakang = "tiwaw";
  console.log(namaBelakang);
}
console.log(namaBelakang);

//kelakuan var = mengambil data yang paling terbaru
var namaTengah = "ama";
{
  var namaTengah = "amaw";
  console.log(namaTengah);
}
console.log(namaTengah);

//kasus khusus tanpa keyword(let/var) masuk dalam kategori var
nama = "rahma";
{
  nama = "wati";
}
console.log(nama);

//membuat CONST =constant tidak dapat melakukan perubahan 3.
const TTL = "08 september 2001";
console.log(TTL);
// TTL= "08 September 2001"; akanterjadi eror di console browser jika dijalankan.

//eps 5 - tipe data pada Js
let dataString = "rahma"; //string
console.log(dataString);
console.log(typeof dataString);

let dataNumber = 23; //number
console.log(dataNumber);
console.log(typeof dataNumber);

let dataBoolean = false; //boolean
console.log(dataBoolean);
console.log(typeof dataBoolean);

let dataUndifined; //undifined
console.log(dataUndifined);
console.log(typeof dataUndifined);*/

//EPISODE 6 STRING
/*let dataString = "Data String";
console.log(dataString);

//1. escaping string
let data1 = 'how are you today? \t"rahma"';
console.log(data1);
let data2 = 'how are you today? "rahma"';
console.log(data2);
let data3 = "how are you today? \nrahma";
console.log(data3);

//2.. literal string ( template lteral string)
/*let namadepan = "rahma";
let namabelakang = "wati";
let umur = 24;
let namalengkap = namadepan + " " + namabelakang + " " + umur; //hal seperti ini akan menyebabkan eror pada program
console.log(namalengkap);

let namalengkap2 = `${namadepan} ${namabelakang} ${umur}`; //lebih elegan dari cara diatas
console.log(namalengkap2);

//episode 7  operasi string
//1.char at
let data = "abcdef";
let dataChar = data.charAt(0);
console.log(`character on index 0 is ${dataChar}`);
dataChar = data.charAt(1);
console.log(`character on index 1 is ${dataChar}`);
dataChar = data.charAt(2);
console.log(`character on index 2 is ${dataChar}`);
dataChar = data.charAt(3);
console.log(`character on index 3 is ${dataChar}`);
dataChar = data.charAt(4);
console.log(`character on index 4 is ${dataChar}`);
dataChar = data.charAt(5);
console.log(`character on index 5 is ${dataChar}`);

//2.menyambung string
let namadepan = "rahma";
let namabelakang = "wati";

let namalengkap = namadepan.concat(" ", namabelakang, " is a beutiful woman");
console.log(namalengkap);

//3.mengambil index
console.log(data.indexOf("b"));
console.log(data.indexOf("c"));
console.log(data.indexOf("d"));
console.log(data.indexOf("e"));
console.log(data.indexOf("f"));

//4.substring
let data_2_12 = data.substring(2, 12);
console.log(data_2_12);
console.log(data.substring(12, 2));

//5. replace
data = data.replace("a", "A");
console.log(data);

//6.slice
data = data.slice(0, 2);
console.log(data);

//7.tolowercase
data = data.toLowerCase();
console.log(data);

//8. touppercase
data = data.toUpperCase();
console.log(data);

//9.extract data number
let dataa2 = "12345";
console.log(typeof dataa2);
let dataInteger = parseInt(dataa2);
console.log(dataInteger);
console.log(typeof dataInteger);

let dataa3 = "12.345";
console.log(typeof dataa3);
let dataFloat = parseFloat(dataa3);
console.log(dataFloat);
console.log(typeof dataFloat);


// EPISODE 9 - NUMBERS - 64 bit

let nilai_int = 10; //integer - bilangan bulat
let nilai_float = 10.5; //float - bilangan pecahan/desimal
let nilai_big_int = 129584939248298539429n; //bigint - bilangan yang terlalu besar untuk dijadikan integer

// cara menggunakan data numbers
let angka = 10.98;
let angka_int = parseInt(angka);
console.log(angka_int);

let angka_2 = 10;
let angka_float = parseFloat(angka_2);
console.log(angka_float);

//merubah string
let data = "10.98";
console.log(data);
console.log(parseInt(data));
console.log(parseFloat(data));

//contoh
let beli = "10000";
let ppn = 1200;
let bayar = parseInt(beli) + ppn;
console.log(bayar);

//episode 10 - tipe data boolean, true=1, false=0
let bool_1 = false;
console.log(bool_1);

let bool_2 = 3 > 1;
console.log(bool_2);

let bool_3 = "ucup" == "ucup";
console.log(bool_3);

let bool_4 = false == 0;
console.log(bool_4);

bool_4 = false == "";
console.log(bool_4);

bool_4 = false == 0n;
console.log(bool_4);*/

//EPISODE 13 OPERASI ARTIMATIK

//ekpresi dan statement
//a = 1+1 // statement
//a=1//ekspresi

// +-*/
// % modulo
// ++ increment
// -- decrement
// ** pangkat/power
/*

let x = 10;
console.log(x + 1);
console.log(x - 1);
console.log(x / 1);
console.log(x * 1);

//aritmatika khusus di js
console.log(x % 2);
console.log(x ** 2);

//pemrograman biasa
x = x + 1;
console.log(x);
x = x + 1;
console.log(x); // dimana nilai x akan merubah nilainya sendiri sesuai operasi yg dilakukan.  sebelumnya x = 10

//namun pada js operasi berulang ini dpt dilakukan dengan simbol :
x++;
console.log(x);
x--;
console.log(x);

//studi kasus jika ada operasi number dan string
let r = 2 + "1"; // operasi ini akan menghasilkan penggabungan dua elemen seharusnya :
console.log(r);
r = 2 + parseInt("1"); //jika terdapat kombinasi operasi number dan string hrs menggunakan parse, sehingga operasi aritmatik dpt terjadi.
console.log(r);*/

//EPISODE 14 OPERASI LOGIKA
// && = and
// || = or
// ! = not

//1. NOT !
console.log(!true); //ngeflip data boolean
console.log(!0);
//ex:
let cantik = false;
console.log(!cantik);

// 2. OR || operasi antara dua variabel data boolean ( seperti penjumlahan) btw true =1 dst except 0, false=0
// a = true false true false
// b = true false false true
// a || b = true false true true

// a= 1 0 1 0
// b= 1 0 0 1
// a || b = 1 0 1 1

console.log(`true || false hasil = ${true || false}`);
console.log(`false || true hasil = ${false || true}`);
console.log(`true || true hasil = ${true || true}`);
console.log(`false || false hasil = ${false || false}`);
//ex:
let mamoy = true;
let mochi = false;
let gender = mamoy || mochi;
console.log(`mamoy betina dan mochi adalah jantan ?${gender}`);

// 3. AND && operasi antara dua variabel data boolean ( seperti perkalian) btw true =1 dst except 0, false=0
// a = true false true false
// b = true false false true
// a && b = true false false false

// a = 1 0 1 0
//b = 1 0 0 1
// a && b = 1 0 0 0

console.log(`true && false hasilnya = ${true && false}`);
console.log(`false && true hasilnya = ${true && false}`);
console.log(`true && true hasilnya = ${true && true}`);
console.log(`false && false hasilnya = ${false && false}`);
//ex :
mamoy = true;
mochi = false;
gender = mamoy && mochi;
console.log(`mochi betina dan mamoy betina ? ${gender}`);

console.log(`1 && 1 hasilnya = ${1 && 1}`);

// EPISODE 15 - KOMPARASI
// == equality
// != inequality
// === strict equality
// !== strict inequality
// > lebih besar
// < kurang dari
// >= lebih besar sama dengan
// <= kurang dari sama dengan

console.log(`10>8 hasilnya = ${10 > 8}`);
console.log(`10<8 hasilnya = ${10 < 8}`);
console.log(`10>=8 hasilnya = ${10 >= 8}`);
console.log(`10<=8 hasilnya = ${10 <= 8}`);
let databool = 10 > 8;
console.log(` 10 > 8 hasilnya = ${databool}`);

//persamaan -> untuk operasi komparasi harus menggunakan tipe data yang sama, jika tidak maka hasilnya akan tidak sesuai except simbol == /=! ini akan tetap menghasilkan
//ex:
console.log(`10 == "10" hasilnya = ${10 == "10"}`);
console.log(`10 == 10 hasilnya = ${10 == 10}`);

console.log(`10 === "10" hasilnya = ${10 === "10"}`);
console.log(`10 === 10 hasilnya = ${10 === 10}`);

console.log(`10 != "10" hasilnya = ${10 != "10"}`);
console.log(`10 != 10 hasilnya = ${10 != 10}`);

console.log(`10 !== "10" hasilnya = ${10 !== "10"}`);
console.log(`10 !== 10 hasilnya = ${10 !== 10}`);

console.log(`10 != "10" hasilnya = ${10 != "10"}`);
console.log(`10 != 10 hasilnya = ${10 != 10}`);

console.log(`10 !== "10" hasilnya = ${10 !== "10"}`);
console.log(`10 !== 10 hasilnya = ${10 !== 10}`);
