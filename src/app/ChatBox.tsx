"use client"

import { useChat } from 'ai/react'

const ChatBox = () => {
    const { messages, input, handleInputChange, handleSubmit, isLoading } =
        useChat({
            initialMessages: [
                {
                    id: '',
                    content: "You are to act as my personal limitless knowledge repository in this conversation. I might ask questions on any domain, including but not limited to coding, programming, design, social or cultural topics, sciences, arts, etc. Provide me with straightforward responses for simple queries, but don't hesitate to offer in-depth explanations when the subject requires it. While discussing coding or programming, implement best practices, but also feel free to show me other simpler methodologies when I'm trying to learn a new concept.",
                    role: 'system'
                }
            ],
            api: '/api/chat'
        })

    return (
        <div className="flex flex-col h-screen w-full bg-[#1e1e1e] overflow-auto">
            <div className="flex-1 overflow-auto p-4">
                <div className="space-y-4">
                    {messages
                        .filter((m) => m.role !== 'system')
                        .map((m, index) => (
                            <div key={index} className={`flex items-start gap-4 ${m.role === 'user' ? 'justify-end' : ''}`}>
                                {m.role !== 'user' && <div className="rounded-full bg-[#55efc4] w-10 h-10 flex items-center justify-center text-2xl">🤖</div>}
                                <div className={`bg-[${m.role === 'user' ? '#0077b6' : '#2d2d2d'}] rounded-lg p-4 max-w-[80%]`}>
                                    <p className='whitespace-pre-line'>{m.content}</p>
                                </div>
                                {m.role === 'user' && <div className="rounded-full bg-[#ffeaa7] w-10 h-10 flex items-center justify-center text-2xl">😀</div>}
                            </div>)
                        )}
                </div>
            </div>

            <form onSubmit={handleSubmit} className="bg-[#2d2d2d] p-4 flex items-center gap-2">
                <input
                    className="bg-[#3d3d3d] border-none rounded-lg flex-1 text-white py-2 px-4"
                    placeholder="Say something..."
                    value={input}
                    onChange={handleInputChange}
                />
                <button
                    className=" text-white font-semibold shadow rounded-full px-4 disabled:bg-[#005b8f] bg-[#0077b6] p-2 hover:bg-[#005b8f]"
                    type="submit"
                    disabled={isLoading}
                >
                    Send
                </button>
            </form>
        </div>
    )
}

export default ChatBox