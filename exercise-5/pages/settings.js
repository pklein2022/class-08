import { userService } from "../user/user.service.js";

export default class Settings {
  constructor() {
    this.render();
    this.addEventListeners();
    this.changeUsername(userService.user.username);
  }
  render() {
    let appELement = document.getElementById("app");
    appELement.insertAdjacentHTML(
      "beforeend",
      ` <h1 class='text-center'>Settings</h1>
      <div class="container">
            <form>
        <div class="mb-3">
            <label for="user-input" class="form-label" id="user-label">Email address</label>
            <input type="email" class="form-control" id="user-input" aria-describedby="emailHelp">
        </div>
        <div class="text-center">
            <button type="submit" class="btn btn-primary" id="settings-btn">Submit</button>
        </div>   
        </form>
      </div>
      `
    );
  }
  addEventListeners(){
    let settingsBtnElem = document.getElementById('settings-btn');
    
    settingsBtnElem.addEventListener('click',(event)=>{
        event.preventDefault();
        let newUsername = document.getElementById('user-input').value;
        this.changeUsername(newUsername);
        userService.next(newUsername);
    })
  }


  changeUsername(username){
    let userLabelELem = document.getElementById('user-label');

    userLabelELem.innerText = `username: ${username}`;
  }
}
