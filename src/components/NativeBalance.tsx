import { Group, Text } from "@mantine/core";
import React from "react";
import { useBalance } from "wagmi";

function NativeBalance({ address }: { address: `0x${string}` }) {
	const balance = useBalance({
		address: address,
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

export default NativeBalance;
