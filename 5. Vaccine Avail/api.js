class  Api{


  async get(pincode,date){
    const promise = await fetch(`https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pincode}&date=${date}`);
    
    const res  = await promise.json();

    return res;

  }
}

