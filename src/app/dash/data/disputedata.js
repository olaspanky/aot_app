export const data = [
  {
    id: 1,
    date: '2023-07-10',
    status: 'Active',
    name: 'John Doe',
    email: 'johndoe@example.com',
    age: 30,
    phone: '123-456-7890',
    access: 'manager',
    riderName: 'Jane Smith',
    orderLocation: 'New York',
    orderDate: '2023-07-10',
    riderNumber: '987-654-3210',
    goodCategory: 'Electronics',
  },
  // Add more data entries here
  // ...
  
];

// Generate 70 random data entries
for (let i = 2; i <= 70; i++) {
  const randomData = {
    id: i,
    date: getRandomDate(),
    status: getRandomStatus(),
    name: getRandomName(),
    email: getRandomEmail(),
    age: getRandomAge(),
    phone: getRandomPhone(),
    access: getRandomAccess(),
    riderName: getRandomRiderName(),
    orderLocation: getRandomOrderLocation(),
    orderDate: getRandomOrderDate(),
    riderNumber: getRandomRiderNumber(),
    goodCategory: getRandomGoodCategory(),
  };
  data.push(randomData);
}

// Helper functions to generate random values

function getRandomDate() {
  const startDate = new Date(2022, 0, 1);
  const endDate = new Date();
  const randomTimestamp = startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime());
  return new Date(randomTimestamp).toISOString().split('T')[0];
}

function getRandomStatus() {
  const statuses = ['Active', 'Inactive'];
  return statuses[Math.floor(Math.random() * statuses.length)];
}

function getRandomName() {
  const names = ['John', 'Alice', 'Bob', 'Emma', 'Michael'];
  const surnames = ['Doe', 'Johnson', 'Smith', 'Brown', 'Wilson'];
  const randomName = names[Math.floor(Math.random() * names.length)];
  const randomSurname = surnames[Math.floor(Math.random() * surnames.length)];
  return `${randomName} ${randomSurname}`;
}

function getRandomEmail() {
  const providers = ['gmail', 'yahoo', 'hotmail', 'outlook'];
  const randomProvider = providers[Math.floor(Math.random() * providers.length)];
  const randomDomain = '.com';
  const randomString = Math.random().toString(36).substring(2, 8);
  return `${randomString}@${randomProvider}${randomDomain}`;
}

function getRandomAge() {
  return Math.floor(Math.random() * 50) + 20;
}

function getRandomPhone() {
  const randomDigits = Math.floor(100000000 + Math.random() * 900000000).toString();
  const formattedNumber = `${randomDigits.substring(0, 3)}-${randomDigits.substring(3, 6)}-${randomDigits.substring(6)}`;
  return formattedNumber;
}

function getRandomAccess() {
  const accessLevels = ['individual', 'company', 'user'];
  return accessLevels[Math.floor(Math.random() * accessLevels.length)];
}

function getRandomRiderName() {
  const riderNames = ['Jane Smith', 'David Johnson', 'Emily Brown', 'William Wilson', 'Sophia Davis'];
  return riderNames[Math.floor(Math.random() * riderNames.length)];
}

function getRandomOrderLocation() {
  const locations = ['New York', 'Los Angeles', 'Chicago', 'Houston', 'San Francisco'];
  return locations[Math.floor(Math.random() * locations.length)];
}

function getRandomOrderDate() {
  const startDate = new Date(2022, 0, 1);
  const endDate = new Date();
  const randomTimestamp = startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime());
  return new Date(randomTimestamp).toISOString().split('T')[0];
}

function getRandomRiderNumber() {
  const randomDigits = Math.floor(100000000 + Math.random() * 900000000).toString();
  const formattedNumber = `${randomDigits.substring(0, 3)}-${randomDigits.substring(3, 6)}-${randomDigits.substring(6)}`;
  return formattedNumber;
}

function getRandomGoodCategory() {
  const categories = ['Electronics', 'Clothing', 'Books', 'Home & Kitchen', 'Sports'];
  return categories[Math.floor(Math.random() * categories.length)];
}




export const data2 = [
  {
    id: 1,
    date: '2023-07-10',
    status: 'Resolved',
    name: 'John Doe',
    email: 'johndoe@example.com',
    age: 30,
    phone: '123-456-7890',
    access: 'manager',
    riderName: 'Jane Smith',
    orderLocation: 'New York',
    orderDate: '2023-07-10',
    riderNumber: '987-654-3210',
    goodCategory: 'Electronics',
  },
  // Add more data entries here
  // ...
 
];

