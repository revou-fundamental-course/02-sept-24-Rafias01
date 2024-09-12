// //ini Javascript
function luasSegitiga(){
    let alas = parseInt(document.getElementById("panjang-alas").value);
    let tinggi = parseInt(document.getElementById("tinggi").value);

    if(isNaN(alas) || isNaN(tinggi)) {
        alert('Harus mengisi keduanya');
        return ;
    }
    let luas = 0.5 * alas * tinggi;

    document.getElementById("hasil-luas-segitiga").value = luas;
}

function kelilingSegitiga(){
    let s1 = parseInt(document.getElementById("sisi-1").value);
    let s2 = parseInt(document.getElementById("sisi-2").value);
    let s3 = parseInt(document.getElementById("sisi-3").value);

    if(isNaN(s1) || isNaN(s2) || isNaN(s3)) {
        alert('Harap mengisi keduanya');
        return ;
    } 
    let keliling = s1 + s2 + s3;


    document.getElementById("hasil-keliling-segitiga").value = keliling;

}

