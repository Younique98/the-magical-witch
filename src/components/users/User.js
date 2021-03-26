// //the UserCard takes in a parameter of user Object
// // this feature may be utilized later

// export const UserCard = ({ user }) => {
//   // the currentUser variable contains the id of the logged in user
//   const currentUser = parseInt(sessionStorage.getItem("magicalWitch_user"));

//   let showButton = true;

//   // user name can not be an empty string
//   if (user.id === currentUser) {
//     user.name = "";
//     showButton = false;
//   }

//   // return the users name
//   return (
//     <section className="user">
//       <h3 className="user__name">{user.name}</h3>
//     </section>
//   );
// };
