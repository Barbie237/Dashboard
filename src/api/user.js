// TODO: Import API_ENDPOINT
import {API_ENDPOINT} from "./index.js";
// TODO: Create the addNewUser function that takes in newUsername, newnomPrenom, and newEnd as arguments. Inside the function, create a POST request for the new book. Store the response as a JSON in a variable called newBook and return it at the end of the function.
export const addNewUser = async (newUsername, newNomPrenom, newDateNaiss, newSexe, newTel,newAdresse, newEmail, newRole, newPassword) => {
    const response = await fetch(`${API_ENDPOINT}/books`, {
      method: "POST",
      body: JSON.stringify({
        username: newUsername,
        nomPrenom: newNomPrenom,
        dateNaiss: newDateNaiss,
        sexe: newSexe,
        tel: newTel,
        adresse: newAdresse,
        email: newEmail,
        role: newRole,
        password: newPassword
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
   
    const newUser = await response.json();
    return newUser;
  };

// // TODO: Create the getBooks function that retrieves all of the books that have been saved to the back-end API
// export const getUsers = async () => {
//     const response = await fetch(`${API_ENDPOINT}/books`);
//     const users = await response.json();
   
//     return users;
//   };

// // TODO: Create the updateBook function that takes the arguments id, newUsername, newnomPrenom, newEnd. Inside of the function, create a PUT request for the specified book to be updated. Return the status of the response at the end of the function.
// export const updateUsers = async (id, newUsername, newNomPrenom, newDateNaiss, newSexe, newTel, newAdresse, newEmail, newRole, newPassword) => {
//   const response = await fetch(`${API_ENDPOINT}/books/${id}`, {
//     method: "PUT",
//     body: JSON.stringify({
//       newUsername,
//       newNomPrenom,
//       newDateNaiss,
//       newSexe,
//       newTel,
//       newAdresse,
//       newEmail,
//       newRole,
//       newPassword
//     }),
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });
 
//   return response.status;
// };

// // TODO: Create the deleteBook function that takes the id of the book to be deleted as an argument. Inside of the function, create a DELETE request for the specified book to be deleted. Return the status of the response at the end of the function.
// export const deleteUsers = async (iduser) => {
//     const response = await fetch(`${API_ENDPOINT}/users/${iduser}`, {
//       method: "DELETE",
//     });
   
//     return response.status;
//   };