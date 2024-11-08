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
export const sampleMessage = [
  {
    attachment: [
      {
        public_id: "asdfdsaa",
        url: "https://www.w3schools.com/howto/img_avatar.png",
      },
    ],
    content: "lol",
    _id: "dsdsdsds",
    sender: {
      _id: "user._id",
      name: "chairman",
    },
    chat: "chatId",
    createdAt: "2024-02-12T10:41:30.630Z",
  },
  {
    attachment: [
      {
        public_id: "asdfdsaa",
        url: "https://www.w3schools.com/howto/img_avatar.png",
      },
    ],
    content: "lol2",
    _id: "dsdsdsd",
    sender: {
      _id: "dsdsdsd",
      name: "chairman",
    },
    chat: "chatId",
    createdAt: "2024-10-26T07:00:00Z",
  },
];
export const dashboardData = {
  users: [
    {
      name: "Alice Johnson",
      avatar: ["https://example.com/avatar2.jpg"],
      _id: "1",
      username: "alice",
      friends: 20,
      groups: 5,
    },
    {
      name: "Bob Smith",
      avatar: ["https://example.com/avatar3.jpg"],
      _id: "2",
      username: "bob",
      friends: 15,
      groups: 3,
    },
    {
      name: "Carol Williams",
      avatar: ["https://example.com/avatar4.jpg"],
      _id: "3",
      username: "carol",
      friends: 25,
      groups: 8,
    },
    {
      name: "David Brown",
      avatar: ["https://example.com/avatar5.jpg"],
      _id: "4",
      username: "david",
      friends: 30,
      groups: 10,
    },
    {
      name: "Emma Davis",
      avatar: ["https://example.com/avatar6.jpg"],
      _id: "5",
      username: "emma",
      friends: 12,
      groups: 4,
    },
  ],
  chats: [
    {
      name: "Hannah Montana",
      _id: "chat8",
      groupChat: false,
      members: ["1", "2", "3"],
      totalMembers: 3,
      totalMessages: 10,
      creator: {
        name: "chairman",
        avatar:
          "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250",
      },
    },
    {
      name: "Study Group",
      _id: "chat9",
      groupChat: true,
      members: ["4", "5", "6", "7"],
      totalMembers: 4,
      totalMessages: 25,
      creator: {
        name: "professor",
        avatar:
          "https://www.gravatar.com/avatar/1d91f95de92fd5ed308daebf846b04bd?s=250",
      },
    },
    {
      name: "Office Chat",
      _id: "chat10",
      groupChat: false,
      members: ["8", "9"],
      totalMembers: 2,
      totalMessages: 15,
      creator: {
        name: "manager",
        avatar:
          "https://www.gravatar.com/avatar/3b0c284e7ffec5e7ed68d5d730a4db65?s=250",
      },
    },
    {
      name: "Family Chat",
      _id: "chat11",
      groupChat: true,
      members: ["10", "11", "12", "13"],
      totalMembers: 4,
      totalMessages: 30,
      creator: {
        name: "mom",
        avatar:
          "https://www.gravatar.com/avatar/5f4c1f8f79a30f2c8c1b6b3dff4b0f27?s=250",
      },
    },
    {
      name: "Friends Group",
      _id: "chat12",
      groupChat: true,
      members: [{ _id: "14", avatar: "" }, "15", "16"],
      totalMembers: 3,
      totalMessages: 20,
      creator: {
        name: "bestie",
        avatar:
          "https://www.gravatar.com/avatar/4e5ef96bf97e2915b41b0c9188165b8d?s=250",
      },
    },
  ],
};
