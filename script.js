

function OrderClick(){
    document.getElementById("lblName").innerHTML = document.getElementById("txtName").value;
    document.getElementById("lblDate").innerHTML = document.getElementById("textdate").value;
    document.getElementById("lblDays").innerHTML =  document.getElementById("textNo").value;
    document.getElementById("lblPeople").innerHTML = document.getElementById("textpeople").value;
    var Roomtype = "";
    var RoomCost = 0;
    var facilitiesName ="";
    var facilitiesCost = 0;

    delexRadio = document.getElementById("Delex");
    SuiteRadio = document.getElementById("Suite");

    if(delexRadio.checked){
      Roomtype = delexRadio.value;
      RoomCost = 1500;
      TotalCost=1500;
    }
    if(SuiteRadio.checked){
      Roomtype = SuiteRadio.value;
      RoomCost =500;
      TotalCost=500;
    }

    ACRadio   =    document.getElementById("A/C");
    parkingRadio = document.getElementById("parking");
   
    if(ACRadio.checked){
      facilitiesName = ACRadio.value + "<br>";
      facilitiesCost =200;
      TotalCost =RoomCost + facilitiesCost;
      

    }
    if(parkingRadio.checked){
      parkingName = parkingRadio.value + "<br>";
      parkingCost = 150;
      TotalCost = RoomCost + facilitiesCost + parkingCost;
    }
    
  
    document.getElementById("lblRoom").innerHTML =RoomCost;
    document.getElementById("lblfacilities").innerHTML =facilitiesCost;
    document.getElementById("lblparking").innerHTML = parkingCost;
    document.getElementById("lblTotal").innerHTML=TotalCost;
  }
    function LoadPage(pageUrl){
      $.ajax({
              method:"get", 
              url: pageUrl,
              success: (data)=>{
                  $("section").html(data);
              }
       })
  }