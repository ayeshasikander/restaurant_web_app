import React from 'react';

const Category = ({ filterItem, title }) => {
    return (
        <div>
            <div className='text-center flex-wrap' style={{ borderBottom: "1px solid #38312c" }}>
                {title.map(category => ( 
                    <div key={category} onClick={() => filterItem(category)} className="c-button2 c-button2--gooey" >{category}
                        <div className="c-button__blobs">
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Category;
