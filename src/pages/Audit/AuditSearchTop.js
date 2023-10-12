import React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import FormControl from "@mui/material/FormControl";
import {FormLabel} from "@mui/material";
import RadioGroup from "@mui/material/RadioGroup";
import {Select} from "antd";
const AuditSearchTop = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className="search-top">
            <div className="d-flex align-items-center">
                <div className="search-item w-100">
                    <label htmlFor="searchItem"><img src="/icon/Icon6.svg" alt="loupe"/></label>
                    <input type="text" placeholder="Искать в админке"  id="searchItem"/>
                </div>
                <Button
                    id="fade-button"
                    aria-controls={open ? 'fade-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                    className="filter-btn"
                >
                    <img src="/icon/filtr.svg" alt="filter"/> Фильтр

                </Button>
            </div>


            <Menu
                id="fade-menu"
                MenuListProps={{
                    'aria-labelledby': 'fade-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}
            >
                <div className="left-fl-big">
                    <div className="d-flex">
                        <div className="left-fl-pair m-0 w-100">
                            <div className="inputs-box">
                                <label >Дата </label>
                                <input type="date" />
                            </div>
                            <div className="inputs-box">
                                <label >Роль </label>
                                <Select
                                    className="w-100"
                                    options={[
                                        { value: 'jack', label: 'Jack' },
                                        { value: '1', label: '1' },
                                        { value: 'Yiminghe', label: 'yiminghe' },
                                        { value: 'disabled', label: 'Disabled', disabled: true },
                                    ]}
                                />
                            </div>
                            <div className="inputs-box">
                                <label >Действие </label>
                                <Select
                                    className="w-100"
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
                    <div className="con-btn">
                        <button className="font-family-medium"><img src="/icon/bird.svg" className="mr-8" /><span>Применить фильтры</span></button>
                        <button className="font-family-medium ml-8  ">Отменить</button>
                    </div>
                </div>
            </Menu>
        </div>
    );
};

export default AuditSearchTop;