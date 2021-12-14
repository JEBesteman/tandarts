import { v4 as uuidv4 } from "uuid";

const patientList = [
  {
    id: 1,
    firstname: "Freemon",
    lastname: "O'Connor",
    email: "foconnor0@blogs.com",
    mobile: "(266) 8631193",
    yearOfBirth: 2004,
    sick: false,
  },
  {
    id: 2,
    firstname: "Christoforo",
    lastname: "Pywell",
    email: "cpywell1@gmpg.org",
    mobile: "(127) 1314467",
    yearOfBirth: 1954,
    sick: false,
  },
  {
    id: 3,
    firstname: "Maud",
    lastname: "Aggus",
    email: "maggus2@clickbank.net",
    mobile: "(891) 1124207",
    yearOfBirth: 2005,
    sick: false,
  },
  {
    id: 4,
    firstname: "Wendi",
    lastname: "Dureden",
    email: "wdureden3@who.int",
    mobile: "(438) 1908856",
    yearOfBirth: 1985,
    sick: false,
  },
  {
    id: 5,
    firstname: "Miller",
    lastname: "Ashbolt",
    email: "mashbolt4@a8.net",
    mobile: "(496) 6747796",
    yearOfBirth: 1972,
    sick: false,
  },
  {
    id: 6,
    firstname: "Gawain",
    lastname: "Rens",
    email: "grens5@youtube.com",
    mobile: "(559) 3131760",
    yearOfBirth: 2012,
    sick: false,
  },
  {
    id: 7,
    firstname: "Mic",
    lastname: "Greig",
    email: "mgreig6@who.int",
    mobile: "(938) 2580269",
    yearOfBirth: 1960,
    sick: false,
  },
  {
    id: 8,
    firstname: "Josy",
    lastname: "Monketon",
    email: "jmonketon7@redcross.org",
    mobile: "(103) 3227963",
    yearOfBirth: 1954,
    sick: false,
  },
  {
    id: 9,
    firstname: "Harlie",
    lastname: "Huxham",
    email: "hhuxham8@paypal.com",
    mobile: "(975) 1247748",
    yearOfBirth: 2003,
    sick: false,
  },
  {
    id: 10,
    firstname: "Royal",
    lastname: "Drohan",
    email: "rdrohan9@stumbleupon.com",
    mobile: "(639) 1158320",
    yearOfBirth: 1964,
    sick: false,
  },
  {
    id: 11,
    firstname: "Jacob",
    lastname: "Greenstock",
    email: "jgreenstocka@hud.gov",
    mobile: "(241) 1804419",
    yearOfBirth: 1992,
    sick: false,
  },
  {
    id: 12,
    firstname: "Stillmann",
    lastname: "Lardnar",
    email: "slardnarb@ameblo.jp",
    mobile: "(983) 6215410",
    yearOfBirth: 1943,
    sick: false,
  },
  {
    id: 13,
    firstname: "Cathlene",
    lastname: "Parlor",
    email: "cparlorc@tinypic.com",
    mobile: "(901) 9863370",
    yearOfBirth: 2011,
    sick: false,
  },
  {
    id: 14,
    firstname: "Yulma",
    lastname: "Climar",
    email: "yclimard@booking.com",
    mobile: "(201) 7376609",
    yearOfBirth: 2016,
    sick: false,
  },
  {
    id: 15,
    firstname: "Raimundo",
    lastname: "Eldon",
    email: "reldone@squarespace.com",
    mobile: "(497) 2471109",
    yearOfBirth: 1971,
    sick: false,
  },
  {
    id: 16,
    firstname: "Lamont",
    lastname: "Burmaster",
    email: "lburmasterf@newsvine.com",
    mobile: "(596) 7349070",
    yearOfBirth: 1977,
    sick: false,
  },
  {
    id: 17,
    firstname: "Xever",
    lastname: "Kydd",
    email: "xkyddg@dmoz.org",
    mobile: "(364) 4794770",
    yearOfBirth: 1994,
    sick: false,
  },
  {
    id: 18,
    firstname: "Tommie",
    lastname: "Michallat",
    email: "tmichallath@squidoo.com",
    mobile: "(683) 8018766",
    yearOfBirth: 2014,
    sick: false,
  },
  {
    id: 19,
    firstname: "Casey",
    lastname: "Mauditt",
    email: "cmauditti@time.com",
    mobile: "(596) 5912111",
    yearOfBirth: 1946,
    sick: false,
  },
  {
    id: 20,
    firstname: "Gan",
    lastname: "Risom",
    email: "grisomj@cisco.com",
    mobile: "(799) 4031285",
    yearOfBirth: 1980,
    sick: false,
  },
  {
    id: 21,
    firstname: "Quincey",
    lastname: "Castiglio",
    email: "qcastigliok@cisco.com",
    mobile: "(843) 1267627",
    yearOfBirth: 2002,
    sick: false,
  },
  {
    id: 22,
    firstname: "Steven",
    lastname: "Smyley",
    email: "ssmyleyl@mashable.com",
    mobile: "(369) 1618439",
    yearOfBirth: 1995,
    sick: false,
  },
  {
    id: 23,
    firstname: "Piotr",
    lastname: "Bolstridge",
    email: "pbolstridgem@prweb.com",
    mobile: "(254) 5303566",
    yearOfBirth: 1989,
    sick: false,
  },
  {
    id: 24,
    firstname: "Elaina",
    lastname: "Whitford",
    email: "ewhitfordn@smh.com.au",
    mobile: "(491) 6250723",
    yearOfBirth: 2000,
    sick: false,
  },
  {
    id: 25,
    firstname: "Ginnie",
    lastname: "Doy",
    email: "gdoyo@vistaprint.com",
    mobile: "(203) 3418815",
    yearOfBirth: 1990,
    sick: false,
  },
  {
    id: 26,
    firstname: "Cecilia",
    lastname: "Amys",
    email: "camysp@odnoklassniki.ru",
    mobile: "(421) 2971627",
    yearOfBirth: 2007,
    sick: false,
  },
  {
    id: 27,
    firstname: "Renata",
    lastname: "Dabels",
    email: "rdabelsq@jugem.jp",
    mobile: "(289) 8215456",
    yearOfBirth: 2004,
    sick: false,
  },
  {
    id: 28,
    firstname: "Lark",
    lastname: "Romanini",
    email: "lromaninir@spiegel.de",
    mobile: "(390) 5112245",
    yearOfBirth: 1999,
    sick: false,
  },
  {
    id: 29,
    firstname: "Lorens",
    lastname: "Poznan",
    email: "lpoznans@army.mil",
    mobile: "(159) 4294111",
    yearOfBirth: 2005,
    sick: false,
  },
  {
    id: 30,
    firstname: "Regen",
    lastname: "Kleisle",
    email: "rkleislet@goo.ne.jp",
    mobile: "(581) 2990962",
    yearOfBirth: 1951,
    sick: false,
  },
  {
    id: 31,
    firstname: "Harp",
    lastname: "Pesselt",
    email: "hpesseltu@time.com",
    mobile: "(345) 9160132",
    yearOfBirth: 1949,
    sick: false,
  },
  {
    id: 32,
    firstname: "Philbert",
    lastname: "Gooden",
    email: "pgoodenv@cafepress.com",
    mobile: "(605) 8029280",
    yearOfBirth: 2015,
    sick: false,
  },
  {
    id: 33,
    firstname: "Antonin",
    lastname: "Buzek",
    email: "abuzekw@disqus.com",
    mobile: "(424) 7746048",
    yearOfBirth: 1994,
    sick: false,
  },
  {
    id: 34,
    firstname: "Kristyn",
    lastname: "Silk",
    email: "ksilkx@mapy.cz",
    mobile: "(975) 8983923",
    yearOfBirth: 1965,
    sick: false,
  },
  {
    id: 35,
    firstname: "Janette",
    lastname: "Venditto",
    email: "jvendittoy@utexas.edu",
    mobile: "(647) 4587599",
    yearOfBirth: 2001,
    sick: false,
  },
  {
    id: 36,
    firstname: "Winfred",
    lastname: "Marsh",
    email: "wmarshz@ox.ac.uk",
    mobile: "(662) 6153864",
    yearOfBirth: 1981,
    sick: false,
  },
  {
    id: 37,
    firstname: "Taber",
    lastname: "Grindrod",
    email: "tgrindrod10@csmonitor.com",
    mobile: "(667) 3797233",
    yearOfBirth: 2016,
    sick: false,
  },
  {
    id: 38,
    firstname: "Dennie",
    lastname: "McAvaddy",
    email: "dmcavaddy11@cam.ac.uk",
    mobile: "(520) 2987520",
    yearOfBirth: 1988,
    sick: false,
  },
  {
    id: 39,
    firstname: "Car",
    lastname: "Wellfare",
    email: "cwellfare12@blogspot.com",
    mobile: "(787) 6103261",
    yearOfBirth: 2018,
    sick: false,
  },
  {
    id: 40,
    firstname: "Odilia",
    lastname: "Mitchely",
    email: "omitchely13@examiner.com",
    mobile: "(415) 5817702",
    yearOfBirth: 2008,
    sick: false,
  },
  {
    id: 41,
    firstname: "Marvin",
    lastname: "Tribbeck",
    email: "mtribbeck14@cbc.ca",
    mobile: "(305) 7104661",
    yearOfBirth: 2000,
    sick: false,
  },
  {
    id: 42,
    firstname: "Dawna",
    lastname: "Gritskov",
    email: "dgritskov15@dmoz.org",
    mobile: "(440) 8707235",
    yearOfBirth: 1965,
    sick: false,
  },
  {
    id: 43,
    firstname: "Rudolph",
    lastname: "Goodyer",
    email: "rgoodyer16@miitbeian.gov.cn",
    mobile: "(132) 8022373",
    yearOfBirth: 1951,
    sick: false,
  },
  {
    id: 44,
    firstname: "Hayley",
    lastname: "Fowlston",
    email: "hfowlston17@shinystat.com",
    mobile: "(929) 4906162",
    yearOfBirth: 1964,
    sick: false,
  },
  {
    id: 45,
    firstname: "Kristy",
    lastname: "Tumpane",
    email: "ktumpane18@earthlink.net",
    mobile: "(234) 7682493",
    yearOfBirth: 1996,
    sick: false,
  },
  {
    id: 46,
    firstname: "Frazier",
    lastname: "McCane",
    email: "fmccane19@telegraph.co.uk",
    mobile: "(810) 7867310",
    yearOfBirth: 1949,
    sick: false,
  },
  {
    id: 47,
    firstname: "Allen",
    lastname: "Braisted",
    email: "abraisted1a@senate.gov",
    mobile: "(659) 8884681",
    yearOfBirth: 1952,
    sick: false,
  },
  {
    id: 48,
    firstname: "Barnaby",
    lastname: "Minifie",
    email: "bminifie1b@cpanel.net",
    mobile: "(605) 9850571",
    yearOfBirth: 1982,
    sick: false,
  },
  {
    id: 49,
    firstname: "Martina",
    lastname: "Wimbridge",
    email: "mwimbridge1c@posterous.com",
    mobile: "(933) 1935133",
    yearOfBirth: 1941,
    sick: false,
  },
  {
    id: 50,
    firstname: "Rubetta",
    lastname: "Gerrels",
    email: "rgerrels1d@unicef.org",
    mobile: "(993) 5136807",
    yearOfBirth: 2001,
    sick: false,
  },
];

