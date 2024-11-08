import React, { useState } from 'react'
import AdminLayout from '../../components/layout/AdminLayout'
import Table from '../../shared/Table';

const columns = [{
  field: "id",
  headerName: "ID",
  headerClassName: "table-header",
  width: 200
},
{
  field: "attachment",
  headerName: "attachment",
  headerClassName: "table-header",
  width: 200,
  renderCell: (params) => <Avatar alt={params.row.name} src={params.row.avatar} />
},
{
  field: "content",
  headerName: "content",
  headerClassName: "table-header",
  width: 400
},
{
  field: "sender",
  headerName: "Sent by",
  headerClassName: "table-header",
  width: 200,
  renderCell: (params) => (
    <Stack>
      <Avatar alt={params.row.sender.name} src={params.row.sender.avatar} />
      <span>{params.row.sender.name}</span>
    </Stack>
  )
},
{
  field: "chat",
  headerName: "chat",
  headerClassName: "table-header",
  width: 220
},
{
  field: "groupChat",
  headerName: "Group chat",
  headerClassName: "table-header",
  width: 150
},
{
  field: "createdAt",
  headerName: "Time",
  headerClassName: "table-header",
  width: 250
}
]
const MessageManagement = () => {
  const [rows, setRows] = useState([]);
  return (
    <AdminLayout>
      <Table heading={"All Messages"} columns={columns} rows={rows} />
    </AdminLayout>
  )
}

export default MessageManagement