console.log("this is my first project in javascript")
showNotes()





//If user adds a note , add it in a localStorage
let addBtn= document.getElementById('addBtn')
addBtn.addEventListener('click',function(e){

    let addTxt = document.getElementById('addTxt')
    let addTitle=document.getElementById('addTitle')
    let notes= localStorage.getItem("notes");
    if(notes==null){
        notesObj=[]
        }
    else{
        notesObj=JSON.parse(notes)
    }
    let myObj={
        title:addTitle.value,
        text:addTxt.value
    }

    notesObj.push(myObj)
    localStorage.setItem("notes", JSON.stringify(notesObj))
    addTxt.value=""
    addTitle.value=""
    // console.log(notesObj)
    success()
    showNotes();    
})


//function to check wheter the textarea is empty or not
function success() {
    if(document.getElementById("addTxt").value==="") { 
           document.getElementById('addBtn').disabled = true; 
       } else { 
           document.getElementById('addBtn').disabled = false;
       }
   }



//function to show elements from localStorage
function showNotes(){
    let notes= localStorage.getItem("notes")
    if(notes==null){
        notesObj= [];
        }
    else{
        notesObj=JSON.parse(notes)
    }

    let html="";
    notesObj.forEach(function(element, index){

        html+=`<div class=" noteCard my-2 mx-2 card" style="width: 18rem;">
              <div class="card-body">
                    <h5 class="card-title">${element.title}</h5>
                     <p class="card-text">${element.text}</p>
                     <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-primary">Delete note</button>
               </div>
      
               </div>`
    });
    let notesEle= document.getElementById('notes')
    if (notesObj.length!=0){
        notesEle.innerHTML=html;
    }
    else{
        notesEle.innerHTML=`Nothing to show! Use "Add a note " section above to add notes.`
    }

}

//function to delete a note
function deleteNote(index){
    // console.log("I am deleting",index)
    let notes= localStorage.getItem("notes")
    if(notes==null){
        notesObj=[]
        }
    else{
        notesObj=JSON.parse(notes)
    }

    notesObj.splice(index,1);
    localStorage.setItem("notes", JSON.stringify(notesObj))
    showNotes()
}


//function to search a text
let search = document.getElementById('searchTxt')
search.addEventListener("input",function(){
    
    let inputVal=search.value.toLowerCase()
    // console.log("INPUT EVENT FIRED!", inputVal);
    let noteCards=document.getElementsByClassName('noteCard')
    Array.from(noteCards).forEach(function(element){

        let cardTxt=element.getElementsByTagName("p")[0].innerText
        if(cardTxt.includes(inputVal)){
            element.style.display="block";

        }
        else{
            element.style.display="none";
        }
    })

})


/*
1. Add a Title
2. mark a note as important
3. seperate notes by user
4. sync an d host to a web server
*/




