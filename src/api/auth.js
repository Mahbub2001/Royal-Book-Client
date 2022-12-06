export const setAuthToken = (user) => {
  const currentUser = {
    email: user.email,
    name: user.name,
    role: user.role,
  };
  console.log(currentUser);

  //   Save user in db & get token
  fetch(`${process.env.REACT_APP_API_URL}/user/${user?.email}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(currentUser),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      //Save token in LocalStorage
      localStorage.setItem("royal-token", data.token);
    });
};
