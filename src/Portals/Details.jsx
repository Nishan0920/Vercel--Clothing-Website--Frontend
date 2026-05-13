import ReactDOM from 'react-dom'
const Modals = ({isOpen,onClose,children})=>{
    if(!isOpen) return null
   return ReactDOM.createPortal(
    <div className='fixed inset-0 z-50 flex items-center justify-center '>
     <div className='relative w-full max-w-200 mt-8 p-6 mx-4 bg-blue-200 rounded-2xl '>
        <button onClick={onClose} className='text-2xl absolute top-10 right-10   md:top-8 md:right-8  cursor-pointer  '>
            <i className="fa-solid fa-xmark text-4xl text-blue-500"></i>
        </button>
        <div>
            {children}
        </div>
     </div>

    </div>,
    document.getElementById('portal-root')
   )
}
export default Modals