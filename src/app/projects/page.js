export default function Project() {
    return (
        <section className="py-24">
            <h1 className="text-3xl text-center mb-10">Projects</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {/* Image 1 */}
                <div className="aspect-w-16 aspect-h-9">
                    <img src="https://via.placeholder.com/400x225" alt="Project 1" className="object-cover w-full h-full" />
                </div>
                {/* Image 2 */}
                <div className="aspect-w-4 aspect-h-3">
                    <img src="https://via.placeholder.com/300x225" alt="Project 2" className="object-cover w-full h-full" />
                </div>
                {/* Image 3 */}
                <div className="aspect-w-3 aspect-h-4">
                    <img src="https://via.placeholder.com/225x300" alt="Project 3" className="object-cover w-full h-full" />
                </div>
                {/* Image 4 */}
                <div className="aspect-w-1 aspect-h-1">
                    <img src="https://via.placeholder.com/300" alt="Project 4" className="object-cover w-full h-full" />
                </div>
                {/* Image 5 */}
                <div className="aspect-w-16 aspect-h-9">
                    <img src="https://via.placeholder.com/400x225" alt="Project 5" className="object-cover w-full h-full" />
                </div>
                {/* Image 6 */}
                <div className="aspect-w-4 aspect-h-3">
                    <img src="https://via.placeholder.com/300x225" alt="Project 6" className="object-cover w-full h-full" />
                </div>
                {/* Image 7 */}
                <div className="aspect-w-3 aspect-h-4">
                    <img src="https://via.placeholder.com/225x300" alt="Project 7" className="object-cover w-full h-full" />
                </div>
                {/* Image 8 */}
                <div className="aspect-w-1 aspect-h-1">
                    <img src="https://via.placeholder.com/300" alt="Project 8" className="object-cover w-full h-full" />
                </div>
            </div>
        </section>
    );
}
