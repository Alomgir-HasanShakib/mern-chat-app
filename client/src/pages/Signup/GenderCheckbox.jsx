import React from 'react'

const GenderCheckbox = ({inputs,setInputs}) => {
  return (
    <div className='flex'>
        <div className='flex items-center gap-2'>
            <label className='label gap-2 cursor-pointer'>
                <span className='label-text'>Male</span>
            </label>
            <input type='checkbox' className='checkbox border-slate-900' checked={inputs.gender === 'male'} onChange={(e)=>setInputs({...inputs,gender:e.target.checked ? 'male' : ''})} />
        </div>
        <div className='flex items-center gap-2'>
            <label className='label gap-2 cursor-pointer'>
                <span className='label-text'>Female</span>
            </label>
            <input type='checkbox' className='checkbox border-slate-900' checked={inputs.gender === 'female'} onChange={(e)=>setInputs({...inputs,gender:e.target.checked ? 'female' : ''})} />
        </div>
    </div>
  )
}

export default GenderCheckbox