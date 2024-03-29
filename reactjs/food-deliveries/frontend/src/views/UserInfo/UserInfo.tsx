import { Button, Col, Form, Input, Row, Space, message } from 'antd';
import { ClockCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { useEffect, useState } from 'react';

import HistoryOrder from './components/HistoryOrder';
import Payment from './components/Payment';
import { RootState } from '../../redux/store';
import { getOnePayment } from '../../API/payment';
import { updateUser } from '../../redux/actions/userAction';
import { useToggleModal } from '../../hooks/useToggleModal';

const UserInfo = () => {
	const [form] = Form.useForm();
	const dispatch = useAppDispatch();
	const [payment, setPayment] = useState<any>();
	const { currentUser }: any = useAppSelector((state: RootState) => state.auth.login);
	const { currentUser: userInfo }: any = useAppSelector((state: RootState) => state.user);
	const user = userInfo?.user;
	/* open modal payment */
	const { openModal, handleToggleModal } = useToggleModal();
	/* open modal history */
	const { openModal: openModalHistory, handleToggleModal: handleToggleModalHistory } =
		useToggleModal();
	const handleAddPayment = () => {
		handleToggleModal('isOpenModalAdd');
	};
	const handleOpenHistory = () => {
		handleToggleModalHistory('isOpenModalView');
	};
	/* set filed form */
	useEffect(() => {
		if (user) {
			form.setFieldsValue({
				name: user.name,
				address: user.address,
				phone: user.phone,
				paymentMethodId: payment?.cardName,
			});
		}
	}, [form, user, payment?.cardName]);
	/* get payment */
	useEffect(() => {
		const getPayment = async () => {
			try {
				const res = await getOnePayment(
					currentUser?.accessToken,
					currentUser?.user?.paymentMethodId
				);
				if (res && res.data) {
					setPayment(res.data.payment);
				}
			} catch (error) {
				console.log('Lỗi lấy thông tin thanh toán');
			}
		};
		getPayment();
	}, [currentUser?.user?.paymentMethodId, currentUser?.accessToken]);
	const onFinish = async (values: any) => {
		try {
			const newUser = {
				...user,
				name: values.name,
				address: values.address,
				phone: values.phone,
				paymentMethodId: payment._id,
			};
			await updateUser(newUser, dispatch);
			message.success('Cập nhật thông tin thành công');
		} catch (error) {
			console.log('Cập nhật thông tin thất bại');
		}
	};
	return (
		<>
			<Row gutter={[32, 32]}>
				<Col span={24}>
					<Space>
						<Button type="primary" onClick={() => handleAddPayment()}>
							<PlusOutlined />
							Thêm phương thức thanh toán
						</Button>
						<Button type="primary" onClick={() => handleOpenHistory()}>
							<ClockCircleOutlined />
							Lịch sử mua hàng
						</Button>
					</Space>
				</Col>
				<Col span={24}>
					<Form layout="vertical" autoComplete="off" onFinish={onFinish} form={form}>
						<Row gutter={32}>
							<Col span={12}>
								<Form.Item
									name={'name'}
									label="Tên người dùng"
									rules={[{ message: 'Không được bỏ trống!', required: true }]}
								>
									<Input placeholder={'Họ và tên'} />
								</Form.Item>
							</Col>
							<Col span={12}>
								<Form.Item
									name={'address'}
									label="Địa chỉ người dùng"
									rules={[{ message: 'Không được bỏ trống!', required: true }]}
								>
									<Input
										placeholder={`${user?.address ? 'Địa chỉ người dùng' : 'Chưa cập nhật'}`}
									/>
								</Form.Item>
							</Col>
							<Col span={12}>
								<Form.Item
									name={'phone'}
									label="Sđt người dùng"
									rules={[{ message: 'Không được bỏ trống!', required: true }]}
								>
									<Input
										placeholder={`${user?.phone ? 'Số điện thoại người dùng' : 'Chưa cập nhật'}`}
									/>
								</Form.Item>
							</Col>
							{user?.paymentMethodId && (
								<Col span={12}>
									<Form.Item name={'paymentMethodId'} label="Phương thức thanh toán">
										<Input placeholder={'Phương thức thanh toán'} />
									</Form.Item>
								</Col>
							)}
							<Col span={24}>
								<Form.Item>
									<Button style={{ width: '100%' }} type="primary" htmlType="submit">
										Cập nhật thông tin
									</Button>
								</Form.Item>
							</Col>
						</Row>
					</Form>
				</Col>
			</Row>
			<Payment openModal={openModal} handleToggleModal={handleToggleModal} />
			<HistoryOrder openModal={openModalHistory} handleToggleModal={handleToggleModalHistory} />
		</>
	);
};

export default UserInfo;
