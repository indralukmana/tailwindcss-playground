import React from 'react'
import '../css/build/property-card.css'

const property = {
  imageUrl:
    'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  imageAlt: 'Rear view of modern home with pool',
  beds: 3,
  baths: 2,
  title: 'Modern home in city center with beautiful views',
  priceInCents: 190000,
  formattedPrice: '$1,900.00',
  reviewCount: 34,
  rating: 4,
}

export const PropertyCard = () => {
  return (
    <div className='antialiased text-gray-900'>
      <div className='bg-gray-200 min-h-screen p-8 flex items-center justify-center'>
        <div className='bg-white rounded-lg overflow-hidden border'>
          <img src={property.imageUrl} alt={property.imageAlt} />
          <div className='p-6'>
            <div className='text-gray-600 text-xs uppercase font-semibold tracking-wide'>
              {property.beds} beds &bull; {property.baths} baths
            </div>
            <h4 className='font-semibold text-lg leading-tight truncate'>
              {property.title}
            </h4>
            <div className='mt-1'>
              {property.formattedPrice}{' '}
              <span className='text-gray-600 text-sm'>/ wk</span>
            </div>
            <div className='mt-4'>
              <span className='text-teal-600'>{property.rating}/5 stars </span>
              <span className='text-gray-600 text-sm'>
                (based on {property.reviewCount} reviews)
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
