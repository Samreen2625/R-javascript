let form=document.querySelector("form")

form.addEventListener("submit"),(e)=>{
    e.preventDefauilt()
    let name=document.getElementById("name").value
    let mobile=document.getElementById("mobile").value
    let password=document.getElementById("password").value
    let cpassword=document.getElementById("cpassword").value
    console.log(name)
    console.log(mobile)
    console.log(password)
    console.log(cpassword)
}