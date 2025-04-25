"use client";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const router = useRouter();
  const [credentials, setCredentials] = useState({
    username: "",
    password: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your authentication logic here
    // For now, we'll redirect directly
    router.push("/dashboard");
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCredentials(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="relative min-h-screen">
      {/* Full-screen background image */}
      <div className="fixed inset-0 z-0">
        <Image
          src="/dairy-background.jpg"
          alt="Dairy farm background"
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay for better text contrast */}
        <div className="absolute inset-0 bg-black opacity-30"></div>
      </div>

      {/* Login form overlay */}
      <div className="relative z-12 min-h-screen flex items-center justify-center p-16">
        <div className="w-full max-w-md bg-white bg-opacity-90 backdrop-blur-sm rounded-xl shadow-2xl p-8">
          {/* PRO DAIRY Logo/Header */}
          <h1 className="text-3xl font-bold text-center mb-8" style={{ color: '#7A4B3A' }}>
            PRO DAIRY
          </h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Username */}
            <div>
              <label htmlFor="username" className="block text-sm font-medium mb-2" style={{ color: '#4A4A4A' }}>
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={credentials.username}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2"
                style={{
                  backgroundColor: '#F9F9F9',
                  borderColor: '#D8C5A4',
                  color: '#4A4A4A'
                }}
                placeholder="Enter your username"
                required
              />
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium mb-2" style={{ color: '#4A4A4A' }}>
                Password
              </label>
              <div className="relative">
                <input
                  type={passwordVisible ? "text" : "password"}
                  id="password"
                  name="password"
                  value={credentials.password}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2"
                  style={{
                    backgroundColor: '#F9F9F9',
                    borderColor: '#D8C5A4',
                    color: '#4A4A4A'
                  }}
                  placeholder="Enter your password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setPasswordVisible(!passwordVisible)}
                  className="absolute right-3 top-3 text-sm"
                  style={{ color: '#7A4B3A' }}
                >
                  {passwordVisible ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full py-3 font-semibold rounded-lg transition duration-200 mt-6 shadow-md hover:shadow-lg"
              style={{
                backgroundColor: '#76B041',
                color: 'white'
              }}
            >
              LOGIN
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
