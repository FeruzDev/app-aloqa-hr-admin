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
const SearchTop = () => {
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
                <div className=" left-fl-big">
                  <div className="d-flex">
                      <div className="left-fl-pair">
                          <div className="inputs-box">
                              <label >Дата рождения </label>
                              <input type="date" />
                          </div>
                          <div className="inputs-box">
                              <label >Возраст </label>
                              <input type="text"  />
                          </div>
                          <div className="inputs-box">
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
                      </div>
                      <div className="left-fl-pair">
                          <div className="inputs-box">
                              <label >Отдел </label>
                              <select name="" id="">
                                  <option value="1">123</option>
                                  <option value="1">213</option>
                                  <option value="1">123</option>
                              </select>
                          </div>
                          <div className="inputs-box">
                              <label >Должность </label>
                              <select name="" id="">
                                  <option value="1">123</option>
                                  <option value="1">213</option>
                                  <option value="1">123</option>
                              </select>
                          </div>
                          <div className="inputs-box">
                              <label >Режим </label>
                              <select name="" id="">
                                  <option value="1">123</option>
                                  <option value="1">213</option>
                                  <option value="1">123</option>
                              </select>
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

export default SearchTop;