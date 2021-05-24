const api = new Api;
const ui = new UI;
const pincode = document.querySelector("#pincode");
const slotForm = document.querySelector("form");
const inputDate = document.querySelector("#date");
const date = inputDate.value;


slotForm.addEventListener("submit",(e)=>{
  const pin = pincode.value;
  const date = inputDate.value;
  aa = date.split("-");
  const formatDate = aa[2]+'-'+aa[1]+'-'+aa[0]
  
  api.get(pin,formatDate)
  .then(data =>{
    if (data.sessions.length===0) {
      ui.noRecord();
    }else{
      data.sessions.forEach(element => {
        if(element.available_capacity_dose1 ===0 || element.available_capacity_dose2 ===0){
          ui.noSlot();
          ui.addToUi(element.name,element.block_name,element.from+" - " + element.to,element.available_capacity_dose1,element.available_capacity_dose2,element.min_age_limit,element.vaccine);
        }
      
      });
    }
})
  .catch(err=>console.log(err))
  
  
  e.preventDefault();

})


