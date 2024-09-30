/*function fetchDataFromAPI() {
    const promise = new Promise((resolve, reject) => {
      const data = { name: "John", age: 30 };
      setTimeout(() => {
        resolve(data);
      }, 3000);
    });
    promise.then((data) => {
      console.log(data);
    });
  }
  
  fetchDataFromAPI();

function fetchUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = { id: 1, name: "John" };
      resolve(data);
    }, 2000);
  });
}

function fetchUserPosts(userName) {
  console.log("recupero post utente: ", userName);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = ["Post 1", "Post 2", "Post 3"];
      resolve(data);
    }, 2000);
  });
}

fetchUserData().then((userData) => {
  fetchUserPosts(userData.name).then((userPosts) => {
    console.log(`${userData.name}, ${userPosts.join(", ")}`);
  });
});
function fetchUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = { id: 1, name: "John" };
      resolve(data);
    }, 2000);
  });
}
fetchUserData().then((userData) => {
  console.log(userData.name);
});
function fetchDataFromAPI() {
  const dice = Math.random() / 2;
  return new Promise((resolve, reject) => {
    if (dice < 0.5) {
      resolve("Data retrieved successfully");
    } else {
      reject("Error: Failed to fetch data");
    }
  });
}
fetchDataFromAPI()
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });*/

function promise_BasedFunction(arg1, arg2) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const result = arg1 + arg2;
      if (result % 2 !== 0) {
        resolve(result);
      } else {
        reject("Result is not odd!");
      }
    }, 1000);
  });
}
promise_BasedFunction(7, 8)
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
