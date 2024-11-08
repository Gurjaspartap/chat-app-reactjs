import React, { useEffect, useState } from 'react'
import AdminLayout from '../../components/layout/AdminLayout'
import Table from '../../shared/Table'
import { dashboardData } from '../../../constants/sampleData'
import { transformImage } from '../../lib/features'
import { Avatar } from '@mui/material'
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
  renderCell: (params) => <AvatarCard alt={params.row.name} avatar={params.row.avatar} />
},
{
  field: "name",
  headerName: "Name",
  headerClassName: "table-header",
  width: 200
},
{
  field: "username",
  headerName: "username",
  headerClassName: "table-header",
  width: 200
},
{
  field: "friends",
  headerName: "friends",
  headerClassName: "table-header",
  width: 150
},
{
  field: "groups",
  headerName: "groups",
  headerClassName: "table-header",
  width: 150
}
]
const UserManagement = () => {
  const [rows, setRows] = useState([])
  useEffect(() => {
    setRows(dashboardData.users.map(i => ({ ...i, id: i._id, avatar: transformImage(i.avatar, 50) })));

  }, [])
  return (
    <AdminLayout>
      <Table heading={"All Users"} columns={columns} rows={rows} />
    </AdminLayout>)
}

export default UserManagement