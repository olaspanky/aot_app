<div className=' grid place-content-center '>
<div className=" bg-white opacity-75 mx-auto my-auto mt-3 rounded-xl ">

<div className='rounded-xl shadow-lg text-black text-sm'>
<div className='grid grid-cols-2 gap-3 m-5'>
<div className='col-span-1  flex flex-col h-full'>
{/*input field */}
 {/*input field */}
 <div className='flex flex-col w-full mb-3 flex-grow'>
 <label><h3 className="text-xs font-extralight">Customer's Name</h3></label>
 <div className='grid grid-cols-9 border border-[#CDCDCD] rounded-lg items-center'>
   <PersonOutlineIcon className='col-span-1'/>
   <input
   className='col-span-8'
            type='text'
            name='created'
            value={editedData.created || ''}
            placeholder={promoCodeData.discount_code}
            onChange={handleChange}
          />
  
 </div>
 </div>
{/*input field */}
<div className='flex flex-col w-full mb-3 flex-grow'>
<label><h3 className="text-xs font-extralight">Customer's Name</h3></label>
<div className='grid grid-cols-9 border border-[#CDCDCD] rounded-lg items-center'>
  <PersonOutlineIcon className='col-span-1'/>
  <input
           className='col-span-8'

            type='text'
            name='description'
            value={editedData.description || ''}
            placeholder={promoCodeData.description}
            onChange={handleChange}
          />
 
</div>
</div>
{/*input field */}
<div className='flex flex-col w-full mb-3 flex-grow'>
<label><h3 className="text-xs font-extralight">Order Location</h3></label>
<div className='grid grid-cols-9 border border-[#CDCDCD] rounded-lg items-center'>
  <PersonOutlineIcon className='col-span-1'/>
  <input
            type='text'
            name='discount'
            value={editedData.discount || ''}
            onChange={handleChange}
          />
 
</div>
</div>
{/*input field */}
<div className='flex flex-col w-full mb-3 flex-grow'>
<label><h3 className="text-xs font-extralight">Order Location</h3></label>
<div className='grid grid-cols-9 border border-[#CDCDCD] rounded-lg items-center'>
  <PersonOutlineIcon className='col-span-1'/>
  <input
            type='text'
            name='discount'
            value={editedData.discount || ''}
            onChange={handleChange}
          />       
</div>
</div>

</div>


<div className='col-span-1 flex flex-col h-full'>
{/*input field */}
<div className='flex flex-col w-full mb-3 flex-grow'>
<label><h3 className="text-xs font-extralight">Customer Email</h3></label>
<div className='grid grid-cols-9 border border-[#CDCDCD] rounded-lg items-center'>
  <PersonOutlineIcon className='col-span-1'/>
  <input
            type='text'
            name='discount'
            value={editedData.discount || ''}
            onChange={handleChange}
          />       
</div>
</div>
{/*input field */}
<div className='flex flex-col w-full mb-3 flex-grow'>
<label><h3 className="text-xs font-extralight">Rider Phone Number</h3></label>
<div className='grid grid-cols-9 border border-[#CDCDCD] rounded-lg items-center'>
  <PersonOutlineIcon className='col-span-1'/>
  <input
            type='text'
            name='discount'
            value={editedData.discount || ''}
            onChange={handleChange}
          />       
</div>
</div>
{/*input field */}
<div className='flex flex-col w-full mb-3 flex-grow'>
<label><h3 className="text-xs font-extralight">Goods Category</h3></label>
<div className='grid grid-cols-9 border border-[#CDCDCD] rounded-lg items-center'>
  <PersonOutlineIcon className='col-span-1'/>
  <input
            type='text'
            name='discount'
            value={editedData.discount || ''}
            onChange={handleChange}
          />       
</div>
</div>
{/*input field */}
<div className='flex flex-col w-full mb-3 flex-grow'>
<label><h3 className="text-xs font-extralight">Order Time</h3></label>
<div className='grid grid-cols-9 border border-[#CDCDCD] rounded-lg items-center'>
  <PersonOutlineIcon className='col-span-1'/>
  <input
            type='text'
            name='discount'
            value={editedData.discount || ''}
            onChange={handleChange}
          />       
</div>
</div>

</div>





</div>
<div className='flex flex-col gap-3 justify-center items-center pt-5 '>
<button className='bg-[#FF7D00]  inline-block rounded-lg py-2 w-[30%] border-2 border-[#FF7D00] text-white'><h2>Add faq</h2></button>
</div>





</div>
</div>
</div>