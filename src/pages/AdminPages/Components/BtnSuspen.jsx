import React from 'react'
import Swal from 'sweetalert2';

export default function Btnsuspen() {
  const handleSuspend = () => {
    Swal.fire({
      title: "Are you sure to suspend this account?",
      icon: "warning",
      showCancelButton: true,
      showConfirmButton: true,
      background: "#151921",
      color: "#fff",
      confirmButtonColor: "#FF3D00",
      cancelButtonColor: "#D91E11",
      confirmButtonText: "Yes, Suspend!",
      focusConfirm: false,
      focusCancel: true,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          toast: true,
          icon: "success",
          title: "Suspend Successfully",
          animation: false,
          background: "#222834",
          color: "#18B015",
          position: "bottom-end",
          showConfirmButton: false,
          timer: 4000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
          },
        });
      }
    });
  }
  return (
    <div id='suspend-button'>
      <button onClick={handleSuspend} className='rounded-full bg-secondary-orange hover:bg-secondary-orange/80 px-4 sm:px-8 py-2'>Suspend</button>
    </div>
  )
}
