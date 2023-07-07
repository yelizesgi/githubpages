const Event = () =>{
    
    const color = [, "#3C9EE7", "#E7993C",
    "#E73C99", "#3CE746", "#E7993C"];


    const handleRandomColor = (e) =>{
        e.target.style.backgroundColor = color[(Math.floor(Math.random() * color.length))]
    }

    return(
        <div className="div-btn text-center m-4 bg-light w-100 ">
            <button className="p-4 m-4 border border-warning text-secondary w-50" onClick={handleRandomColor}>Click</button>
        </div>
    )
}

export default Event