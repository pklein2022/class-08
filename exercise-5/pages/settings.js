export default class Settings {
  constructor() {
    this.render();
  }
  render() {
    let appELement = document.getElementById("app");
    appELement.innerHTML += `
    <h1 class='text-center'>Settings</h1>
    `
  }
}
