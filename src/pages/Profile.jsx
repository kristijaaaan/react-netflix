import "./Profile.css";
import Navbar from "../components/Navbar";
import { useUser } from "./useUser";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUpdateUser } from "./useUpdateUser";

export default function Profile() {
  const { user, isAuth, isLoadingUser } = useUser();
  const navigate = useNavigate();
  const { updateUser, isUpdating } = useUpdateUser();
  const [avatar, setAvatar] = useState(null);

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

  function handleImage(e) {
    e.preventDefault();

    if (!avatar) return;

    updateUser({ avatar });
  }

  return (
    <main className="profile">
      <Navbar />
      <div className="profile__body">
        <h2>MY PROFILE</h2>
        <div className="profile__body-container">
          <div className="info">
            <h3>Update your account</h3>
            <div className="full__name">
              <label>Full Name:</label>
              <input
                type="text"
                defaultValue={user?.user_metadata.fullName || user?.email}
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
          <div className="plan">
            <img
              src={
                user?.user_metadata.avatar
                  ? user.user_metadata.avatar
                  : "default-user.jpg"
              }
              alt="Users avatar"
            />
            <div>
              <h1>{user?.user_metadata.fullName || user?.email}</h1>
              <h3>
                <span>STANDARD</span> user
              </h3>
              <form onSubmit={handleImage}>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => setAvatar(e.target.files[0])}
                />
                <button>Upload avatar</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="profile__gradient" />
    </main>
  );
}
