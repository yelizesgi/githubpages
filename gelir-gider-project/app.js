//!Selectors
const ekleBtn = document.getElementById("ekle-btn")
const gelirInput = document.getElementById("gelir-input")
const ekleFormu = document.getElementById("ekle-formu")

//?Sonuctablosu
const gelirinizTd = document.getElementById("geliriniz")


//? Harcama Formu
const harcamaFormu = document.getElementById("harcama-formu")
const harcamaAlaniInput = document.getElementById("harcama-alani")
const tarihInput = document.getElementById("tarih")
const miktarInput = document.getElementById("miktar")





//!Variables

let gelirler = 0
//*tum harcamalari saklayacak dizi (JSON)
let harcamaListesi = []


//!Events
ekleFormu.addEventListener("submit", (e) =>{
    e.preventDefault()
    gelirler = gelirler + Number(gelirInput.value)
    localStorage.setItem("gelirler", gelirler)
    ekleFormu.reset()
    hesaplaVeGuncelle
})

//*Sayfa her yüklendiginde calisacak event
window.addEventListener("load", () =>{
    gelirler = number(localStorage.getItem("gelirler"))
    harcamaListesi = JSON.parse(localStorage.getItem("harcamalar")) || []
    harcamaListesi.forEach((harcama) => harcamaDomaYaz())
    console.log(harcamaListesi)
    tarihInput.valueAsDate = new Date()
    hesaplaVeGuncelle()

})

//*harcama formu submit edildiğinde calisacak event
harcamaFormu.addEventListener("submit", (e) => {
    e.preventDefault()
    const yeniHarcama = {
        id: new Date().getTime(),
        alan : harcamaAlaniInput.value,
        miktar: miktarInput.value,
    }
    harcamaListesi.push(yeniHarcama)
    localStorage.setItem("harcamalar", JSON.stringify(harcamaListesi))
    harcamayiDomYaz(yeniHarcama)
    hesaplaVeGuncelle()
    harcamaFormu.reset()
    tarihInput.valueAsDate = new Date()
})