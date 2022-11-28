import React, { useEffect, useState } from 'react';

//* styles
import styles from './Home.module.css';

const TransactionDetails = ({ transactions }) => {
	const [totalAmount, setTotalAmount] = useState(0);

	// calculate total amount from transactions and update dynamically
	useEffect(() => {
		const total = transactions.reduce((acc, transaction) => {
			return acc + parseInt(transaction.amount);
		}, 0);
		setTotalAmount(total);
	}, [transactions]);

	return (
		<ul className={styles.details}>
			<li>
				<p className={styles.name}>Total Transaction:</p>
				<p className={styles.amount}>${totalAmount}</p>
			</li>
		</ul>
	);
};

export default TransactionDetails;
