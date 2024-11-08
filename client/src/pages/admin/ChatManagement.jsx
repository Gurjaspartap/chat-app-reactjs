import React, { useEffect, useState } from 'react'
import AdminLayout from '../../components/layout/AdminLayout'
import Table from '../../shared/Table'
import { dashboardData } from '../../../constants/sampleData'
import { transformImage } from '../../lib/features'
import { Avatar, Stack } from '@mui/material'
import AvatarCard from '../../shared/AvatarCard'
const columns = [{
  field: "id",
  headerName: "ID",
  headerClassName: "table-header",
  width: 200
},
{
  field: "avatar",
  headerName: "Avatar",
  headerClassName: "table-header",
  width: 150,
  renderCell: (params) => <Avatar alt={params.row.name} src={params.row.avatar} />
},
{
  field: "name",
  headerName: "Name",
  headerClassName: "table-header",
  width: 300
},
{
  field: "totalMembers",
  headerName: "totalMembers",
  headerClassName: "table-header",
  width: 200
},
{
  field: "members",
  headerName: "members",
  headerClassName: "table-header",
  width: 400,
  renderCell: (params) => <AvatarCard max={100} avatar={params.row.members} />
},
{
  field: "totalMessages",
  headerName: "totalMessages",
  headerClassName: "table-header",
  width: 120
},
{
  field: "creator",
  headerName: "Created By",
  headerClassName: "table-header",
  width: 250,
  renderCell: (params) => (<Stack direction={"row"} spacing={2} alignItems={"center"}>
    <Avatar alt={params.row.creator.name} src={params.row.creator.avatar} />
    <span>{params.row.creator.name}</span>
  </Stack>)
}
]
const ChatManagement = () => {
  const [rows, setRows] = useState([])
  useEffect(() => {
    setRows(dashboardData.chats.map(i => ({ ...i, id: i._id, avatar: transformImage(i.creator.avatar, 50) })));

  }, [])
  return (
    <AdminLayout>
      <Table heading={"All Chats"} columns={columns} rows={rows} />
    </AdminLayout>)
}

export default ChatManagement