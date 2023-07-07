import Flowers from "./components/Flowers"


function App() {
  return (
    <div>
      <Flowers
        genus= "Rose"
        img= "https://cdn.pixabay.com/photo/2015/04/19/08/32/rose-729509_640.jpg"
        adet= "500"
      />

     <Flowers
        genus= "Menekşe"
        img= "https://cdn.pixabay.com/photo/2018/02/08/22/27/flower-3140492_640.jpg"
        adet= "100"
      />

     <Flowers
        genus= "Papatya"
        img= "https://cdn.pixabay.com/photo/2015/04/08/15/09/daisies-712892_640.jpg"
        adet= "200"
      />
    </div>
  )
}

export default App
