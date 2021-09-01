import React, {useState} from 'react';
import CategoryAdd from './components/CategoryAdd';
import GifGrid from './components/GifGrid';

const GifExpertApp = () => {

  


    const [category, setCategory] = useState(['One Punch']);

    // const handleAdd = () => {
    //     setCategory([...category, "Naruto"]);
    // }


    return (
        <>
            <h2>GifExpertApp</h2>

            <CategoryAdd setCategory={setCategory} />

            <hr />

            

            <ol>
                {
                    category.map((category, i) => 
                         <GifGrid 
                         key={category}
                         category={category} 
                         />
                    )
                }
            </ol>
        </>
    )
}

export default GifExpertApp;