import React, { useState } from 'react';
import { Dialog, DialogTitle, InputAdornment, TextField, Stack, List } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import UserItem from '../src/shared/UserItem';
import { sampleUsers } from '../constants/sampleData';

const Search = () => {
  // State to handle the user list and search input
  const [users, setUsers] = useState(sampleUsers);
  const [search, setSearch] = useState(""); // For search input

  // Function to handle search input change
  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  // Filter users based on search input
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  const addFriendHandler = (id) => {
    console.log(id);
  };

  const isLoadingSendFriendRequest = false;

  return (
    <Dialog open>
      <Stack p={"2rem"} direction={"column"} width={"25rem"}>
        <DialogTitle textAlign={"center"}>Find people</DialogTitle>

        {/* Search input field */}
        <TextField
          label="Search"
          value={search}
          onChange={handleSearchChange}
          variant={"outlined"}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />

        {/* User list */}
        <List>
          {filteredUsers.map((user) => (
            <UserItem
              user={user}
              key={user._id}
              handler={addFriendHandler}
              handlerIsLoading={isLoadingSendFriendRequest}
            />
          ))}
        </List>
      </Stack>
    </Dialog>
  );
};

export default Search;
