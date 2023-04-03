import { useState } from 'react';
import './AddEmployee.style.css';
import { IEmployee } from './Employee';

type AddEmployeeProps = {
    onBackBtnClickHdn: () => void;
    onSubmitClickedHdn: (data: IEmployee) => void;
}

export default function AddEmployee(props: AddEmployeeProps) {
    const { onBackBtnClickHdn, onSubmitClickedHdn } = props;
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');

    const onFirstChangeHdn = (e: any) => {
        setFirstName(e.target.value);
    }

    const onLastChangeHdn = (e: any) => {
        setLastName(e.target.value);
    }

    const onEmailChangeHdn = (e: any) => {
        setEmail(e.target.value);
    }

    const onSubmitBtnClickedHdn = (e: any) => {
        e.preventDefault();
        const data: IEmployee = {
            id: new Date().toJSON().toString(),
            firstName: firstName,
            lastName: lastName,
            email: email
        }
        onSubmitClickedHdn(data);
        onBackBtnClickHdn();
    }

    return (
        <div className='form-container'>
            <div>
                <h3>Add Employee Form</h3>
            </div>
            <form onSubmit={onSubmitBtnClickedHdn}>
                <div>
                    <label>First Name : </label>
                    <input type="text" value={firstName} onChange={onFirstChangeHdn} required />
                </div>
                <div>
                    <label>Last Name : </label>
                    <input type="text" value={lastName} onChange={onLastChangeHdn} required />
                </div>
                <div>
                    <label>Email Add : </label>
                    <input type="text" value={email} onChange={onEmailChangeHdn} required />
                </div>
                <div>
                    <input type="button" value="back" onClick={onBackBtnClickHdn} />
                    <input type="submit" value="Add Employee" />
                </div>
            </form>
        </div>
    )
}
