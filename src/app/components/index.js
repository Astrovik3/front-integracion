export default function Header({ headerTitle }) {

    return (
        <header>
            <div className='w-full flex items-center bg-zinc-400 p-3 '>
                <h1 className='text-5xl font-bold'>{headerTitle}</h1>
                <span className='ml-auto'> ADMIN </span>
            </div>

        </header>
    );
}

