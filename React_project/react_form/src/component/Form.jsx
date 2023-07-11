import { useState } from "react"


const Form = () => {

    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
    })

    const {username, email, password} = formData

    const handleSubmit = (e)=>{
      e.preventDefault()
      alert(`
        username: ${username}
        email: ${email}
        password: ${password}
      `)

      setFormData({
        username: "",
        email: "",
        password: "",
      })
    }

    const handleFormData = (e)=>{
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const handleCopy = (e)=>{
        alert("Kopyalamaya izin verilmemektedir")
        e.preventDefault()
    }

    const handleCut = (e)=>{
        alert("Kemeye izin verilmemektedir")
        e.preventDefault()
    }
    
    const handleKeyDown = (e)=>{
       if(e.keyCode >=48 && e.keyCode <= 57 ){
        alert("Lütfen harf giriniz")
        e.preventDefault()
       }
    }

    return(
        <div className="container  mt-4 bg-success-subtle w-100">
         <h1 className="text-center text-secondary">Üye Ol</h1>
         <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="username">Kullanıcı Adı</label>
                <input 
                type="text" 
                className="form-control bg-light"
                id="username"
                aria-describedby="emailHelp"
                onChange={handleFormData}
                value={username}
                name="username"
                onKeyDown={handleKeyDown}
                />
            </div>

            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email adresi: <span className="text-success">{email}</span></label>
                <input 
                type="email"
                className="form-control bg-light"
                id="email"
                aria-aria-describedby="emailHelp"
                onChange={handleFormData}
                value={email}
                name= "email" 
            
                />
            </div>

            <div className="mb-3">
                <label htmlFor="password">Şifre</label>
                <input 
                type="password"
                className="form-control bg-light" 
                id="password"
                onChange={handleFormData}
                value={password}
                name="password"
            
                />
            </div>

            <div>
                <button type="submit" className="btn btn-secondary">Kaydet</button>
            </div>
            
            <div className="mt-4">
              <h2>İçeriğin kopyası</h2>
              <p onCopy={handleCopy} onCut={handleCut}>{username.toLocaleUpperCase()}</p>
            </div>

         </form>
        </div>
    )
}


export default Form