import CaresDetails from '@/components/CaresDetails';
import React from 'react';
const caresf=async(id)=>{
    const res=await fetch(`http://localhost:3000/api/cares/${id}`)
    const data=await res.json()
    return data
}
const DetailsPage = async({params}) => {
    const {id}=await params
    const care=await caresf(id)
    return (
        <div>
            <CaresDetails care={care}></CaresDetails>
        </div>
    );
};

export default DetailsPage;