// Generate 70 random data entries
for (let i = 2; i <= 70; i++) {
  const randomData2 = {
    id: i,
    date: getRandomDate2(),
    status: getRandomStatus2(),
    name: getRandomName2(),
    email: getRandomEmail2(),
    age: getRandomAge2(),
    phone: getRandomPhone2(),
    access: getRandomAccess2(),
    riderName: getRandomRiderName2(),
    orderLocation: getRandomOrderLocation2(),
    orderDate: getRandomOrderDate2(),
    riderNumber: getRandomRiderNumber2(),
    goodCategory: getRandomGoodCategory2(),
  };
  data2.push(randomData2);
}

// Helper functions to generate random values

function getRandomDate2() {
  const startDate = new Date(2022, 0, 1);
  const endDate = new Date();
  const randomTimestamp = startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime());
  return new Date(randomTimestamp).toISOString().split('T')[0];
}

function getRandomStatus2() {
  const statuses = ['Resolved', 'Unresolved'];
  return statuses[Math.floor(Math.random() * statuses.length)];
}

function getRandomName2() {
  const names = ['John', 'Alice', 'Bob', 'Emma', 'Michael'];
  const surnames = ['Doe', 'Johnson', 'Smith', 'Brown', 'Wilson'];
  const randomName = names[Math.floor(Math.random() * names.length)];
  const randomSurname = surnames[Math.floor(Math.random() * surnames.length)];
  return `${randomName} ${randomSurname}`;
}

function getRandomEmail2() {
  const providers = ['gmail', 'yahoo', 'hotmail', 'outlook'];
  const randomProvider = providers[Math.floor(Math.random() * providers.length)];
  const randomDomain = '.com';
  const randomString = Math.random().toString(36).substring(2, 8);
  return `${randomString}@${randomProvider}${randomDomain}`;
}

function getRandomAge2() {
  return Math.floor(Math.random() * 50) + 20;
}

function getRandomPhone2() {
  const randomDigits = Math.floor(100000000 + Math.random() * 900000000).toString();
  const formattedNumber = `${randomDigits.substring(0, 3)}-${randomDigits.substring(3, 6)}-${randomDigits.substring(6)}`;
  return formattedNumber;
}

function getRandomAccess2() {
  const accessLevels = ['manager', 'user', 'admin'];
  return accessLevels[Math.floor(Math.random() * accessLevels.length)];
}

function getRandomRiderName2() {
  const riderNames = ['Jane Smith', 'David Johnson', 'Emily Brown', 'William Wilson', 'Sophia Davis'];
  return riderNames[Math.floor(Math.random() * riderNames.length)];
}

function getRandomOrderLocation2() {
  const locations = ['New York', 'Los Angeles', 'Chicago', 'Houston', 'San Francisco'];
  return locations[Math.floor(Math.random() * locations.length)];
}

function getRandomOrderDate2() {
  const startDate = new Date(2022, 0, 1);
  const endDate = new Date();
  const randomTimestamp = startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime());
  return new Date(randomTimestamp).toISOString().split('T')[0];
}

function getRandomRiderNumber2() {
  const randomDigits = Math.floor(100000000 + Math.random() * 900000000).toString();
  const formattedNumber = `${randomDigits.substring(0, 3)}-${randomDigits.substring(3, 6)}-${randomDigits.substring(6)}`;
  return formattedNumber;
}

function getRandomGoodCategory2() {
  const categories = ['Electronics', 'Clothing', 'Books', 'Home & Kitchen', 'Sports'];
  return categories[Math.floor(Math.random() * categories.length)];
}






export const data3 = [
  
  // Add more data entries here
  // ...
 
];

// Generate 70 random data entries
for (let i = 2; i <= 70; i++) {
  const randomData3 = {
    id: i,
    promo: getRandomPromo(),
    discount: getRandomDiscount(),
    status: getRandomStatus3(),
    activate: getRandomActive(),
    
  };
  data3.push(randomData3);
}

// Helper functions to generate random values

function getRandomPromo() {
  const statuses = ['Discount for New Users', 'RAVFEST', 'BATTLERAP', 'kINGFEST'];
  return statuses[Math.floor(Math.random() * statuses.length)];
}

function getRandomActive() {
  return Math.random() < 0.5; // 50% chance of getting true, 50% chance of getting false
}



function getRandomDiscount() {
  const providers = [10, 20, 30, 40,50];
  const randomProvider = providers[Math.floor(Math.random() * providers.length)];
  const randomDomain = '.%';
  return `${randomProvider}${randomDomain}`;
}



