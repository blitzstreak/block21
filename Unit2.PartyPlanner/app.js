const wrapper = document.getElementById("wrapper");

let data="";


async function myFunction(){

  const response = await fetch("https://fsa-crud-2aa9294fe819.herokuapp.com/api/2404-FTB-ET-WEB-FT/events");
  const data = await response.json();
  return data;
};
console.log(myFunction())

myFunction().then((response)=>{
    console.log(response.data);
    response.data.forEach((itm) => {
        createEvent(itm);
    });
})

function createEvent(info) {
    const divele = document.createElement("div");
    const nameEle = document.createElement("h1");
    const descriptionEle = document.createElement("p");
    const dateEle = document.createElement("p");
    const timeEle = document.createElement("p");
    const locationEle = document.createElement("p");
    const buttonEle = document.createElement("button");

    nameEle.innerHTML =info.name;
    descriptionEle.innerHTML =info.description;
    dateEle.innerHTML = info.date;
    timeEle.innerHTML = info.time;
    locationEle.innerHTML = info.location;
    buttonEle.innerHTML= "Delete Event";
    buttonEle.addEventListener("click",async()=>{
        await deleteApiElement(info.id);
        ele.remove();
    });

    divele.appendChild(nameEle);
    divele.appendChild(descriptionEle);
    divele.appendChild(dateEle);
    divele.appendChild(timeEle);
    divele.appendChild(locationEle);
    divele.appendChild(buttonEle);
    wrapper.appendChild(divele);

}

async function addForm(){
    document.getElementById("addEventButton").addEventListener("click", ()=> {
        const nameVal = document.getElementById("name").value;
        const descriptionVal = document.getElementById("description").value;
        const dateTimeVal = document.getElementById("dateTime").value;
        const locationVal = document.getElementById("location").value;

        async function addCharacter(){
            const response = await fetch("https://fsa-crud-2aa9294fe819.herokuapp.com/api/2404-FTB-ET-WEB-FT/events",{
                method:"POST",
                // send back information
                body: JSON.stringify({
                    name:nameVal,
                    description:descriptionVal,
                    date:dateTimeVal,
                    location:locationVal,

                    })
            });
        
            return response
        }
        addCharacter()
    })
    
}
   