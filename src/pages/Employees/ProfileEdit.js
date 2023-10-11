import React from 'react';
import {Link} from "react-router-dom";
import Calendar from "../Home/Calendar";
import FormControl from "@mui/material/FormControl";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";

const ProfileEdit = () => {
    function createData(name, calories, fat, carbs, protein) {
        return { name, calories, fat, carbs, protein };
    }

    const rows = [
        createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
        createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
        createData('Eclair', 262, 16.0, 24, 6.0),
        createData('Cupcake', 305, 3.7, 67, 4.3),
        createData('Gingerbread', 356, 16.0, 49, 3.9),
    ];
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    return (
        <div className="profile-edit">
            <div className="progress-link">
                <img src="/icon/Icon1.svg" alt="."/>
                <img src="/icon/arrowleft.svg" alt="."/>
                <span>Cотрудники</span>
                <img src="/icon/arrowleft.svg" alt="."/>
                <span>Zarifa Bakirova</span>
            </div>

            <div className="profile-header">
                <h3 className="font-family-medium">Профиль сотрудника</h3>
                <div className="profile-header-box-update">
                    <div className="row">
                        <div className="col-md-2 text-center">
                            <img src="/img/profileAv.png" alt="."/>
                            <Link className="link-edit font-family-medium" to="/home/employees/profile/edit">Изменить</Link>
                        </div>
                    <div className="col-md-10">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="inputs-box">
                                    <label >Имя и фамилия </label>
                                    <input type="text" />
                                </div>
                                <div className="inputs-box">
                                    <label >Логин / Номер телефона </label>
                                    <input type="text"  />
                                </div>
                                <div className="inputs-box">
                                    <label >Дата рождения </label>
                                    <input type="date" />
                                </div>
                                <div className="inputs-box">
                                    <label >Возраст </label>
                                    <input type="text"  />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="inputs-box for-select">
                                    <label >Пол </label>
                                    <FormControl>
                                        <RadioGroup
                                            row
                                            aria-labelledby="demo-row-radio-buttons-group-label"
                                            name="row-radio-buttons-group"
                                        >
                                            <FormControlLabel value="female" control={<Radio />} label="Мужской" />
                                            <FormControlLabel value="male" control={<Radio />} label="Женский" />
                                        </RadioGroup>
                                    </FormControl>
                                </div>
                                <div className="inputs-box">
                                    <label >Филиал <button className="font-family-medium">Добавить новое</button></label>
                                    <select name="" id="">
                                        <option value="1">123</option>
                                        <option value="1">213</option>
                                        <option value="1">123</option>
                                    </select>
                                </div>
                                <div className="inputs-box">
                                    <label >Отдел <button className="font-family-medium">Добавить новое</button></label>
                                    <select name="" id="">
                                        <option value="1">123</option>
                                        <option value="1">213</option>
                                        <option value="1">123</option>
                                    </select>
                                </div>
                                <div className="inputs-box">
                                    <label >Должность <button className="font-family-medium">Добавить новое</button></label>
                                    <select name="" id="">
                                        <option value="1">123</option>
                                        <option value="1">213</option>
                                        <option value="1">123</option>
                                    </select>
                                </div>
                                <div className="inputs-box">
                                    <label >Режим <button className="font-family-medium">Добавить новое</button> </label>
                                    <select name="" id="">
                                        <option value="1">123</option>
                                        <option value="1">213</option>
                                        <option value="1">123</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="con-btn">
                            <button className="font-family-medium"><span>Сохранить изменения</span></button>
                            <button className="font-family-medium ml-8  ">Отменить</button>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileEdit;