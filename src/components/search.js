import React from "react";

export default function Search(){
    const location = "Helsinki, Finland";
    const [isOpen, setOpen] = React.useState(false);

    const handleToggle = () => {
        setOpen(!isOpen);
    };

    return(
        <div className="search">
            <input type="text" value={location} onClick={handleToggle}/>
            <input id="guests" type="text" placeholder="Add guests" onClick={handleToggle}/>
            <button onClick={handleToggle} type="submit"><span class="material-icons">search</span></button>
            <div className={isOpen ? "modal opened" : "modal"} aria-hidden="true">
                <div className="modal-dialog">
                    <div class="modal-body">
                        <form>
                            <select>
                                <option>Helsinki, Finland</option>
                                <option>Turku, Finland</option>
                                <option>Oulu, Finland</option>
                                <option>Vaasa, Finland</option>
                            </select>
                            <input type="text" placeholder="Add guests"/>
                            <button type="submit"><span class="material-icons">search</span></button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}