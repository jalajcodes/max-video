import GoogleAuth from "./GoogleAuth";

function SidebarAuth() {
  return (
    <div style={{ padding: "1rem 2rem" }}>
      <p>Sign in to like videos, comment, and subscribe.</p>
      <br />
      <GoogleAuth />
    </div>
  );
}

export default SidebarAuth;
