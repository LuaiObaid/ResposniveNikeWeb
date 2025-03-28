
const ShoeCard = ({ imgUrl, changeBigShoeImage, bigShoeImg }) => {
    const handleClick = () => {
        if (bigShoeImg !== imgUrl.bigShoe) {
            changeBigShoeImage(imgUrl.bigShoe);
        }
    };

    return (
        <div 
            className={`order-2 rounded-xl border-2 
                ${bigShoeImg === imgUrl.bigShoe ? 'border-amber-800' : 'border-transparent'}
                cursor-pointer max-sm:flex-1`}
            onClick={handleClick}
        >
            <div className='flex justify-center items-center 
                bg-gray-500 bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4'>
                <img 
                    src={imgUrl.thumbnail} 
                    alt="shoe collection"
                    width={127}
                    height={103}
                    className='object-contain' 
                />
            </div>
        </div>
    );
};

export default ShoeCard;
