var app = new Vue({
  el: '#app',
  data: {
    name: 'Jane Doe',
    photoUrl: '',
    city: 'Melbourne',
    phone: '+61498 765 432',
    email: 'janedoe@user.com',
    hobbies: ['Reading', 'Running', 'Travelling']
  },
  methods: {
    addHobby: function() {
      const hobby = prompt("Please enter a hobby.");
      this.hobbies.push(hobby);
    },
    getRandomUser: function() {
      fetch('https://randomuser.me/api/')
      .then(response => response.json())
      .then(result => {
        const userObject = result.results[0];
        this.name = `${userObject.name.first} ${userObject.name.last}`;
        this.photoUrl = userObject.picture.large;
        this.city = userObject.location.city;
        this.phone = userObject.phone;
        this.email = userObject.email;
      })
      .catch(err => console.log(err.message))
    },
    removeHobby: function(hobby) {
      const hobbyIndex = this.hobbies.indexOf(hobby);
      this.hobbies.splice(hobbyIndex, 1);
    }
  }
})
