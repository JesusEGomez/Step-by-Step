
import heartImage from './imagenes/bx-heart.svg.jpg';

import image18 from './imagenes/image 18.png'
import image26 from './imagenes/image 26.png'
import image27 from './imagenes/image 27.png'
import image28 from './imagenes/image 28.png'
import image29 from './imagenes/image 29.png'
import image30 from './imagenes/image 30.png'
import image31 from './imagenes/image 31.png'

function Detail() {
    return (
        <><div className="overflow-hidden bg-white flex flex-row justify-between relative w-full items-center pl-16 pr-[210px]">
            <div className="bg-[url(https://via.placeholder.com/520x725)] bg-cover bg-50%_50% bg-blend-normal flex flex-col justify-end relative h-[725px] w-[650px] items-center my-12 py-6">
                <img
                    src={image18}
                    className="object-cover w-full h-full  " />
            </div>
            <div className="flex flex-col justify-start gap-2 relative h-[694px] items-start">
                <div className="overflow-hidden bg-[#edf0f1] flex  flex-col justify-start mb-4 relative w-12 items-stretch px-2 rounded">
                    <div className="text-sm font-['Inter'] font-semibold tracking-[-0.0840000033378601] leading-[24px] text-[#242c31] relative">
                        New!
                    </div>
                </div>
                <div className="whitespace-nowrap text-4xl font-['Inter'] font-bold tracking-[-0.7920000171661377] leading-[48px] text-[#242c31] self-stretch mr-20 relative">
                    Nike Air Zoom Flight 95
                </div>
                <div className="whitespace-nowrap text-sm font-['Inter'] tracking-[-0.0840000033378601] leading-[24px] text-[#6e7c86] mb-5 relative w-20">
                    Men's Shoes
                </div>
                <div className="text-4xl font-['Inter'] font-bold tracking-[-0.7920000171661377] leading-[48px] text-[#242c31] mb-5 relative w-32">
                    $129.97
                </div>
                <div className="self-stretch flex flex-row justify-between relative items-center">
                    <img
                        src={image27}
                        className="min-h-0 min-w-0 max-h-20 max-w-20 relative w-20 shrink-0 cursor-pointer" />
                    <img
                        src={image28}
                        className="min-h-0 min-w-0 relative w-20 shrink-0 cursor-pointer" />
                    <img
                        src={image29}
                        className="min-h-0 min-w-0 relative w-20 shrink-0 cursor-pointer" />
                    <img
                        src={image30}
                        className="min-h-0 min-w-0 relative w-20 shrink-0 cursor-pointer" />
                    <img
                        src={image31}
                        className="min-h-0 min-w-0 relative w-20 shrink-0 cursor-pointer" />
                </div>
                <img
                    src={image26}
                    className="min-h-0 min-w-0 mb-5 relative w-20 cursor-pointer" />
                <div className="text-center font-['Inter'] tracking-[-0.09600000381469727] leading-[24px] text-[#242c31] mb-1 relative w-8">
                    Size
                </div>
                <div className="flex flex-row justify-start mb-8 relative items-center">
                    <div className="overflow-hidden bg-[#e5e8ea] flex flex-col justify-start relative w-12 shrink-0 h-10 items-center py-2 roundedtl roundedbl cursor-pointer">
                        <div className="text-center text-sm font-['Inter'] font-semibold tracking-[-0.0840000033378601] leading-[24px] text-[#242c31] relative w-5">
                            XS
                        </div>
                    </div>
                    <div className="cursor-pointer overflow-hidden bg-[#f6f7f8] flex flex-col justify-start relative w-10 shrink-0 h-10 items-center py-2">
                        <div className="text-center text-sm font-['Inter'] tracking-[-0.0840000033378601] leading-[24px] text-[#242c31] relative w-2">
                            S
                        </div>
                    </div>
                    <div className="cursor-pointer overflow-hidden bg-[#f6f7f8] flex flex-col justify-start relative w-12 shrink-0 h-10 items-center py-2">
                        <div className="text-center text-sm font-['Inter'] tracking-[-0.0840000033378601] leading-[24px] text-[#242c31] relative w-3">
                            M
                        </div>
                    </div>
                    <div className="cursor-pointer overflow-hidden bg-[#f6f7f8] flex flex-col justify-start relative w-10 shrink-0 h-10 items-center py-2 roundedtr roundedbr">
                        <div className="text-center text-sm font-['Inter'] tracking-[-0.0840000033378601] leading-[24px] text-[#242c31] relative w-2">
                            L
                        </div>
                    </div>
                </div>
                <div className="self-stretch flex flex-row justify-start gap-5 relative items-center mb-3 mr-12">
                    <div className="bg-black cursor-pointer flex flex-col justify-center relative w-1/2 h-12 items-center rounded-lg">
                        <div className="whitespace-nowrap text-sm font-['Inter'] font-semibold tracking-[-0.0840000033378601] text-white relative w-20">
                            Add to cart
                        </div>
                    </div>
                    <div className="border-solid border-[#cccccc] cursor-pointer flex flex-row justify-center gap-1 relative w-1/2 h-12 items-center border rounded-lg">
                        <div className="text-sm font-['Inter'] font-semibold tracking-[-0.0840000033378601] text-black relative w-12 shrink-0">
                            Favorite
                        </div>
                        <img
                            src={heartImage}
                            className=" min-h-0 min-w-0 relative w-6 h-6 shrink-0 alt=Imagen" />
                    </div>
                </div>
                <div className="whitespace-nowrap text-sm font-['Inter'] tracking-[-0.0840000033378601] leading-[24px] text-[#252c32] self-stretch justify-start mr-40 relative">
                    Shipping*
                    <br />
                    To get accurate shipping information{" "}
                    <div className="text-sm font-['Inter'] tracking-[-0.0840000033378601] leading-[24px] text-[#252c32] contents">
                        Edit Location
                    </div>
                </div>
            </div>
        </div><p>Si funcionamos</p><div>Detail</div></>
        )
    }
    
    export default Detail