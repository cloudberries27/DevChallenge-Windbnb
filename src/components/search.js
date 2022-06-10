import React from "react";

export default function Search({handleFilter, reset}){
    const [location, setLocation] = React.useState("");
    const [locationPH, setLocationPH] = React.useState("");
    const [quantity, setQuantity] = React.useState(0);
    const [isOpen, setOpen] = React.useState(false);
    const [isCityOpen, setCityOpen] = React.useState(false);
    const [isGuestOpen, setGuestOpen] = React.useState(false); 
    const [adult, setAdult] = React.useState(0);
    const [child, setChild] = React.useState(0);

    const handleToggle = () => {
        setOpen(!isOpen);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        setQuantity(adult+child)
        setCityOpen(false)
        setGuestOpen(false)
        setLocationPH(location)
        handleFilter(location, adult+child)
        handleToggle();
    }
    const handleReset = () => {
        setLocation("")
        setLocationPH("")
        setAdult(0)
        setChild(0)
        setQuantity(0)
        setCityOpen(false)
        setGuestOpen(false)
        reset()
        handleToggle()
    }

    return(
        <div className="search">
            <input id="location" className="still" type="text" placeholder="Select location" value={locationPH?`${locationPH}, Finland`:""} onClick={handleToggle} readOnly/>
            <input id="guests" className="still" type="text" placeholder="Add guests" value={quantity?quantity:""}onClick={handleToggle} readOnly/>
            <button id="button" onClick={handleToggle} type="submit"><span className="material-icons">search</span></button>
            <div className={isOpen ? "modal opened" : "modal"} aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-body">
                        <form onSubmit={handleSubmit}>
                            <div className={isCityOpen ? "input-wrapper opened" : "input-wrapper"} onClick={() => {setCityOpen(!isCityOpen); setGuestOpen(false)}}>
                                <label>LOCATION</label>
                                <input className={isCityOpen ? "input opened" : "input"}name="city" type="text" placeholder="Add Location" value={location?`${location}, Finland`:""} readOnly/>  
                            </div>
                            <div className={isGuestOpen ? "input-wrapper opened" : "input-wrapper"} onClick={() => {setGuestOpen(!isGuestOpen); setCityOpen(false)}}>
                                <label>GUESTS</label>
                                <input className={isGuestOpen ? "input opened" : "input"} name="guests" type="text" placeholder="Add Guests" value={adult+child!==0?adult+child:""} readOnly/>
                            </div>
                            <button className="filter-button" type="submit"><span className="material-icons">search</span>Search</button>
                        </form>
                        <div className="modal-contents">
                            <div className={isCityOpen ? "modal-box opened" : "modal-box"} aria-hidden="true">
                                <div className="city" onClick={()=>{setLocation("Helsinki"); setCityOpen(!isCityOpen)}}><span className="material-icons">place</span> Helsinki, Finland</div>
                                <div className="city" onClick={()=>{setLocation("Turku"); setCityOpen(!isCityOpen)}}><span className="material-icons">place</span> Turku, Finland</div>
                                <div className="city" onClick={()=>{setLocation("Oulu"); setCityOpen(!isCityOpen)}}><span className="material-icons">place</span> Oulu, Finland</div>
                                <div className="city" onClick={()=>{setLocation("Vaasa"); setCityOpen(!isCityOpen)}}><span className="material-icons">place</span> Vaasa, Finland</div>
                            </div> 
                            <div className={isGuestOpen ? "modal-box opened" : "modal-box"} aria-hidden="true">
                                <div className="modal-box-ppl">
                                    <p>Adults</p>
                                    <p className="label">Ages 13 or above</p>
                                    <div>
                                        <button type="button" onClick={()=>setAdult(adult-1)}>-</button>
                                        <input id="adult" value={adult} type="number" min="0" readOnly/>
                                        <button type="button" onClick={()=>setAdult(adult+1)}>+</button>
                                    </div>
                                </div>
                                <div className="modal-box-ppl">
                                    <p>Children</p>
                                    <p className="label">Ages 2-12</p>
                                    <div>
                                        <button type="button" onClick={()=>setChild(child-1)}>-</button>
                                        <input id="child" value={child} type="number" min="0" readOnly/>
                                        <button type="button" onClick={()=>setChild(child+1)}>+</button>
                                    </div>
                                </div>
                            </div>
                        </div>     
                    </div>
                    <div className="modal-footer">
                        <button type="button" onClick={handleReset}>Clear</button>
                        <button type="button" onClick={handleToggle}>Close</button>
                    </div>
                </div>
            </div>
            <div className={isOpen ? "modal-mobile opened" : "modal-mobile"} aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-body">
                        <form onSubmit={handleSubmit}>
                            <div className={isCityOpen ? "input-wrapper opened" : "input-wrapper"} onClick={() => {setCityOpen(!isCityOpen); setGuestOpen(false)}}>
                                <label>MOBILE</label>
                                <input className={isCityOpen ? "input opened" : "input"}name="city" type="text" placeholder="Add Location" value={location?`${location}, Finland`:""} readOnly/>  
                            </div>
                            <div className={isGuestOpen ? "input-wrapper opened" : "input-wrapper"} onClick={() => {setGuestOpen(!isGuestOpen); setCityOpen(false)}}>
                                <label>GUESTS</label>
                                <input className={isGuestOpen ? "input opened" : "input"} name="guests" type="text" placeholder="Add Guests" value={adult+child!==0?adult+child:""} readOnly/>
                            </div>
                            <button className="filter-button" type="submit"><span className="material-icons">search</span>Search</button>
                        </form>
                        <div className="modal-contents">
                            <div className={isCityOpen ? "modal-box opened" : "modal-box"} aria-hidden="true">
                                <div className="city" onClick={()=>{setLocation("Helsinki"); setCityOpen(!isCityOpen)}}><span className="material-icons">place</span> Helsinki, Finland</div>
                                <div className="city" onClick={()=>{setLocation("Turku"); setCityOpen(!isCityOpen)}}><span className="material-icons">place</span> Turku, Finland</div>
                                <div className="city" onClick={()=>{setLocation("Oulu"); setCityOpen(!isCityOpen)}}><span className="material-icons">place</span> Oulu, Finland</div>
                                <div className="city" onClick={()=>{setLocation("Vaasa"); setCityOpen(!isCityOpen)}}><span className="material-icons">place</span> Vaasa, Finland</div>
                            </div> 
                            <div className={isGuestOpen ? "modal-box opened" : "modal-box"} aria-hidden="true">
                                <div className="modal-box-ppl">
                                    <p>Adults</p>
                                    <p className="label">Ages 13 or above</p>
                                    <div>
                                        <button type="button" onClick={()=>setAdult(adult-1)}>-</button>
                                        <input id="adult" value={adult} type="number" min="0" readOnly/>
                                        <button type="button" onClick={()=>setAdult(adult+1)}>+</button>
                                    </div>
                                </div>
                                <div className="modal-box-ppl">
                                    <p>Children</p>
                                    <p className="label">Ages 2-12</p>
                                    <div>
                                        <button type="button" onClick={()=>setChild(child-1)}>-</button>
                                        <input id="child" value={child} type="number" min="0" readOnly/>
                                        <button type="button" onClick={()=>setChild(child+1)}>+</button>
                                    </div>
                                </div>
                            </div>
                        </div>     
                    </div>
                    <div className="modal-footer">
                        <button type="button" onClick={handleReset}>Clear</button>
                        <button type="button" onClick={handleToggle}>Close</button>
                    </div>
                </div>
            </div>
        </div>
    )
}