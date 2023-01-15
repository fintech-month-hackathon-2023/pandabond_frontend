/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';

const PurchaseBond = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const [defaultAccount, setDefaultAccount] = useState(null);
  const [connButtonText, setConnButtonText] = useState('Purchase Bonds');

  // const [currentContractVal, setCurrentContractVal] = useState(null);

  // const [provider, setProvider] = useState(null);
  // const [signer, setSigner] = useState(null);
  // const [contract, setContract] = useState(null);

  // const contractAddress = '0x7E053B19F417ef591E90Eb5E38112F6b30e1625d';

  const connectWalletHandler = () => {
    if ((window as any).ethereum) {
      (window as any).ethereum
        .request({ method: 'eth_requestAccounts' })
        .then((result: any) => {
          accountChangedHandler(result[0]);
          setConnButtonText('Wallet Connected');
        });
    } else {
      setErrorMessage('Need to install MetaMask!');
    }
  };

  const accountChangedHandler = (newAccount: any) => {
    setDefaultAccount(newAccount);
    // updateEthers();
  };

  // const updateEthers = () => {
  //     let tempProvider = new ethers.providers.Web3Provider(window.ethereum);
  //     setProvider(tempProvider);

  //     let tempSigner = tempProvider.getSigner();
  //     setSigner(tempSigner);

  //     let tempContract = new ethers.Contract(contractAddress, SimpleStore_abi, tempSigner);
  //     setContract(tempContract);
  // }

  // const getCurrentVal = async () => {
  //     let val = await contract.get();
  //     setCurrentContractVal(val);
  // }

  // const setHandler = (event) => {
  //     event.preventDefault();
  //     contract.set(event.target.setText.value);
  // }

  return (
    <div>
      <button onClick={connectWalletHandler}> {connButtonText} </button>
      <h4> Address: {defaultAccount} </h4>

      {/* <form onSubmit={setHandler}>
              <input id='setText' type='text'/>
              <button type={'submit'}> Update Contract </button>
          </form>

          <button onClick={getCurrentVal}> Get Current Value </button>
          {currentContractVal} */}
      {errorMessage}
    </div>
  );
};

export default PurchaseBond;
