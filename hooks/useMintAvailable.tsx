import { useState, useEffect } from "react";
import { useContainer } from "unstated-next";
import web3UserContainer from "./useWeb3User";

const useMintAvailable = (merkleProof: string[]) => {
  const [isLoading, setLoading] = useState<boolean>();
  const [available, setAvailable] = useState<boolean>();
  let { contract, wallet } = useContainer(web3UserContainer);

  const update = async () => {
    setLoading(true);
    try {
      if (wallet.account) {
        if (!contract) {
          console.error(`provider or contract is unavailable.`);
        } else {
          console.debug("fetching mint availability for " + wallet.account);
          setAvailable(
            await contract.canMint(
              wallet.account,
              merkleProof.length > 0
                ? merkleProof
                : [
                    "0x0000000000000000000000000000000000000000000000000000000000000000",
                  ],
            ),
          );
        }
      }
    } catch (error: any) {
      console.error({ error });
    }
    setLoading(false);
  };

  useEffect(() => {
    update();
    const interval = setInterval(update, 2500);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { available, isLoading, update };
};

export { useMintAvailable };
