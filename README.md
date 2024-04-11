# Seiyaj Wallet

Seiyaj Wallet is a web application built with React and TypeScript, using Vite as the build tool. It allows users to transfer tokens using the Seiyaj Wallet.

## Getting Started

First, clone the repository to your local machine:

```sh
git clone https://github.com/anhlh-edsolabs/seiyaj-wallet.git
cd seiyaj-wallet
```

Next, initialize the project and install the dependencies:

```sh
./init.sh
```

Then, update the `.env` file in the root directory and add your `VITE_WALLET_CONNECT_PROJECT_ID` and `VITE_SEIYAJ_TOKEN_ADDRESS`:

```sh
VITE_WALLET_CONNECT_PROJECT_ID=your_project_id
VITE_SEIYAJ_TOKEN_ADDRESS=your_token_address
```

Finally, start the development server:

```sh
yarn dev
```

Open [http://localhost:5173/](http://localhost:5173/) in your browser to view the application.

## Building the project

To build the project, run:

```sh
yarn build
```

## Deployment

The project is deployed to Vercel at [https://seiyaj-wallet.vercel.app/](https://seiyaj-wallet.vercel.app/).

## Components

The project is structured as follows:

```sh
.
├── .env
├── .env.sample
├── .eslintrc.cjs
├── .gitignore
├── index.html
├── package.json
├── public/
├── README.md
├── src/
│   ├── App.tsx
│   ├── assets/
│   ├── common/
│   │   ├── abis/
│   │   │   └── SeiyajToken_ABI.json
│   │   └── config.ts
│   ├── components/
│   │   ├── buttons/
│   │   │   └── ButtonTransfer.tsx
│   │   ├── CardERC20Token.tsx
│   │   ├── CardHistory.tsx
│   │   ├── CardWallet.tsx
│   │   ├── modal-ui/
│   │   │   └── ModalTransfer.tsx
│   │   └── TokenBalance.tsx
│   ├── index.css
│   ├── main.tsx
│   └── vite-env.d.ts
├── test/
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

## Built With

- [Mantine](https://mantine.dev/) - A React components and hooks library with native dark theme support, focus on usability, accessibility and developer experience.
- [WalletConnect](https://walletconnect.org/) - An open protocol for connecting Wallets to Dapps.
- [Wagmi](https://github.com/wagmi-io) - A core library for rapid development of decentralized applications.

## Author

Le Hoang Anh
<mr.khas@gmail.com>
