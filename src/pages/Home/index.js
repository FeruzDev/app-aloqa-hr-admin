import React, {useState} from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import MyChart from "./MyChart";
import Menu from "@mui/material/Menu";
import Button from "@mui/material/Button";
import Calendar from "./Calendar";
// import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
// import { LocalizationProvider } from '@mui/x-date-pickers-pro';
// import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
// import { DateRangeCalendar } from '@mui/x-date-pickers-pro/DateRangeCalendar';
// import Button from '@mui/material/Button';

 const Home = () => {
    const [tabs, setTabs] = useState(1)
    const [age, setAge] = React.useState('');



    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
        <div className="home-style">
            <div className="home-left">
                <h3 className="page-title-main font-family-medium">
                    Обзор активности
                </h3>
                <div className="tabs-btns">
                    <button onClick={() => setTabs(1)} className={tabs === 1 ? "font-family-medium active" : "font-family-medium"}>Отсутствие</button>
                    <button onClick={() => setTabs(2)} className={tabs === 2 ? "font-family-medium active" : "font-family-medium"}>Опоздание</button>
                    <button onClick={() => setTabs(3)} className={tabs === 3 ? "font-family-medium active" : "font-family-medium"}>Вовремя</button>
                </div>
                <div className="tabs-content">
                    <div className="tabs-content-filter">
                       <div className="left-sv">
                           <FormControl fullWidth>
                               <InputLabel id="demo-simple-select-label">Филиалы</InputLabel>
                               <Select
                                   labelId="demo-simple-select-label"
                                   id="demo-simple-select"
                                   value={age}
                                   label="Филиалы"
                                   onChange={handleChange}
                               >
                                   <MenuItem value={10}>Ten</MenuItem>
                                   <MenuItem value={20}>Twenty</MenuItem>
                                   <MenuItem value={30}>Thirty</MenuItem>
                               </Select>
                           </FormControl>
                       </div>
                       <div className="center-sv">
                           <FormControl fullWidth>
                               <InputLabel id="demo-simple-select-label">Отделы</InputLabel>
                               <Select
                                   labelId="demo-simple-select-label"
                                   id="demo-simple-select"
                                   value={age}
                                   label="Отделы"
                                   onChange={handleChange}
                               >
                                   <MenuItem value={10}>Ten</MenuItem>
                                   <MenuItem value={20}>Twenty</MenuItem>
                                   <MenuItem value={30}>Thirty</MenuItem>
                               </Select>
                           </FormControl>
                       </div>
                        <div className="right-sv">
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Режимы</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={age}
                                    label="Режимы"
                                    onChange={handleChange}
                                >
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                    </div>
                    {
                        tabs === 1 ?
                            <div className="tabs-lists">
                                <div className="tabs-list-item">
                                    <div className="tabs-img-box">
                                        <img src="/img/avatar2.png" alt="avatar"/>
                                    </div>
                                    <div className="tabs-content-box">
                                        <div>
                                            <h5 className="font-family-medium">Jasur Abdullayev</h5>
                                            <h6>Охранник</h6>
                                        </div>
                                        <div className="time-at-work">
                                            <h5 className="font-family-medium">9:15</h5>
                                            <h5 className="font-family-medium">19:15</h5>

                                        </div>
                                    </div>
                                </div>
                                <div className="tabs-list-item">
                                    <div className="tabs-img-box">
                                        <img src="/img/avatar2.png" alt="avatar"/>
                                    </div>
                                    <div className="tabs-content-box">
                                        <div>
                                            <h5 className="font-family-medium">Umid Abdullayev</h5>
                                            <h6>Охранник</h6>
                                        </div>
                                        <div className="time-at-work">
                                            <h5 className="font-family-medium">9:15</h5>
                                            <h5 className="font-family-medium">19:15</h5>

                                        </div>
                                    </div>
                                </div>
                                <div className="tabs-list-item">
                                    <div className="tabs-img-box">
                                        <img src="/img/avatar2.png" alt="avatar"/>
                                    </div>
                                    <div className="tabs-content-box">
                                        <div>
                                            <h5 className="font-family-medium">Umid Abdullayev</h5>
                                            <h6>Охранник</h6>
                                        </div>
                                        <div className="time-at-work">
                                            <h5 className="font-family-medium">9:15</h5>
                                            <h5 className="font-family-medium">19:15</h5>

                                        </div>
                                    </div>
                                </div>
                                <div className="tabs-list-item">
                                    <div className="tabs-img-box">
                                        <img src="/img/avatar2.png" alt="avatar"/>
                                    </div>
                                    <div className="tabs-content-box">
                                        <div>
                                            <h5 className="font-family-medium">Umid Abdullayev</h5>
                                            <h6>Охранник</h6>
                                        </div>
                                        <div className="time-at-work">
                                            <h5 className="font-family-medium">9:15</h5>
                                            <h5 className="font-family-medium">19:15</h5>

                                        </div>
                                    </div>
                                </div>
                                <div className="tabs-list-item">
                                    <div className="tabs-img-box">
                                        <img src="/img/avatar2.png" alt="avatar"/>
                                    </div>
                                    <div className="tabs-content-box">
                                        <div>
                                            <h5 className="font-family-medium">Umid Abdullayev</h5>
                                            <h6>Охранник</h6>
                                        </div>
                                        <div className="time-at-work">
                                            <h5 className="font-family-medium">9:15</h5>
                                            <h5 className="font-family-medium">19:15</h5>

                                        </div>
                                    </div>
                                </div>
                                <div className="tabs-list-item">
                                    <div className="tabs-img-box">
                                        <img src="/img/avatar2.png" alt="avatar"/>
                                    </div>
                                    <div className="tabs-content-box">
                                        <div>
                                            <h5 className="font-family-medium">Umid Abdullayev</h5>
                                            <h6>Охранник</h6>
                                        </div>
                                        <div className="time-at-work">
                                            <h5 className="font-family-medium">9:15</h5>
                                            <h5 className="font-family-medium">19:15</h5>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            : tabs === 2 ?
                                <div className="tabs-lists">
                                    <div className="tabs-list-item">
                                        <div className="tabs-img-box">
                                            <img src="/img/avatar2.png" alt="avatar"/>
                                        </div>
                                        <div className="tabs-content-box">
                                            <div>
                                                <h5 className="font-family-medium">G'olib Abdullayev</h5>
                                                <h6>Охранник</h6>
                                            </div>
                                            <div className="time-at-work">
                                                <h5 className="font-family-medium">9:15</h5>
                                                <h5 className="font-family-medium">19:15</h5>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="tabs-list-item">
                                        <div className="tabs-img-box">
                                            <img src="/img/avatar2.png" alt="avatar"/>
                                        </div>
                                        <div className="tabs-content-box">
                                            <div>
                                                <h5 className="font-family-medium">Umid Abdullayev</h5>
                                                <h6>Охранник</h6>
                                            </div>
                                            <div className="time-at-work">
                                                <h5 className="font-family-medium">9:15</h5>
                                                <h5 className="font-family-medium">19:15</h5>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="tabs-list-item">
                                        <div className="tabs-img-box">
                                            <img src="/img/avatar2.png" alt="avatar"/>
                                        </div>
                                        <div className="tabs-content-box">
                                            <div>
                                                <h5 className="font-family-medium">Umid Abdullayev</h5>
                                                <h6>Охранник</h6>
                                            </div>
                                            <div className="time-at-work">
                                                <h5 className="font-family-medium">9:15</h5>
                                                <h5 className="font-family-medium">19:15</h5>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="tabs-list-item">
                                        <div className="tabs-img-box">
                                            <img src="/img/avatar2.png" alt="avatar"/>
                                        </div>
                                        <div className="tabs-content-box">
                                            <div>
                                                <h5 className="font-family-medium">Umid Abdullayev</h5>
                                                <h6>Охранник</h6>
                                            </div>
                                            <div className="time-at-work">
                                                <h5 className="font-family-medium">9:15</h5>
                                                <h5 className="font-family-medium">19:15</h5>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="tabs-list-item">
                                        <div className="tabs-img-box">
                                            <img src="/img/avatar2.png" alt="avatar"/>
                                        </div>
                                        <div className="tabs-content-box">
                                            <div>
                                                <h5 className="font-family-medium">Umid Abdullayev</h5>
                                                <h6>Охранник</h6>
                                            </div>
                                            <div className="time-at-work">
                                                <h5 className="font-family-medium">9:15</h5>
                                                <h5 className="font-family-medium">19:15</h5>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="tabs-list-item">
                                        <div className="tabs-img-box">
                                            <img src="/img/avatar2.png" alt="avatar"/>
                                        </div>
                                        <div className="tabs-content-box">
                                            <div>
                                                <h5 className="font-family-medium">Umid Abdullayev</h5>
                                                <h6>Охранник</h6>
                                            </div>
                                            <div className="time-at-work">
                                                <h5 className="font-family-medium">9:15</h5>
                                                <h5 className="font-family-medium">19:15</h5>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            : tabs === 3 ?
                                    <div className="tabs-lists">
                                        <div className="tabs-list-item">
                                            <div className="tabs-img-box">
                                                <img src="/img/avatar2.png" alt="avatar"/>
                                            </div>
                                            <div className="tabs-content-box">
                                                <div>
                                                    <h5 className="font-family-medium">Nizom Abdullayev</h5>
                                                    <h6>Охранник</h6>
                                                </div>
                                                <div className="time-at-work">
                                                    <h5 className="font-family-medium">9:15</h5>
                                                    <h5 className="font-family-medium">19:15</h5>

                                                </div>
                                            </div>
                                        </div>
                                        <div className="tabs-list-item">
                                            <div className="tabs-img-box">
                                                <img src="/img/avatar2.png" alt="avatar"/>
                                            </div>
                                            <div className="tabs-content-box">
                                                <div>
                                                    <h5 className="font-family-medium">Umid Abdullayev</h5>
                                                    <h6>Охранник</h6>
                                                </div>
                                                <div className="time-at-work">
                                                    <h5 className="font-family-medium">9:15</h5>
                                                    <h5 className="font-family-medium">19:15</h5>

                                                </div>
                                            </div>
                                        </div>
                                        <div className="tabs-list-item">
                                            <div className="tabs-img-box">
                                                <img src="/img/avatar2.png" alt="avatar"/>
                                            </div>
                                            <div className="tabs-content-box">
                                                <div>
                                                    <h5 className="font-family-medium">Umid Abdullayev</h5>
                                                    <h6>Охранник</h6>
                                                </div>
                                                <div className="time-at-work">
                                                    <h5 className="font-family-medium">9:15</h5>
                                                    <h5 className="font-family-medium">19:15</h5>

                                                </div>
                                            </div>
                                        </div>
                                        <div className="tabs-list-item">
                                            <div className="tabs-img-box">
                                                <img src="/img/avatar2.png" alt="avatar"/>
                                            </div>
                                            <div className="tabs-content-box">
                                                <div>
                                                    <h5 className="font-family-medium">Umid Abdullayev</h5>
                                                    <h6>Охранник</h6>
                                                </div>
                                                <div className="time-at-work">
                                                    <h5 className="font-family-medium">9:15</h5>
                                                    <h5 className="font-family-medium">19:15</h5>

                                                </div>
                                            </div>
                                        </div>
                                        <div className="tabs-list-item">
                                            <div className="tabs-img-box">
                                                <img src="/img/avatar2.png" alt="avatar"/>
                                            </div>
                                            <div className="tabs-content-box">
                                                <div>
                                                    <h5 className="font-family-medium">Umid Abdullayev</h5>
                                                    <h6>Охранник</h6>
                                                </div>
                                                <div className="time-at-work">
                                                    <h5 className="font-family-medium">9:15</h5>
                                                    <h5 className="font-family-medium">19:15</h5>

                                                </div>
                                            </div>
                                        </div>
                                        <div className="tabs-list-item">
                                            <div className="tabs-img-box">
                                                <img src="/img/avatar2.png" alt="avatar"/>
                                            </div>
                                            <div className="tabs-content-box">
                                                <div>
                                                    <h5 className="font-family-medium">Umid Abdullayev</h5>
                                                    <h6>Охранник</h6>
                                                </div>
                                                <div className="time-at-work">
                                                    <h5 className="font-family-medium">9:15</h5>
                                                    <h5 className="font-family-medium">19:15</h5>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                :
                                ""
                    }

                </div>
            </div>
            <div className="home-right">
                <h3 className="page-title-main font-family-medium">
                    Количества зарегистрированных приходов и уходов
                </h3>
             <div className="bigSmallText">
                 <p className="bigText font-family-extra-bold">4 516</p>
                 <p className="smallText font-family-medium">
                     <span>
                     <img src="/icon/pro.svg" alt="..."/>5%
                 </span>
                 </p>
             </div>
                <div className="radio-list">
                    <div className="left-items">
                        <FormControl>
                            <label id="demo-radio-buttons-group-label" className="font-family-medium ra-title"> Действие</label>
                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                defaultValue="female"
                                name="radio-buttons-group"
                            >
                                <FormControlLabel value="female" control={<Radio />} label="Приходов" />
                                <FormControlLabel value="male" control={<Radio />} label="Уходов" />
                                <FormControlLabel value="other" control={<Radio />} label="Все" />
                            </RadioGroup>
                        </FormControl>
                    </div>
                    <div className="left-items">
                        <FormControl>
                            <label id="demo-radio-buttons-group-label" className="font-family-medium ra-title"> Период</label>

                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                defaultValue="female"
                                name="radio-buttons-group"
                            >
                                <FormControlLabel value="female" control={<Radio />} label="Сегодня" />
                                <FormControlLabel value="male" control={<Radio />} label="На этой неделе" />
                                <FormControlLabel value="other" control={<Radio />} label="Этот месяц" />
                            </RadioGroup>
                        </FormControl>
                    </div>
                </div>
                <div className="my-chart">
                    <div className="my-chart-title">
                        <h3 className="font-family-medium">Инфограмма по посещаемости</h3>
                        {/*<button>*/}
                        {/*    <img src="/icon/calinter.svg" alt="calendar"/>*/}
                        {/*    Интервал дата*/}
                        {/*</button>*/}

                        <Calendar />
                    </div>
                    <MyChart />
                </div>
            </div>
        </div>
    );
};

export default Home;