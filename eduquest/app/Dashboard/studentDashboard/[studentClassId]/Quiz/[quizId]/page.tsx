export default function Quiz({ params }: {
    params: { quizId: string }
}) {
    return (
        <main className="px-4 bg-gradient-to-b from-amber-100 to-amber-500 min-h-screen flex items-center flex-col">
            <div className="bg-white rounded-lg p-6 md:w-[75rem] w-full mt-8">
                <h1 className="text-3xl font-bold mb-4 text-black">{params.quizId}</h1>
                <form>
                    <div className="mb-6">
                        {/*Question #1, Questions will be inputted based on the quiz object stored in the database for the specific class.
                        For example, a question object will have the question, answers, and correct answer stored. */}
                        <p className="text-lg font-medium mb-2 text-black text-xl">Question 1: What is React?</p>
                        <div className="flex items-center mb-2">
                            <input type="radio" id="q1_a" name="q1" value="a" />
                            <label htmlFor="q1_a" className="text-xl ml-2 text-black">A JavaScript library for building user interfaces</label>
                        </div>
                        <div className="flex items-center mb-2">
                            <input type="radio" id="q1_b" name="q1" value="b" />
                            <label htmlFor="q1_b" className="text-xl ml-2 text-black">A backend framework</label>
                        </div>
                        <div className="flex items-center mb-2">
                            <input type="radio" id="q1_c" name="q1" value="c" />
                            <label htmlFor="q1_c" className="text-xl ml-2 text-black">A CSS preprocessor</label>
                        </div>
                        <div className="flex items-center mb-2">
                            <input type="radio" id="q1_d" name="q1" value="d" />
                            <label htmlFor="q1_d" className="text-xl ml-2 text-black">A database management system</label>
                        </div>
                    </div>
                    {/* Add three more questions similarly */}
                    <button type="submit" className="bg-amber-500 text-white py-2 px-4 rounded-md hover:bg-amber-600">Submit</button>
                </form>
            </div>
        </main>
    );
}