//contoh if, else, nested if
let cuacaCerah = true;
let cuacaHujan = false;
let suhu = 25;

if (cuacaCerah) {
  console.log("Cuaca cerah, bagus untuk bermain tenis.");
} else if (cuacaHujan) {
  console.log("Cuaca hujan, lebih baik tinggal di dalam ruangan.");
} else {
  console.log("Cuaca tidak jelas, pertimbangkan untuk bermain bulu tangkis.");
  
  if (suhu > 30) {
    console.log("Suhu cukup tinggi, berenang bisa menjadi pilihan yang baik.");
  } else if (suhu >= 20) {
    console.log("Suhu nyaman untuk bersepeda.");
  } else {
    console.log("Suhu terlalu rendah, mungkin lebih baik pergi hiking.");
  }
}

//contoh switch case

let makanan = "sushi";

switch (makanan) {
  case "pizza":
    console.log("Saya suka pizza!");
    break;
  case "burger":
    console.log("Burger enak juga!");
    break;
  case "sushi":
    console.log("Sushi adalah makanan favorit saya!");
    break;
  case "spaghetti":
    console.log("Spaghetti selalu menjadi pilihan yang baik.");
    break;
  default:
    console.log("Saya tidak tahu makanan ini.");
    break;
}

//for statement
const permainan = "sepak bola";
const jumlahPutaran = 5;

for (let putaran = 1; putaran <= jumlahPutaran; putaran++) {
  console.log(`Putaran ke-${putaran}: Sedang bermain ${permainan}`);
}

console.log(`Permainan ${permainan} selesai.`);

//contoh while

let skor = 0;

while (skor < 10) {
  skor++;
  console.log(`Skor saat ini: ${skor}`);
}

console.log("Permainan selesai. Skor maksimal tercapai.");

//do while
let tinggi;

let umur;

do {
  umur = parseInt(prompt("Masukkan umur Anda:"));
} while (isNaN(umur) || umur <= 0);

console.log(`Umur Anda adalah ${umur} tahun.`);

//function

function hitungLuasPersegi(panjangSisi) {
    const luas = panjangSisi * panjangSisi;
    return luas;
  }
  
  function hitungKelilingPersegi(panjangSisi) {
    const keliling = 4 * panjangSisi;
    return keliling;
  }
  
  const panjangSisiPersegi = 5;
  const luasPersegi = hitungLuasPersegi(panjangSisiPersegi);
  const kelilingPersegi = hitungKelilingPersegi(panjangSisiPersegi);
  
  console.log(`Persegi dengan panjang sisi ${panjangSisiPersegi}:`);
  console.log(`- Luas: ${luasPersegi}`);
  console.log(`- Keliling: ${kelilingPersegi}`);
  
