import { Button, Modal, Title } from "@mantine/core";
import ModalTransfer from "../modal-ui/ModalTransfer";
import { IconWallet } from "@tabler/icons-react";
import { useDisclosure } from "@mantine/hooks";

function ButtonTransfer() {
    const [opened, { open, close }] = useDisclosure(false);
	return (
		<>
			<Modal
				opened={opened}
				onClose={close}
				title={<Title order={3}>Transfer token</Title>}
			>
				<ModalTransfer />
			</Modal>
			<Button
				leftIcon={<IconWallet size="1rem" />}
				onClick={open}
				variant="filled"
				color="dark"
				size="xs"
			>
				Transfer
			</Button>
		</>
	);
}

export default ButtonTransfer;
