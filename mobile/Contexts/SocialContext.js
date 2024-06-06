// import React, { createContext, useContext, useEffect, useState } from 'react';
// import axiosInstance from '../utility/axiosInstance';

// const SocialContext = createContext();

// export const useSocial = () => useContext(SocialContext);

// export const SocialProvider = ({ children }) => {
//   const [allCards, setAllCards] = useState([]);
//   const [allContacts, setAllContacts] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         await fetchAllCards();
//         await fetchAllContacts();
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   const fetchAllCards = async () => {
//     try {
//       const response = await axiosInstance.get('/cards');
//       setAllCards(response.data);
//       return response.data;
//     } catch (error) {
//       console.error("Fetch Card Error:", error.response ? error.response.data : error.message);
//       throw error;
//     }
//   };

//   const fetchAllContacts = async () => {
//     try {
//       const response = await axiosInstance.get('/userContacts');
//       setAllContacts(response.data);
//       return response.data;
//     } catch (error) {
//       console.error("Fetch Contact Error:", error.response ? error.response.data : error.message);
//       throw error;
//     }
//   };

//   const postContact = async (userContact) => {
//     try {
//       const response = await axiosInstance.post('/userContacts', userContact);
//       console.log("Post Contact Response:", response.data);
//       await fetchAllContacts();
//       return response.data;
//     } catch (error) {
//       console.error("Post Contact Error:", error.response ? error.response.data : error.message);
//       throw error;
//     }
//   };

//   const deleteContact = async (contactID) => {
//     console.log(contactID)
//     try {
//       const response = await axiosInstance.delete('/userContacts/'+contactID);
//       console.log("Delete Contact Response:", response.data);
//       await fetchAllContacts();
//       return response.data;
//     } catch (error) {
//       console.error("Delete Contact Error:", error.response ? error.response.data : error.message);
//       throw error;
//     }
//   };

//   const getCard = (userID) => {
//     return allCards.filter(card => card.UserID === userID);
//   };

//   const getCardCardID = (cardID) => {
//     return allCards.filter(card => card.CardID === cardID);
//   };

//   const getFollowings = (userID) => {
//     return allContacts.filter(contact => contact.UserID === userID);
//   };

//   const getIsFollowing = (userID, userIDFriend) => {
//     return allContacts.some(contact => contact.UserID === userID && contact.UserIDFriend === userIDFriend);
//   };

//   const getUserContactID = (userID, userIDFriend) => {
//     const contact = allContacts.find(contact => contact.UserID === userID && contact.UserIDFriend === userIDFriend);
//     return contact ? contact.UserContactID : null;
//   };

//   const calculateTotalCards = (userID) => {
//     return allCards.filter(card => card.UserID === userID).length;
//   };
  
//   const calculateFollowers = (userID) => {
//     return allContacts.filter(follow => follow.UserIDFriend === userID).length;
//   };

//   const calculateFollowings = (userID) => {
//     // console.log(allContacts)
//     return allContacts.filter(follow => follow.UserID === userID).length;
//   };

//   return (
//     <SocialContext.Provider
//       value={{
//         allCards,
//         allContacts,
//         fetchAllCards,
//         fetchAllContacts,
//         postContact,
//         deleteContact,
//         getCard,
//         getCardCardID,
//         getFollowings,
//         getIsFollowing,
//         getUserContactID,
//         calculateTotalCards,
//         calculateFollowers,
//         calculateFollowings,
//       }}
//     >
//       {children}
//     </SocialContext.Provider>
//   );
// };
