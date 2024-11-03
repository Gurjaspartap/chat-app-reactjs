import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProtectRoute from './components/auth/ProtectRoute';
import { LayoutLoader } from './components/layout/Loaders';
import Dashboard from './pages/admin/Dashboard';
const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/Login"));
const Chat = lazy(() => import("./pages/Chat"));
const Groups = lazy(() => import("./pages/Groups"));
const NotFound = lazy(() => import("./pages/NotFound"));
const AdminLogin = lazy(() => import("./pages/admin/AdminLogin"))
const UserManagement = lazy(() => import("./pages/admin/UserManagement"))
const MessageManagement = lazy(() => import("./pages/admin/MessageManagement"))
const ChatManagement = lazy(() => import("./pages/admin/ChatManagement"))
let user = true;

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<LayoutLoader />}>
        <Routes>
          <Route element={<ProtectRoute user={user} />} >
            <Route path='/' element={<ProtectRoute user={user} > <Home /></ProtectRoute>} />
            <Route path='/chat' element={<Chat />} />
            <Route path='/chat/:chatId' element={<Chat />} />

            <Route path="/groups" element={<Groups />} />
          </Route>
          <Route element={<ProtectRoute user={!user} />} >
            <Route path='/login' element={<Login />} />
          </Route>
          <Route path='/admin' element={<AdminLogin />} />
          <Route path='/admin/dashboard' element={<Dashboard />} />
          <Route path='/admin/user-management' element={<UserManagement />} />
          <Route path='/admin/message-management' element={<MessageManagement />} />
          <Route path='/admin/chats-management' element={<ChatManagement />} />
          <Route path="*" element={<NotFound />} />
        </Routes></Suspense>
    </BrowserRouter>)
}

export default App