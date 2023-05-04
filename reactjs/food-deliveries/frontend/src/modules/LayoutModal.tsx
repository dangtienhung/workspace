import { Modal } from 'antd';

type LayoutModalProps = {
	title: string;
	open: { isOpenModalAdd: boolean; isOpenModalEdit: boolean; isOpenModalView: boolean };
	onCancel: () => void;
	children?: React.ReactNode;
};

const LayoutModal = ({ title, open, children, onCancel }: LayoutModalProps) => {
	return (
		<ModalComponent
			title={title}
			open={open.isOpenModalAdd || open.isOpenModalEdit}
			onCancel={onCancel}
		>
			{children}
		</ModalComponent>
	);
};

const ModalComponent = ({ title, children, onCancel, ...rest }: any) => {
	return (
		<Modal
			title={title}
			footer={null}
			style={{ top: 20 }}
			width={960}
			onCancel={onCancel}
			{...rest}
		>
			{children}
		</Modal>
	);
};

export default LayoutModal;