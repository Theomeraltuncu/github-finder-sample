import { Github } from "./scripts/api.js";
import { elements } from "./scripts/helpers.js";
import { UI } from "./scripts/ui.js";

const github = new Github();
const ui = new UI();
github.fetchUserData()



const getInput = (e)=>{
    e.preventDefault();

   const value = elements.searchInput.value;
   if(value=="") {
    ui.showAlert("Fill the area please", "alert alert-warning")
    return
   };
   if(value){
    github.fetchUserData(value)
    .then((res) => {
        if(res.message === "Not Found"){
            ui.showAlert("User not found.", "alert alert-danger");
        }else{
            ui.showAlert("User found", "alert alert-success")
            console.log(res)
            ui.renderProfile(res.data);
            ui.renderProjects(res.repos)
        }
    })
    .catch((err)=> console.log(err));
    return;
   }
   
}

elements.searchBtn.addEventListener("click", getInput)
