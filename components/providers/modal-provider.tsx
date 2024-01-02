"use client"
import { useEffect, useState } from "react";
import { CreateServerModal } from "../modals/create-server-modal";

interface ModalProviderProps {
    children: React.ReactNode;
    // other props if any
  }
export const ModalProvider=({ children }: ModalProviderProps)=>{
    const [isMounted,setisMounted] = useState(false);

    useEffect(()=>{
        setisMounted(true);
    },[]);

    if(!isMounted)return null;

    
    return <>
        <CreateServerModal/>
    </>
}