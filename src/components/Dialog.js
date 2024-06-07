function Dialog(props) {  
    return (
      <>
        <button className='dialog-btn' onClick={props.openDialogFunc} style={{display: props.isOpen ? 'none' : 'block' }}>Open Dialog</button>
        {props.isOpen && (
                <dialog open className="custom-dialog">
                    <div className="dialog-content">
                        <h2>Hi this is my dialog</h2>
                        <button onClick={props.closeDialogFunc}>Close Dialog</button>
                    </div>
                </dialog>
            )}
      </>
    );
}

export default Dialog