const dentistList = [
  {
    id: 1,
    firstname: "Cull",
    lastname: "Celloni",
    email: "ccelloni0@dentistcompanybvt.com",
    mobile: "(204) 3318584",
    yearOfBirth: 1955,
    occupation: "dentist",
    sick: false,
  },
  {
    id: 2,
    firstname: "Conant",
    lastname: "Whitmell",
    email: "cwhitmell1@dentistcompanybvt.com",
    mobile: "(630) 9215004",
    yearOfBirth: 1962,
    occupation: "dentist",
    sick: false,
  },
  {
    id: 3,
    firstname: "Thorny",
    lastname: "Boon",
    email: "tboon2@dentistcompanybvt.com",
    mobile: "(727) 4759294",
    yearOfBirth: 1945,
    occupation: "dentist",
    sick: false,
  },
  {
    id: 4,
    firstname: "Hersh",
    lastname: "Farrand",
    email: "hfarrand3@dentistcompanybvt.com",
    mobile: "(845) 8729169",
    yearOfBirth: 2012,
    occupation: "dentist",
    sick: false,
  },
];

const assistentList = [
  {
    id: 1,
    firstname: "Marti",
    lastname: "Bettis",
    email: "mbettis0@dentistcompanybvt.com",
    mobile: "(391) 6412473",
    yearOfBirth: 1944,
    occupation: "assistent",
    sick: false,
  },
  {
    id: 2,
    firstname: "Grier",
    lastname: "Basson",
    email: "gbasson1@dentistcompanybvt.com",
    mobile: "(230) 2923792",
    yearOfBirth: 1948,
    occupation: "assistent",
    sick: false,
  },
  {
    id: 3,
    firstname: "no",
    lastname: "assistent",
    email: "",
    mobile: "",
    yearOfBirth: 0,
    occupation: "assistent",
    sick: false,
  },
];

