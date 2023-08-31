const Register = () => {
  return (
    <div className="bg-white text-blue-600 p-5 rounded-lg max-w-[90%] w-[500px] shadow-lg">
      <h1 className="text-2xl font-bold mb-5">Chat App Signup</h1>
      <form className="flex flex-col">
        <label className="mb-3">Name</label>
        <input
          className="border border-gray-400 p-2 rounded-lg mb-3"
          type="text"
          placeholder="your name"
        />
        <label className="mb-3">Email</label>
        <input
          className="border border-gray-400 p-2 rounded-lg mb-3"
          type="email"
          placeholder="your email"
        />
        <label className="mb-3">Password</label>
        <input
          className="border border-gray-400 p-2 rounded-lg mb-3"
          type="password"
          placeholder="your password"
        />
        <button className="bg-blue-600 text-white py-2 rounded-lg">
          Signup
        </button>
      </form>

      <p className="mt-5 text-center">
        Already have an account?{" "}
        <a href="#" className="text-blue-600 font-bold">
          Login
        </a>
      </p>
    </div>
  );
};

export default Register;
