import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import SamplePage from "./SamplePage";

function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    if (!email || !password) {
      setMessage("Please enter your email and password");
    } else {
      navigate("/sample");
    }
  };

  return (
    <div className="login-page">

      <div className="circle circle-one"></div>
      <div className="circle circle-two"></div>

      <div className="login-card">

        <div className="logo">
          ✦
        </div>

        <h1>Welcome Back</h1>

        <p className="subtitle">
          Sign in to continue to your account
        </p>

        <form onSubmit={handleLogin}>

          <label>Email Address</label>

          <input
            type="email"
            name="email"
            placeholder="Enter your email"
          />

          <label>Password</label>

          <div className="password-box">

            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Enter your password"
            />

            <span
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "🙈" : "👁"}
            </span>

          </div>

          <div className="options">

            <label className="remember">
              <input type="checkbox" />
              <span>Remember me</span>
            </label>

            <a href="#">Forgot Password?</a>

          </div>

          <button type="submit">
            Sign In →
          </button>

          {message && (
            <p className="message">{message}</p>
          )}

        </form>

        <div className="divider">
          <span></span>
          <p>OR</p>
          <span></span>
        </div>

        <p className="signup">
          Don't have an account?{" "}
          <a href="#">Create Account</a>
        </p>

      </div>
    </div>
  );
}

function App() {
  return (
    <Routes>

      <Route path="/" element={<LoginPage />} />

      <Route path="/login" element={<LoginPage />} />

      <Route path="/sample" element={<SamplePage />} />

    </Routes>
  );
}

export default App;