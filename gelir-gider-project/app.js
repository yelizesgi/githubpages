//!Selectors
const ekleBtn = document.getElementById("ekle-btn")
const gelirInput = document.getElementById("gelir-input")
const ekleFormu = document.getElementById("ekle-formu")

//?Sonuctablosu
const gelirinizTd = document.getElementById("geliriniz")
const giderinizTd = document.getElementById("gideriniz")
const kalanTd = document.getElementById("kalan")


//? Harcama Formu
const harcamaFormu = document.getElementById("harcama-formu")
const harcamaAlaniInput = document.getElementById("harcama-alani")
const tarihInput = document.getElementById("tarih")
const miktarInput = document.getElementById("miktar")

//?Harcama Tablosu
const harcamaBody = document.getElementById("harcama-body")
const temizleBtn = document.getElementById("temizle-btn")




//!Variables

let gelirler = 0
//*tum harcamalari saklayacak dizi (JSON)
let harcamaListesi = []


//!Events


ekleFormu.addEventListener("submit", (e) =>{
    e.preventDefault()
    gelirler = Number(gelirler) + Number(gelirInput.value)
    localStorage.setItem("gelirler", gelirler)
    ekleFormu.reset()
    hesaplaVeGuncelle()
})

//*Sayfa her yüklendiginde calisacak event
window.addEventListener("load", () =>{
    gelirler = Number(localStorage.getItem("gelirler"))
    harcamaListesi = JSON.parse(localStorage.getItem("harcamalar")) || []
    harcamaListesi.forEach((harcama) => harcamayiDomYaz())
    console.log(harcamaListesi)
    tarihInput.valueAsDate = new Date()
    hesaplaVeGuncelle()

})

//*harcama formu submit edildiğinde calisacak event
harcamaFormu.addEventListener("submit", (e) => {
    e.preventDefault()
    const yeniHarcama = {
        id: new Date().getTime(),
        tarih : tarihInput.value,
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
//!Functions
const hesaplaVeGuncelle = () => {
    const giderler = harcamaListesi.reduce((toplam,harcama) => toplam + Number(harcama.miktar),0)
    gelirinizTd.innerText = gelirler
    giderinizTd.innerText = giderler
    kalanTd.innerText = gelirler -giderler
}
//?Girilen bilgilerin ekranda gösterilmesini sağlayan event
const harcamayiDomYaz = ({id, miktar, tarih, alan}) => {
    harcamaBody.innerHtml += `
    <tr>
       <td>${tarih}</td>
       <td>${alan}</td>
       <td>${miktar}</td>
       <td><i${id} class="fa-solid fa-square-xmark text-info" type= "button"></i></td>
    </tr>
    `
}

//?harcama tablosunda herhangi bir alana tıklanıldığnıda tetiklenecek event
 harcamaBody.addEventListener("click", (e) =>{
   //*Tetikleme(tıklama) sil butonlarından geldiği zaman çalışacak
   if(e.target.classList.contains("fa-square-xmark")){
    //Dom agacından ilgili row silinir
    e.target.parentElement.parentElement.remove()

    const id = e.target.id
    console.log(id)

    //yukarda eklenmiş olan dizideki ilgili objeyi siler
    harcamaListesi = harcamaListesi.filter((harcama) => harcama.id !=id)
    
    //silinen objeyi localstorage e aktarır
    localStorage.setItem("harcamalar", JSON.stringify(harcamaListesi))

    hesaplaVeGuncelle()
   }
})


//?Temizle butonuna basılınca calisir
temizleBtn.addEventListener("click", () => {
  if(confirm("Silmek istiyor musunuz?")){
    harcamaListesi = []
    gelirler = 0
    localStorage.clear()
    harcamaBody.innerHTML = ""
    hesaplaVeGuncelle()
  }
})

