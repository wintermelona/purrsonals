const CatProfile = ({ cat, deleteMode, onDelete, editMode, onEdit }) => {
    const handleDelete = () => {
        if (onDelete && typeof onDelete === 'function') {
            onDelete(cat);
        }
    };

    return (
        <div
            className="card card-side w-[19.5rem] overflow-hidden border-[#efeeee] bg-white border-2 m-5 relative"
            style={{
                boxShadow: '0px 0px 8px 4px rgba(0, 0, 0, 0.05)',
                display: 'flex',
            }}
        >
            {deleteMode && (
                <button
                    className="delete-icon absolute w-8 h-8 top-2 right-2 bg-gray-300 rounded-full flex justify-center items-center ease-in duration-150 hover:bg-gray-400"
                    onClick={(e) => {
                        e.stopPropagation();
                        handleDelete();
                    }}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-trash-fill"
                        viewBox="0 0 16 16"
                    >
                        <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                    </svg>
                </button>
            )}

            {editMode && !deleteMode && (
                <button
                    className="edit-icon absolute top-2 right-2 w-8 h-8 bg-gray-300 rounded-full flex justify-center items-center ease-in duration-150 hover:bg-gray-400"
                    onClick={(e) => {
                        onEdit()
                        e.stopPropagation();
                    }}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-pencil"
                        viewBox="0 0 16 16"
                    >
                        <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                    </svg>
                </button>
            )}
            

            <figure style={{ flex: 'none' }}>
                <div className="avatar">
                    <div className="w-24 rounded">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/f/fd/20230630_Huh_Yun-jin_%28LE_SSERAFIM%29.jpg" alt="Cat Avatar" />
                    </div>
                </div>
            </figure>

            <div className="card-body h-52">
                <div className="ctn overflow-y-auto">
                    <h1>Name: {cat.name}</h1>
                    <h1>Age: {cat.age}</h1>
                    <h1>Sex: {cat.sex}</h1>
                    <h1 className="break-words">Description: {cat.description}</h1>
                </div>
            </div>
        </div>
    );
};

export default CatProfile;
