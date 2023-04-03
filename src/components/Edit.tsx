import { IEmployee } from "./Employee"
import './Edit.style.css';
import { useState } from 'react'

type Props = {
    onBackBtnClickHdn: () => void;
    data: IEmployee
    onUpdateClickedHdn: (data: IEmployee) => void;
}

export default function Edit(props: Props) {
    const { data, onBackBtnClickHdn, onUpdateClickedHdn } = props;
    const [firstName, setFirstName] = useState(data.firstName);
    const [lastName, setLastName] = useState(data.lastName);
    const [email, setEmail] = useState(data.email);

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
        const updatedData: IEmployee = {
            id: data.id,
            firstName: firstName,
            lastName: lastName,
            email: email
        }
        onUpdateClickedHdn(updatedData);
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
                    <input type="submit" value="Update Employee" />
                </div>
            </form>
        </div>
    )
}
