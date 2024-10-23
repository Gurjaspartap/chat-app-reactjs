// sampleChats.js

const sampleChats = [
  {
    avatar: [
      "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250",
    ],
    name: "Alice Johnson",
    _id: "1",
    groupChat: false,
    sameSender: false,
    isOnline: true,
    newMessageAlert: false,
    index: 0,
  },
  {
    avatar: ["https://example.com/avatar2.jpg"],
    name: "Bob Smith",
    _id: "chat2",
    groupChat: false,
    sameSender: false,
    isOnline: false,
    newMessageAlert: false,
    index: 1,
  },
  {
    avatar: ["https://example.com/avatar3.jpg"],
    name: "Charlie Brown",
    _id: "chat3",
    groupChat: false,
    sameSender: true,
    isOnline: true,
    newMessageAlert: true,
    index: 2,
  },
  {
    avatar: ["https://example.com/avatar4.jpg"],
    name: "Diana Prince",
    _id: "chat4",
    groupChat: false,
    sameSender: false,
    isOnline: true,
    newMessageAlert: false,
    index: 3,
  },
  {
    avatar: ["https://example.com/avatar5.jpg"],
    name: "Ethan Hunt",
    _id: "chat5",
    groupChat: true,
    sameSender: false,
    isOnline: true,
    newMessageAlert: true,
    index: 4,
  },
  {
    avatar: ["https://example.com/avatar6.jpg"],
    name: "Fiona Gallagher",
    _id: "chat6",
    groupChat: false,
    sameSender: false,
    isOnline: false,
    newMessageAlert: true,
    index: 5,
  },
  {
    avatar: ["https://example.com/avatar7.jpg"],
    name: "George Clooney",
    _id: "chat7",
    groupChat: true,
    sameSender: true,
    isOnline: true,
    newMessageAlert: false,
    index: 6,
  },
  {
    avatar: ["https://example.com/avatar8.jpg"],
    name: "Hannah Montana",
    _id: "chat8",
    groupChat: false,
    sameSender: false,
    isOnline: false,
    newMessageAlert: true,
    index: 7,
  },
  {
    avatar: ["https://example.com/avatar9.jpg"],
    name: "Ian Malcolm",
    _id: "chat9",
    groupChat: true,
    sameSender: false,
    isOnline: true,
    newMessageAlert: false,
    index: 8,
  },
  {
    avatar: ["https://example.com/avatar10.jpg"],
    name: "Jessica Jones",
    _id: "chat10",
    groupChat: false,
    sameSender: false,
    isOnline: true,
    newMessageAlert: true,
    index: 9,
  },
];

export default sampleChats;

export const sampleUsers = [
  {
    avatar: [
      "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250",
    ],
    name: "Alice Johnson",
    _id: "1",
  },
  {
    avatar: ["https://example.com/avatar2.jpg"],
    name: "Bob Smith",
    _id: "2",
  },
  {
    avatar: ["https://example.com/avatar3.jpg"],
    name: "Charlie Brown",
    _id: "3",
  },
  {
    avatar: ["https://example.com/avatar4.jpg"],
    name: "Diana Prince",
    _id: "4",
  },
];
export const sampleNotifications = [
  {
    sender: {
      avatar: "https://example.com/avatar2.jpg",
      name: "John Doe",
    },
    _id: "1",
  },
  {
    sender: {
      avatar: "https://example.com/avatar3.jpg",
      name: "Jane Smith",
    },
    _id: "2",
  },
];
