import React from 'react'

const DiscussionForm = () => {
    const data = [
        {
            id: 1,
            name: "Lorem ipsum",
            time: "2 min ago",
            text: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum is",
            reactions: [
                { icon: '/assets/heart.png', count: '2k' },
                { icon: '/assets/privacyicon.png', count: '2k' },
                { icon: '/assets/message.png', count: '2k Comments' },
                { icon: '/assets/share.webp', count: 'Share' }
            ]
        },
        {
            id: 2,
            name: "Lorem ipsum",
            time: "2 min ago",
            text: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum is",
            reactions: [
                { icon: '/assets/heart.png', count: '2k' },
                { icon: '/assets/privacyicon.png', count: '2k' },
                { icon: '/assets/message.png', count: '2k Comments' },
                { icon: '/assets/share.webp', count: 'Share' }
            ]
        },
        {
            id: 3,
            name: "Lorem ipsum",
            time: "2 min ago",
            text: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum is",
            reactions: [
                { icon: '/assets/heart.png', count: '2k' },
                { icon: '/assets/privacyicon.png', count: '2k' },
                { icon: '/assets/message.png', count: '2k Comments' },
                { icon: '/assets/share.webp', count: 'Share' }
            ]
        },
        {
            id: 4,
            name: "Lorem ipsum",
            time: "2 min ago",
            text: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum is",
            reactions: [
                { icon: '/assets/heart.png', count: '2k' },
                { icon: '/assets/privacyicon.png', count: '2k' },
                { icon: '/assets/message.png', count: '2k Comments' },
                { icon: '/assets/share.webp', count: 'Share' }
            ]
        },
    ];
    
    return (
        <div>
        <h1 className='text-red-400 lg:block hidden text-[40px]  font-bold opacity-60 border-2 bg-gray-200 p-2 mb-4'>DSCUSSION FOURM</h1>
            {data.map((item) => (
                <Post key={item.id} data={item} />
            ))}
        </div>
    );
}
function Post({ data }) {
    return (
        <div className=' border-2 lg:m-2 lg:px-10 lg:py-4 py-2 rounded-lg shadow-md pb-8 mb-10'>
            <div className='flex justify-between items-center'>
                <div className='flex justify-between items-center gap-x-2'>
                    <img src='/assets/contact.png' className='rounded-[50%] lg:h-8 h-6 w-6 lg:w-8' />
                    <p className='font-medium text-[10px] lg:text-[18px]'>{data.name}</p>
                    <button className='border-2 lg:ml-4 border-blue-700 outline-none bg-blue-700 text-white rounded-[20px] lg:px-4 px-2 text-[8px] lg:text-[15px]'>Sector 2</button>
                </div>
                <h1 className='text-blue-400 text-[8px] lg:text-[15px]'>{data.time}</h1>
            </div>
            <p className='lg:px-[38px] px-[30px] pb-4 font-medium text-[10px] lg:text-[18px] lg:w-[500px]'>{data.text}</p>
            <div className='flex justify-between items-center lg:px-[38px] px-[30px]'>
                {data.reactions.map((reaction, index) => (
                    <div key={index} className='flex justify-center items-center gap-x-2'>
                        <img src={reaction.icon} className='lg:w-4 w-2 lg:h-4 h-2' />
                        <span className='lg:text-[16px] text-[8px] '>{reaction.count}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}


export default DiscussionForm
