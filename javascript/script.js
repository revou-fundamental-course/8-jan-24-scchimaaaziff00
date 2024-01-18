alert('Halo, Selamat Datang dan Selamat Mencoba Kawan! GOOD LUCK ᕙ(⇀‸↼‵‵)ᕗ')

//Nama ID=squareSide
function hitungLuas () {
    const sisi = document.getElementById ('squareSide'). value ;
    const Luas = sisi * sisi ;
    document.getElementById ('Luas'). value 
    = Luas ;
    console.log(`Maka hasil Luas dari sisi persegi ${squareSide} adalah ${Luas}`)
}

function hitungKeliling () {
    const sisi = document.getElementById ('squareSide'). value ;
    const Keliling = 4 * sisi ;
    document.getElementById ('Keliling'). value 
    = Keliling ;
    console.log(`Maka hasil Keliling dari sisi persegi ${squareSide} adalah ${Keliling}`)
}

//Reset data kosong
function resetData () {
    document.getElementById ('squareSide'). value 
    = '' ;
    document.getElementById ('Luas'). value 
    = '' ;
    document.getElementById ('Keliling'). value 
    = '' ;
}