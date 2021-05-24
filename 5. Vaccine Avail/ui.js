const mainArea = document.querySelector(".details");



class UI {
  constructor(centerName, blockName, time, avaiableDose1, avaiableDose2, vaccineName) {
    this.centerName = centerName;
    this.blockName = blockName;
    this.time = time;
    this.avaiableDose1 = avaiableDose1;
    this.avaiableDose2 = avaiableDose2;
    this.vaccineName = vaccineName;
  }
  
  addToUi(centerName,blockName,time,avaiableDose1,avaiableDose2,vaccineName){
    const mainDiv = document.createElement("div");
    const heading = document.createElement("h4");
    const listItem = document.createElement("ul");
    const list1 = document.createElement("li");
    const list2 = document.createElement("li");
    const list3 = document.createElement("li");
    const list4 = document.createElement("li");
    const list5 = document.createElement("li");
  
    dispatchEvent.className = "hospitalName";
    heading.className = "centerName";
    listItem.className = "detail"
    list1.className = "blockName";
    list2.className = "time";
    list3.className = "available_capacity_dose1 success";
    list4.className = "available_capacity_dose2 success";
    list5.className = "vaccine";

    heading.textContent = centerName;
    list1.textContent = `Block Name: ${blockName}`;
    list2.textContent = `Time: ${time}`;
    list3.textContent = `Available Dose 1: ${avaiableDose1}`;
    list4.textContent = `Available Dose 2: ${avaiableDose2}`;
    list5.textContent = `Vaccine Name: ${vaccineName}`;

    listItem.appendChild(list1);
    listItem.appendChild(list2);
    listItem.appendChild(list3);
    listItem.appendChild(list4);
    listItem.appendChild(list5);

    mainDiv.appendChild(heading);
    mainDiv.appendChild(listItem);

    mainArea.appendChild(mainDiv);
  }


  noSlot(){
    const noSlot = document.querySelector(".noSlot");
    noSlot.style.display = "block";

  }
}




// console.log(UI);