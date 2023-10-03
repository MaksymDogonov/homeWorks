const renderPage = ({task,taskName, onRemove}) => {
    return (
        <div>
            <div className="row">
                <div className="col-auto">
                    <p>{taskName}</p>
                    <p>{task}</p>
                    <hr/>
                    <label>
                        <input data-item-id="1" type="checkbox" className="form_check_input"/>
                    </label>
                    <hr/>
                    <button type="button"
                            className="btn btn-primary btn-sm"
                            onClick={onRemove}>Remove task
                    </button>
                </div>
            </div>
        </div>
    )
}
export default renderPage;
