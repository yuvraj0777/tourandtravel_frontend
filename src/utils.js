import { toast } from "react-toastify";

export const handleSuccsess = (msg) => {
     toast.success(msg, {
        position: 'top-right'
     })
}

export const handleError = (msg) => {
    toast.error(msg, {
        position: 'top-right'
    })
}