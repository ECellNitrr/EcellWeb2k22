import React, {useState, useEffect} from 'react'
import axios from '../../axios';
import './latestGallery.css'

const LatestGallery = ({match}) => {
    const [state, setState] = useState({
        pic:[],
        photos:[],
        year_name:"",
        success:false,
        loading:true
    })

    useEffect(() => {
        let year_gallery= match.params.name;
        
        axios().get('/gallery/list/').then(res=>{
            let year_pics= res.data.gallery;
            let curent_year_pic= year_pics[year_gallery];
            // console.log(curent_year_pic);

           
                setState({
                    ...state,
                    photos: curent_year_pic,
                    year_name: year_gallery
                })
           

            // setState({
            //     success:true,
            //     loading:false,
                
            // })
        
            
        })
    }, [match])

    const {photos} = state
    const activePhoto = photos.splice(0, 1)
    const activeImage = activePhoto[0]

    var test = document.querySelector('.test')
    return (
   
        <div>
            <h1 className="test">Hello Test</h1>
        </div>
    )
}

export default LatestGallery
