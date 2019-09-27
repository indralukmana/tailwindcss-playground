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
            <div className='mt-2 flex items-center'>
              {[...Array(5)].map((val, index) => (
                <svg
                  key={index}
                  viewBox='0 0 24 24'
                  className={`h-4 w-4 fill-current ${
                    index + 1 <= property.rating
                      ? 'text-teal-500'
                      : 'text-teal-300'
                  }`}
                >
                  <path d='M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z' />
                </svg>
              ))}
              <span className='ml-2 text-gray-600 text-sm'>
                {property.reviewCount} reviews
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
