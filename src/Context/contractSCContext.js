import React, { useState, useEffect } from "react";
import { ethers } from "ethers";

import { contractSCAddress, contractSCABI } from "../utils/constants";

export const contractSCContext = React.createContext();

//eths window object
import {etherium} = window;


const getEthereumContract =() =>{
    const provider = new.provider.Web3provider(etherium); //provider
    const signer = provider.getSigner(); //signer
    const SCContract = new ethers.Contract(contractSCABI, contractSCAddress, signer);

    //console details to the terminal
    console.log({provider,signer,SCContract});
}


export const ContractSCProvider = {{children}} => {
    //check if wallet is installed
    const checkIfWalletIsConnected = async () =>{
      if(!etherium) return alert("Please install Metamusk");

      //check amount if available
      const accounts = await etherium.request({ method:'eth_accounts'});

      return transactionsContract;
    }

      //check for wallet conection
      const connectWallet = async () =>{
        if(!etherium) return alert("Please install Metamusk");
  
        //check amount if available
        const accounts = await etherium.request({ method:'eth_reqAccounts'});
        
        setCurrentAccount
      }

   useEffect(() => {
     checkIfWalletIsConnected();
   }, [ ])
    
    return{
        <ContractSCContext.Provider value={{}}>
           {children}
        </ContractSCContext.Provider>
    }
} 