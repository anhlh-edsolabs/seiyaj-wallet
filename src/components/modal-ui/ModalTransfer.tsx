import {
    TextInput,
    Text,
    Button,
    Group,
    Box,
    Stack,
    Center,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { ethers } from "ethers";
import TOKEN_ABI from "../../common/abis/SeiyajToken_ABI.json";
import { useState } from "react";
import { sepolia } from "wagmi/chains";
import { IconCircleArrowRightFilled, IconTransitionRightFilled } from "@tabler/icons-react";

const TOKEN = import.meta.env.VITE_SEIYAJ_TOKEN_ADDRESS!;

type TransferForm = {
	recipient: string;
	amount: string;
};

// type Props = {
// 	onClose?: () => void;
// };

function ModalTransfer() {
	const [loading, setLoading] = useState(false);
	const [errorMessage, setErrorMessage] = useState<string | null>(null);
	const [step, setStep] = useState(0);
	const [urlTxHash, setUrlTxHash] = useState<string | null>(null);

	const form = useForm<TransferForm>({
		initialValues: {
			recipient: "",
			amount: "",
		},

		validate: {
			recipient: (value) =>
				ethers.isAddress(value) ? null : "Invalid address",
			amount: (value) => (Number(value) > 0 ? null : "Invalid amount"),
		},
	});

	const handleSubmit = async (values: TransferForm) => {
		setLoading(true);
		try {
			const provider = new ethers.BrowserProvider(window.ethereum);
			const signer = await provider.getSigner();
			const contract = new ethers.Contract(TOKEN, TOKEN_ABI, signer);

			const txn = await contract.transfer(
				values.recipient,
				ethers.parseEther(values.amount),
			);
			await txn.wait();

			console.log("Transaction:", txn);
			setUrlTxHash(
				`${sepolia.blockExplorers.default.url}/tx/${txn.hash}`,
			);

			return setStep(1);
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
		} catch (error: any) {
			console.log("Error:", error);

			const code = error.data.replace("Reverted ", "");
			const reason = ethers.toUtf8String("0x" + code.substr(138));
			console.log("revert reason:", reason);

			setErrorMessage(reason || "Something went wrong!");
		} finally {
			setLoading(false);
		}
	};

	return (
		<Box px="sm">
			{step === 0 && (
				<form onSubmit={form.onSubmit(handleSubmit)}>
					<Stack>
						{errorMessage && (
							<Text fz="sm" color="red">
								{errorMessage}
							</Text>
						)}
						<TextInput
							withAsterisk
							label="Recipient address"
							placeholder="0x"
							{...form.getInputProps("recipient")}
						/>
						<TextInput
							withAsterisk
							label="Amount"
							placeholder="0"
							type="number"
							{...form.getInputProps("amount")}
						/>

						<Group position="right" mt="md">
							<Button
                                rightIcon={<IconCircleArrowRightFilled size="1rem" />}
								loading={loading}
								type="submit"
								color="dark"
								variant="filled"
							>
								Submit
							</Button>
						</Group>
					</Stack>
				</form>
			)}
			{step === 1 && (
				<Center h={100} mx="auto">
					<Button
                        rightIcon={<IconTransitionRightFilled size="1rem" />}
						onClick={() => window.open(`${urlTxHash}`)}
						variant="subtle"
                        color="dark"
					>
						View on block explorer
					</Button>
				</Center>
			)}
		</Box>
	);
}

export default ModalTransfer;
