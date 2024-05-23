import herosvg from '../Assets/heroSvg.svg'
import { Button } from '@nextui-org/react';
function HeroPage() {
  return (
    <div className='hero-page flex flex-row w-full h-screen items-center justify-around font-mono'>
        <div className="hero-text-container flex flex-col items-center justify-center w-1/2 gap-10">
            <h1 className='text-8xl text-buttonColor font-bold'>Swift Cart</h1>
            <div className="button-container">
                <Button className='bg-buttonColor text-textColor w-9/12 p-8 px-16 text-xl'>Shop Now<i className='material-icons'></i></Button>
            </div>
        </div>
        <div className='image-container w-1/2 flex items-center justify-center'>
            <img className='w-11/12' src={herosvg} alt="" />
        </div>
    </div>
  )
}

export default HeroPage;