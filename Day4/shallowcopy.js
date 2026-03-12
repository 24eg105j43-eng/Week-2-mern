 const user = {
 id: 101,
 name: "Ravi",
 preferences: {
  theme: "dark",
  language: "en"
  }
  };

  let copyuser = {...user};
  user.name="naks";
  user.preferences.theme="light"
  console.log(user)
  console.log(copyuser)