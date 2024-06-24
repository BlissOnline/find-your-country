//steps to gathering info and turning into a usable array or string
//let's turn these strings into an object property?

//can probably made this a module on VSC so I don't always see it
const genCountryList = 
`Afghanistan
Albania
Algeria
Andorra
Angola
Antigua and Barbuda
Argentina
Armenia
Australia
Austria
Azerbaijan
Bahamas
Bahrain
Bangladesh
Barbados
Belarus
Belgium
Belize
Benin
Bhutan
Bolivia
Bosnia and Herzegovina
Botswana
Brazil
Brunei
Bulgaria
Burkina Faso
Burundi
Cabo Verde
Cambodia
Cameroon
Canada
Central African Republic
Chad
Chile
China
Colombia
Comoros
Congo (Brazzaville)
Congo (Kinshasa)
Costa Rica
Croatia
Cuba
Cyprus
Czech Republic
Denmark
Djibouti
Dominica
Dominican Republic
Ecuador
Egypt
El Salvador
Equatorial Guinea
Eritrea
Estonia
Eswatini
Ethiopia
Fiji
Finland
France
Gabon
Gambia
Georgia
Germany
Ghana
Greece
Grenada
Guatemala
Guinea
Guinea-Bissau
Guyana
Haiti
Honduras
Hungary
Iceland
India
Indonesia
Iran
Iraq
Ireland
Israel
Italy
Ivory Coast
Jamaica
Japan
Jordan
Kazakhstan
Kenya
Kiribati
Kuwait
Kyrgyzstan
Laos
Latvia
Lebanon
Lesotho
Liberia
Libya
Liechtenstein
Lithuania
Luxembourg
Madagascar
Malawi
Malaysia
Maldives
Mali
Malta
Marshall Islands
Mauritania
Mauritius
Mexico
Micronesia
Moldova
Monaco
Mongolia
Montenegro
Morocco
Mozambique
Myanmar
Namibia
Nauru
Nepal
Netherlands
New Zealand
Nicaragua
Niger
Nigeria
North Korea
North Macedonia
Norway
Oman
Pakistan
Palau
Palestine
Panama
Papua New Guinea
Paraguay
Peru
Philippines
Poland
Portugal
Qatar
Romania
Russia
Rwanda
Saint Kitts and Nevis
Saint Lucia
Saint Vincent and the Grenadines
Samoa
San Marino
Sao Tome and Principe
Saudi Arabia
Senegal
Serbia
Seychelles
Sierra Leone
Singapore
Slovakia
Slovenia
Solomon Islands
Somalia
South Africa
South Korea
South Sudan
Spain
Sri Lanka
Sudan
Suriname
Sweden
Switzerland
Syria
Taiwan
Tajikistan
Tanzania
Thailand
Timor-Leste
Togo
Tonga
Trinidad and Tobago
Tunisia
Turkey
Turkmenistan
Tuvalu
Uganda
Ukraine
United Arab Emirates
United Kingdom
United States
Uruguay
Uzbekistan
Vanuatu
Vatican City
Venezuela
Vietnam
Yemen
Zambia
Zimbabwe`;

//now let's change from long string `` to individual strings, with split.() array method 
//''/n' will split at each line

const genCountryListSeperated = genCountryList.split('\n');

//Can use the reduce() method to create an array of objects from an array of strings. 
const genCountryObj = genCountryListSeperated.reduce((acc, curr, index) => {
  acc.push({ name: curr, countryIndexNumber: index });
  return acc;
}, []);

//okay now use forEach() method to add properties to our country objects

//price per month of living in the country
genCountryObj.forEach(x => {
  x.ppm = 0;
});

//will this country have ocean access (maybe for tanning, sailing, surfing, or you like the taste of salt while to swim ^_^)
genCountryObj.forEach(x => {
  x.coast = false;
})


//list of countries with ocean access
const genCountryListWithCoast = 
`Algeria
Angola
Antigua and Barbuda
Argentina
Australia
Bahamas
Barbados
Belgium
Belize
Benin
Brazil
Bulgaria
Canada
Cape Verde
Chile
China
Colombia
Croatia
Cyprus
Denmark
Dominica
Egypt
Equatorial Guinea
Estonia
Finland
France
Gabon
Gambia
Germany
Ghana
Greece
Guinea
Guinea-Bissau
Iceland
India
Ireland
Israel
Italy
Ivory Coast
Jamaica
Japan
Latvia
Liberia
Libya
Lithuania
Madagascar
Malaysia
Malta
Mauritania
Mexico
Monaco
Morocco
Namibia
Netherlands
New Zealand
Nigeria
Norway
Panama
Papua New Guinea
Peru
Philippines
Poland
Portugal
Romania
Russia
Saint Kitts and Nevis
Saint Lucia
Saint Vincent and the Grenadines
Senegal
Sierra Leone
Singapore
Slovenia
South Africa
South Korea
Spain
Suriname
Sweden
Syria
Togo
Trinidad and Tobago
Tunisia
Turkey
Ukraine
United Kingdom
United States
Uruguay
Venezuela
Vietnam`;

