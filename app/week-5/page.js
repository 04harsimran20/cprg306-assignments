import NewItem from './new-item';

export default function Page() {
    return (
        <div className="flex items-start justify-center h-screen bg-black pt-10">
            <div className="bg-white p-4 rounded-lg shadow-lg">
                <NewItem />
            </div>
        </div>
    );
}