function getRandomStatus3() {
  const accessLevels = ['active', 'inactive'];
  return accessLevels[Math.floor(Math.random() * accessLevels.length)];
}





export const staff = [
  
  // Add more data entries here
  // ...
  
];

// Generate 70 random data entries
for (let i = 1; i <= 70; i++) {
  const randomData4 = {
    id: i,
    status: getRandomStatus4(),
    name: getRandomName4(),
    email: getRandomEmail4(),
    phone: getRandomPhone4(),
    
  };
  staff.push(randomData4);
}

// Helper functions to generate random values


function getRandomStatus4() {
  const statuses = ['programmer', 'Customer support', "agba cook"];
  return statuses[Math.floor(Math.random() * statuses.length)];
}

function getRandomName4() {
  const names = ['John', 'Alice', 'Bob', 'Emma', 'Michael'];
  const surnames = ['Doe', 'Johnson', 'Smith', 'Brown', 'Wilson'];
  const randomName = names[Math.floor(Math.random() * names.length)];
  const randomSurname = surnames[Math.floor(Math.random() * surnames.length)];
  return `${randomName} ${randomSurname}`;
}

function getRandomEmail4() {
  const providers = ['gmail', 'yahoo', 'hotmail', 'outlook'];
  const randomProvider = providers[Math.floor(Math.random() * providers.length)];
  const randomDomain = '.com';
  const randomString = Math.random().toString(36).substring(2, 8);
  return `${randomString}@${randomProvider}${randomDomain}`;
}


function getRandomPhone4() {
  const randomDigits = Math.floor(100000000 + Math.random() * 900000000).toString();
  const formattedNumber = `${randomDigits.substring(0, 3)}-${randomDigits.substring(3, 6)}-${randomDigits.substring(6)}`;
  return formattedNumber;
}


export const message = [
  {
    type: 'message',
    content: [
      {
        sender: 'John',
        message:
          'Hey there! How have you been? It has been a while since we last talked. I hope everything is going well with you. Anything new and exciting happening in your life?',
      },
      {
        sender: 'You',
        message:
          'Hello! Yes, it has been a bit busy, but things are good overall. I recently started a new project at work, which is pretty exciting. How about you?',
      },
      {
        sender: 'John',
        message:
          "That sounds great! I've been working on a personal project in my free time. It's a web application using Next.js and Tailwind CSS. I find it quite enjoyable to learn new technologies.",
      },
      // Add more messages to create a longer conversation...
      {
        sender: 'You',
        message:
          "That's awesome! Next.js and Tailwind CSS are great choices. It's always fun to work on side projects and learn new things. Let me know if you need any help with it!",
      },
    ],
  },
  {
    type: 'message',
    content: [
      {
        sender: 'Jane',
        message:
          'Hi! I heard you are going on a vacation next month. Is it true? If yes, have you decided on the destination?',
      },
      {
        sender: 'You',
        message:
          'Hello, Jane! Yes, I am planning a vacation with my family. We are thinking of visiting the mountains and spending some time in nature. It will be a nice break from the routine!',
      },
      {
        sender: 'Jane',
        message:
          'That sounds wonderful! The mountains are so beautiful and relaxing. I hope you have a fantastic time with your family. Enjoy!',
      },
      // Add more messages to create a longer conversation...
      {
        sender: 'You',
        message:
          'Thank you, Jane! I am really looking forward to it. We\'ll make sure to take lots of pictures and share them with you when we get back!',
      },
    ],
  },

];

export const transactions = [
  {
    type: "payment",
    name: "Deposit",
    date: "Sept 4, 2023",
    amount:"+₦5,000"
  },
  {
    type: "delivery",
    name: "Laptop delivery to Ikorodu",
    date: "Sept 4, 2023",
    amount: "+₦3,000"
  },
  {
    type: "delivery",
    name: "Document delivery to Ikorodu",
    date: "Sept 4, 2023",
    amount: "+₦3,000"
  },
  {
    type: "payment",
    name: "Deposit",
    date: "Sept 4, 2023",
    amount:"+₦5,000"
  },
  {
    type: "delivery",
    name: "Laptop delivery to Ikorodu",
    date: "Sept 4, 2023",
    amount: "+₦3,000"
  },
  {
    type: "delivery",
    name: "Document delivery to Ikorodu",
    date: "Sept 4, 2023",
    amount: "+₦3,000"
  },
]