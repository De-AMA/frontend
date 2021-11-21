import * as React from 'react';
import ENS, { getEnsAddress } from "@ensdomains/ensjs";
import { Web3Provider } from "@ethersproject/providers";

const METAMASK_ACTIONS = {
  eth_accounts: 'eth_accounts',
  eth_requestAccounts: 'eth_requestAccounts',
};

type AddressContextType = {
  address: string;
  connect: () => void;
  isLoading: boolean;
  canConnect: boolean;
};

const AddressContext = React.createContext<AddressContextType | null>(null);

export default function useAddress() {
  const context = React.useContext(AddressContext);
  if (context == null) {
    throw new Error(`useAddress must be used within an AddressContext`);
  }

  return context;
}

export function AddressProvider({ children }) {
  const [address, setAddress] = React.useState<string | null>();
  const [isLoading, setIsLoading] = React.useState(true);
  const [canConnect, setCanConnect] = React.useState(true);
  const [ens, setEns] = React.useState<string | null>();
  const [ensName, setEnsName] = React.useState<string | null>();


  const getEnsName = async () => {
    try {
      const address = account;
      if (!address) return;
      const ensName = await ens.getName(address);
      if (ensName.name) {
        setEnsName(ensName.name);
      
      }
    } catch (error) {
      console.log({ error });
    }
  };
  // React.useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     // Client-side-only code
  //     const { ethereum } = window;

  //     if (window.ethereum) {
  //       setEns(
  //         new ENS({
  //           provider: new Web3Provider(ethereum),
  //           ensAddress: getEnsAddress("1"),
  //         })
  //       );
  //     }
  //   }
  
  // }, [window.ethereum]);
  React.useEffect(() => {
    if (ens) {
      getEnsName();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ens]);
  
  React.useEffect(() => {
    const { ethereum } = window;

    if (window.ethereum) {
      const { ethereum } = window;
      if (!ethereum) {
        console.log('No access to the Ethereum object');
        setIsLoading(false);
        setCanConnect(false);
        return;
      }
    }
   
    

    const checkAddresses = async () => {
      try {
        const addresses = await ethereum.request({
          method: METAMASK_ACTIONS.eth_accounts,
        });
        if (addresses.length > 0) {
          setAddress(addresses[0]);
        }
        setIsLoading(false);
      } catch (e) {
        console.log(e);
        setIsLoading(false);
      }
    };

    checkAddresses();
  },[]);

  async function connect() {
    const { ethereum } = window;
    setIsLoading(true);

    try {
      const accounts = await ethereum.request({
        method: METAMASK_ACTIONS.eth_requestAccounts,
      });

      if (accounts.length > 0) {
        setAddress(accounts[0]);
        setIsLoading(false);
      }
    } catch (e) {
      console.log(e);
      setIsLoading(false);
    }
  }
  

  const value: AddressContextType = { address, connect, isLoading, canConnect };

  return (
    <AddressContext.Provider value={value}>{children} {ens}</AddressContext.Provider>
  );
}
