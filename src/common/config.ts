import { defaultWagmiConfig } from "@web3modal/wagmi/react/config";
import { mainnet, sepolia } from "wagmi/chains"

const projectId = import.meta.env.VITE_WALLET_CONNECT_PROJECT_ID!

// 2. Create wagmiConfig
const metadata = {
  name: 'Seiyaj Wallet',
  description: 'Seiyaj Wallet',
  url: 'https://web3modal.com', // origin must match your domain & subdomain
  icons: ['https://avatars.githubusercontent.com/u/37784886']
}

const chains = [mainnet, sepolia] as const
export const config = defaultWagmiConfig({
  chains,
  projectId,
  metadata,
})