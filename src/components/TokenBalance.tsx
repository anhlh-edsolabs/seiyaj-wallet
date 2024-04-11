import { Group, Text } from "@mantine/core";
import React from "react";
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
		<Group>
			<Text>
				Balance:{" "}
				<Text span size="sm" color="gray.8">
					{balance.data?.formatted} {balance.data?.symbol}
				</Text>
			</Text>
		</Group>
	);
}

export default TokenBalance;
