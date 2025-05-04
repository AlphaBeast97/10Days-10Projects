import React from 'react'

const Form = () => {

    const PrevDefault = (event) => {
        event.preventDefault();
        console.log(event.target[0]);
        console.log(event.target[1]);
        console.log(event.target[2]);
    }

  return (
    <div className='flex ml-30 mr-30 justify-between'>
        <form onSubmit={PrevDefault} className='flex flex-col mt-20' action="">
            <div className='flex gap-15 justify-between'>
                <button type="button" className='flex transition-all hover:opacity-70 gap-2 justify-center items-center rounded-lg bg-black text-white font-medium border-2 h-13 w-60'>
                    <img className='w-6 h-6 mt-1' src="./ic_outline-message.svg" alt="" />
                    VIA SUPPORT CHAT
                </button>
                <button type="button" className='flex gap-2 justify-center transition-all hover:opacity-70 items-center rounded-lg bg-black text-white font-medium border-2 h-13 w-60'>
                    <img className='w-6 h-6 mt-1' src="./ic_baseline-phone.svg" alt="" />
                    VIA CALL
                </button>
            </div>
            <button type="button" className='mt-5 border-1 flex justify-center items-center font-medium gap-2 rounded-lg h-13 w-full'>
                <img className='w-6 h-6 mt-1' src="./ic_outline-message.png" alt="" />
                VIA EMAIL FORM
            </button>
            <div className='flex mt-10 flex-col ml-10 mr-10'>
                <label className='font-semibold' htmlFor='name'>Name:</label>
                <input className='border rounded-lg p-2' name='name'></input>
                <label className='font-semibold' htmlFor='name'>E-Mail:</label>
                <input className='border rounded-lg p-2' name='name'></input>
                <label className='font-semibold' htmlFor='name'>TEXT:</label>
                <textarea className='border rounded-lg p-2' name='name'></textarea>
                <button type='submit' className='ml-60 mt-2 bg-black text-white border font-medium rounded-lg h-13 transition-all hover:opacity-70'>SUBMIT</button>
            </div>
        </form>
        <div>
            <img src="./Service 24_7-pana 1.svg" alt="" />
        </div>
    </div>
  )
}

export default Form