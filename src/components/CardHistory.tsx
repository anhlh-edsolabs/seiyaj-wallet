import { Card, Stack, Title } from "@mantine/core";

function CardHistory() {
	return (
		<Card shadow="sm" padding="lg" radius="md" withBorder>
			<Stack>
                <Title order={3}>History</Title>
            </Stack>
		</Card>
	);
}

export default CardHistory;
