// 12. Create a human readable time format using the Date time object
//     - YYYY-MM-DD HH:mm
//     - DD-MM-YYYY HH:mm
//     - DD/MM/YYYY HH:mm

// ** Start code **

const now = new Date();

// Format: YYYY-MM-DD HH:mm
const formattedDateTime1 = `${now.getFullYear()}-${(now.getMonth() + 1).toString().padStart(2, '0')}-${now.getDate().toString().padStart(2, '0')} ${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;
console.log(formattedDateTime1); // e.g. 2023-05-13 10:30

// Format: DD-MM-YYYY HH:mm
const formattedDateTime2 = `${now.getDate().toString().padStart(2, '0')}-${(now.getMonth() + 1).toString().padStart(2, '0')}-${now.getFullYear()} ${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;
console.log(formattedDateTime2); // e.g. 13-05-2023 10:30

// Format: DD/MM/YYYY HH:mm
const formattedDateTime3 = `${now.getDate().toString().padStart(2, '0')}/${(now.getMonth() + 1).toString().padStart(2, '0')}/${now.getFullYear()} ${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;
console.log(formattedDateTime3); // e.g. 13/05/2023 10:30
