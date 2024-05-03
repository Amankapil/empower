import React from 'react'

const Expertise = () => {
  return (
    <>
      <section className='py-8'>
        <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-20'>
            <h2 className='text-5xl font-bold'>Expertise</h2>
            <p className='mt-4 text-xl text-gray-600'>
              Our contractors and direct hire candidates are not only
              specialized in specific technologies and job functions, but are
              also experienced in individual industries to respond to the unique
              needs of your business. We provide experienced staff in the
              following areas:
            </p>
          </div>

          <h3 className='text-3xl font-bold my-10'>IT</h3>

          <div className='flex max-md:flex-wrap gap-10 text-left'>
            <div className='flex flex-col gap-8 '>
              <div className='flex justify-start items-start  gap-3 '>
                <CheckCircleIcon className='mb-3 inline-block h-6 w-6 text-blue-500' />
                <h3 className='text-lg leading-6 font-medium text-gray-900'>
                  Software &amp; Web Development/Engineering
                </h3>
              </div>
              <div className='flex justify-start items-start gap-3 '>
                <CheckCircleIcon className='mb-3 inline-block h-6 w-6 text-blue-500' />
                <h3 className='text-lg leading-6 font-medium text-gray-900'>
                  Application Design, Development and Maintenance
                </h3>
              </div>
              <div className='flex justify-start items-start gap-3'>
                <CheckCircleIcon className='mb-3 inline-block h-6 w-6 text-blue-500' />
                <h3 className='text-lg leading-6 font-medium text-gray-900'>
                  Database Design, Development and Administration
                </h3>
              </div>{' '}
            </div>
            <div className='flex flex-col gap-8 '>
              <div className='flex justify-start items-start gap-3'>
                <CheckCircleIcon className='mb-3 inline-block h-6 w-6 text-blue-500' />
                <h3 className='text-lg leading-6 font-medium text-gray-900'>
                  Enterprise Systems Analysis and Integration
                </h3>
              </div>
              <div className='flex justify-start items-start gap-3'>
                <CheckCircleIcon className='mb-3 inline-block h-6 w-6 text-blue-500' />
                <h3 className='text-lg leading-6 font-medium text-gray-900'>
                  Business Analysis
                </h3>
              </div>
              <div className='flex justify-start items-start gap-3'>
                <CheckCircleIcon className='mb-3 inline-block h-6 w-6 text-blue-500' />
                <h3 className='text-lg leading-6 font-medium text-gray-900'>
                  Project Management
                </h3>
              </div>
            </div>

            <div className='flex flex-col gap-8 '>
              <div className='flex justify-start items-start gap-3'>
                <CheckCircleIcon className='mb-3 inline-block h-6 w-6 text-blue-500' />
                <h3 className='text-lg leading-6 font-medium text-gray-900'>
                  Quality Assurance &amp; Testing
                </h3>
              </div>
              <div className='flex justify-start items-start gap-3'>
                <CheckCircleIcon className='mb-3 inline-block h-6 w-6 text-blue-500' />
                <h3 className='text-lg leading-6 font-medium text-gray-900'>
                  Network Engineering
                </h3>
              </div>
              <div className='flex justify-start items-start gap-3'>
                <CheckCircleIcon className='mb-3 inline-block h-6 w-6 text-blue-500' />
                <h3 className='text-lg leading-6 font-medium text-gray-900'>
                  Infrastructure Support
                </h3>
              </div>
              <div className='flex justify-start items-start gap-3'>
                <CheckCircleIcon className='mb-3 inline-block h-6 w-6 text-blue-500' />
                <h3 className='text-lg leading-6 font-medium text-gray-900'>
                  Technical Support
                </h3>
              </div>
            </div>
          </div>

          <h3 className='text-3xl font-bold my-10'>Non-IT</h3>
          <div className='flex max-md:flex-wrap gap-10 text-left'>
            <div className='flex max-md:flex-wrap gap-8 '>
              <div className='flex justify-start items-start  gap-3 '>
                <CheckCircleIcon className='mb-3 inline-block h-6 w-6 text-blue-500' />
                <h3 className='text-lg leading-6 font-medium text-gray-900'>
                  Finance and Accounting
                </h3>
              </div>
              <div className='flex justify-start items-start gap-3 '>
                <CheckCircleIcon className='mb-3 inline-block h-6 w-6 text-blue-500' />
                <h3 className='text-lg leading-6 font-medium text-gray-900'>
                  Design
                </h3>
              </div>
              <div className='flex justify-start items-start gap-3'>
                <CheckCircleIcon className='mb-3 inline-block h-6 w-6 text-blue-500' />
                <h3 className='text-lg leading-6 font-medium text-gray-900'>
                  Healthcare
                </h3>
              </div>
              <div className='flex justify-start items-start gap-3'>
                <CheckCircleIcon className='mb-3 inline-block h-6 w-6 text-blue-500' />
                <h3 className='text-lg leading-6 font-medium text-gray-900'>
                  Legal
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Expertise

function CheckCircleIcon (props) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path d='M22 11.08V12a10 10 0 1 1-5.93-9.14' />
      <polyline points='22 4 12 14.01 9 11.01' />
    </svg>
  )
}
