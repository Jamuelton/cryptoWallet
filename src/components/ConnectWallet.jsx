import React, { useEffect, useState } from "react";
import detectEthereumProvider from '@metamask/detect-provider'

export function ConnectWallet(){

    const [currentAccount, setCurrentAccount] = useState(null);

    useEffect(() => {
      const getAccount = async () => {
        const provider = await detectEthereumProvider();
        if (provider) { //MetaMask instalado
          const accounts = await provider.request({ method: 'eth_accounts' });
          setCurrentAccount(accounts[0]);
        } else {//MetaMask não Instalado
          setCurrentAccount(null);
          alert("MetaMask não está instalada")
        }
      };
      getAccount();
    }, []);
    

    return(
        <div>
           <h1>Conectar à Carteira MetaMask</h1>
            {currentAccount ? (
                <p>Conta atual: {currentAccount}</p>
            ) : (
                <p>Nenhuma conta encontrada</p>
            )} 
        </div>
    )
}