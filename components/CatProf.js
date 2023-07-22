const CatProfile = ({ cat, deleteMode }) => {
    return (
        <div
            className="card card-side w-[19.5rem] overflow-hidden border-[#efeeee] bg-white border-2 m-5"
            style={{
                boxShadow: '0px 0px 8px 4px rgba(0, 0, 0, 0.05)',
                backgroundColor: deleteMode ? 'gray' : undefined,
                display: 'flex', 
            }}
        >
            <figure style={{ flex: 'none' }}> 
                <div className="avatar">
                    <div className="w-24 rounded">
                        <img src={cat.image} />
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
