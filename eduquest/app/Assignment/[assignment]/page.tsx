import React from 'react';



export default function Assignment({ params }: {
  params: { assignment: string }
}) {

    return (
        <main className="px-4 bg-gradient-to-b from-amber-100 to-amber-500 min-h-screen flex items-center flex-col">
            <br />
            <div className='text-black text-3xl text-center'>{params.assignment}</div>
        </main>
    );
}
