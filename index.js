const addBooksBtn = document.getElementById("add-books-btn")
const library = document.getElementById("library")
const closeBtn = document.getElementById("close-btn")
const book = document.getElementById("book")
const displayBook = document.getElementById("add-book")
const checkBox = document.getElementById("checkbox")

addBooksBtn.addEventListener("click", addBooks)

function addBooks(){
    console.log("button clicked")
    library.style.display = "block"

}

closeBtn.addEventListener("click", function(){
    library.style.display = "none"
})

displayBook.addEventListener("click", function(){
    //console.log("add button clicked")
    const title = document.getElementById("title").value
    //console.log(title)
    const author = document.getElementById("author").value
    //console.log("author")
    const pages = document.getElementById("pages").value
    //console.log(pages)
    const bookInformation = {
        Title: title,
        Author: author,
        Pages : pages
    }
    console.log(bookInformation)

    if(title === ""){
        alert("Please enter the title of the book")
    }else if(author === ""){
        alert("Please enter the name of the author")
    }else if (pages === ""){
        alert("Please enter the numbe of pages")
    }
    
    //Local storage
    if(localStorage.getItem('booksArray') === null){
        let booksArray = []
        booksArray.push(bookInformation)
        //set to local storage 
        localStorage.setItem("booksArray", JSON.stringify(booksArray))

    }else{
        const booksArray = JSON.parse(localStorage.getItem("booksArray"))
        booksArray.push(bookInformation)
        localStorage.setItem("booksArray", JSON.stringify(booksArray))

    }
    
    fetchBooks()


})

function fetchBooks(){
    const booksArray = JSON.parse(localStorage.getItem("booksArray"))
    let booksResults = document.getElementById("booksResults")
    booksResults.innerHTML = ""

    for(let i=0; i < booksArray.length; i++){
        let title= booksArray[i].Title
        let author = booksArray[i].Author
        let pages = booksArray[i].Pages

        if(checkBox.checked){

        booksResults.innerHTML += `<div class="grid">
                                    <div class="results">
                                    <span class="close-btn" id="close">&times</span>
                                    <h3>Ttle: ${title} </h3>
                                    <p>Author: ${author}</p>
                                    <p> Pages: ${pages}</p>
                                    <p>Status: Read</p>
                                    </div>
                                    </div>`
        } else{
            
        booksResults.innerHTML += `<div class="grid">
        <div class="results">
        <span class="close-btn" id="close">&times</span>
        <h3>Title: ${title} </h3>
        <p>Author: ${author}</p>
        <p>Pages: ${pages}</p>
        <p>Status: Unread</p>
        </div>
        </div>`

        }
        const index= arr.indexOf()
    
     const close = document.getElementById("close")
     close.addEventListener("click",function(){
     let booksArray = JSON.parse(localStorage.getItem("booksArray"))
     spliceObj(booksArray, booksArray[index])
     localStorage.setItem("booksArray", JSON.stringify(booksArray))
     fetchBooks()
     console.log("delete button have been clicked")

     })
    }


}


function spliceObj(arr, value){
    for(let i=0; i<arr.length; i++){
        const index= arr.indexOf(value)
        if(index > -1){
            booksArray.splice(index, 1)
        }
    }
}
