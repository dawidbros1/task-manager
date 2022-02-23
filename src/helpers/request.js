class Request {
   constructor() {
      this.baseURL = "http://localhost/task-manager/api/index.php";

      this.information = {
         method: 'POST',
         mode: "same-origin",
         credentials: "same-origin",
         headers: {
            "Content-Type": "application/json"
         },
      }
   }

   post($path, $data, onSuccess, onFailure) {
      fetch(`${this.baseURL}${$path}`, {
         ...this.information,
         body: JSON.stringify($data),
      })
         .then((response) => response.json())
         .then((response) => {
            if (response.status === 200) onSuccess(response);
            else {
               console.log(response)
               onFailure(response);
            }
         });
   }
}

export default Request;