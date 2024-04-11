import { Container, Stack } from "@mantine/core";
import CardWallet from "./components/CardWallet";
import CardERC20Token from "./components/CardERC20Token";

export default function App() {
	return (
		<Container my="md">
			<Stack>
				<CardWallet />
				<CardERC20Token />
			</Stack>
		</Container>
	);
}
