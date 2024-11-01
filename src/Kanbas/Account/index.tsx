import { useSelector } from "react-redux";
import { Routes, Route, Navigate } from "react-router";
import AccountNavigation from "./Navigation";
import Signin from "./Signin";
import Profile from "./Profile";
import Signup from "./Signup";

export default function Account() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
    return (
      <div id="wd-account-screen">
        <h2>Account</h2>
        <table>
          <tr>
            <td valign="top">
              <AccountNavigation />
            </td>
            <td valign="top">
            <div className="flex-fill">
              <Routes>
                <Route path="/"
                       element={<Navigate to= {currentUser ? "/Kanbas/Account/Profile" : "/Kanbas/Account/Signin"  }/>} />
                <Route path="/Signin" element={<Signin />} />
                <Route path="/Profile" element={<Profile />} />
                <Route path="/Signup" element={<Signup />} />
              </Routes>
              </div>
            </td>
          </tr>
        </table>
      </div>
  );}
  