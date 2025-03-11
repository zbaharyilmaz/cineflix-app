// import { toast } from "react-toastify";

// export const toastSuccess=(message)=>{
//     toast.success(message, {
//         position: "top-right",
//         autoClose: 4000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//         theme: "dark",
//         transition: Bounce,
//         })}
// export const toastWarn=(message)=>{
//     toast.warn(message, {
//         position: "top-center",
//         autoClose: 5000,
//         hideProgressBar: false,
//         closeOnClick: false,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//         theme: "dark",
//         transition: Bounce,
//         });
// }
// export const toastError=(message)=>{
//     toast.error(message, {
//         position: "top-center",
//         autoClose: 5000,
//         hideProgressBar: false,
//         closeOnClick: false,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//         theme: "dark",
//         transition: Bounce,
//         });
// }


  import {toast} from "react-toastify"


  export const toastSuccess=(msg)=>{
      toast.success(msg, {
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });} 
  
  export const toastWarn = (msg) => {
    toast.warn(msg, {
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  export const toastError = (msg) => {
    toast.error(msg, {
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };