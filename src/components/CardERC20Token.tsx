import { Card, Stack, Group, Title } from "@mantine/core";
import { useAccount } from "wagmi";
import TokenBalance from "./TokenBalance";
import ButtonTransfer from "./buttons/ButtonTransfer";

const token = import.meta.env.VITE_SEIYAJ_TOKEN_ADDRESS!;

function CardERC20Token() {
	// const { open: openConnection } = useWeb3Modal();
	const { address, status } = useAccount();

	return (
		<Card shadow="sm" padding="lg" radius="md" withBorder>
			<Stack>
                <Group>
                    <Title order={3}>Seiyaj Token</Title>
                </Group>
				{status === "connected" && (
					<TokenBalance address={address} token={token} />
				)}
				<Group>
					<ButtonTransfer />
				</Group>
			</Stack>
		</Card>
	);
}

export default CardERC20Token;
