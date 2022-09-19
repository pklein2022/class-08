import { userService } from "../user/user.service.js";
export default class Home {
  constructor() {
    //When home instance is created, call render
    this.render();
    // console.log(userService.user.username)
    // userService.next(userService.user.username);
  }

  //render elements onto the Home page
  render() {
    let appELement = document.getElementById("app");
    appELement.insertAdjacentHTML(
      "beforeend",
      ` <h1 class='text-center'>Social Media Page</h1>
      <div class="text-center">
      username: status
      <button type="submit" class="btn btn-primary" id="like-btn">Like</button>
  </div>   
      `

    );
   }
}