const getPatient = () => {
  const patient = patientList[Math.floor(Math.random() * 50)];
  return `${patient.firstname} ${patient.lastname}`;
};

const getDentist = () => {
  const dentist = dentistList[Math.floor(Math.random() * 4)];
  return `${dentist.firstname} ${dentist.lastname}`;
};

const getAssistent = () => {
  const assistent = assistentList[Math.floor(Math.random() * 3)];
  return `${assistent.firstname} ${assistent.lastname}`;
};

const getRandomTime = () => {
  let hour;
  while (true) {
    hour = Math.floor(Math.random() * 24);
    if (hour > 7 && hour < 19) {
      return hour;
    }
  }
};

//weekend dicht!
const getRandomDay = () => {
  let day;
  while (true) {
    day = Math.floor(Math.random() * 28) + 1;
    if (day > 0 && day < 6) {
      return day;
    } else if (day > 7 && day < 13) {
      return day;
    } else if (day > 14 && day < 20) {
      return day;
    } else if (day > 21 && day < 27) {
      return day;
    }
  }
};
// const getRandomDay = () => Math.floor(Math.random() * 28) + 1;

const generateRandomAppointment = () => ({
  id: uuidv4(),
  day: getRandomDay(),
  time: getRandomTime(),
  patient: getPatient(),
  dentist: getDentist(),
  assistent: getAssistent(),
});

