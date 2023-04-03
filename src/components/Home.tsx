import AddEmployee from './AddEmployee';
import Edit from './Edit';
import { IEmployee, PageEnum } from './Employee';
import EmployeeList from './EmployeeList';
import './Home.style.css';
import { useEffect, useState } from 'react';

export default function Home() {
    const [showPage, setshowPage] = useState(PageEnum.list);
    const [employeeList, setEmployeeList] = useState([] as IEmployee[]);
    const [dataToEdit, setDataToEdit] = useState({} as IEmployee)

    const onAddEmployeeClickHnd = () => {
        setshowPage(PageEnum.add)
    }

    const showListPage = () => {
        setshowPage(PageEnum.list);
    }

    const _setEmployeeList = (list: IEmployee[]) => {
        setEmployeeList(list);
        window.localStorage.setItem('EmployeeList', JSON.stringify(list));
    }

    const addEmployee = (data: IEmployee) => {
        _setEmployeeList([...employeeList, data]);
    }

    const deleteEmplyee = (data: IEmployee) => {
        // To index from array
        //splice that
        //Update new record
        const indexToDelete = employeeList.indexOf(data);
        const finalList = [...employeeList];
        finalList.splice(indexToDelete, 1);
        _setEmployeeList(finalList);
    }

    const editEmployeeData = (data: IEmployee) => {
        setshowPage(PageEnum.edit);
        setDataToEdit(data);
    }

    const updateData = (data: IEmployee) => {
        const filterData = employeeList.filter(x => x.id === data.id)[0];
        const indexofRecord = employeeList.indexOf(filterData);
        const tempData = [...employeeList];
        tempData[indexofRecord] = data;
        _setEmployeeList(tempData);
    }

    useEffect(() => {
        const listInString = window.localStorage.getItem('EmployeeList');
        if (listInString) {
            _setEmployeeList(JSON.parse(listInString));
        }
    }, [])

    return (
        <div>
            <article className="article-header">
                <header>
                    <h1>React: Simple CRUD Application</h1>
                </header>
            </article>

            <section className='section-content'>
                {
                    showPage === PageEnum.list && (
                        <>
                            <input type="button" value='Add Employee' onClick={onAddEmployeeClickHnd} className='add-emplyee-btn' />
                            <EmployeeList list={employeeList} onDeleteClickedHdn={deleteEmplyee} onEdit={editEmployeeData} />
                        </>
                    )
                }
                {
                    showPage === PageEnum.add && <AddEmployee onBackBtnClickHdn={showListPage} onSubmitClickedHdn={addEmployee} />
                }
                {
                    showPage === PageEnum.edit && <Edit onBackBtnClickHdn={showListPage} data={dataToEdit} onUpdateClickedHdn={updateData} />
                }
            </section>
        </div>
    )
}
