import { Skeleton, Container, Stack, useMantineTheme, px } from "@mantine/core";
import CardWallet from "./components/CardWallet";

const getChild = (height: number) => (
	<Skeleton height={height} radius="md" animate={false} />
);
const BASE_HEIGHT = 360;
const getSubHeight = (children: number, spacing: number) =>
	BASE_HEIGHT / children - spacing * ((children - 1) / children);

export default function App() {
	const theme = useMantineTheme();
	return (
		<Container my="md">
			<Stack>
				<CardWallet />
				{getChild(getSubHeight(2, px(theme.spacing.md) as number))}
			</Stack>
		</Container>
	);
}
