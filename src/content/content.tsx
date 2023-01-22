import { ReactNode } from 'react';
import styles from './content.module.css';

type Props = {
	children: ReactNode;
};

const Content = ({ children }: Props) => {
	return <main className={styles.root}>{children}</main>;
};

export default Content