//here we turned a long string into an array with individual values
const genCountryListWithCoastSeperated = genCountryListWithCoast.split('\n');
 

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////N/N?????
//we are doing our first match 
  //if genCountryObject name: matches with genCountryListWithCoastSeperated name:, we change coast value to true 
for (const obj1 of genCountryObj) {
    const name1 = obj1.name;
    if (genCountryListWithCoastSeperated.some(obj2 => obj2.name === name1)) {
      obj1.coast = true;
    } else {
      obj1.coast = false;
    }
}


//N/N????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
//console.log(genCountryListWithCoastSeperated);
const CurrentUpdateList2 = genCountryObj.map((x) => {
  return {...x, coast: genCountryListWithCoastSeperated.includes(x.name)};
})



//our approach to updating the ppm from another list
//this is our list for updating ppm on our mainObject
//this will take a different approach because we're using an object and not just a simple array this time
const countriesExpenses = [
  { name: 'Afghanistan', ppm: 524 },
  { name: 'Algeria', ppm: 472 },
  { name: 'Angola', ppm: 878 },
  { name: 'Argentina', ppm: 563 },
  { name: 'Australia', ppm: 2293 },
  { name: 'Austria', ppm: 1743 },
  { name: 'Azerbaijan', ppm: 696 },
  { name: 'Bangladesh', ppm: 423 },
  { name: 'Belarus', ppm: 517 },
  { name: 'Belgium', ppm: 1540 },
  { name: 'Benin', ppm: 717 },
  { name: 'Bolivia', ppm: 683 },
  { name: 'Brazil', ppm: 754 },
  { name: 'Bulgaria', ppm: 773 },
  { name: 'Burkina Faso', ppm: 734 },
  { name: 'Burundi', ppm: 481 },
  { name: 'Cambodia', ppm: 753 },
  { name: 'Cameroon', ppm: 833 },
  { name: 'Canada', ppm: 2042 },
  { name: 'Chad', ppm: 495 },
  { name: 'Chile', ppm: 936 },
  { name: 'China', ppm: 679 },
  { name: 'Colombia', ppm: 735 },
  { name: 'Cuba', ppm: 1347 },
  { name: 'Czech Republic', ppm: 1199 },
  { name: 'Denmark', ppm: 1581 },
  { name: 'Dominican Republic', ppm: 792 },
  { name: 'DR Congo', ppm: 941 },
  { name: 'Ecuador', ppm: 815 },
  { name: 'Egypt', ppm: 503 },
  { name: 'Ethiopia', ppm: 876 },
  { name: 'France', ppm: 1542 },
  { name: 'Germany', ppm: 1581 },
  { name: 'Ghana', ppm: 478 },
  { name: 'Greece', ppm: 1146 },
  { name: 'Guatemala', ppm: 886 },
  { name: 'Guinea', ppm: 1006 },
  { name: 'Haiti', ppm: 511 },
  { name: 'Honduras', ppm: 846 },
  { name: 'Hungary', ppm: 929 },
  { name: 'Iceland', ppm: 1235 },
  { name: 'India', ppm: 441 },
  { name: 'Indonesia', ppm: 567 },
  { name: 'Iran', ppm: 630 },
  { name: 'Iraq', ppm: 754 },
  { name: 'Ireland', ppm: 2042 },
  { name: 'Israel', ppm: 1838 },
  { name: 'Italy', ppm: 1423 },
  { name: 'Ivory Coast', ppm: 1045 },
  { name: 'Japan', ppm: 1097 },
  { name: 'Jordan', ppm: 854 },
  { name: 'Kazakhstan', ppm: 725 },
  { name: 'Kenya', ppm: 586 },
  { name: 'Kyrgyzstan', ppm: 593 },
  { name: 'Lebanon', ppm: 1097 },
  { name: 'Libya', ppm: 422 },
  { name: 'Madagascar', ppm: 535 },
  { name: 'Malawi', ppm: 361 },
  { name: 'Malaysia', ppm: 582 },
  { name: 'Mali', ppm: 509 },
  { name: 'Mexico', ppm: 982 },
  { name: 'Morocco', ppm: 630 },
  { name: 'Mozambique', ppm: 1053 },
  { name: 'Myanmar', ppm: 759 },
  { name: 'Nepal', ppm: 392 },
  { name: 'Netherlands', ppm: 1945 },
  { name: 'New Zealand', ppm: 2293 },
  { name: 'Niger', ppm: 997 },
  { name: 'Nigeria', ppm: 355 },
  { name: 'North Korea', ppm: 1592 },
  { name: 'Norway', ppm: 1581 },
  { name: 'Pakistan', ppm: 357 },
  { name: 'Palestine', ppm: 1097 },
  { name: 'Panama', ppm: 792 },
  { name: 'Papua New Guinea', ppm: 534 },
  { name: 'Paraguay', ppm: 632 },
  { name: 'Peru', ppm: 765 },
  { name: 'Philippines', ppm: 614 },
  { name: 'Poland', ppm: 1137 },
  { name: 'Portugal', ppm: 1286 },
  { name: 'Qatar', ppm: 1906 },
  { name: 'Romania', ppm: 821 },
  { name: 'Russia', ppm: 652 },
  { name: 'Rwanda', ppm: 649 },
  { name: 'Saudi Arabia', ppm: 1244 },
  { name: 'Senegal', ppm: 1118 },
  { name: 'Serbia', ppm: 977 },
  { name: 'Sierra Leone', ppm: 732 },
  { name: 'Singapore', ppm: 1906 },
  { name: 'Slovakia', ppm: 1199 },
  { name: 'Slovenia', ppm: 1540 },
  { name: 'Somalia', ppm: 811 },
  { name: 'South Africa', ppm: 815 },
  { name: 'South Korea', ppm: 1118 },
  { name: 'South Sudan', ppm: 489 },
  { name: 'Spain', ppm: 1383 },
  { name: 'Sri Lanka', ppm: 509 },
  { name: 'Sudan', ppm: 946 },
  { name: 'Sweden', ppm: 1578 },
  { name: 'Switzerland', ppm: 2896 },
  { name: 'Syria', ppm: 486 },
  { name: 'Taiwan', ppm: 972 },
  { name: 'Tajikistan', ppm: 649 },
  { name: 'Tanzania', ppm: 662 },
  { name: 'Thailand', ppm: 790 },
  { name: 'Turkey', ppm: 724 },
  { name: 'Turkmenistan', ppm: 1668 },
  { name: 'Uganda', ppm: 624 },
  { name: 'Ukraine', ppm: 564 },
  { name: 'United Arab Emirates', ppm: 1906 },
  { name: 'United Kingdom', ppm: 2183 },
  { name: 'United States', ppm: 2433 },
  { name: 'Uruguay', ppm: 765 },
  { name: 'Uzbekistan', ppm: 623 },
  { name: 'Venezuela', ppm: 764 },
  { name: 'Vietnam', ppm: 611 },
  { name: 'Yemen', ppm: 505 },
  { name: 'Zambia', ppm: 935 },
  { name: 'Zimbabwe', ppm: 862 }
];


