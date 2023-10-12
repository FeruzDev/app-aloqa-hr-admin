import React from 'react';
import {Select} from "antd";

const DepartmentsAdd = () => {
    const handleChange = () => {

    }
    return (
        <div className="edit-user">
            <div className="progress-link">
                <img src="/icon/Icon1.svg" alt="."/>
                <img src="/icon/arrowleft.svg" alt="."/>
                <span>Пользователи</span>
                <img src="/icon/arrowleft.svg" alt="."/>
                <span>Добавить нового отдела</span>
            </div>
            <h3 className="edit-user-title font-family-medium">
                Добавить нового отдела
            </h3>
            <div className="edit-user-box">
                <div className="row">
                    <div className="col-md-4">
                        <div className="inputs-box w-100">
                            <label>Названия отдела </label>
                            <input type="text" placeholder="Напишите названия" className="w-100"/>
                        </div>
                        <div className="inputs-box m-0">
                            <label>Филиал </label>
                            <Select
                                className="w-100"
                                onChange={handleChange}
                                options={[
                                    { value: 'jack', label: 'Jack' },
                                    { value: '1', label: '1' },
                                    { value: 'Yiminghe', label: 'yiminghe' },
                                    { value: 'disabled', label: 'Disabled', disabled: true },
                                ]}
                            />
                        </div>
                    </div>
                </div>
                <div className="con-btn mt-4 w-auto">
                    <button className="font-family-medium"><span>Сохранить изменения</span></button>
                    <button className="font-family-medium ml-8  ">Отменить</button>
                </div>
            </div>

        </div>
    );
};

export default DepartmentsAdd;