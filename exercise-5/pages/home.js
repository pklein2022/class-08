export default class Home {
  constructor() {
    //When home instance is created, call render
    this.render();
  }

  //render elements onto the Home page
  render() {
    let appELement = document.getElementById("app");
    appELement.innerHTML += `
        <h1 class='text-center'>Social Media Page</h1>
         `;
  }
}