//copilot: using map(); and find();
//using an array of objects to update an array of objects
const CurrentUpdateList3 = CurrentUpdateList2.map(x => ({
  ...x,
  ppm: countriesExpenses.find(item => item.name === x.name)?.ppm || x.ppm 
}));


//lets count how many objects still have 0 value for ppm 78
const countWithPpmZero = CurrentUpdateList3.filter(obj => obj.ppm === 0).length;
console.log(countWithPpmZero);
console.log(`Number of objects with ppm: 0, ${countWithPpmZero} countires`);

//HTML form
let formQuestion = document.querySelector("form");
formQuestion.addEventListener("submit", (event) => {
  console.log("yoyoyoyo");
  event.preventDefault() //prevents 404
  const data = Object.fromEntries(new FormData(formQuestion).entries()); //accesibility, 
  console.log(data);
});

//okay now I'm creating an array of countries that include english starting with a long string 
const englishCountries = 
`England
Wales
Scotland
Ireland
Malta
Gibraltar
Isle of Man
South Africa
Nigeria
Mauritius
Botswana
Cameroon
Gambia
Ghana
Kenya
Lesotho
Liberia
Namibia
Malawi
Seychelles
Sierra Leone
United States
Canada
Belize
Guyana
Bermuda
Falkland Islands
Puerto Rico
Jamaica
Antigua and Barbuda
Anguilla
Bahamas
Barbados
British Virgin Islands
Cayman Islands
Sint Maarten
Dominica
Grenada
Saint Kitts and Nevis
Saint Lucia
Saint Vincent and the Grenadines
Turks and Caicos Islands
Trinidad and Tobago
US Virgin Islands
India
Pakistan
Philippines
Singapore
Brunei
Australia
New Zealand
Cook Islands
Fiji
Guam
Kiribati
Marshall Islands
Micronesia
Nauru
Northern Mariana Islands
Palau
Papua New Guinea
American Samoa
Samoa
Solomon Islands
Tonga
Vanuatu
Saint Helena
Somalia
South Sudan
Sudan
Swaziland
Tanzania
Rwanda
Uganda
Zambia
Zimbabwe`;



//now turn big string into an array
const englishCountriesArray = englishCountries.split('\n');



// okay now I should upload a property value (speaksEnglish?) to our main CurrentUpdateList3

CurrentUpdateList3.forEach(x => {
  x.englishSpeaking = false;
})

//okay now I need to update our main CurrentUpdateList3 property value englishSpeaking property to true if it matches on our list
  //will acheive this by utilizing map() to create a new list CurrentUpdateList{4},
    //and also use includes() if the name is included on both, it will change our english speaking value to true

const CurrentUpdateList4 = CurrentUpdateList3.map((x) => {
  return {...x, englishSpeaking: englishCountriesArray.includes(x.name)};
})

console.log(CurrentUpdateList4);




