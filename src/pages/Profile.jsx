import "./Profile.css";
import Navbar from "../components/Navbar";
import { useUser } from "./useUser";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUpdateUser } from "./useUpdateUser";

export default function Profile() {
  const { user, isAuth, isLoadingUser } = useUser();
  const navigate = useNavigate();
  const { updateUser, isUpdating } = useUpdateUser();

  useEffect(() => {
    if (!isAuth && !isLoadingUser) navigate("/sign-in");
  }, [isAuth, navigate, isLoadingUser]);

  function handleFullName(e) {
    if (!e.target.value) return;
    updateUser({ fullName: e.target.value });
  }

  function handlePassword(e) {
    if (!e.target.value) return;
    updateUser({ password: e.target.value });
  }

  return (
    <main className="profile">
      <Navbar />
      <div className="profile__body">
        <h2>My Profile</h2>
        <div>
          <div className="info">
            <div className="full__name">
              <label>Full Name:</label>
              <input
                type="text"
                defaultValue={user?.user_metadata.fullName}
                onBlur={handleFullName}
              />
            </div>
            <div className="email">
              <label>Email:</label>
              <input type="email" disabled defaultValue={user?.email} />
            </div>
            <div className="password">
              <label>New Password:</label>
              <input type="text" onBlur={handlePassword} />
            </div>
          </div>
          <div className="plan"></div>
        </div>
      </div>
      <div className="profile__gradient" />
    </main>
  );
}
