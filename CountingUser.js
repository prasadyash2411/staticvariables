
class User {
  static count =0
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
    User.count++
    // count ++;  //1
  }

  printNumberOfUser(){
    console.log('Number of users registerd = ' + User.count)
  }

  register() {
    console.log(this.username + " is now registered");
  }
}
const Yash = new User('yash prasad', 'yash@gmail.com', 'pass123');

const User2 = new User('user2', 'user2@gmail.com', '12344')

const User3 = new User('user3', 'user3@gmail.com', '12344')
const User4 = new User('user4', 'user4@gmail.com', '12344')

Yash.printNumberOfUser();
User2.printNumberOfUser();
User4.printNumberOfUser();

const User5 = new User('user5', 'user5@gmail.com', '12344')

Yash.printNumberOfUser();
User2.printNumberOfUser();
User4.printNumberOfUser();
