import { IEmployee } from './Employee';
import './EmployeeList.style.css';
import EmployeeModal from './EmployeeModal';
import { useState } from 'react';

type EmployeeListProps = {
    list: IEmployee[];
    onDeleteClickedHdn: (data: IEmployee) => void
    onEdit: (data: IEmployee) => void

}

export default function EmployeeList(props: EmployeeListProps) {
    const { list, onDeleteClickedHdn, onEdit } = props;
    const [showModal, setShowModal] = useState(false);
    const [dataToShow, setDataToShow] = useState(null as IEmployee | null)

    const viewEmployee = (data: IEmployee) => {
        setShowModal(true);
        setDataToShow(data);
    }

    const onCloseModal = () => setShowModal(false);

    return (
        <div>
            <article>
                <h3 className='list-header'>Employee List</h3>
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                    {
                        list.map((employee) => {
                            return (
                                <tr key={employee.id}>
                                    <td>{`${employee.firstName} ${employee.lastName}`}</td>
                                    <td>{employee.email}</td>
                                    <td>
                                        <div>
                                            <input type="button" value="view" onClick={() => viewEmployee(employee)} />
                                            <input type="button" value="edit" onClick={() => onEdit(employee)} />
                                            <input type="button" value="delete" onClick={() => onDeleteClickedHdn(employee)} />
                                        </div>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </table>
                {
                    showModal && dataToShow !== null && < EmployeeModal onClose={onCloseModal} data={dataToShow} />
                }
            </article>
        </div>
    )
}
