import './style.scss'

export default function ServiceHero () {
  return (
    <section className='w-full wserv py-12 md:py-24 lg:py-32 '>
      <div className='containe grid gap-6 px-4 md:px-6 z-[999999]'>
        <div className='space-y-3 text-center'>
          <h2 className=' z-[999999] text-3xl text-white font-bold tracking-tighter sm:text-4xl md:text-5xl'>
            Technology Services
          </h2>
          <p className='mx-auto  z-[999999] max-w-6xl text-white md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed '>
            With a globally distributed team, we offer engagement models ranging
            from end-to-end project based work, from consulting, design,
            development, testing, and support, to on-demand staff augmentation
            through delivering top notch onshore talent as well as
            cost-effective but quality offshore talent, whether it be a handful
            of resources or building entire teams from the ground up.
          </p>
        </div>
      </div>
    </section>
  )
}
