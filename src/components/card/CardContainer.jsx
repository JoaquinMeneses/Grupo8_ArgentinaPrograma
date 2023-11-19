import React from 'react'
import Card from './Card'

const CardContainer = () => {
    return (
        <div className='container mx-40 mb-20 p-10 bg-red-600 rounded-lg gap-3 flex justify-center'>
            <Card />
            <Card />
            <Card />
        </div>
    )
}

export default CardContainer