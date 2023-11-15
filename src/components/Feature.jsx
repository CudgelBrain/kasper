import Image from 'next/image'
import images1 from "@/images/profile/1.jpeg" 
import images2 from "@/images/profile/2.jpeg"
import images3 from "@/images/profile/3.jpeg"
import images4 from "@/images/profile/4.jpeg"

export default function Feature() {
  const features = [
    {
      name: 'Pranab Thakur',
      designation: 'President',
      image:images1,
      alt:"Profile Image",
      qualification:"Graduate in Commerce",
      address:"Layek Bazar, Sen Poti, Bolpur, Birbhum",
      pincode:"731204",
      phno:"8944998717"
    },
    {
      name: 'Sonu Dey',
      designation: 'Vice President',
      image:images2,
      alt:"Profile Image",
      qualification:"8th Pass",
      address:"Kalidas Duttqa Lane, Bowbazar, Kolkata",
      pincode:"700012",
      phno:"9830843639"
    },
    {
      name: 'Debashish Mukherjee',
      designation: 'Secretary',
      image:images3,
      alt:"Profile Image",
      qualification:"Graduate in Commerce",
      address:"Illambazar, School Bagan, Illambazar, Birbhum",
      pincode:"731214",
      phno:"9564862046"
    },
    {
      name: 'Uttam Mondal',
      designation: 'Treasurer',
      image:images4,
      alt:"Profile Image",
      qualification:"Graduate in Commerce",
      address:"Tinor Para, Ghurisha Birbhum",
      pincode:"731214",
      phno:"9735851278"
    },
  ]

  return (
    <div className="bg-gradient-to-r from-d_green via-blue to-grass py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Lorem ipsum dolor sit amet.
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam
            voluptatum cupiditate veritatis in accusamus quisquam.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 lg:max-w-none lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="text-xl font-semibold leading-7 text-white">
                  <div>
                    <Image src={feature.image} alt={feature.alt} width={40} height={40}/>
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-1 flex flex-col text-base leading-3 text-gray-300">
                  <p className="flex-auto">{feature.designation}</p>
                </dd>
                  <p className='mt-1'>{feature.qualification}</p>
                  <div className='mt-2 bg-grass rounded-md p-2 bg-opacity-30 w-[80%] shadow-2xl'>
                    <h4> Address : {feature.address} - {feature.pincode}</h4>
                  </div>
                  <div className='mt-2 bg-mint rounded-md p-2 bg-opacity-30 w-[80%] shadow-2xl'>
                    <h4> Address : {feature.phno}</h4>
                  </div>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}


// className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-grass