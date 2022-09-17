//Bonus:  Exercise #5: Fake Social Media App
// Use the Observable pattern to update information on a given webpage.

// Let's say you as the user are in a webpage. You have a navbar in which displays login. You see a list of user statuses that display their thoughts of a matter.
// Each status has a like button.

// As a user, you cannot like a button until you are signed in. If you do like a button, it will present a modal that shows 'login'.

// When the user clicks, login, present a fake login.

// Once login, the navbar should display some sort of text as "Welcome!".

// From there you should be able to like a user's post.

class Observable {
  subscribers = [];

  subscribe(fn) {
    this.subscribers.push(fn);
  }

  broadcast(value) {
    this.subscribers.forEach((fn) => {
      fn(value);
    });
  }
}

let userObservable = new Observable();
userObservable.subscribe((message) => {
  console.log(`Received message: ${message}`);
});

userObservable.subscribe((message) => {
  console.log(`Delivering a message: ${message}`);
});

console.log(userObservable);
userObservable.broadcast("Good morning!")
userObservable.broadcast("Good evening!")
