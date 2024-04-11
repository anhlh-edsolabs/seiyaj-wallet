import { Stack, Text } from "@mantine/core";
import { useBalance } from "wagmi";

function TokenBalance({
	address,
	token,
}: {
	address: `0x${string}`;
	token?: `0x${string}`;
}) {
	const balance = useBalance({
		address: address,
		token: token,
	});
	console.log(balance);
	return (
		<Stack>
			<Text>
				Contract Address:{" "}
				<Text span size="sm" fw="bold" color="gray.8">
					{token}
				</Text>
			</Text>
			<Text>
				Balance:{" "}
				<Text span size="sm" fw="bold" color="gray.8">
					{balance.data?.formatted} {balance.data?.symbol}
				</Text>
			</Text>
		</Stack>
	);
}

export default TokenBalance;
