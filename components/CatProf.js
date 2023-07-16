const CatProfile = ({ cat, deleteMode }) => {
    return (
        <div
            className="card card-side w-96 overflow-hidden border-[#efeeee] bg-white border-2 m-5"
            style={{
                boxShadow: '0px 0px 8px 4px rgba(0, 0, 0, 0.05)',
                backgroundColor: deleteMode ? 'gray' : undefined,
                display: 'flex', 
            }}
        >
            <figure style={{ flex: 'none' }}> 
                <div className="avatar">
                    <div className="w-24 rounded">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/f/fd/20230630_Huh_Yun-jin_%28LE_SSERAFIM%29.jpg" />
                    </div>
                </div>
            </figure>
            <div className="card-body h-52">
                <div className="content" style={{ overflowY: 'auto' }} >
                    <h1>Name: {cat.name}</h1>
                    <h1>Age: {cat.age}</h1>
                    <h1>Sex: {cat.sex}</h1>
                    <h1 style={{ wordWrap: 'break-word' }}>Description: {cat.description}</h1>
                </div>
            </div>
        </div>
    );
};

export default CatProfile;
