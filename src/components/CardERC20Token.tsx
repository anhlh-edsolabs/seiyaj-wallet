import { Card, Stack, Group, Title, Text, Button } from "@mantine/core";
import { useAccount } from "wagmi";
import TokenBalance from "./TokenBalance";
import ButtonTransfer from "./buttons/ButtonTransfer";
import { sepolia } from "wagmi/chains";
import { IconTransitionRightFilled } from "@tabler/icons-react";
import ButtonMint from "./buttons/ButtonMint";
import ButtonWhitelist from "./buttons/ButtonWhitelist";

const token = import.meta.env.VITE_SEIYAJ_TOKEN_ADDRESS!;

function CardERC20Token() {
	// const { open: openConnection } = useWeb3Modal();
	const { address, status } = useAccount();

	return (
		<Card shadow="sm" padding="lg" radius="md" withBorder>
			<Stack>
				<Group>
					<Title transform="uppercase" order={3}>Seiyaj Token</Title>
				</Group>
				<Text>
					Contract Address:{" "}
					<Text span size="sm" fw="bold" color="gray.8">
						<Button
							rightIcon={
								<IconTransitionRightFilled size="1rem" />
							}
							onClick={() =>
								window.open(
									`${sepolia.blockExplorers.default.url}/address/${token}`,
								)
							}
							variant="white"
							color="blue"
						>
							{token}
						</Button>
					</Text>
				</Text>
				{status === "connected" && (
					<Stack>
						<TokenBalance address={address} token={token} />
						<Group>
							<ButtonTransfer />
						</Group>
					</Stack>
				)}
			</Stack>
		</Card>
	);
}

export default CardERC20Token;