//dubbele tijden eruit halen!!

const generateRandomAppointments = num =>
  Array(num)
    .fill(0)
    .map(_ => generateRandomAppointment());

export default generateRandomAppointments;

// const isConflict = (appointments, appointment) =>
//   appointments.some(
//     (item) =>
//       item.id !== appointment.id &&
//       item.day === appointment.day &&
//       item.time === appointment.time
//   );


// export const getAppointments = (dentist, assistent, patient, num) => {
//   const appointments = []
//   while(appointments.length < num) {
//     let newAppointment = generateRandomAppointment(dentist, assistent, patient)
//     if (isConflict(newAppointment, appointments === false)) {
//       appointments.push(newAppointment)
//     }
//   }
//   return appointments;
// }


// Je kunt bij het genereren van deze array checks toevoegen voordat een nieuwe afspraak wordt toegevoegd aan de array. Ik zou aanraden om dit in een eigen functie te stoppen, aangezien je deze logica en checks weer nodig zal hebben als er bijvoorbeeld een nieuwe afspraak moet worden toegevoegd. Bij deze check kan je ook voor meerdere checks toevoegen en op meerdere / verschillende properties checken. Dit kan je doen zolang de lengte van deze array nog lager is dan een gewenst getal, bijvoorbeeld 150 (of een parameter). Een stukje (pseudo)code als opzet:
// const getAppointments = (dentists, assistants, patients, num) => {
//   const allAppointments = []
//   //Voer het maken van nieuwe appointments uit tot de array lang genoeg is:
//   while (allAppointments.length < num) {
//     const newAppointment = generateRandomAppointment()
//     //Hier logica om de afspraak alleen toe te voegen als hij dus niet ergens dubbel op 'boekt'
//     if (isDoublures(newAppointment, allAppointments) === false) {
//       allAppointments.push(newAppointment)

//     }
//   }
//   return allAppointments
// }
// Echter, nu is het aan jou om de isDoublures functie te schrijven:
// const isDoublures = (newAppointment, allAppointments) =>  {

//   //logica om de properties van de nieuwe afspraak te checken tegen de bestaande afspraken.
//   //Daarvoor kan je bijvoorbeeld .some() , filter(), map() op verschillende manieren gebruiken denk ik
//   return true or false als totaal resultaat van isDoublures
// }
// De truck zit hem in deze opdracht weer in alles in kleine deel stappen op te splitsen en de verschillende stukjes logica te zien en scheiden^^.
// ***Hij voegt dus niets toe als het een dubbele afspraak is (als het goed is), maar blijft door de while loop draai en een random afspraak genereren en toevoegen tot 150, of beter “num” bereikt is
