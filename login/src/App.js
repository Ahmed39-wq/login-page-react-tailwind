import Form from "./components/Form"

function App() {
  return (
    <div className="flex w-full h-screen bg-[#f1f1f1]">
      <div className="w-full flex items-center justify-center lg:w-1/2">
        <Form />
      </div>
      <div className="bg-gray-200 hidden lg:flex h-full w-1/2 items-center justify-center relative">
        <div className="w-60 h-60 bg-gradient-to-tr  from-violet-500 to-pink-500 rounded-full animate-bounce"></div>
        <div className="w-full h-1/2 bg-white/10 backdrop-blur-lg absolute bottom-0"></div>        
      </div>
    </div>
  );
}

export default App;
