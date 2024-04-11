import {
	Card,
	CopyButton,
	Text,
	Stack,
	Button,
	Group,
	Avatar,
	Title,
} from "@mantine/core";
import { IconCheck, IconCopy, IconWallet } from "@tabler/icons-react";
import { useWeb3Modal } from "@web3modal/wagmi/react";
import { useAccount } from "wagmi";
import TokenBalance from "./TokenBalance";

function CardWallet() {
	const { open: openConnection } = useWeb3Modal();
	const { address, status } = useAccount();

	return (
		<Card shadow="sm" padding="lg" radius="md" withBorder>
			<Stack>
				<Group>
					<Avatar
						src="https://cdn-icons-png.flaticon.com/512/3665/3665953.png"
						radius="xl"
						color="dark"
						bg=""
					>
						S
					</Avatar>
					<Stack spacing={4}>
						<Title order={3} size="lg" transform="uppercase">
							Seiyaj Wallet
						</Title>
						<Text size="sm" color="gray.8">
							Send token from your wallet to a friend
						</Text>
					</Stack>
				</Group>
				{status === "connected" && (
					<Stack>
						<Group>
							<Text>
								Address:{" "}
								<Text span size="sm" fw="bold" color="gray.8">
									{address}
								</Text>
							</Text>

							<CopyButton value={address}>
								{({ copied, copy }) => (
									<Button
										leftIcon={
											copied ? (
												<IconCheck size="1rem" />
											) : (
												<IconCopy size="1rem" />
											)
										}
										color="dark"
										onClick={copy}
										size="xs"
									>
										{copied ? "Copied" : "Copy"}
									</Button>
								)}
							</CopyButton>
						</Group>
						<TokenBalance address={address} />
					</Stack>
				)}
				{status === "disconnected" && (
					<Group position="center">
						<Button
							leftIcon={<IconWallet size="1rem" />}
							onClick={() => openConnection()}
							variant="filled"
							color="dark"
							size="xs"
						>
							Connect wallet
						</Button>
					</Group>
				)}
			</Stack>
		</Card>
	);
}

export default CardWallet;
