"use client "
import React from 'react';



export default function Quiz({ params }: {
  params: { quiz: string }
}) {

    return (
        <main className="px-4 bg-gradient-to-b from-amber-100 to-amber-500 min-h-screen flex items-center flex-col">
            <br />
            <div className='text-black text-3xl text-center'>{params.quiz}</div>
        </main>
    );
}