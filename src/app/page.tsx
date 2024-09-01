import ChatBox from "./ChatBox";

export default function Home() {
  return (
    <main className="flex flex-col h-screen w-full bg-[#1e1e1e] text-white">
      <header className="bg-[#2d2d2d] p-4 flex justify-center items-center">
        <h1 className="text-xl font-bold">AskBuddy 🤖</h1>
      </header>
      <ChatBox />
    </main>
  );
}
